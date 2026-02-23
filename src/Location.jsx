import React from "react";
// 💡 방금 설치한 마스터키 도구들을 불러옵니다!
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

const Location = () => {
  // 💡 이 한 줄이 그동안 속 썩이던 스크립트 다운로드, 에러, 타이밍 문제를 완벽하게 100% 자동 해결합니다.
  const [loading, error] = useKakaoLoader({
    appkey: "97f2f1eb9375c07d206cdc3a6dd64b20", 
  });

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
          
          {/* 🚀 전용 도구를 사용한 완벽한 지도 영역 */}
          <div className="w-full h-[400px] border border-slate-300 mb-8 shadow-inner relative flex items-center justify-center bg-slate-100">
            {loading && <div className="text-slate-600 font-bold z-10">지도를 안전하게 불러오는 중입니다...</div>}
            {error && <div className="text-red-500 font-bold z-10">지도 불러오기 실패</div>}
            
            {!loading && !error && (
              <Map 
                center={{ lat: 36.8378, lng: 127.1328 }} 
                style={{ width: "100%", height: "100%" }} 
                level={3}
              >
                <MapMarker position={{ lat: 36.8378, lng: 127.1328 }}>
                  <div style={{ padding: "5px", color: "#1eb4c8", fontWeight: "bold", textAlign: "center" }}>
                    주식회사 플로림
                  </div>
                </MapMarker>
              </Map>
            )}
          </div>

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
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Location;
