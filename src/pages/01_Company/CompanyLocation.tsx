import React, { useEffect, useRef } from "react";

const CompanyLocation = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const NAVER_CLIENT_ID = "jmxph75p6j";

    const drawMap = () => {
      if (!mapElement.current || !window.naver || !window.naver.maps) return;
      
      const location = new window.naver.maps.LatLng(36.848801, 127.122380);
      const mapOptions = { 
        center: location, 
        zoom: 16, 
        zoomControl: true, 
        zoomControlOptions: { position: window.naver.maps.Position.TOP_RIGHT } 
      };
      
      const map = new window.naver.maps.Map(mapElement.current, mapOptions);
      const marker = new window.naver.maps.Marker({ position: location, map: map });
      
      const infoWindow = new window.naver.maps.InfoWindow({
        content: '<div style="padding:15px; min-width:200px; text-align:center; font-weight:bold; color:#1e3a8a;">주식회사 플로림</div>',
        backgroundColor: "#ffffff", 
        borderColor: "#cbd5e1", 
        borderWidth: 1, 
        anchorSize: new window.naver.maps.Size(10, 10),
      });
      infoWindow.open(map, marker);
    };

    if (window.naver && window.naver.maps) {
      drawMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_CLIENT_ID}`;
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => drawMap();
    }
  }, []);

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">오시는 길</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* 네이버 지도 영역 */}
        <div ref={mapElement} className="w-full h-96 rounded-2xl shadow-md border border-gray-200 mb-10 z-0 overflow-hidden"></div>

        {/* 상세 주소 및 정보 */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">주식회사 플로림 (FLOLIM)</h3>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex flex-col md:flex-row border-b border-gray-200 pb-3">
              <span className="font-bold w-24 text-gray-900 mb-1 md:mb-0">본사 주소</span>
              <span>충남 천안시 서북구 2공단4로 40-11 천안G1비즈캠퍼스 1223호</span>
            </li>
            <li className="flex flex-col md:flex-row border-b border-gray-200 pb-3">
              <span className="font-bold w-24 text-gray-900 mb-1 md:mb-0">대표 전화</span>
              <span>1660-0687</span>
            </li>
            <li className="flex flex-col md:flex-row">
              <span className="font-bold w-24 text-gray-900 mb-1 md:mb-0">이메일</span>
              <span className="text-blue-600 font-medium">sales@flolim.com</span>
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-8 border-t-2 border-dashed border-gray-300">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">🚆 대중교통 이용 시</h4>
              <p className="text-gray-600 leading-relaxed">수도권 전철 1호선 <strong className="text-blue-600">두정역</strong> 하차 후, 택시 또는 버스를 이용하여 천안제2일반산업단지 방면으로 이동</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">🚘 자가용 이용 시</h4>
              <p className="text-gray-600 leading-relaxed">경부고속도로 <strong className="text-blue-600">천안IC</strong> 진출 후 천안제2일반산업단지 교차로 방면. 내비게이션에 주소 검색 후 방문해 주세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLocation;