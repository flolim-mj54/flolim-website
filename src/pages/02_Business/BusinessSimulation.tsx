import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const BusinessSimulation = () => {
  const formatNum = (num: number) => new Intl.NumberFormat('ko-KR').format(Math.round(num));

  // --- State 관리 ---
  const [qty, setQty] = useState(1000);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [oldW, setOldW] = useState(60);
  const [newW, setNewW] = useState(25);
  const [hours, setHours] = useState(11);
  const [days, setDays] = useState(365);
  const [rate, setRate] = useState(145);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  // --- 엑셀 수식 기반 계산 로직 ---
  const oldEnergy = (oldW * qty * hours * days) / 1000;
  const oldCost = oldEnergy * rate;

  // IoT 제어 단독 절감액 (40% 고정)
  const iotSaveRate = 0.4;
  const iotSave = oldCost * iotSaveRate;

  // 신규 LED + IoT 제어 적용 시 최종 전기요금
  const newLedEnergy = (newW * qty * hours * days) / 1000;
  const smartEnergy = newLedEnergy * (1 - iotSaveRate); 
  const smartCost = smartEnergy * rate;
  
  // 총 절감액 및 LED 추가 절감 기여분 산출
  const totalSave = oldCost - smartCost;
  const ledSave = totalSave - iotSave; 

  const savingMonth = totalSave / 12;

  // 퍼센트 계산
  const iotSavePercent = 40;
  const ledSavePercent = Math.round((ledSave / oldCost) * 100);

  // --- 핸들러 ---
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setHasResult(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResult(true);
    }, 1500); 
  };

  const handleReset = () => {
    setHasResult(false);
    setIsAnalyzing(false);
  };

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="시뮬레이터"
        title="에너지 절감 시뮬레이션"
        subtitle={
          <>
            조명 교체 및 IoT 제어 시스템 도입에 따른{' '}
            <br className="md:hidden" />
            <strong className="text-flolim font-bold">예상 에너지 절감액을 직접 확인해 보세요.</strong>
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          {/* 1. 데이터 입력 화면 */}
          {!isAnalyzing && !hasResult && (
            <div className="animate-fade-in relative z-10 max-w-3xl mx-auto w-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 break-keep">현장의 기본 정보를 입력해 주세요</h2>
              </div>

              <div className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner mb-8">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-base md:text-lg font-bold text-white">현장 조명 수량</h4>
                  <button onClick={() => setShowAdvanced(!showAdvanced)} className="text-[10px] md:text-xs font-bold text-flolim bg-flolim/10 px-3 py-1.5 rounded-lg border border-flolim/30 hover:bg-flolim/20 transition-colors">
                    {showAdvanced ? '상세 설정 닫기' : '상세 설정 열기'}
                  </button>
                </div>

                <div className="mb-6">
                  <div className="text-center text-3xl md:text-4xl font-black text-white mb-8 border-b border-slate-800 pb-6">
                    {formatNum(qty)} <span className="text-lg md:text-xl text-slate-500 font-medium">구</span>
                  </div>
                  <input type="range" min="100" max="10000" step="100" value={qty} onChange={(e) => setQty(Number(e.target.value))} className="w-full accent-flolim h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-flolim border border-slate-700" />
                  <div className="flex justify-between mt-3 text-[10px] md:text-xs text-slate-500 font-medium">
                    <span>100 구</span>
                    <span>10,000 구</span>
                  </div>
                </div>

                {showAdvanced && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 pt-8 border-t border-slate-800 animate-fade-in">
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm text-slate-400 font-bold">기존 조명 소비전력 (W)</label>
                      <input type="number" value={oldW} onChange={(e)=>setOldW(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:border-flolim outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm text-slate-400 font-bold">신규 조명 소비전력 (W)</label>
                      <input type="number" value={newW} onChange={(e)=>setNewW(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:border-flolim outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm text-slate-400 font-bold">일 평균 점등 시간 (시간)</label>
                      <input type="number" value={hours} onChange={(e)=>setHours(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:border-flolim outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm text-slate-400 font-bold">연간 사용 일수 (일)</label>
                      <input type="number" value={days} onChange={(e)=>setDays(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:border-flolim outline-none transition-colors" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs md:text-sm text-slate-400 font-bold">전력 단가 (원 / kWh)</label>
                      <input type="number" value={rate} onChange={(e)=>setRate(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:border-flolim outline-none transition-colors" />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <button onClick={handleAnalyze} className="bg-flolim hover:bg-cyan-400 active:scale-95 text-slate-900 font-bold px-10 py-4 rounded-xl shadow-[0_0_20px_rgba(24,169,198,0.3)] transition-all flex items-center gap-2 text-sm md:text-base">
                  분석 시작하기
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          )}

          {/* 2. 로딩 애니메이션 화면 */}
          {isAnalyzing && (
            <div className="flex flex-col items-center justify-center py-20 animate-fade-in relative z-10">
              <div className="w-16 h-16 border-4 border-slate-800 border-t-flolim rounded-full animate-spin mb-6 shadow-[0_0_15px_rgba(24,169,198,0.5)]"></div>
              <h3 className="text-xl md:text-2xl font-bold text-white break-keep">입력하신 데이터를 바탕으로 분석 중입니다...</h3>
              <p className="text-sm text-slate-400 mt-2 font-light">잠시만 기다려 주세요.</p>
            </div>
          )}

          {/* 3. IoT 히어로 카드 결과 화면 */}
          {hasResult && !isAnalyzing && (
            <div className="animate-fade-in relative z-10 w-full max-w-3xl mx-auto">
              
              {/* 타이틀 + 조건 뱃지 */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-5">시뮬레이션 분석 결과</h3>
                <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50 flex flex-wrap justify-center gap-2 text-[11px] md:text-xs text-slate-300">
                  <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">수량: <strong className="text-white">{formatNum(qty)} 구</strong></span>
                  <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">기존 조명: <strong className="text-white">{oldW} W</strong></span>
                  <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">신규 조명: <strong className="text-white">{newW} W</strong></span>
                  <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">사용 시간: <strong className="text-white">{hours} 시간 / 일 ({days} 일)</strong></span>
                  <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">전력 단가: <strong className="text-white">{rate} 원</strong></span>
                </div>
              </div>

              {/* ★ 히어로 카드: IoT 절감 */}
              <div className="relative bg-gradient-to-br from-flolim/20 to-flolim/5 border-2 border-flolim/60 rounded-3xl p-7 md:p-10 mb-5 shadow-[0_0_50px_rgba(24,169,198,0.25)] overflow-hidden">
                {/* 배경 광원 */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-flolim/20 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-flolim text-slate-900 text-[10px] md:text-xs font-black px-3 py-1 rounded-full">IoT 제어 시스템</span>
                      <span className="text-flolim font-black text-sm md:text-base">즉시 절감</span>
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm font-light mb-2">기존 {oldW} W 조명을 그대로 유지해도</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-flolim font-black text-4xl md:text-6xl drop-shadow-[0_0_20px_rgba(24,169,198,0.8)]">
                        {formatNum(iotSave / 12)}
                      </span>
                      <span className="text-flolim/80 font-bold text-base md:text-xl">원 / 월</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-2">연간 <strong className="text-flolim font-medium text-sm mx-1">{formatNum(iotSave)}</strong> 원 절감</p>
                  </div>

                  {/* 우측 퍼센트 도넛 효과 (SVG) */}
                  <div className="flex flex-col items-center justify-center shrink-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_10px_rgba(24,169,198,0.5)]">
                        {/* 배경 링 */}
                        <circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-flolim/20" />
                        {/* 40% 차오르는 링 (2 * Math.PI * 46 = 289.02) */}
                        <circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray="289.02" strokeDashoffset={289.02 * (1 - (iotSavePercent / 100))} className="text-flolim transition-all duration-1000 ease-out" strokeLinecap="round" />
                      </svg>
                      <div className="text-center relative z-10">
                        <p className="text-flolim font-black text-2xl md:text-4xl leading-none">{iotSavePercent}%</p>
                        <p className="text-flolim/70 text-[9px] md:text-xs font-bold mt-1">절감율</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ★ 보조 카드: LED 교체 추가 절감 */}
              <div className="relative bg-gradient-to-br from-blue-900/30 to-blue-900/5 border-2 border-blue-500/40 rounded-3xl p-7 md:p-10 mb-6 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
                {/* 배경 광원 */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-500 text-white text-[10px] md:text-xs font-black px-3 py-1 rounded-full">LED 교체</span>
                      <span className="text-blue-400 font-black text-sm md:text-base">추가 절감</span>
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm font-light mb-2">초고효율 스마트 하드웨어로 교체 시 추가로</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-blue-400 font-black text-4xl md:text-6xl drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
                        {formatNum(ledSave / 12)}
                      </span>
                      <span className="text-blue-400/80 font-bold text-base md:text-xl">원 / 월</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-2">연간 <strong className="text-blue-400 font-medium text-sm mx-1">{formatNum(ledSave)}</strong> 원 절감</p>
                  </div>

                  {/* 우측 퍼센트 도넛 효과 (SVG) */}
                  <div className="flex flex-col items-center justify-center shrink-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                        <circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-blue-500/20" />
                        <circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray="289.02" strokeDashoffset={289.02 * (1 - (ledSavePercent / 100))} className="text-blue-400 transition-all duration-1000 ease-out" strokeLinecap="round" />
                      </svg>
                      <div className="text-center relative z-10">
                        <p className="text-blue-400 font-black text-2xl md:text-4xl leading-none">{ledSavePercent}%</p>
                        <p className="text-blue-400/70 text-[9px] md:text-xs font-bold mt-1">절감율</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 합산 결과 구분선 + 총계 */}
              <div className="flex items-center gap-3 my-6 px-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                <span className="text-slate-500 text-xs font-bold tracking-widest">IoT + LED 솔루션 합산</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
              </div>

              {/* 월간/연간 합산 수치 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 text-center shadow-inner">
                  <p className="text-slate-400 text-xs md:text-sm font-bold tracking-wider mb-2">월간 총 절감액</p>
                  <div className="flex items-baseline justify-center gap-1.5">
                    <p className="text-white font-black text-2xl md:text-4xl">{formatNum(savingMonth)}</p>
                    <p className="text-slate-400 text-sm font-medium">원 / 월</p>
                  </div>
                </div>
                <div className="bg-slate-900/60 border border-flolim/30 rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(24,169,198,0.1)]">
                  <p className="text-flolim/80 text-xs md:text-sm font-bold tracking-wider mb-2">연간 총 절감액</p>
                  <div className="flex items-baseline justify-center gap-1.5">
                    <p className="text-flolim font-black text-2xl md:text-4xl drop-shadow-md">{formatNum(totalSave)}</p>
                    <p className="text-flolim/70 text-sm font-medium">원 / 년</p>
                  </div>
                </div>
              </div>

              {/* 연간 수익 배너 */}
              <div className="bg-[#050b14] border border-flolim/30 rounded-2xl p-6 md:p-8 text-center shadow-inner relative overflow-hidden mb-8">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 md:w-2 bg-flolim shadow-[0_0_15px_rgba(24,169,198,1)]"></div>
                <h3 className="text-sm md:text-lg text-slate-300 mb-2 font-light break-keep">초기 투자비 0원으로 즉시 구축하고, 상환 완료 후에는</h3>
                <p className="text-xl md:text-3xl font-light text-white break-keep">
                  연간 <strong className="text-flolim font-black text-2xl md:text-4xl mx-1 md:mx-2 whitespace-nowrap">{formatNum(totalSave)} 원</strong>의 확정 수익 달성!
                </p>
              </div>

              <div className="flex justify-center">
                <button onClick={handleReset} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors underline underline-offset-4 flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  조건 변경하여 다시 계산하기
                </button>
              </div>
            </div>
          )}
        </section>

        {/* 하단 문의 유도 배너 */}
        <section className="bg-gradient-to-br from-[#050b14] to-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-flolim/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-flolim/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black text-white mb-2">실제 현장 견적이 궁금하신가요?</h2>
            <p className="text-slate-400 font-light text-sm break-keep">
              지금 바로 우리 현장에 딱 맞는 정확한 무료 방문 컨설팅을 받아보세요.
            </p>
          </div>
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link to="/support/contact" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-flolim hover:bg-cyan-400 active:scale-95 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300">
              도입 상담 문의하기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
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