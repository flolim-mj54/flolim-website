import { useEffect, useRef } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

declare global {
  interface Window {
    naver: any;
  }
}

const CompanyLocation = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID; 
    
    const initMap = () => {
      if (!mapRef.current || !window.naver) return;
      const location = new window.naver.maps.LatLng(36.848850, 127.122225);
      const mapOptions = {
        center: location,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: { position: window.naver.maps.Position.TOP_RIGHT },
      };
      const map = new window.naver.maps.Map(mapRef.current, mapOptions);
      const marker = new window.naver.maps.Marker({ position: location, map: map });
      
      // 💡 네이버 기본 말풍선 스타일(하얀 꼬리 등)을 완전히 끄고, 다크 커스텀 UI만 띄웁니다.
      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="padding: 8px 16px; font-size: 14px; font-weight: bold; color: #f8fafc; text-align: center; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
            플로림 본사
          </div>
        `,
        borderWidth: 0, // 기본 테두리 제거
        backgroundColor: 'transparent', // 기본 배경 제거 (하얀 박스 방지)
        disableAnchor: true, // 💡 하얀색 화살표(꼬리) 완벽 제거
        pixelOffset: new window.naver.maps.Point(0, -10)
      });
      infoWindow.open(map, marker);
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

  return (
    <div className="pb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

      <PageHeader 
        category="Location"
        title="오시는 길"
        subtitle={
          <>
            스마트 비즈니스의 새로운 기준, 플로림 본사로 오시는 길을 안내해 드립니다.<br />
            방문 전 연락 주시면 더욱 원활한 미팅 준비가 가능합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="mb-16 bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-4 md:p-6 rounded-3xl shadow-xl">
          <div ref={mapRef} className="w-full h-[400px] md:h-[500px] bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden relative">
            {!import.meta.env.VITE_NAVER_MAP_CLIENT_ID && (
               <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-400 font-light text-sm z-10">
                 <svg className="w-12 h-12 mb-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 네이버 지도 API 키(.env) 설정이 필요합니다.
               </div>
            )}
            <div className="w-full h-full flex items-center justify-center text-slate-500 font-light">
              지도를 불러오는 중입니다...
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-lg hover:border-flolim/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-flolim mb-6 shadow-sm group-hover:bg-flolim/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">본사 주소</h3>
            <p className="text-slate-400 leading-relaxed font-light text-sm">
              충청남도 천안시 서북구<br/>
              2공단4로 40-11<br/>
              천안G1비즈캠퍼스 1223호
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-lg hover:border-flolim/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-flolim mb-6 shadow-sm group-hover:bg-flolim/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">대표 연락처</h3>
            <ul className="space-y-3 text-slate-400 font-light text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>대표전화</span>
                <span className="font-medium text-white tracking-wide">1660-0687</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>이메일</span>
                <a href="mailto:sales@flolim.com" className="font-medium text-white hover:text-flolim transition-colors">sales@flolim.com</a>
              </li>
              <li className="flex justify-between pt-1">
                <span>업무시간</span>
                <span className="font-medium text-white">평일 09:00 - 18:00</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-lg hover:border-flolim/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-flolim mb-6 shadow-sm group-hover:bg-flolim/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">교통 및 주차 안내</h3>
            <p className="text-slate-400 leading-relaxed font-light text-sm mb-4">
              차량 방문 시 <strong className="font-bold text-white">G1비즈캠퍼스 지상 또는 지하 주차장</strong>을 이용해 주시기 바랍니다. 
            </p>
            <div className="bg-slate-800/50 p-3 rounded-xl text-xs text-slate-300 flex items-center gap-2 border border-slate-700">
              <svg className="w-4 h-4 text-flolim shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              방문객 주차 등록 시 무료 이용 가능
            </div>
          </div>
        </div>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '연혁', path: '/company/history' }}
          next={{ label: '다음 카테고리', title: '핵심 비즈니스 (ESCO)', path: '/business/esco' }}
        />
      </div>
    </div>
  );
};

export default CompanyLocation;