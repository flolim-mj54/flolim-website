import { useEffect, useRef, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

declare global {
  interface Window {
    naver: any;
  }
}

const SmartCityLora = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); 
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

    const initMap = () => {
      if (!mapContainerRef.current || !window.naver) return;

      // 📡 지도 초기화
      const map = new window.naver.maps.Map(mapContainerRef.current, {
        center: new window.naver.maps.LatLng(36.8495, 127.1240),
        zoom: 16, 
        zoomControl: false, 
        mapDataControl: false,
        scaleControl: false,
      });
      
      mapInstanceRef.current = map; 

      // 💡 메인 게이트웨이 좌표
      const gwCoord = new window.naver.maps.LatLng(36.848788, 127.122366);

      // 💡 1. 상단 가로등 6개 (수정된 좌표)
      const topW3 = new window.naver.maps.LatLng(36.852203, 127.126393);
      const topE3 = new window.naver.maps.LatLng(36.851857, 127.126666);
      
      const topW2 = new window.naver.maps.LatLng(36.851608, 127.125665);
      const topE2 = new window.naver.maps.LatLng(36.851402, 127.126135);
      
      const topW1 = new window.naver.maps.LatLng(36.851050, 127.125073);
      const topE1 = new window.naver.maps.LatLng(36.850843, 127.125506);

      // 💡 2. 기준 가로등 6개 (번영로 중간)
      const baseW1 = new window.naver.maps.LatLng(36.849722, 127.124088); 
      const baseW2 = new window.naver.maps.LatLng(36.849161, 127.123763); 
      const baseW3 = new window.naver.maps.LatLng(36.848604, 127.123457); 
      
      const baseE1 = new window.naver.maps.LatLng(36.849625, 127.124516); 
      const baseE2 = new window.naver.maps.LatLng(36.849074, 127.124197); 
      const baseE3 = new window.naver.maps.LatLng(36.848497, 127.123891);

      // 💡 3. 중앙 연결 노드 2개 (상단망과 기준망의 중간 지점 자동 계산)
      const midW1 = new window.naver.maps.LatLng(
        (topW1.lat() + baseW1.lat()) / 2, 
        (topW1.lng() + baseW1.lng()) / 2
      );
      const midE1 = new window.naver.maps.LatLng(
        (topE1.lat() + baseE1.lat()) / 2, 
        (topE1.lng() + baseE1.lng()) / 2
      );

      // 서측(West)과 동측(East) 배열로 정리 (위에서 아래 순서대로 7개씩 묶음)
      const westNodes: any[] = [topW3, topW2, topW1, midW1, baseW1, baseW2, baseW3];
      const eastNodes: any[] = [topE3, topE2, topE1, midE1, baseE1, baseE2, baseE3];

      // 💡 4. 하단 도로 연장망 (4쌍 추가)
      const latStep = 0.000560;
      const lngStep = 0.000315;
      for (let i = 1; i <= 4; i++) {
        westNodes.push(new window.naver.maps.LatLng(36.848604 - (latStep * i), 127.123457 - (lngStep * i)));
        eastNodes.push(new window.naver.maps.LatLng(36.848497 - (latStep * i), 127.123891 - (lngStep * i)));
      }

      // 💡 흰색 코어 점 + 청록색 핑 효과 마커 렌더링
      const createMarker = (position: any, label: string, isGateway: boolean, delay: number) => {
        const dotSize = isGateway ? 14 : 7;
        const pingSize = isGateway ? 45 : 20;
        
        const labelHtml = isGateway 
          ? `<div style="position: absolute; top: 24px; left: 50%; transform: translateX(-50%); background-color: rgba(15,23,42,0.85); color: #18A9C6; font-size: 11px; font-weight: bold; padding: 3px 8px; border-radius: 4px; border: 1px solid #18A9C6; white-space: nowrap; z-index: 11;">${label}</div>`
          : '';

        const contentString = `
          <div style="filter: invert(100%) hue-rotate(180deg); width: 20px; height: 20px; position: relative; pointer-events: none;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: ${pingSize}px; height: ${pingSize}px; border: 2px solid #18A9C6; border-radius: 50%; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; animation-delay: ${delay}s; opacity: 0.7;"></div>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: ${dotSize}px; height: ${dotSize}px; background-color: #ffffff; border: ${isGateway ? '3px solid #18A9C6' : '2px solid #18A9C6'}; border-radius: 50%; box-shadow: 0 0 15px rgba(24,169,198,1); z-index: 10;"></div>
            ${labelHtml}
          </div>
        `;
        
        new window.naver.maps.Marker({
          position: position,
          map: map,
          icon: { 
            content: contentString, 
            size: new window.naver.maps.Size(20, 20), 
            anchor: new window.naver.maps.Point(10, 10) 
          }
        });
      };

      // 마커 찍기
      createMarker(gwCoord, '메인 게이트웨이 (GW)', true, 0);
      westNodes.forEach((coord, idx) => createMarker(coord, '', false, idx * 0.1));
      eastNodes.forEach((coord, idx) => createMarker(coord, '', false, idx * 0.1 + 0.05));

      // 💡 연결선 그리기 함수 (청록색 유지)
      const drawLine = (p1: any, p2: any, type: 'gateway' | 'mesh-main' | 'mesh-cross') => {
        let weight = 1.5;
        let opacity = 0.5;
        
        if (type === 'gateway') {
          weight = 1; 
          opacity = 0.25;
        } else if (type === 'mesh-main') {
          weight = 2; 
          opacity = 0.8;
        }

        // 야광 배경 (Cyan)
        new window.naver.maps.Polyline({
          map: map,
          path: [p1, p2],
          strokeColor: '#18A9C6',
          strokeWeight: weight * 2,
          strokeOpacity: opacity * 0.3,
          strokeLineCap: 'round',
          strokeLineJoin: 'round'
        });
        // 코어 점선 (Cyan)
        new window.naver.maps.Polyline({
          map: map,
          path: [p1, p2],
          strokeColor: '#18A9C6',
          strokeWeight: weight,
          strokeStyle: 'shortdash',
          strokeOpacity: opacity,
          strokeLineCap: 'round',
          strokeLineJoin: 'round'
        });
      };

      // 1. 모든 노드 -> 메인 게이트웨이 개별 연결
      westNodes.forEach(coord => drawLine(gwCoord, coord, 'gateway'));
      eastNodes.forEach(coord => drawLine(gwCoord, coord, 'gateway'));

      // 2. 도로를 따라가는 그물망 (Mesh Topology)
      for (let i = 0; i < westNodes.length; i++) {
        // 길 건너편 마주보는 가로등 연결
        drawLine(westNodes[i], eastNodes[i], 'mesh-cross');
        
        // 다음 가로등이 있다면 직진 및 대각선 연결
        if (i < westNodes.length - 1) {
          drawLine(westNodes[i], westNodes[i + 1], 'mesh-main');
          drawLine(eastNodes[i], eastNodes[i + 1], 'mesh-main');
          drawLine(westNodes[i], eastNodes[i + 1], 'mesh-cross');
          drawLine(eastNodes[i], westNodes[i + 1], 'mesh-cross');
        }
      }

      setIsMapLoaded(true);
    };

    if (window.naver && window.naver.maps) {
      initMap();
    } else if (clientId) {
      const script = document.createElement('script');
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
      script.async = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    }
  }, []);

  // 💡 커스텀 줌 컨트롤 함수
  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      const currentZoom = mapInstanceRef.current.getZoom();
      mapInstanceRef.current.setZoom(currentZoom + 1, true);
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      const currentZoom = mapInstanceRef.current.getZoom();
      mapInstanceRef.current.setZoom(currentZoom - 1, true);
    }
  };

  return (
    <div className="pb-10">
      <PageHeader 
        category="Network Solution"
        title="LoRa-Mesh 기반 제어 솔루션"
        subtitle={
          <>
            매월 발생하는 <strong className="text-flolim font-bold">통신비 부담 없이</strong>, 수많은 조명을 촘촘하게 잇는 고신뢰성 자가망 시스템
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 1. 핵심 Overview 및 라이브 맵 섹션 */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-xl border border-slate-800 mb-24 flex flex-col lg:flex-row gap-12 items-center hover:border-flolim/50 transition-colors duration-500">
          <div className="lg:w-5/12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              음영 지역 없이 완벽하게 연결되는<br />
              <span className="text-flolim">대규모 그물망(Mesh) 통신</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 font-light">
              플로림의 LoRa-Mesh 솔루션은 저전력 장거리 통신(LoRa) 기술과 그물망(Mesh) 구조의 장점을 완벽하게 결합한 차세대 도로조명 제어망입니다. 각 가로등에 설치된 단말기가 스스로 중계기 역할을 수행하여 통신 도달 거리와 안정성을 극대화합니다.
            </p>
            <div className="bg-slate-800/80 border-l-4 border-flolim p-5 rounded-r-xl shadow-inner">
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                특히, 특정 단말기에 고장이 발생하더라도 시스템이 주변 가로등을 통해 <strong className="text-flolim">메인 게이트웨이로 가는 우회 경로를 자동 탐색</strong>합니다. 도심지는 물론 넓은 지역까지 끊김 없는 제어망을 보장합니다.
              </p>
            </div>
          </div>
          
          <div className="lg:w-7/12 w-full flex justify-center">
            
            {/* 라이브 인터랙티브 맵 영역 */}
            <div className="relative w-full h-[500px] bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-800 flex items-center justify-center">
              
              {!import.meta.env.VITE_NAVER_MAP_CLIENT_ID && !isMapLoaded && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-400 font-light text-sm z-30">
                   <svg className="w-12 h-12 mb-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                   네이버 지도 API 키(.env) 설정이 필요합니다.
                 </div>
              )}

              {/* CSS 필터 매직: 일반 지도를 다크 모드 관제 맵으로 변환 */}
              <div 
                ref={mapContainerRef} 
                className="w-full h-full"
                style={{ filter: 'invert(100%) hue-rotate(180deg) brightness(85%) contrast(110%) grayscale(20%)' }}
              ></div>

              {/* 상태 표시 뱃지 */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-700 z-20 pointer-events-none shadow-lg">
                <span className="w-2 h-2 bg-flolim rounded-full animate-pulse shadow-[0_0_10px_rgba(24,169,198,1)]"></span>
                <span className="text-[10px] font-bold text-white tracking-widest">실시간 MESH 관제 맵 (대규모 도로망 연동)</span>
              </div>

              {/* 커스텀 줌 컨트롤 버튼 (+ / -) */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                <button 
                  onClick={handleZoomIn} 
                  className="w-10 h-10 bg-slate-800/90 backdrop-blur-md border border-slate-600 text-white rounded-xl shadow-lg flex items-center justify-center hover:bg-flolim hover:border-flolim transition-all duration-300"
                  aria-label="확대"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </button>
                <button 
                  onClick={handleZoomOut} 
                  className="w-10 h-10 bg-slate-800/90 backdrop-blur-md border border-slate-600 text-white rounded-xl shadow-lg flex items-center justify-center hover:bg-flolim hover:border-flolim transition-all duration-300"
                  aria-label="축소"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4"></path></svg>
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* 2. 시스템 구성 요소 */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">스마트 가로등 핵심 구성 요소</h2>
            <p className="text-slate-400 font-light">플로림의 독자적인 기술력으로 완성된 하드웨어 인프라</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 bg-slate-800 border border-slate-700 text-flolim rounded-2xl flex items-center justify-center text-2xl font-black shadow-sm group-hover:bg-flolim/10 transition-colors">01</div>
                <div>
                  <h3 className="text-xl font-bold text-white">현장을 지휘하는 똑똑한 집중기</h3>
                  <span className="text-flolim text-sm font-bold uppercase tracking-wider">IoT Gateway</span>
                </div>
              </div>
              <p className="text-slate-400 mb-8 font-light leading-relaxed">
                현장의 수많은 노드 데이터를 모아, 중앙 관제 서버로 실시간 전송하는 핵심 다리 역할을 합니다.
              </p>
              <ul className="space-y-4 text-sm text-slate-300 bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <li className="flex items-start"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>관제 서버와의 빠르고 안정적인 양방향 통신 지원</li>
                <li className="flex items-start"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>전력 사용량을 원격으로 측정하는 스마트 미터기 기능 내장</li>
                <li className="flex items-start"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>수만 개의 노드 대규모 확장 인터페이스 제공</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 bg-slate-800 border border-slate-700 text-flolim rounded-2xl flex items-center justify-center text-2xl font-black shadow-sm group-hover:bg-flolim/10 transition-colors">02</div>
                <div>
                  <h3 className="text-xl font-bold text-white">가로등을 제어하는 스마트 단말기</h3>
                  <span className="text-flolim text-sm font-bold uppercase tracking-wider">Lamp Controller (Node)</span>
                </div>
              </div>
              <p className="text-slate-400 mb-8 font-light leading-relaxed">
                조명 상단이나 내부에 직접 장착되어 제어 명령을 정확하게 수행하고, 현재 램프의 상태와 전력량을 서버에 보고합니다.
              </p>
              <ul className="space-y-4 text-sm text-slate-300 bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <li className="flex items-start"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>NEMA 7핀(외장형) 및 ZHAGA 4핀(내장형) 국제 표준 규격 완벽 지원</li>
                <li className="flex items-start"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>주변 환경에 맞춘 세밀한 밝기 조절(디밍) 제어</li>
                <li className="flex items-start"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>전압, 전류 등 조명의 전력 상태 실시간 측정 및 위험 감지</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. 핵심 강점 */}
        <section className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 mb-24 shadow-xl border border-slate-800 relative overflow-hidden group hover:border-flolim/50 transition-colors">
          <div className="absolute top-0 right-0 w-80 h-80 bg-flolim rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none -translate-y-1/4 translate-x-1/4"></div>
          
          <h2 className="text-3xl font-bold mb-12 relative z-10 text-center">왜 플로림 LoRa-Mesh 솔루션인가요?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-flolim/50 transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim mb-5 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">통신비 평생 무료</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                통신사 망을 빌려 쓰지 않고 자체적인 무선 통신망을 구축하므로, 수만 개의 단말기를 연결해도 매월 통신 요금이 전혀 발생하지 않습니다.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-flolim/50 transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim mb-5 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">고장 사전 예측 진단</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                램프 수명 저하, 누전, 통신 불량 등 문제가 발생하기 전 미세한 전력 변화를 즉각적으로 감지하여 대시보드 화면에 경고 알림을 띄워 선제적 대응을 돕습니다.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-flolim/50 transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim mb-5 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">무선 원격 업데이트</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                새로운 제어 기능이 추가되거나 시스템 개선이 필요할 때, 직원이 현장에 갈 필요 없이 원격에서 쉽고 안전하게 무선(OTA)으로 업그레이드합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 제품 기술 사양 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 px-4 border-l-4 border-flolim">Technical Specifications</h2>
          <div className="bg-slate-900/50 rounded-2xl shadow-sm border border-slate-800 overflow-hidden hover:border-flolim/50 transition-colors">
            <table className="w-full text-left border-collapse text-sm">
              <tbody>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <th className="py-5 px-6 bg-slate-800/50 text-slate-300 font-bold w-1/3 md:w-1/4">통신 속도 / 거리</th>
                  <td className="py-5 px-6 text-slate-400 font-light">256 Kbps / 노드 간 최대 150m, 넓은 지역 기준 1~3km (Mesh 확장 시)</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <th className="py-5 px-6 bg-slate-800/50 text-slate-300 font-bold">무선 주파수</th>
                  <td className="py-5 px-6 text-slate-400 font-light">915MHz 대역 (10개 채널) / 2.4GHz 대역 (16개 채널) 지원</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <th className="py-5 px-6 bg-slate-800/50 text-slate-300 font-bold">네트워크 기술</th>
                  <td className="py-5 px-6 text-slate-400 font-light">IEEE 802.15.4 / 자가 그룹화(Self-Grouping) MESH 네트워크</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <th className="py-5 px-6 bg-slate-800/50 text-slate-300 font-bold">동작 전압</th>
                  <td className="py-5 px-6 text-slate-400 font-light">단말기 AC 96~264V (집중기 최대 500VAC 지원)</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <th className="py-5 px-6 bg-slate-800/50 text-slate-300 font-bold">전력 소비</th>
                  <td className="py-5 px-6 text-slate-400 font-light">기기당 약 2W 내외의 초저전력 구동</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '스마트 시티 개요', path: '/smart-city/intro' }}
          next={{ label: '다음 페이지', title: 'NB-IoT 제어 솔루션', path: '/smart-city/nb-iot' }}
        />
      </div>
    </div>
  );
};

export default SmartCityLora;