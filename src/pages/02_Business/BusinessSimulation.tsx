import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BusinessSimulation = () => {
  // 시뮬레이션 상태 관리 (기본값 1,000구)
  const [bulbCount, setBulbCount] = useState(1000);

  // 브로슈어 기준 (1,000구 당): 기존 450만원 -> 교체 후 150만원 (매월 300만원 절감)
  const beforeCost = bulbCount * 4500;
  const afterCost = bulbCount * 1500;
  const savingMonth = beforeCost - afterCost;
  const savingYear = savingMonth * 12;

  // 숫자 포맷팅 함수 (콤마 추가)
  const formatNum = (num: number) => new Intl.NumberFormat('ko-KR').format(num);

  return (
    <div className="bg-white min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16 mt-10">
          <p className="text-flolim font-bold tracking-widest mb-4 uppercase text-sm">Simulator</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">에너지 절감 시뮬레이션</h1>
          <div className="w-24 h-1 bg-flolim mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            조명 교체만으로 얼마나 절약될까요?<br />
            <strong className="text-emerald-500 font-bold">우리 회사에 맞는 예상 수익을 직접 확인해 보세요.</strong>
          </p>
        </div>

        {/* 1. 인터랙티브 시뮬레이터 영역 (백색 프리미엄 카드) */}
        <section className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-slate-200 mb-20 relative overflow-hidden group hover:shadow-md hover:border-emerald-500/30 transition-all duration-300">
          
          <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">현장의 노후 조명 개수를 입력해 주세요</h2>
            
            {/* 세련된 슬라이더 UI 패널 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="flex flex-col items-center md:items-start text-left w-full md:w-auto">
                <span className="text-sm text-slate-400 font-bold mb-1 uppercase tracking-wider">Target Quantity</span>
                <span className="text-xl text-slate-700 font-black">노후 조명 수량</span>
              </div>
              
              <input 
                type="range" 
                min="100" 
                max="5000" 
                step="100" 
                value={bulbCount} 
                onChange={(e) => setBulbCount(Number(e.target.value))}
                className="w-full md:w-1/2 h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-flolim outline-none focus:ring-4 focus:ring-flolim/20 transition-all"
              />
              
              <div className="bg-white border-2 border-flolim text-slate-800 font-black text-3xl px-6 py-3 rounded-2xl w-48 text-center shadow-sm flex items-center justify-center gap-1 shrink-0">
                {formatNum(bulbCount)} <span className="text-base text-slate-400 font-medium">구</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-5 font-light">
              * 60W 노후 설비를 25W 플로림 스마트 LED로 교체하는 기준입니다.
            </p>
          </div>

          {/* 동적 결과 그래프 뷰 */}
          <div className="flex items-end justify-center gap-4 md:gap-16 mb-12 h-64 border-b border-slate-100 pb-8 relative z-10">
            
            {/* 교체 전 막대 */}
            <div className="flex flex-col items-center">
              <span className="text-slate-500 font-bold mb-3 text-sm md:text-base transition-all">{formatNum(beforeCost)}원</span>
              <div className="w-24 md:w-32 bg-slate-200 rounded-t-xl h-48 flex items-end justify-center pb-3 relative overflow-hidden transition-colors">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_100%)] bg-[length:20px_20px] opacity-50"></div>
                <span className="text-slate-500 font-medium text-xs md:text-sm relative z-10">노후 설비(60W)</span>
              </div>
              <span className="mt-5 font-bold text-slate-800">교체 전</span>
            </div>

            {/* 💡 화살표 및 절감 하이라이트 (녹색 강조, 한줄 처리) */}
            <div className="flex flex-col items-center justify-center pb-12 z-20">
              <div className="bg-white border-2 border-emerald-500 text-emerald-500 font-black text-lg md:text-2xl px-6 py-3 rounded-full shadow-lg mb-3 flex items-center animate-bounce whitespace-nowrap">
                <span>매월 {formatNum(savingMonth)}원 절감!</span>
              </div>
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-100 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </div>
            </div>

            {/* 교체 후 막대 */}
            <div className="flex flex-col items-center">
              <span className="text-flolim font-black mb-3 text-sm md:text-base transition-all">{formatNum(afterCost)}원</span>
              <div className="w-24 md:w-32 bg-flolim rounded-t-xl h-16 flex items-end justify-center pb-3 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <span className="text-white font-bold text-xs md:text-sm px-1 text-center relative z-10">스마트 LED(25W)</span>
              </div>
              <span className="mt-5 font-bold text-slate-800">교체 후</span>
            </div>
          </div>

          {/* 연간 절감액 (수익) 결론 박스 */}
          <div className="bg-emerald-50/50 border border-emerald-500/30 rounded-2xl p-8 text-center max-w-3xl mx-auto shadow-sm relative overflow-hidden z-10">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500"></div>
            <h3 className="text-lg text-slate-600 mb-3 font-light">초기 투자비 0원으로 즉시 구축하고, 상환 완료 후에는</h3>
            <p className="text-2xl md:text-3xl font-light text-slate-800">
              연간 <strong className="text-emerald-600 font-black text-4xl mx-2">{formatNum(savingYear)}원</strong>의 확정 수익 달성!
            </p>
          </div>
        </section>

        {/* 2. 하단 정보 영역 (2단계 전략 + CTA 패널) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* 좌측: 2단계 효율화 전략 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:border-flolim/30 transition-all duration-300 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">단순 교체를 넘은 2단계 효율화 전략</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-flolim font-black text-xl shrink-0 shadow-sm">1</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">[LED 교체] 소비전력 60% 절감</h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">기존 60W 노후 조명을 25W 초고효율 스마트 LED로 교체하여 하드웨어적인 전력 소모를 대폭 줄입니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-500 font-black text-xl shrink-0 shadow-sm">2</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">[지능형 제어] 20% 추가 절감</h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">스마트 디밍(밝기 조절) 및 스케줄링 제어를 통해 불필요한 낭비를 원천 차단하고 추가 에너지를 아낍니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 우측: 강력한 CTA (도입 문의 유도 다크 패널) */}
          <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-xl border border-slate-800 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-flolim rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 text-center md:text-left">
              <div className="inline-block bg-slate-800 text-flolim border border-slate-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                Next Step
              </div>
              <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                시뮬레이션 결과가<br/>만족스러우신가요?
              </h3>
              <p className="text-slate-400 font-light text-lg leading-relaxed mb-10">
                지금 바로 우리 현장에 딱 맞는<br className="hidden md:block" /> 
                <strong className="text-white font-medium">정확한 무료 견적과 도입 상담</strong>을 받아보세요.
              </p>
              
              <Link to="/support/contact" className="inline-flex items-center justify-center gap-2 bg-flolim hover:bg-flolim/90 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-flolim/30 transition-all duration-300 w-full md:w-auto">
                도입 문의 및 상담 신청
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          </div>

        </div>

        {/* 하단 네비게이션: 스마트 시티 솔루션(SmartCityIntro)으로 이동 */}
        <div className="flex justify-between items-center bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <Link to="/business/esco" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">← 이전 페이지</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">ESCO 사업 모델</span>
          </Link>
          <Link to="/smart-city/intro" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">다음 비즈니스 →</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">스마트 시티 솔루션</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BusinessSimulation;