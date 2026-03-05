import React from 'react';
import { Link } from 'react-router-dom';

const BusinessEsco = () => {
  return (
    <div className="bg-white min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16 mt-10">
          <p className="text-flolim font-bold tracking-widest mb-4 uppercase text-sm">Business Model</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">KEPCO 연계 에너지 효율화 사업</h1>
          <div className="w-24 h-1 bg-flolim mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            초기 투자비 <strong className="text-flolim font-bold">0원</strong>, 
            국가 지원으로 누리는 전력비 <strong className="text-emerald-500 font-bold">최대 80% 절감</strong>
          </p>
        </div>

        {/* 1. Overview 섹션 */}
        <section className="bg-white rounded-3xl p-10 md:p-16 mb-24 shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-md hover:border-flolim/30 transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-flolim rounded-full blur-[100px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
          
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center relative z-10">
            예산 부담은 지우고, 조명은 더 스마트하게
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed text-center max-w-4xl mx-auto font-light relative z-10">
            플로림(FLOLIM)은 한국전력공사 출자 기업인 <strong className="font-bold text-slate-900">켑코이에스(KEPCO ES)</strong>와 공식 연계하여 혁신적인 스마트 조명 에너지 효율화 사업을 진행합니다. 
            노후 조명을 고효율 스마트 LED 및 지능형 제어 시스템으로 교체하는 비용 <strong className="font-bold text-flolim">전액을 켑코이에스에서 선투자</strong>하므로, 
            단 1원의 추가 예산 편성 없이 최첨단 인프라를 구축할 수 있습니다.
          </p>
        </section>

        {/* 2. 3단계 도입 및 상환 프로세스 */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">3단계 도입 및 상환 프로세스</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* 연결선 (데스크톱 전용) */}
            <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-[2px] bg-slate-100 -z-10"></div>
            
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center relative hover:-translate-y-1 hover:shadow-md hover:border-flolim/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black border border-slate-100 shadow-sm group-hover:bg-flolim group-hover:text-white group-hover:border-flolim transition-colors">1</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-flolim transition-colors">[도입] 초기 투자비 0원</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                모든 교체 비용을 <strong className="font-medium text-slate-700">켑코이에스에서 100% 선투자</strong>합니다.<br/>
                <span className="text-sm">(귀사 부담 0원)</span>
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center relative hover:-translate-y-1 hover:shadow-md hover:border-flolim/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black border border-slate-100 shadow-sm group-hover:bg-flolim group-hover:text-white group-hover:border-flolim transition-colors">2</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-flolim transition-colors">[상환] 절감액 분할 상환</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                매달 내던 <strong className="font-medium text-slate-700">전기료를 그대로 납부</strong>하여 절감된 금액만큼 시설비를 상환합니다.<br/>
                <span className="text-sm">(평균 2~5년)</span>
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center relative hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500"></div>
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-md border border-emerald-500/50 transform group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">[수익] 고정 수익 발생</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                상환 완료 후, 시설물 소유권이 이전되며 <strong className="font-medium text-slate-700">전기료 70% 고정 수익</strong>(절감액)이 발생합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. 시뮬레이션 제거 및 개념도 유도 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* 좌측: 에너지 절감 효과 예시 */}
          <section className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:border-flolim/30 transition-all duration-300 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              압도적인 에너지 절감 효과 <span className="text-lg text-slate-400 font-normal">(예시)</span>
            </h2>
            <p className="text-slate-500 mb-10 font-light text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-flolim mr-2"></span>
              스마트 LED 1,000구 교체 기준
            </p>
            
            <div className="flex items-end justify-center gap-6 md:gap-12 mb-10 h-56 border-b border-slate-100 pb-6 flex-grow">
              
              {/* 교체 전 막대 */}
              <div className="flex flex-col items-center group">
                <span className="text-slate-500 font-bold mb-3 text-sm group-hover:text-rose-500 transition-colors">약 450만 원</span>
                <div className="w-20 md:w-28 bg-slate-200 rounded-t-xl h-48 flex items-end justify-center pb-3 relative overflow-hidden group-hover:bg-rose-100 transition-colors">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_100%)] bg-[length:20px_20px]"></div>
                  <span className="text-slate-500 font-medium text-xs md:text-sm relative z-10 group-hover:text-rose-600">노후 설비(60W)</span>
                </div>
                <span className="mt-5 font-bold text-slate-800">교체 전</span>
              </div>
              
              {/* 💡 화살표 및 절감액 (녹색 강조, 한줄 처리) */}
              <div className="flex flex-col items-center justify-center pb-12">
                <span className="text-emerald-500 font-black text-xl md:text-2xl mb-2 drop-shadow-sm whitespace-nowrap">300만 원 절감!</span>
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-100 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
              </div>

              {/* 교체 후 막대 */}
              <div className="flex flex-col items-center">
                <span className="text-flolim font-black mb-3 text-sm">약 150만 원</span>
                <div className="w-20 md:w-28 bg-flolim rounded-t-xl h-20 flex items-end justify-center pb-3 shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="text-white font-bold text-xs md:text-sm px-1 text-center relative z-10">스마트 LED(25W)</span>
                </div>
                <span className="mt-5 font-bold text-slate-800">교체 후</span>
              </div>
            </div>
            
            <Link to="/business/simulation" className="group relative overflow-hidden bg-slate-50 border border-flolim/30 rounded-2xl p-6 text-center shadow-sm hover:bg-flolim transition-all duration-300 flex flex-col items-center justify-center">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-flolim group-hover:bg-white transition-colors"></div>
              <p className="text-slate-800 font-bold text-lg group-hover:text-white transition-colors mb-2">
                우리 회사는 얼마나 절감될까?
              </p>
              <div className="inline-flex items-center gap-2 text-flolim bg-white px-4 py-2 rounded-full text-sm font-bold shadow-sm group-hover:text-slate-900 group-hover:shadow-md transition-all">
                맞춤형 시뮬레이션 해보기 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </Link>
          </section>

          {/* 우측: 핵심 혜택 & ESCO + EERS */}
          <section className="flex flex-col gap-8 h-full">
            <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-flolim rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="inline-block bg-slate-800 text-flolim border border-slate-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                  ESCO + EERS 결합 시너지
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
                  한전 지원금이 더해져<br/>
                  더 빨라지는 상환
                </h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8">
                  초기 투자비 0원으로 구축하는 <strong className="text-white font-medium">[ESCO 자금]</strong>에, 절감된 전력량에 비례하여 한국전력공사에서 현금 지원금을 직접 수령하는 <strong className="text-white font-medium">[EERS 현금 보너스]</strong>를 결합합니다.
                </p>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-flolim/20 flex items-center justify-center text-flolim shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <span className="font-bold text-slate-200">투자 회수율(ROI) 극대화<br/><span className="text-sm text-flolim font-medium">상환 기간 평균 3년 단축</span></span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 flex-grow hover:shadow-md hover:border-flolim/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-8">플로림 ESCO 사업만의 강점</h3>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-xl shrink-0 mr-5 shadow-sm">🏛️</div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">국책 사업의 공신력과 전문성</h4>
                    <p className="text-slate-500 font-light text-sm leading-relaxed">한전 및 발전사가 설립한 켑코이에스와 함께하여 장기적으로 믿고 맡길 수 있습니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-xl shrink-0 mr-5 shadow-sm">💡</div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">절감 시너지 극대화</h4>
                    <p className="text-slate-500 font-light text-sm leading-relaxed">단순 조명 교체를 넘어, 초고효율 LED와 지능형 스마트 제어(디밍, 스케줄링)를 결합하여 <strong className="text-emerald-600 font-medium">추가적인 에너지를 20% 이상 더 절약</strong>합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

        </div>

        {/* 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <Link to="/" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">← 메인으로</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">홈페이지</span>
          </Link>
          <Link to="/business/simulation" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">다음 페이지 →</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">시뮬레이션</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BusinessEsco;