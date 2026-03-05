import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

      const location = new window.naver.maps.LatLng(36.848834, 127.122686);

      const mapOptions = {
        center: location,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      };

      const map = new window.naver.maps.Map(mapRef.current, mapOptions);

      const marker = new window.naver.maps.Marker({
        position: location,
        map: map,
      });

      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="padding: 10px 16px; font-size: 14px; font-weight: bold; color: #1e293b; text-align: center;">
            <span style="color: #18A9C6; margin-right: 4px;">🏢</span>플로림 본사
          </div>
        `,
        borderWidth: 1,
        borderColor: '#cbd5e1', 
        backgroundColor: '#ffffff',
        anchorSkew: true,
        pixelOffset: new window.naver.maps.Point(0, -10)
      });

      infoWindow.open(map, marker);
    };

    if (window.naver && window.naver.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
      script.async = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16 mt-10">
          <p className="text-flolim font-bold tracking-widest mb-4 uppercase text-sm">Location</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">오시는 길</h1>
          <div className="w-24 h-1 bg-flolim mx-auto mb-8"></div>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            스마트 비즈니스의 새로운 기준, 플로림 본사로 오시는 길을 안내해 드립니다.<br />
            방문 전 연락 주시면 더욱 원활한 미팅 준비가 가능합니다.
          </p>
        </div>

        {/* 지도 영역 */}
        <div className="mb-16 bg-white border border-slate-200 p-4 md:p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-flolim/30 transition-all duration-300">
          <div 
            ref={mapRef} 
            className="w-full h-[400px] md:h-[500px] bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-slate-400 font-light">
              지도를 불러오는 중입니다...
            </div>
          </div>
        </div>

        {/* 상세 정보 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-flolim/30 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-flolim mb-6 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">본사 주소</h3>
            <p className="text-slate-600 leading-relaxed font-light text-sm">
              충청남도 천안시 서북구<br/>
              2공단4로 40-11<br/>
              천안G1비즈캠퍼스 1223호
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-flolim/30 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-flolim mb-6 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">대표 연락처</h3>
            <ul className="space-y-3 text-slate-600 font-light text-sm">
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-400">대표전화</span>
                <span className="font-medium text-slate-800 tracking-wide">1660-0687</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-400">이메일</span>
                <a href="mailto:sales@flolim.com" className="font-medium text-slate-800 hover:text-flolim transition-colors">sales@flolim.com</a>
              </li>
              <li className="flex justify-between pt-1">
                <span className="text-slate-400">업무시간</span>
                <span className="font-medium text-slate-800">평일 09:00 - 18:00</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-flolim/30 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-flolim mb-6 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">교통 및 주차 안내</h3>
            <p className="text-slate-600 leading-relaxed font-light text-sm mb-4">
              차량 방문 시 <strong className="font-bold text-slate-800">G1비즈캠퍼스 지하 주차장</strong>을 이용해 주시기 바랍니다. 
            </p>
            {/* 💡 체크 표시를 녹색 SVG 아이콘으로 변경 완료 */}
            <div className="bg-slate-50 p-3 rounded-xl text-xs text-slate-500 flex items-center gap-2 border border-slate-100">
              <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              방문객 주차 등록 시 무료 이용 가능
            </div>
          </div>

        </div>

        {/* 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <Link to="/company/history" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">← 이전 페이지</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">연혁</span>
          </Link>
          <Link to="/business/esco" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">다음 카테고리 →</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">핵심 비즈니스 (ESCO)</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompanyLocation;