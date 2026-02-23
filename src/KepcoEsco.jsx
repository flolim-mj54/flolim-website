import React from "react";
import { Link } from "react-router-dom";

const KepcoEsco = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 스마트 LED 전등 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">켑코이에스 연계 사업</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">켑코이에스(ESCO) 연계 사업</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">스마트 LED 제어</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200"><Link to="/led-intro" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">스마트 LED 제어 시스템</Link></li>
              <li className="border-b border-slate-200"><Link to="/esco" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">켑코이에스 연계 사업 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></Link></li>
              <li className="border-b border-slate-200 last:border-0"><Link to="/led-solution" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">스마트 LED 제어 솔루션</Link></li>
            </ul>
          </div>
        </aside>
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            켑코이에스 연계 사업 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Business Model</span>
          </h2>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px]">
              플로림(FLOLIM)은 한국전력공사의 자회사인 <b>켑코이에스(KEPCO ESCO)</b>와 연계하여, 고객의 초기 투자 비용 부담을 완전히 없앤 스마트 조명 교체 사업을 진행합니다. 노후된 조명을 고효율 스마트 LED 시스템으로 교체하고, 여기서 발생하는 <b>'전기요금 절감액'으로 투자비를 분할 상환</b>하는 획기적인 비즈니스 모델입니다.
            </p>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Feature</h3>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start"><span className="text-[#1eb4c8] mr-2 font-bold">■</span><b>초기 투자비 0원 :</b> 장비, 시스템 구축, 시공비 전액을 켑코이에스에서 선투자</li>
              <li className="flex items-start"><span className="text-[#1eb4c8] mr-2 font-bold">■</span><b>비용 회수 보장 :</b> 교체 전/후 전기요금 차액(절감액)만으로 상환하여 예산 부담 제로</li>
              <li className="flex items-start"><span className="text-[#1eb4c8] mr-2 font-bold">■</span><b>유지보수 보장 :</b> 상환 기간 동안 플로림의 완벽한 시스템 사후 관리(A/S) 지원</li>
            </ul>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Business Process</h3>
            <div className="w-full bg-slate-50 border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[300px]">
              <div className="text-center">
                <span className="text-slate-400 font-bold tracking-widest block mb-2">[ ESCO 사업 프로세스 다이어그램 삽입 영역 ]</span>
                <span className="text-sm text-slate-400">에너지 진단 ➡️ 사업 계약 ➡️ 스마트 LED 시공 ➡️ 절감액 상환</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default KepcoEsco;