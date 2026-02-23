import React from "react";
// 🚀 링크 이동을 위한 컴포넌트 추가
import { Link } from "react-router-dom";

const Archive = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 고객지원 〉 <span className="text-[#1eb4c8] font-bold">자료실</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">자료실</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">고객지원</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                {/* 🚀 자료실 (현재 위치이므로 파란색 하이라이트) */}
                <Link to="/archive" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">
                  자료실 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                {/* 🚀 온라인 문의로 부드럽게 넘어가도록 Link 연결! */}
                <Link to="/contact" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">
                  온라인 문의
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            자료실 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Archive</span>
          </h2>
          
          <div className="bg-slate-50 border border-slate-200 p-10 text-center text-slate-500">
            <svg className="w-16 h-16 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            <p className="text-lg font-bold mb-2">자료실 준비 중입니다.</p>
            <p className="text-sm">제품 카탈로그 및 기술 문서는 곧 업데이트될 예정입니다.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Archive;