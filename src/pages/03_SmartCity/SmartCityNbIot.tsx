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

      // 💡 [수정] 모바일 화면(768px 이하)일 때만 줌 레벨을 12로 한 단계 낮춤
      const initialZoom = window.innerWidth < 768 ? 12 : 13;

      const map = new window.naver.maps.Map(mapContainerRef.current, {
        center: new window.naver.maps.LatLng(36.8150, 127.1150),
        zoom: initialZoom, 
        zoomControl: false, 
        mapDataControl: false,
        scaleControl: false,
      });
      mapInstanceRef.current = map;

      const bs1Coord = new window.naver.maps.LatLng(36.8280, 127.0900); 
      const bs2Coord = new window.naver.maps.LatLng(36.8000, 127.1400); 

      const isolatedNodes = [
        new window.naver.maps.LatLng(36.8350, 127.0800), new window.naver.maps.LatLng(36.8300, 127.1000),
        new window.naver.maps.LatLng(36.8200, 127.0750), new window.naver.maps.LatLng(36.8150, 127.0950),
        new window.naver.maps.LatLng(36.8400, 127.0900), new window.naver.maps.LatLng(36.8250, 127.1050),
        new window.naver.maps.LatLng(36.8300, 127.0600), new window.naver.maps.LatLng(36.8100, 127.0850),
        new window.naver.maps.LatLng(36.8450, 127.0700), new window.naver.maps.LatLng(36.7950, 127.1300),
        new window.naver.maps.LatLng(36.8100, 127.1500), new window.naver.maps.LatLng(36.7900, 127.1450),
        new window.naver.maps.LatLng(36.8000, 127.1250), new window.naver.maps.LatLng(36.8150, 127.1350),
        new window.naver.maps.LatLng(36.7850, 127.1550), new window.naver.maps.LatLng(36.7800, 127.1300),
        new window.naver.maps.LatLng(36.7900, 127.1600), new window.naver.maps.LatLng(36.8150, 127.1150),
        new window.naver.maps.LatLng(36.8050, 127.1050), new window.naver.maps.LatLng(36.8200, 127.1200),
      ];

      const createMarker = (position: any, label: string, isBaseStation: boolean, delay: number) => {
        const dotSize = isBaseStation ? 18 : 7; 
        
        const radarEffect = isBaseStation 
          ? `
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 180px; height: 180px; border: 2px solid #18A9C6; border-radius: 50%; animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; opacity: 0.3;"></div>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; height: 300px; border: 1px solid #18A9C6; border-radius: 50%; animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; animation-delay: 1s; opacity: 0.15;"></div>
            `
          : `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; border: 2px solid #18A9C6; border-radius: 50%; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; animation-delay: ${delay}s; opacity: 0.7;"></div>`;

        const coreElement = isBaseStation
          ? `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 36px; height: 36px; background-color: #0f172a; border: 3px solid #18A9C6; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(24,169,198,1); z-index: 10;">
               <svg viewBox="0 0 24 24" fill="none" style="width: 20px; height: 20px; stroke: #18A9C6; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;"><path d="M4 8a10 10 0 0 1 16 0"/><path d="M8 12a4 4 0 0 1 8 0"/><line x1="12" y1="16" x2="12" y2="22"/></svg>
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
          position: position, map: map, icon: { content: contentString, size: new window.naver.maps.Size(20, 20), anchor: new window.naver.maps.Point(10, 10) }
        });
      };

      createMarker(bs1Coord, '통신사 기지국 A', true, 0);
      createMarker(bs2Coord, '통신사 기지국 B', true, 0.5);
      isolatedNodes.forEach((coord, idx) => createMarker(coord, '', false, idx * 0.1));

      const drawDirectLine = (p1: any, p2: any) => {
        new window.naver.maps.Polyline({ map: map, path: [p1, p2], strokeColor: '#18A9C6', strokeWeight: 4, strokeOpacity: 0.15, strokeLineCap: 'round', strokeLineJoin: 'round' });
        new window.naver.maps.Polyline({ map: map, path: [p1, p2], strokeColor: '#18A9C6', strokeWeight: 1.5, strokeStyle: 'longdash', strokeOpacity: 0.7, strokeLineCap: 'round', strokeLineJoin: 'round' });
      };

      const getDistance = (p1: any, p2: any) => Math.pow(p1.lat() - p2.lat(), 2) + Math.pow(p1.lng() - p2.lng(), 2);

      isolatedNodes.forEach(coord => {
        const dist1 = getDistance(coord, bs1Coord);
        const dist2 = getDistance(coord, bs2Coord);
        if (dist1 < dist2) drawDirectLine(bs1Coord, coord);
        else drawDirectLine(bs2Coord, coord);
      });

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

  const benefits = [
    { id: 1, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />, title: '초기 구축비용 최소화', desc: '비싼 게이트웨이(집중기)를 구매하고 전봇대에 설치하는 공사 비용이 완전히 사라집니다. 단말기만 달면 즉시 관제가 시작됩니다.' },
    { id: 2, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />, title: '전국망 커버리지 지원', desc: 'SKT, KT, LGU+의 거대한 통신 기지국을 사용하므로, 산간 오지나 바닷가 등 휴대폰이 터지는 곳이라면 100% 제어할 수 있습니다.' },
    { id: 3, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, title: '최고 수준의 보안성', desc: '글로벌 통신사가 관리하는 국가 기간망 수준의 3GPP 표준 암호화 기술이 적용되어 해킹과 데이터 위변조로부터 완벽하게 안전합니다.' }
  ];

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="Network Solution"
        title="NB-IoT 가로등 제어 솔루션"
        subtitle={
          <>
            중계기 설치 없이, 거리 제한 없이! <strong className="text-flolim font-bold">전국 어디서나 터지는</strong> 상용망 직결 시스템
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-flolim/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 -translate-x-1/4"></div>

          {/* 1. 핵심 Overview 및 라이브 맵 */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-20 md:mb-24 relative z-10">
            <div className="lg:w-5/12">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                통신사 기지국과 직접 연결되는<br />
                <span className="text-flolim">다이렉트 광역 통신망</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 font-light text-xs md:text-base break-keep">
                플로림의 NB-IoT 솔루션은 스마트폰처럼 가로등 단말기 자체가 독립적인 유심(USIM)을 보유합니다. 중간에 게이트웨이(중계기)를 거칠 필요 없이, 가장 가까운 통신사(SKT/KT/LGU+) 기지국으로 데이터를 직접 전송합니다.
              </p>
              <div className="bg-[#050b14] border-l-4 border-flolim p-4 md:p-5 rounded-r-xl shadow-inner">
                <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed break-keep">
                  가로등 간 통신이 불가능할 정도로 <strong className="text-flolim">멀리 떨어진 외곽 지역, 산간, 단독 가로등</strong>에도 제약 없이 설치가 가능하며, 전국망 커버리지를 통해 안정적인 제어 환경을 제공합니다.
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
                  <span className="text-[9px] md:text-[10px] font-bold text-white tracking-widest uppercase">실시간 상용망 관제</span>
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

          {/* 2. 시스템 구성 요소 VS 비교 */}
          <div className="mb-20 md:mb-24 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 break-keep">가장 심플하고 강력한 하드웨어 구성</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* AS-IS (제거됨) */}
              <div className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 opacity-50 relative overflow-hidden shadow-inner cursor-default">
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px] z-10 flex items-center justify-center">
                  <span className="bg-red-500/20 text-red-400 border border-red-500/50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[10px] md:text-sm font-bold tracking-widest rotate-[-15deg] shadow-lg">설치 불필요</span>
                </div>
                <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 border border-slate-600 text-slate-500 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-xl font-black shadow-sm">01</div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-slate-400 line-through decoration-red-500 decoration-2 mb-0.5 md:mb-1 break-keep">현장을 지휘하는 중계기</h3>
                    <span className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-wider line-through">IoT Gateway</span>
                  </div>
                </div>
                <p className="text-slate-500 mb-6 font-light leading-relaxed text-xs md:text-sm line-through break-keep">
                  현장의 데이터를 모아 관제 서버로 전송하는 복잡한 라우팅 장비나 전용 전봇대가 필요했습니다.
                </p>
              </div>

              {/* TO-BE (NB-IoT) */}
              <div className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-flolim/50 shadow-[0_0_30px_rgba(24,169,198,0.1)] hover:border-flolim transition-all duration-300 group relative overflow-hidden cursor-default">
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-flolim border border-flolim text-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-xl font-black shadow-lg">01</div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-white mb-0.5 md:mb-1 break-keep">독립 통신 스마트 단말기</h3>
                      <span className="text-flolim text-xs md:text-sm font-bold uppercase tracking-wider">NB-IoT Node</span>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-5 md:mb-6 font-light leading-relaxed text-xs md:text-sm break-keep">
                    스마트폰처럼 기기 내부에 통신사 USIM이 내장되어 있어, 전원만 공급되면 즉시 상용망에 붙어 관제 서버와 양방향 통신을 시작합니다.
                  </p>
                  <ul className="space-y-3 text-[11px] md:text-xs text-slate-400 bg-slate-900 p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-700">
                    <li className="flex items-start break-keep"><svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-flolim mr-2 md:mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>단독 설치 및 개별 통신 지원 (외곽 지역 최적화)</li>
                    <li className="flex items-start break-keep"><svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-flolim mr-2 md:mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>NEMA(외장) 및 ZHAGA(내장) 규격 완벽 지원</li>
                    <li className="flex items-start break-keep"><svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-flolim mr-2 md:mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>전압, 전류 등 조명 전력 상태 실시간 측정 및 즉각 보고</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 핵심 강점 (Map) */}
          <div className="mb-16 relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center break-keep">왜 플로림 NB-IoT 솔루션인가요?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {benefits.map(b => (
                <div key={b.id} className="bg-[#050b14] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-colors group relative overflow-hidden cursor-default">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <div className="relative z-10">
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
                    <td className="py-3 px-4 md:py-4 md:px-6 text-slate-400 font-light">Up to 250 Kbps / <strong className="text-flolim">거리 무제한 (통신사 기지국 커버리지 내)</strong></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 px-4 md:py-4 md:px-6 bg-slate-900 text-slate-300 font-bold">무선 주파수</th>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-slate-400 font-light">이동통신사 할당 면허 대역 (Licensed Band) 사용으로 간섭 원천 차단</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 px-4 md:py-4 md:px-6 bg-slate-900 text-slate-300 font-bold">네트워크 기술</th>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-slate-400 font-light">3GPP Release 13 기반 협대역 사물인터넷 (NarrowBand-Internet of Things)</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 px-4 md:py-4 md:px-6 bg-slate-900 text-slate-300 font-bold">동작 전압</th>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-slate-400 font-light">단말기 AC 96~264V</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 md:py-4 md:px-6 bg-slate-900 text-slate-300 font-bold">통신비</th>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-slate-400 font-light">기기당 소정의 월 통신 요금 발생 (SKT, KT, LGU+ 요금제 기반)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: 'LoRa-Mesh 제어', path: '/smart-city/lora' }}
          next={{ label: '다음 페이지', title: 'DMX 경관조명', path: '/smart-city/dmx' }}
        />
      </div>
    </div>
  );
};

export default SmartCityNbIot;