import { useEffect, useRef, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

declare global {
  interface Window {
    naver: any;
  }
}

const SmartCityNbIot = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

    const initMap = () => {
      if (!mapContainerRef.current || !window.naver) return;

      // 📡 지도 초기화 (천안시 전체가 넓게 보이도록 줌 레벨 설정)
      const map = new window.naver.maps.Map(mapContainerRef.current, {
        center: new window.naver.maps.LatLng(36.8150, 127.1150),
        zoom: 13, 
        zoomControl: false, 
        mapDataControl: false,
        scaleControl: false,
      });
      
      mapInstanceRef.current = map;

      // 💡 1. 듀얼 통신사 기지국(Base Station) 좌표 설정
      const bs1Coord = new window.naver.maps.LatLng(36.8280, 127.0900); // 1번 기지국 (서북 방향)
      const bs2Coord = new window.naver.maps.LatLng(36.8000, 127.1400); // 2번 기지국 (동남 방향)

      // 💡 2. 광역으로 흩어진 20개의 가로등 노드 좌표 (산간, 외곽, 도심 등)
      const isolatedNodes = [
        // 1번 기지국 인근 무리
        new window.naver.maps.LatLng(36.8350, 127.0800),
        new window.naver.maps.LatLng(36.8300, 127.1000),
        new window.naver.maps.LatLng(36.8200, 127.0750),
        new window.naver.maps.LatLng(36.8150, 127.0950),
        new window.naver.maps.LatLng(36.8400, 127.0900),
        new window.naver.maps.LatLng(36.8250, 127.1050),
        new window.naver.maps.LatLng(36.8300, 127.0600), // 먼 서쪽
        new window.naver.maps.LatLng(36.8100, 127.0850), // 남서쪽
        new window.naver.maps.LatLng(36.8450, 127.0700), // 북서쪽 외곽
        
        // 2번 기지국 인근 무리
        new window.naver.maps.LatLng(36.7950, 127.1300),
        new window.naver.maps.LatLng(36.8100, 127.1500),
        new window.naver.maps.LatLng(36.7900, 127.1450),
        new window.naver.maps.LatLng(36.8000, 127.1250),
        new window.naver.maps.LatLng(36.8150, 127.1350),
        new window.naver.maps.LatLng(36.7850, 127.1550),
        new window.naver.maps.LatLng(36.7800, 127.1300), // 먼 남쪽
        new window.naver.maps.LatLng(36.7900, 127.1600), // 먼 동쪽
        
        // 중앙/애매한 위치 (알아서 가까운 곳으로 붙음)
        new window.naver.maps.LatLng(36.8150, 127.1150),
        new window.naver.maps.LatLng(36.8050, 127.1050),
        new window.naver.maps.LatLng(36.8200, 127.1200),
      ];

      // 💡 3. 마커 렌더링 함수
      const createMarker = (position: any, label: string, isBaseStation: boolean, delay: number) => {
        const dotSize = isBaseStation ? 18 : 7; 
        
        // 기지국 전용 거대 레이더 파동 애니메이션
        const radarEffect = isBaseStation 
          ? `
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 180px; height: 180px; border: 2px solid #18A9C6; border-radius: 50%; animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; opacity: 0.3;"></div>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; height: 300px; border: 1px solid #18A9C6; border-radius: 50%; animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; animation-delay: 1s; opacity: 0.15;"></div>
            `
          : `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; border: 2px solid #18A9C6; border-radius: 50%; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; animation-delay: ${delay}s; opacity: 0.7;"></div>`;

        // 기지국 아이콘 (안테나) vs 일반 노드 (흰색 점 코어)
        const coreElement = isBaseStation
          ? `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 36px; height: 36px; background-color: #0f172a; border: 3px solid #18A9C6; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(24,169,198,1); z-index: 10;">
               <svg viewBox="0 0 24 24" fill="none" style="width: 20px; height: 20px; stroke: #18A9C6; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;">
                 <path d="M4 8a10 10 0 0 1 16 0"/><path d="M8 12a4 4 0 0 1 8 0"/><line x1="12" y1="16" x2="12" y2="22"/>
               </svg>
             </div>`
          : `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: ${dotSize}px; height: ${dotSize}px; background-color: #ffffff; border: 2px solid #18A9C6; border-radius: 50%; box-shadow: 0 0 15px rgba(24,169,198,1); z-index: 10;"></div>`;

        const labelHtml = isBaseStation 
          ? `<div style="position: absolute; top: 30px; left: 50%; transform: translateX(-50%); background-color: rgba(15,23,42,0.9); color: #18A9C6; font-size: 11px; font-weight: bold; padding: 4px 8px; border-radius: 6px; border: 1px solid #18A9C6; white-space: nowrap; z-index: 11; box-shadow: 0 4px 6px rgba(0,0,0,0.5);">${label}</div>`
          : '';

        const contentString = `
          <div style="filter: invert(100%) hue-rotate(180deg); width: 20px; height: 20px; position: relative; pointer-events: none;">
            ${radarEffect}
            ${coreElement}
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

      // 💡 마커 찍기 (기지국 2개 + 가로등 20개)
      createMarker(bs1Coord, '통신사 기지국 A', true, 0);
      createMarker(bs2Coord, '통신사 기지국 B', true, 0.5);
      isolatedNodes.forEach((coord, idx) => createMarker(coord, '', false, idx * 0.1));

      // 💡 4. 다이렉트 빔 연결선 그리기 함수
      const drawDirectLine = (p1: any, p2: any) => {
        // 야광 배경선
        new window.naver.maps.Polyline({
          map: map,
          path: [p1, p2],
          strokeColor: '#18A9C6',
          strokeWeight: 4,
          strokeOpacity: 0.15,
          strokeLineCap: 'round',
          strokeLineJoin: 'round'
        });
        // 코어 점선 (Mesh보다 선을 길게 뽑아서 전파 쏘는 느낌 강조)
        new window.naver.maps.Polyline({
          map: map,
          path: [p1, p2],
          strokeColor: '#18A9C6',
          strokeWeight: 1.5,
          strokeStyle: 'longdash', 
          strokeOpacity: 0.7,
          strokeLineCap: 'round',
          strokeLineJoin: 'round'
        });
      };

      // 💡 5. 오토 타겟팅 로직: 가장 가까운 기지국을 찾아서 연결
      const getDistance = (p1: any, p2: any) => {
        return Math.pow(p1.lat() - p2.lat(), 2) + Math.pow(p1.lng() - p2.lng(), 2);
      };

      isolatedNodes.forEach(coord => {
        const dist1 = getDistance(coord, bs1Coord);
        const dist2 = getDistance(coord, bs2Coord);
        
        // 더 가까운 기지국에 선을 긋습니다 (Star Topology)
        if (dist1 < dist2) {
          drawDirectLine(bs1Coord, coord);
        } else {
          drawDirectLine(bs2Coord, coord);
        }
      });

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
        title="NB-IoT 가로등 제어 솔루션"
        subtitle={
          <>
            중계기 설치 없이, 거리 제한 없이! <strong className="text-flolim font-bold">전국 어디서나 터지는</strong> 상용망 직결 시스템
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 1. 핵심 Overview 및 라이브 맵 섹션 */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-xl border border-slate-800 mb-24 flex flex-col lg:flex-row gap-12 items-center hover:border-flolim/50 transition-colors duration-500">
          <div className="lg:w-5/12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              통신사 기지국과 직접 연결되는<br />
              <span className="text-flolim">다이렉트 광역 통신망</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 font-light">
              플로림의 NB-IoT 솔루션은 스마트폰처럼 가로등 단말기 자체가 독립적인 유심(USIM)을 보유합니다. 중간에 게이트웨이(중계기)를 거칠 필요 없이, 가장 가까운 통신사(SKT/KT/LGU+) 기지국으로 데이터를 직접 전송합니다.
            </p>
            <div className="bg-slate-800/80 border-l-4 border-flolim p-5 rounded-r-xl shadow-inner">
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                가로등 간 통신이 불가능할 정도로 <strong className="text-flolim">멀리 떨어진 외곽 지역, 산간, 단독 가로등</strong>에도 제약 없이 설치가 가능하며, 전국망 커버리지를 통해 안정적인 제어 환경을 제공합니다.
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

              {/* CSS 필터 매직: 다크 모드 관제 맵 변환 */}
              <div 
                ref={mapContainerRef} 
                className="w-full h-full"
                style={{ filter: 'invert(100%) hue-rotate(180deg) brightness(85%) contrast(110%) grayscale(20%)' }}
              ></div>

              {/* 상태 표시 뱃지 */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-700 z-20 pointer-events-none shadow-lg">
                <span className="w-2 h-2 bg-flolim rounded-full animate-pulse shadow-[0_0_10px_rgba(24,169,198,1)]"></span>
                <span className="text-[10px] font-bold text-white tracking-widest">NB-IoT 광역 커버리지 맵 (Star Topology)</span>
              </div>

              {/* 줌 컨트롤 버튼 */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                <button 
                  onClick={handleZoomIn} 
                  className="w-10 h-10 bg-slate-800/90 backdrop-blur-md border border-slate-600 text-white rounded-xl shadow-lg flex items-center justify-center hover:bg-flolim hover:border-flolim transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </button>
                <button 
                  onClick={handleZoomOut} 
                  className="w-10 h-10 bg-slate-800/90 backdrop-blur-md border border-slate-600 text-white rounded-xl shadow-lg flex items-center justify-center hover:bg-flolim hover:border-flolim transition-all duration-300"
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
            <h2 className="text-3xl font-bold text-white mb-4">가장 심플하고 강력한 하드웨어 구성</h2>
            <p className="text-slate-400 font-light">복잡한 중계기가 사라져, 초기 구축 비용과 시공 기간이 획기적으로 줄어듭니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-all duration-300 group opacity-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px] z-10 flex items-center justify-center">
                <span className="bg-red-500/20 text-red-400 border border-red-500/50 px-4 py-2 rounded-lg font-bold tracking-widest rotate-[-15deg] shadow-lg">NOT REQUIRED</span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 bg-slate-800 border border-slate-700 text-slate-500 rounded-2xl flex items-center justify-center text-2xl font-black shadow-sm">01</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-400 line-through decoration-red-500 decoration-2">현장을 지휘하는 중계기</h3>
                  <span className="text-slate-500 text-sm font-bold uppercase tracking-wider line-through">IoT Gateway</span>
                </div>
              </div>
              <p className="text-slate-500 mb-8 font-light leading-relaxed line-through">
                현장의 데이터를 모아 관제 서버로 전송하는 복잡한 라우팅 장비나 전용 전봇대가 필요했습니다.
              </p>
            </div>

            <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-all duration-300 group shadow-[0_0_30px_rgba(24,169,198,0.1)]">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 bg-flolim border border-flolim text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg">01</div>
                <div>
                  <h3 className="text-xl font-bold text-white">독립 통신 스마트 단말기</h3>
                  <span className="text-flolim text-sm font-bold uppercase tracking-wider">NB-IoT Node</span>
                </div>
              </div>
              <p className="text-slate-400 mb-8 font-light leading-relaxed">
                스마트폰처럼 기기 내부에 통신사 USIM이 내장되어 있어, 전원만 공급되면 즉시 상용망에 붙어 관제 서버와 양방향 통신을 시작합니다.
              </p>
              <ul className="space-y-4 text-sm text-slate-300 bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <li className="flex items-start"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>단독 설치 및 개별 통신 지원 (외곽 지역 최적화)</li>
                <li className="flex items-start"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>NEMA 7핀(외장형) 및 ZHAGA 4핀(내장형) 규격 완벽 지원</li>
                <li className="flex items-start"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>전압, 전류 등 조명 전력 상태 실시간 측정 및 즉각 보고</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. 핵심 강점 */}
        <section className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 mb-24 shadow-xl border border-slate-800 relative overflow-hidden group hover:border-flolim/50 transition-colors">
          <div className="absolute top-0 right-0 w-80 h-80 bg-flolim rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none -translate-y-1/4 translate-x-1/4"></div>
          
          <h2 className="text-3xl font-bold mb-12 relative z-10 text-center">왜 플로림 NB-IoT 솔루션인가요?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-flolim/50 transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim mb-5 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">초기 구축비용 최소화</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                비싼 게이트웨이(집중기)를 구매하고 전봇대에 설치하는 공사 비용이 완전히 사라집니다. 단말기만 달면 즉시 관제가 시작됩니다.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-flolim/50 transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim mb-5 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">전국망 커버리지 지원</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                SKT, KT, LGU+의 거대한 통신 기지국을 그대로 사용하므로, 산간 오지나 바닷가 등 휴대폰이 터지는 곳이라면 어디든 100% 제어할 수 있습니다.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-flolim/50 transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim mb-5 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">최고 수준의 보안성</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                글로벌 통신사가 관리하는 국가 기간망 수준의 3GPP 표준 암호화 기술이 적용되어 해킹과 데이터 위변조로부터 완벽하게 안전합니다.
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
                  <td className="py-5 px-6 text-slate-400 font-light">Up to 250 Kbps / <strong className="text-flolim">거리 무제한 (통신사 기지국 커버리지 내)</strong></td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <th className="py-5 px-6 bg-slate-800/50 text-slate-300 font-bold">무선 주파수</th>
                  <td className="py-5 px-6 text-slate-400 font-light">이동통신사 할당 면허 대역 (Licensed Band) 사용으로 간섭 원천 차단</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <th className="py-5 px-6 bg-slate-800/50 text-slate-300 font-bold">네트워크 기술</th>
                  <td className="py-5 px-6 text-slate-400 font-light">3GPP Release 13 기반 협대역 사물인터넷 (NarrowBand-Internet of Things)</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <th className="py-5 px-6 bg-slate-800/50 text-slate-300 font-bold">동작 전압</th>
                  <td className="py-5 px-6 text-slate-400 font-light">단말기 AC 96~264V</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <th className="py-5 px-6 bg-slate-800/50 text-slate-300 font-bold">통신비</th>
                  <td className="py-5 px-6 text-slate-400 font-light">기기당 소정의 월 통신 요금 발생 (SKT, KT, LGU+ 요금제 기반)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: 'LoRa-Mesh 제어 솔루션', path: '/smart-city/lora' }}
          next={{ label: '다음 페이지', title: '설치 사례', path: '/smart-city/cases' }}
        />
      </div>
    </div>
  );
};

export default SmartCityNbIot;