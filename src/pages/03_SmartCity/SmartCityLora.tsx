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

      const map = new window.naver.maps.Map(mapContainerRef.current, {
        center: new window.naver.maps.LatLng(36.8495, 127.1240),
        zoom: 16, 
        zoomControl: false, 
        mapDataControl: false,
        scaleControl: false,
      });
      mapInstanceRef.current = map; 

      const gwCoord = new window.naver.maps.LatLng(36.848788, 127.122366);

      const topW3 = new window.naver.maps.LatLng(36.852203, 127.126393);
      const topE3 = new window.naver.maps.LatLng(36.851857, 127.126666);
      const topW2 = new window.naver.maps.LatLng(36.851608, 127.125665);
      const topE2 = new window.naver.maps.LatLng(36.851402, 127.126135);
      const topW1 = new window.naver.maps.LatLng(36.851050, 127.125073);
      const topE1 = new window.naver.maps.LatLng(36.850843, 127.125506);

      const baseW1 = new window.naver.maps.LatLng(36.849722, 127.124088); 
      const baseW2 = new window.naver.maps.LatLng(36.849161, 127.123763); 
      const baseW3 = new window.naver.maps.LatLng(36.848604, 127.123457); 
      const baseE1 = new window.naver.maps.LatLng(36.849625, 127.124516); 
      const baseE2 = new window.naver.maps.LatLng(36.849074, 127.124197); 
      const baseE3 = new window.naver.maps.LatLng(36.848497, 127.123891);

      const midW1 = new window.naver.maps.LatLng((topW1.lat() + baseW1.lat()) / 2, (topW1.lng() + baseW1.lng()) / 2);
      const midE1 = new window.naver.maps.LatLng((topE1.lat() + baseE1.lat()) / 2, (topE1.lng() + baseE1.lng()) / 2);

      const westNodes: any[] = [topW3, topW2, topW1, midW1, baseW1, baseW2, baseW3];
      const eastNodes: any[] = [topE3, topE2, topE1, midE1, baseE1, baseE2, baseE3];

      const latStep = 0.000560;
      const lngStep = 0.000315;
      for (let i = 1; i <= 4; i++) {
        westNodes.push(new window.naver.maps.LatLng(36.848604 - (latStep * i), 127.123457 - (lngStep * i)));
        eastNodes.push(new window.naver.maps.LatLng(36.848497 - (latStep * i), 127.123891 - (lngStep * i)));
      }

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
          icon: { content: contentString, size: new window.naver.maps.Size(20, 20), anchor: new window.naver.maps.Point(10, 10) }
        });
      };

      createMarker(gwCoord, '메인 게이트웨이', true, 0);
      westNodes.forEach((coord, idx) => createMarker(coord, '', false, idx * 0.1));
      eastNodes.forEach((coord, idx) => createMarker(coord, '', false, idx * 0.1 + 0.05));

      const drawLine = (p1: any, p2: any, type: 'gateway' | 'mesh-main' | 'mesh-cross') => {
        let weight = 1.5;
        let opacity = 0.5;
        
        if (type === 'gateway') { weight = 1; opacity = 0.25; } 
        else if (type === 'mesh-main') { weight = 2; opacity = 0.8; }

        new window.naver.maps.Polyline({
          map: map, path: [p1, p2], strokeColor: '#18A9C6', strokeWeight: weight * 2, strokeOpacity: opacity * 0.3, strokeLineCap: 'round', strokeLineJoin: 'round'
        });
        new window.naver.maps.Polyline({
          map: map, path: [p1, p2], strokeColor: '#18A9C6', strokeWeight: weight, strokeStyle: 'shortdash', strokeOpacity: opacity, strokeLineCap: 'round', strokeLineJoin: 'round'
        });
      };

      westNodes.forEach(coord => drawLine(gwCoord, coord, 'gateway'));
      eastNodes.forEach(coord => drawLine(gwCoord, coord, 'gateway'));

      for (let i = 0; i < westNodes.length; i++) {
        drawLine(westNodes[i], eastNodes[i], 'mesh-cross');
        if (i < westNodes.length - 1) {
          drawLine(westNodes[i], westNodes[i + 1], 'mesh-main');
          drawLine(eastNodes[i], eastNodes[i + 1], 'mesh-main');
          drawLine(westNodes[i], eastNodes[i + 1], 'mesh-cross');
          drawLine(eastNodes[i], westNodes[i + 1], 'mesh-cross');
        }
      }

      setIsMapLoaded(true);
    };

    if (window.naver && window.naver.maps) initMap();
    else if (clientId) {
      const script = document.createElement('script');
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
      script.async = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    }
  }, []);

  const handleZoomIn = () => { if (mapInstanceRef.current) mapInstanceRef.current.setZoom(mapInstanceRef.current.getZoom() + 1, true); };
  const handleZoomOut = () => { if (mapInstanceRef.current) mapInstanceRef.current.setZoom(mapInstanceRef.current.getZoom() - 1, true); };

  const hardwares = [
    { id: '01', title: '현장을 지휘하는 게이트웨이', subtitle: 'IoT Gateway', desc: '현장의 수많은 노드 데이터를 모아, 중앙 관제 서버로 실시간 전송하는 핵심 다리 역할을 합니다.', features: ['관제 서버와의 빠르고 안정적인 양방향 통신 지원', '전력 사용량을 원격으로 측정하는 스마트 미터기 기능', '수만 개의 단말기를 위한 대규모 확장 인터페이스 제공'] },
    { id: '02', title: '무선 스마트 단말기', subtitle: 'Lamp Controller', desc: '조명 상단이나 내부에 직접 장착되어 제어 명령을 정확하게 수행하고, 현재 램프의 상태를 서버에 보고합니다.', features: ['NEMA 7핀(외장) 및 ZHAGA 4핀(내장) 표준 규격 지원', '주변 환경에 맞춘 세밀한 밝기 조절(디밍) 제어', '전압, 전류 등 조명의 전력 상태 실시간 측정 및 고장 감지'] }
  ];

  // 💡 [수정] 혜택(특장점) 4가지로 재구성 (무선 원격 업데이트 삭제, 비용절감 및 UI 제공 추가)
  const benefits = [
    { id: 1, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, title: '통신비 평생 무료', desc: '통신사 망을 빌려 쓰지 않고 자체망을 구축하므로, 수만 개의 단말기를 연결해도 매월 통신 요금이 전혀 발생하지 않습니다.' },
    { id: 2, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />, title: '실시간 고장 감지', desc: '램프 고장시 즉각 감지하여 대시보드 화면에 경고 알림을 띄웁니다.' },
    { id: 3, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />, title: '통신 공사 비용 절감', desc: '복잡한 통신선 매설이 필요 없는 100% 무선 시스템으로 초기 통신 공사 비용과 시간을 획기적으로 단축합니다.' },
    { id: 4, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />, title: '맞춤식 관제 UI 제공', desc: '고객사의 현장 상황과 요구사항에 완벽하게 맞춰진, 직관적이고 편리한 커스텀 대시보드 인터페이스를 제공합니다.' }
  ];

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

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-flolim/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>
          
          {/* 1. 핵심 Overview 및 라이브 맵 */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-20 md:mb-24 relative z-10">
            <div className="lg:w-5/12">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                음영 지역 없이 완벽하게 연결되는<br />
                <span className="text-flolim">대규모 그물망(Mesh) 통신</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 font-light text-xs md:text-base break-keep">
                플로림의 LoRa-Mesh 솔루션은 저전력 장거리 통신(LoRa) 기술과 그물망(Mesh) 구조의 장점을 완벽하게 결합한 차세대 도로조명 제어망입니다. 각 가로등에 설치된 단말기가 스스로 중계기 역할을 수행하여 통신 도달 거리와 안정성을 극대화합니다.
              </p>
              <div className="bg-[#050b14] border-l-4 border-flolim p-4 md:p-5 rounded-r-xl shadow-inner">
                <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed break-keep">
                  특정 단말기에 고장이 발생하더라도 주변 가로등을 통해 <strong className="text-flolim">메인 게이트웨이로 가는 우회 경로를 자동 탐색</strong>합니다. 건물이나 산악 지형으로 인한 통신 음영 지역을 해소합니다.
                </p>
              </div>
            </div>
            
            <div className="lg:w-7/12 w-full flex justify-center">
              <div className="relative w-full h-[300px] md:h-[450px] bg-[#050b14] rounded-2xl md:rounded-3xl shadow-inner overflow-hidden border border-slate-700 flex items-center justify-center p-1.5 md:p-2">
                {!import.meta.env.VITE_NAVER_MAP_CLIENT_ID && !isMapLoaded && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 font-light text-xs md:text-sm z-30 p-4 text-center break-keep">
                     <svg className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                     네이버 지도 API 키(.env) 설정이 필요합니다.
                   </div>
                )}
                <div ref={mapContainerRef} className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden" style={{ filter: 'invert(100%) hue-rotate(180deg) brightness(85%) contrast(110%) grayscale(20%)' }}></div>
                
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-slate-700 z-20 pointer-events-none shadow-lg">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-flolim rounded-full animate-pulse shadow-[0_0_10px_rgba(24,169,198,1)]"></span>
                  <span className="text-[9px] md:text-[10px] font-bold text-white tracking-widest">실시간 무선망 관제</span>
                </div>

                <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-2 z-20">
                  <button onClick={handleZoomIn} className="w-8 h-8 md:w-10 md:h-10 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white rounded-lg md:rounded-xl shadow-lg flex items-center justify-center hover:text-flolim hover:border-flolim transition-all duration-300">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  </button>
                  <button onClick={handleZoomOut} className="w-8 h-8 md:w-10 md:h-10 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white rounded-lg md:rounded-xl shadow-lg flex items-center justify-center hover:text-flolim hover:border-flolim transition-all duration-300">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 시스템 구성 요소 (Map) */}
          <div className="mb-20 md:mb-24 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 break-keep">스마트 가로등 핵심 하드웨어 구성</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {hardwares.map(hw => (
                <div key={hw.id} className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden cursor-default">
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 border border-slate-600 text-flolim rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-xl font-black shadow-sm group-hover:bg-flolim/10 transition-colors shrink-0">{hw.id}</div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-white mb-0.5 md:mb-1 break-keep">{hw.title}</h3>
                        <span className="text-flolim text-xs md:text-sm font-bold uppercase tracking-wider">{hw.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 mb-5 md:mb-6 font-light leading-relaxed text-xs md:text-sm break-keep">{hw.desc}</p>
                    <ul className="space-y-3 text-[11px] md:text-xs text-slate-300 bg-slate-900 p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-700">
                      {hw.features.map((f, i) => (
                        <li key={i} className="flex items-start break-keep">
                          <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-flolim mr-2 md:mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 핵심 강점 (Map) */}
          <div className="mb-16 relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center break-keep">왜 플로림 LoRa-Mesh 솔루션인가요?</h2>
            
            {/* 💡 [수정] 카드 개수가 4개로 늘어나 md:grid-cols-2 lg:grid-cols-4 로 레이아웃 변경 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {benefits.map(b => (
                <div key={b.id} className="bg-[#050b14] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-all group relative overflow-hidden cursor-default flex flex-col">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <div className="relative z-10 flex-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim mb-4 md:mb-5 border border-slate-600">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{b.icon}</svg>
                    </div>
                    <h3 className="font-bold text-sm md:text-base text-white mb-2 break-keep">{b.title}</h3>
                    <p className="text-slate-400 text-[11px] md:text-xs font-light leading-relaxed break-keep">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. 제품 기술 사양 */}
          <div className="relative z-10 border-t border-slate-800 pt-10 md:pt-12">
            <h2 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6 px-2 border-l-4 border-flolim break-keep">제품 기술 사양</h2>
            <div className="bg-[#050b14] rounded-xl md:rounded-2xl border border-slate-700 overflow-x-auto shadow-inner">
              <table className="w-full text-left border-collapse text-[11px] md:text-sm whitespace-nowrap md:whitespace-normal">
                <tbody>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 px-4 md:py-4 md:px-6 bg-slate-900 text-slate-300 font-bold w-1/3 md:w-1/4">통신 속도 / 거리</th>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-slate-400 font-light">256 Kbps / 노드 간 최대 150m, 넓은 지역 기준 1~3km (Mesh 확장 시)</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 px-4 md:py-4 md:px-6 bg-slate-900 text-slate-300 font-bold">무선 주파수</th>
                    {/* 💡 [수정] 2.4GHz 내용 삭제 완료 */}
                    <td className="py-3 px-4 md:py-4 md:px-6 text-slate-400 font-light">915MHz 대역 (10개 채널) 지원</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 px-4 md:py-4 md:px-6 bg-slate-900 text-slate-300 font-bold">네트워크 기술</th>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-slate-400 font-light">IEEE 802.15.4 / 자가 그룹화(Self-Grouping) MESH 네트워크</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 px-4 md:py-4 md:px-6 bg-slate-900 text-slate-300 font-bold">동작 전압</th>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-slate-400 font-light">단말기 AC 96~264V (집중기 최대 500VAC 지원)</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 md:py-4 md:px-6 bg-slate-900 text-slate-300 font-bold">전력 소비</th>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-slate-400 font-light">기기당 약 2W 내외의 초저전력 구동</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '스마트 시티 개요', path: '/smart-city/intro' }}
          next={{ label: '다음 페이지', title: 'NB-IoT 제어', path: '/smart-city/nb-iot' }}
        />
      </div>
    </div>
  );
};

export default SmartCityLora;