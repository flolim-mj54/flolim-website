import React from "react";
import { Link } from "react-router-dom";

const KepcoEsco = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 스마트 LED 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">켑코이에스(ESCO) 연계 사업</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            켑코이에스(ESCO) 연계 사업
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        
        {/* 🚀 App.tsx 경로에 맞춰 링크 수정 (/led-intro, /esco, /led-solution) */}
        <aside className="w-full md:w-[350px] flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">스마트 LED 제어 시스템</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <Link to="/led-intro" className="flex items-center justify-between px-4 py-4 text-[13px] lg:text-[14px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  스마트 LED 전등 제어 시스템
                </Link>
              </li>
              <li className="border-b border-slate-200">
                <Link to="/esco" className="flex items-center justify-between px-4 py-4 text-[13px] lg:text-[14px] tracking-tight bg-cyan-50 text-[#1eb4c8] font-bold whitespace-nowrap">
                  켑코이에스(ESCO) 에너지 효율화 연계 사업 <svg className="w-4 h-4 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/led-solution" className="flex items-center justify-between px-4 py-4 text-[13px] lg:text-[14px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  스마트 LED 전등 제어 솔루션
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            켑코이에스(ESCO) 에너지 효율화 연계 사업 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">ESCO 연계 사업</span>
          </h2>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              <strong className="text-lg text-slate-800 block mb-3">예산 부담은 지우고, 조명은 더 스마트하게</strong>
              플로림(FLOLIM)은 <b>켑코이에스(KEPCO ES, 한국전력공사 출자 기업)</b>와 공식 연계하여, 고객의 초기 예산 부담을 완벽하게 없앤 혁신적인 '스마트 조명 에너지 효율화 사업'을 진행합니다.
              <br/><br/>
              노후된 조명을 플로림의 고효율 스마트 LED 및 지능형 제어 시스템으로 교체하는 데 필요한 사업비 전액을 켑코이에스에서 선투자합니다. 도입 후 매달 발생하는 <b>'전기요금 절감액'</b>으로만 투자비를 장기간 나누어 갚게 되므로, 기업이나 기관은 단 1원의 추가 예산 편성 없이 최첨단 스마트 조명 인프라를 구축할 수 있습니다.
            </p>

            <div className="w-full aspect-video bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors p-6 text-center">
              <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-bold tracking-wide mb-2 text-slate-600">[ 켑코이에스(ESCO) 투자 구조 시각 자료 삽입 영역 ]</span>
              <span className="text-sm text-slate-500 break-keep">플로림, 켑코이에스, 고객 간의 자금 조달 및 절감액 상환 흐름을 보여주는 인포그래픽을 권장합니다.</span>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Core Advantages <span className="text-base font-normal text-slate-500 ml-1">(3가지 핵심 혜택)</span></h3>
            <ul className="space-y-5 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">단 1원의 예산도 필요 없는 초기 도입 비용 0원</b>
                  조명 기기, 관제 서버 구축, 현장 설치 인건비 등 사업에 필요한 전체 비용을 켑코이에스의 에너지 효율화 펀드로 100% 조달하여, 고객의 초기 투자 부담을 완전히 없앴습니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">아낀 전기요금으로만 갚는 안전한 상환 (고객 부담 제로)</b>
                  조명 교체 후 실제로 줄어든 전기요금 차액(절감액)만으로 상환이 이루어집니다. 만약 예상보다 요금 절감액이 적더라도 추가 청구 없이 상환 기간만 연장되므로, 고객이 짊어지는 재무적인 위험(리스크)이 전혀 없습니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">계약 기간 내내 안심할 수 있는 완벽 무상 A/S</b>
                  상환이 진행되는 전체 계약 기간 동안 플로림이 확실하게 책임집니다. 시스템의 안정적인 운영은 물론, 조명 램프나 통신 모듈 교체 등 든든한 사후 관리(A/S)를 무상으로 보장해 드립니다.
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Business Process</h3>
            
            <div className="w-full bg-slate-50 border border-slate-200 p-8 rounded-lg mt-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-0 -translate-y-1/2"></div>

                <div className="flex flex-col items-center bg-white border-2 border-slate-200 p-4 rounded-full w-40 h-40 justify-center z-10 shadow-sm relative group hover:border-[#1eb4c8] transition-colors">
                  <div className="text-[#1eb4c8] font-black text-xl mb-1">1단계</div>
                  <svg className="w-8 h-8 text-slate-400 mb-2 group-hover:text-[#1eb4c8] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                  <span className="text-sm font-bold text-slate-700 text-center break-keep">무상 에너지 진단</span>
                </div>

                <div className="md:hidden text-slate-300"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div>

                <div className="flex flex-col items-center bg-white border-2 border-slate-200 p-4 rounded-full w-40 h-40 justify-center z-10 shadow-sm relative group hover:border-[#1eb4c8] transition-colors">
                  <div className="text-[#1eb4c8] font-black text-xl mb-1">2단계</div>
                  <svg className="w-8 h-8 text-slate-400 mb-2 group-hover:text-[#1eb4c8] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-sm font-bold text-slate-700 text-center break-keep">켑코이에스(ESCO) 계약 체결</span>
                </div>

                <div className="md:hidden text-slate-300"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div>

                <div className="flex flex-col items-center bg-white border-2 border-slate-200 p-4 rounded-full w-40 h-40 justify-center z-10 shadow-sm relative group hover:border-[#1eb4c8] transition-colors">
                  <div className="text-[#1eb4c8] font-black text-xl mb-1">3단계</div>
                  <svg className="w-8 h-8 text-slate-400 mb-2 group-hover:text-[#1eb4c8] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="text-sm font-bold text-slate-700 text-center break-keep">로컬 서버 및 스마트 LED 시공</span>
                </div>

                <div className="md:hidden text-slate-300"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div>

                <div className="flex flex-col items-center bg-white border-2 border-slate-200 p-4 rounded-full w-40 h-40 justify-center z-10 shadow-sm relative group hover:border-[#1eb4c8] transition-colors">
                  <div className="text-[#1eb4c8] font-black text-xl mb-1">4단계</div>
                  <svg className="w-8 h-8 text-slate-400 mb-2 group-hover:text-[#1eb4c8] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-sm font-bold text-slate-700 text-center break-keep">절감액 산정 및 분할 상환</span>
                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default KepcoEsco;