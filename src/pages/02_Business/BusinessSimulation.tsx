import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const BusinessSimulation = () => {
  const [bulbCount, setBulbCount] = useState(1000);

  const beforeCost = bulbCount * 4500;
  const afterCost = bulbCount * 1500;
  const savingMonth = beforeCost - afterCost;
  const savingYear = savingMonth * 12;

  const formatNum = (num: number) => new Intl.NumberFormat('ko-KR').format(num);

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="시뮬레이터"
        title="에너지 절감 시뮬레이션"
        subtitle={
          <>
            조명 교체만으로 얼마나 절약될까요?<br />
            <strong className="text-flolim font-bold">우리 회사에 맞는 예상 수익을 직접 확인해 보세요.</strong>
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        {/* 메인 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          {/* 시뮬레이터 컨트롤 영역 */}
          <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 break-keep">현장의 노후 조명 개수를 입력해 주세요</h2>
            
            <div className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-inner relative overflow-hidden">
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto relative z-10">
                <span className="text-xs md:text-sm text-flolim font-bold mb-1 tracking-wider whitespace-nowrap">교체 대상 수량</span>
                <span className="text-lg md:text-xl text-white font-black whitespace-nowrap">노후 조명 개수</span>
              </div>
              
              <input 
                type="range" min="100" max="5000" step="100" value={bulbCount} 
                onChange={(e) => setBulbCount(Number(e.target.value))}
                className="w-full md:w-1/2 h-3 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-flolim outline-none focus:ring-2 focus:ring-flolim/50 transition-all border border-slate-700 shadow-inner relative z-10"
              />
              
              <div className="bg-slate-900 border border-flolim text-white font-black text-2xl md:text-3xl px-6 py-3 rounded-2xl w-full md:w-48 text-center shadow-[0_0_15px_rgba(24,169,198,0.2)] flex items-center justify-center gap-1 shrink-0 relative z-10">
                {formatNum(bulbCount)} <span className="text-sm md:text-base text-slate-500 font-medium">구</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-500 mt-4 font-light break-keep">
              * 60W 노후 설비를 25W 플로림 스마트 LED로 교체하는 기준입니다.
            </p>
          </div>

          {/* 시각적 비교 차트 */}
          <div className="relative flex justify-center items-end gap-10 md:gap-16 mb-16 h-56 md:h-64 border-b border-slate-800 pb-10 z-10">
            
            {/* 교체 전 (좌측) */}
            <div className="flex flex-col items-center w-24 md:w-32">
              <span className="text-slate-400 font-bold mb-2 md:mb-3 text-xs md:text-base whitespace-nowrap">{formatNum(beforeCost)}원</span>
              <div className="w-full bg-slate-800 rounded-t-xl h-36 md:h-48 flex items-end justify-center pb-2 md:pb-3 relative overflow-hidden border-t border-x border-slate-700 shadow-lg">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_100%)] bg-[length:20px_20px]"></div>
                <span className="text-slate-400 font-medium text-[10px] md:text-sm relative z-10">노후 (60W)</span>
              </div>
              <span className="mt-4 md:mt-5 font-bold text-slate-300 text-sm md:text-base break-keep">교체 전</span>
            </div>

            {/* 절감액 강조 (가운데) */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex flex-col items-center justify-center pb-0 md:pb-12 z-20 w-[90%] md:w-auto">
              <div className="bg-flolim text-slate-900 font-black text-sm md:text-xl lg:text-2xl px-4 py-3 md:px-6 md:py-3 rounded-full shadow-[0_5px_20px_rgba(24,169,198,0.6)] mb-0 md:mb-3 flex items-center justify-center animate-bounce border-2 border-[#020617] md:border-none w-full md:w-auto whitespace-nowrap">
                <span>매월 {formatNum(savingMonth)}원 절감!</span>
              </div>
              <div className="hidden md:flex w-10 h-10 bg-slate-900 rounded-full items-center justify-center text-flolim border border-flolim/50 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </div>
            </div>

            {/* 교체 후 (우측) */}
            <div className="flex flex-col items-center w-24 md:w-32">
              <span className="text-flolim font-black mb-2 md:mb-3 text-xs md:text-base whitespace-nowrap transition-all">{formatNum(afterCost)}원</span>
              <div className="w-full bg-flolim rounded-t-xl h-12 md:h-16 flex items-end justify-center pb-2 md:pb-3 shadow-[0_0_15px_rgba(24,169,198,0.5)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <span className="text-white font-bold text-[10px] md:text-sm px-1 text-center relative z-10 leading-tight">스마트<br className="md:hidden"/>(25W)</span>
              </div>
              <span className="mt-4 md:mt-5 font-bold text-white text-sm md:text-base break-keep">교체 후</span>
            </div>
          </div>

          {/* 최종 결과 패널 */}
          <div className="bg-[#050b14] border border-flolim/30 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto shadow-inner relative overflow-hidden z-10 mt-10 md:mt-0">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 md:w-2 bg-flolim shadow-[0_0_15px_rgba(24,169,198,1)]"></div>
            <h3 className="text-sm md:text-lg text-slate-300 mb-2 md:mb-3 font-light break-keep">초기 투자비 0원으로 즉시 구축하고, 상환 완료 후에는</h3>
            <p className="text-xl md:text-3xl font-light text-white break-keep">
              연간 <strong className="text-flolim font-black text-2xl md:text-4xl mx-1 md:mx-2 drop-shadow-md whitespace-nowrap">{formatNum(savingYear)}원</strong>의 확정 수익 달성!
            </p>
          </div>
        </section>

        {/* 하단 2단 구조 */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-slate-800 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* 효율화 전략 카드 */}
            <div className="bg-[#050b14] p-8 md:p-10 rounded-3xl border border-slate-700 flex flex-col justify-center shadow-inner hover:border-flolim/50 transition-colors group relative overflow-hidden cursor-default">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 group-hover:text-flolim transition-colors break-keep">단순 교체를 넘은 2단계 효율화</h3>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 border border-slate-600 rounded-xl flex items-center justify-center text-flolim font-black text-lg md:text-xl shrink-0">1</div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white mb-1.5 md:mb-2 break-keep">[LED 교체] 소비전력 60% 절감</h4>
                      <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed break-keep">기존 60W 노후 조명을 25W 초고효율 스마트 LED로 교체하여 하드웨어적인 전력 소모를 대폭 줄입니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-flolim/10 border border-flolim/30 rounded-xl flex items-center justify-center text-flolim font-black text-lg md:text-xl shrink-0">2</div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white mb-1.5 md:mb-2 break-keep">[지능형 제어] 20% 추가 절감</h4>
                      <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed break-keep">스마트 디밍(밝기 조절) 및 스케줄링 제어를 통해 불필요한 낭비를 원천 차단하고 추가 에너지를 아낍니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Step 유도 패널 */}
            <div className="bg-[#050b14] text-white p-8 md:p-10 rounded-3xl shadow-inner border border-slate-700 flex flex-col justify-center relative overflow-hidden group hover:border-flolim/50 transition-colors cursor-default">
              <div className="absolute -right-6 -top-6 w-40 h-40 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 text-center md:text-left">
                <div className="inline-block bg-slate-800 text-flolim border border-slate-600 text-[10px] md:text-xs font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-4 md:mb-6 tracking-wider whitespace-nowrap">
                  도입 안내
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 leading-tight group-hover:text-flolim transition-colors break-keep">
                  시뮬레이션 결과가<br/>만족스러우신가요?
                </h3>
                <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed mb-8 md:mb-10 break-keep">
                  지금 바로 우리 현장에 딱 맞는<br className="hidden md:block" /> 
                  <strong className="text-white font-medium">정확한 무료 견적과 도입 상담</strong>을 받아보세요.
                </p>
                <Link to="/support/contact" className="inline-flex items-center justify-center gap-2 bg-flolim hover:bg-cyan-400 active:scale-95 text-slate-900 font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-[0_0_20px_rgba(24,169,198,0.4)] transition-all duration-300 w-full md:w-auto whitespace-nowrap">
                  도입 문의 및 상담 신청
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>

          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: 'KEPCO 연계 ESCO', path: '/business/esco' }}
          next={{ label: '다음 카테고리', title: '스마트 시티 개요', path: '/smart-city/intro' }}
        />
      </div>
    </div>
  );
};

export default BusinessSimulation;