import React, { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    // 리액트가 화면을 다시 그리지 않도록 로딩 상태(State)를 완전히 제거했습니다!
    const KAKAO_API_KEY = "97f2f1eb9375c07d206cdc3a6dd64b20";

    const drawMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("kakao-map");
        if (!container) return;

        const position = new window.kakao.maps.LatLng(36.8378, 127.1328);
        const map = new window.kakao.maps.Map(container, { center: position, level: 3 });
        const marker = new window.kakao.maps.Marker({ position });
        marker.setMap(map);

        const infowindow = new window.kakao.maps.InfoWindow({
            content: '<div style="padding:5px 10px; font-size:14px; font-weight:bold; color:#1eb4c8; text-align:center; border:none;">주식회사 플로림</div>'
        });
        infowindow.open(map, marker);
      });
    };

    // 스크립트가 이미 있으면 바로 그리고, 없으면 불러와서 그립니다.
    if (window.kakao && window.kakao.maps) {
      drawMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`;
      document.head.appendChild(script);
      script.onload = () => drawMap();
    }
  }, []); // 빈 배열을 넣어 딱 한 번만 실행되게 고정합니다.

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
              <li className="border-b border-slate-200"><a href="#" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">인사말</a></li>
              <li className="border-b border-slate-200"><a href="#" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">연혁</a></li>
              <li className="border-b border-slate-200 last:border-0"><a href="#" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">오시는 길 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></a></li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            오시는 길 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Location</span>
          </h2>
          
          {/* 🚀 지도가 들어갈 도화지 (이제 리액트가 절대 이 안을 지우지 않습니다!) */}
          <div id="kakao-map" className="w-full h-[400px] bg-slate-200 border border-slate-300 mb-8 shadow-inner"></div>

          <div className="bg-slate-50 border border-slate-200 p-8 mb-10">
            <h3 className="text-xl font-black text-slate-800 mb-6">주식회사 플로림 (FLOLIM)</h3>
            <ul className="space-y-4 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="w-24 font-bold text-slate-800 shrink-0">본사 주소</span> 
                <div>
                  <span className="text-slate-500 mr-2">[도로명]</span>충남 천안시 서북구 2공단4로 40-11 천안G1비즈캠퍼스 1223호 주식회사 플로림 <br/>
                  <span className="text-slate-500 mr-2">[지&nbsp;&nbsp;&nbsp;번]</span>충남 천안시 서북구 성성동 1001 천안G1비즈캠퍼스 1223호 주식회사 플로림
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
