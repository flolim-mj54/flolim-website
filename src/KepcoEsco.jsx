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
              플로림(FLOLIM)은 한국전력공사의 자회사인 <b>켑코이에스(KEPCO ESCO)</b>와 공식 연계하여, 고객의 초기 투자 예산 부담을 완벽하게 없앤 혁신적인 '스마트 조명 무료 교체 사업'을 진행합니다.
              <br/><br/>
              노후된 조명을 플로림의 고효율 스마트 LED 및 로컬 서버 기반 제어 시스템으로 교체하는데 드는 비용 전액을 켑코이에스가 선투자합니다. 이후 발생하는 <b>'전기요금 절감액'으로 투자비를 장기간 분할 상환</b>하기 때문에 기업 및 기관은 단 1원의 추가 예산 편성 없이 최첨단 인프라를 도입할 수 있습니다.
            </p>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Core Advantages</h3>
            <ul className="space-y-4 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">초기 도입 예산 0원 (Zero CAPEX)</b>
                  하드웨어 장비, 로컬 관제 서버 구축, 시공 인건비 등 전체 사업비 전액을 켑코이에스 펀드로 조달합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">100% 절감액 기반 상환 (리스크 제로)</b>
                  교체 전/후 전기요금 차액(절감액)만으로 상환이 이루어지며, 절감액이 상환액보다 적을 경우 추가 청구 없이 상환 기간이 연장되어 고객의 재무적 리스크가 없습니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">상환 기간 내 무상 A/S 및 유지보수 보장</b>
                  상환이 진행되는 전체 계약 기간 동안 플로림이 시스템의 안정적인 운영과 램프/통신 모듈 교체 등 완벽한 사후 관리(A/S)를 보장합니다.
                </div>
              </li>
            </ul>
          </div>

          {/* 🖼️ 다이어그램 삽입 영역 */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Business Process</h3>
            <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-8 flex flex-col items-center justify-center min-h-[300px]">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="text-slate-500 font-bold tracking-widest block mb-2">[ ESCO 사업 진행 프로세스 다이어그램 삽입 영역 ]</span>
              <span className="text-sm text-slate-400 text-center">에너지 진단(무상) ➡️ ESCO 계약 체결 ➡️ 로컬 서버/스마트 LED 시공 ➡️ 절감액 산정 및 분할 상환</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KepcoEsco;