import React from "react";

const History = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 회사소개 〉 <span className="text-[#1eb4c8] font-bold">연혁</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">연혁</h1>
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
              <li className="border-b border-slate-200"><a href="#" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">연혁 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></a></li>
              <li className="border-b border-slate-200 last:border-0"><a href="#" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">오시는 길</a></li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            연혁 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">History</span>
          </h2>
          
          <div className="relative border-l-2 border-[#1eb4c8] ml-4 md:ml-6 mt-10">
            {/* 2025 Year Block */}
            <div className="mb-10 ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-[#1eb4c8] rounded-full -left-[17px] ring-4 ring-white text-white font-bold text-sm">
                '25
              </span>
              <h3 className="text-2xl font-black text-slate-800 mb-4 pt-1">2025</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#1eb4c8] font-bold w-16 shrink-0 mt-0.5">12월</span>
                  <p className="text-slate-700 text-lg font-medium">주식회사 플로림 법인 설립</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;