import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// 🚨 TypeScript 에러 방지: 네이버 지도 전역 객체 타입 선언
declare global {
  interface Window {
    naver: any;
  }
}

const CompanyLocation = () => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 💡 변경된 부분: 하드코딩된 ID 대신 Vite 환경 변수에서 값을 불러옵니다.
    const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

    const drawMap = () => {
      if (!mapElement.current || !window.naver || !window.naver.maps) return;

      const location = new window.naver.maps.LatLng(36.848801, 127.122380);
      const mapOptions = {
        center: location,
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: { position: window.naver.maps.Position.TOP_RIGHT },
      };

      const map = new window.naver.maps.Map(mapElement.current, mapOptions);
      const marker = new window.naver.maps.Marker({ position: location, map: map });

      // 마커 위에 표시되는 정보창(InfoWindow) 디자인 고도화
      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="padding: 12px 16px; font-family: sans-serif; text-align: center; border-radius: 8px;">
            <strong style="color: #1e3a8a; font-size: 15px; display: block; margin-bottom: 4px;">주식회사 플로림</strong>
            <span style="color: #64748b; font-size: 12px;">천안G1비즈캠퍼스 1223호</span>
          </div>
        `,
        backgroundColor: "#ffffff",
        borderColor: "#e2e8f0",
        borderWidth: 1,
        anchorSize: new window.naver.maps.Size(12, 12),
      });

      infoWindow.open(map, marker);
    };

    // 이미 스크립트가 로드된 경우 바로 실행, 아니면 동적으로 스크립트 추가
    if (window.naver && window.naver.maps) {
      drawMap();
    } else {
      const script = document.createElement("script");
      // 💡 불러온 환경 변수를 스크립트 URL에 삽입합니다.
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_CLIENT_ID}`;
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => drawMap();
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-20 relative overflow-hidden">
      {/* 배경 그래픽 장식 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-bl-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold tracking-widest mb-3 uppercase text-sm">Location</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">오시는 길</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            플로림 본사 방문을 환영합니다.<br />
            아래 지도를 통해 오시는 길을 확인해 주세요.
          </p>
        </div>

        {/* 1. 네이버 지도 영역 */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-200 mb-12">
          {/* 지도가 그려질 div 요소 */}
          <div 
            ref={mapElement} 
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center"
          >
            {/* 지도가 로딩되기 전 보여질 텍스트 */}
            <span className="text-slate-400 font-medium animate-pulse">지도를 불러오는 중입니다...</span>
          </div>
        </div>

        {/* 2. 주소 및 연락처 정보 영역 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* 좌측: 기본 연락처 정보 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-100 pb-4">Contact Info</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0">📍</div>
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">본사 주소</p>
                  <p className="text-gray-800 leading-relaxed font-medium">
                    [도로명] 충남 천안시 서북구 2공단4로 40-11<br />
                    천안G1비즈캠퍼스 1223호 주식회사 플로림<br />
                    <span className="text-sm text-gray-500 font-normal mt-1 inline-block">[지번] 충남 천안시 서북구 성성동 1001</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0">📞</div>
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">대표 전화</p>
                  <p className="text-xl text-gray-800 font-black tracking-wider">1660-0687</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0">✉️</div>
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">이메일 (도입 문의)</p>
                  <p className="text-lg text-gray-800 font-medium hover:text-blue-600 transition-colors cursor-pointer">sales@flolim.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* 우측: 교통편 안내 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-100 pb-4">교통편 안내</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center text-xl shrink-0 border border-gray-200">🚆</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">대중교통 이용 시</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    수도권 전철 1호선 <strong className="text-blue-600">두정역</strong> 하차 후,<br />
                    택시 또는 시내버스를 이용하여 <strong className="text-gray-800">천안제2일반산업단지</strong> 방면으로 이동해 주시기 바랍니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center text-xl shrink-0 border border-gray-200">🚘</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">자가용 이용 시</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    경부고속도로 <strong className="text-blue-600">천안IC</strong> 진출 후,<br />
                    천안제2일반산업단지 교차로 방면으로 이동. 내비게이션에 주소 혹은 <strong className="text-gray-800">'천안G1비즈캠퍼스'</strong> 검색 후 방문해 주세요. (지하 주차장 이용 가능)
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <Link to="/company/history" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">연혁</span>
          </Link>
          <Link to="/business/esco" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">다음 페이지 →</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">KEPCO 연계 ESCO</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompanyLocation;