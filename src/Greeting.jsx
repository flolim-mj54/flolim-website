import React from "react";
import { Link } from "react-router-dom";

const Greeting = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 회사소개 〉 <span className="text-[#1eb4c8] font-bold">인사말</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">인사말</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">회사소개</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200"><Link to="/greeting" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">인사말 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></Link></li>
              <li className="border-b border-slate-200"><Link to="/history" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">연혁</Link></li>
              <li className="border-b border-slate-200 last:border-0"><Link to="/location" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">오시는 길</Link></li>
            </ul>
          </div>
        </aside>
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            인사말 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Greeting</span>
          </h2>
          <div className="bg-slate-50 border border-slate-200 p-10 mb-10 text-center">
            <h3 className="text-2xl font-bold text-[#1eb4c8] mb-6">"플로림과 함께 미래를 그려갑니다."</h3>
            <p className="text-slate-700 leading-relaxed break-keep mb-10">
              플로림을 찾아주신 여러분, 진심으로 환영합니다.<br/><br/>
              저희 주식회사 플로림은 끊임없는 혁신과 도전을 통해 새로운 가치를 창출하고자 노력하고 있습니다. 
              고객 여러분의 신뢰를 바탕으로 더욱 성장해 나가는 기업이 되겠습니다.
            </p>
            <div className="text-right mt-8 border-t border-slate-200 pt-8">
              <p className="text-slate-600">주식회사 플로림 대표이사</p>
              <p className="text-2xl font-black text-slate-800 mt-2">모 근 영</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Greeting;