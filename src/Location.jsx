import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Location = () => {
  const mapElement = useRef(null);
  useEffect(() => {
    const NAVER_CLIENT_ID = "jmxph75p6j";
    const drawMap = () => {
      if (!mapElement.current || !window.naver || !window.naver.maps) return;
      const location = new window.naver.maps.LatLng(36.848801, 127.122380); 
      const mapOptions = { center: location, zoom: 16, zoomControl: true, zoomControlOptions: { position: window.naver.maps.Position.TOP_RIGHT } };
      const map = new window.naver.maps.Map(mapElement.current, mapOptions);
      const marker = new window.naver.maps.Marker({ position: location, map: map });
      const infoWindow = new window.naver.maps.InfoWindow({
        content: '<div style="padding:10px 15px; font-size:14px; font-weight:bold; color:#1eb4c8; text-align:center; border:none; letter-spacing:-0.5px;">주식회사 플로림</div>',
        backgroundColor: "#ffffff", borderColor: "#cbd5e1", borderWidth: 1, anchorSize: new window.naver.maps.Size(10, 10),
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
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 회사소개 〉 <span className="text-[#1eb4c8] font-bold">오시는 길</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">오시는 길</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">회사소개</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200"><Link to="/greeting" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">인사말</Link></li>
              <li className="border-b border-slate-200"><Link to="/history" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">연혁</Link></li>
              <li className="border-b border-slate-200 last:border-0"><Link to="/location" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">오시는 길 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></Link></li>
            </ul>
          </div>
        </aside>
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            오시는 길 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Location</span>
          </h2>
          <div className="w-full h-[400px] border border-slate-300 mb-8 overflow-hidden bg-slate-100 relative">
            <div ref={mapElement} style={{ width: "100%", height: "100%" }}></div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-8 mb-10">
            <h3 className="text-xl font-black text-slate-800 mb-6">주식회사 플로림 (FLOLIM)</h3>
            <ul className="space-y-4 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="w-24 font-bold text-slate-800 shrink-0">본사 주소</span> 
                <div>
                  <span className="text-slate-500 mr-2">[도로명]</span>충남 천안시 서북구 2공단4로 40-11 천안G1비즈캠퍼스 1223호 주식회사 플로림 <br/>
                  <span className="text-slate-500 mr-2">[지   번]</span>충남 천안시 서북구 성성동 1001 천안G1비즈캠퍼스 1223호 주식회사 플로림
                </div>
              </li>
              <li className="flex items-start"><span className="w-24 font-bold text-slate-800 shrink-0 mt-1">대표 전화</span><span className="mt-1 text-lg font-bold text-[#1eb4c8]">1660-0687</span></li>
              <li className="flex items-start"><span className="w-24 font-bold text-slate-800 shrink-0">이메일</span>info@flolim.com</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 p-6">
              <h4 className="text-[#1eb4c8] font-black text-lg mb-3 flex items-center"><span className="text-2xl mr-2">🚆</span> 대중교통 이용 시</h4>
              <p className="text-sm text-slate-600 leading-relaxed break-keep">수도권 전철 1호선 <b>두정역</b> 하차 후, 택시 또는 버스를 이용하여 천안제2일반산업단지 방면으로 이동</p>
            </div>
            <div className="border border-slate-200 p-6">
              <h4 className="text-[#1eb4c8] font-black text-lg mb-3 flex items-center"><span className="text-2xl mr-2">🚘</span> 자가용 이용 시</h4>
              <p className="text-sm text-slate-600 leading-relaxed break-keep">경부고속도로 <b>천안IC</b> 진출 후 천안제2일반산업단지 교차로 방면. 내비게이션에 주소 검색 후 방문해 주세요.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Location;