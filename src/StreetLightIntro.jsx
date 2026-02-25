import React, { useState } from "react";
import { Link } from "react-router-dom";

const StreetLightIntro = () => {
  // --- 상태 관리 ---
  const [power, setPower] = useState(true);
  const [brightness, setBrightness] = useState(70); // 초기 밝기: 일몰 기준 70%
  const [activeMode, setActiveMode] = useState("sunset"); // sunset, sunrise, failure, manual
  
  // 고장 직전 상태 기억용
  const [prevMode, setPrevMode] = useState("sunset");
  const [prevBrightness, setPrevBrightness] = useState(70);

  // --- 제어 핸들러 ---
  const handleModeChange = (mode) => {
    setActiveMode(mode);
    setPower(true);
    
    if (mode === "sunset") setBrightness(70); // 일몰: 70%
    if (mode === "sunrise") setBrightness(20); // 일출: 20%
  };

  const handleBrightnessChange = (e) => {
    if (activeMode === "failure") return; // 고장 모드에서는 밝기 조절 불가
    setActiveMode("manual");
    const val = parseInt(e.target.value, 10);
    setBrightness(val);
    setPower(val > 0);
  };

  const handlePowerToggle = () => {
    if (activeMode === "failure") return; // 고장 모드에서는 전원 토글 불가
    const nextPower = !power;
    setPower(nextPower);
    if (nextPower && brightness === 0) {
      setBrightness(70); // 켤 때 기본값은 일몰 밝기
      setActiveMode("sunset");
    }
  };

  // 고장 시뮬레이션 핸들러 (뷰 전환)
  const handleFailureTest = () => {
    if (activeMode !== "failure") {
      setPrevMode(activeMode === "manual" ? "sunset" : activeMode); // 수동일 경우 기본 복귀는 일몰로
      setPrevBrightness(brightness);
      setActiveMode("failure");
      setPower(true);
      setBrightness(100); 
    }
  };

  // 복구 핸들러 (원래 뷰로 복귀)
  const handleRecovery = () => {
    setActiveMode(prevMode);
    setBrightness(prevBrightness);
    setPower(true);
  };

  // --- 이미지 투명도 계산 (일상 뷰 용) ---
  const getNormalOpacity = () => {
    if (!power) return 0;
    return brightness / 100;
  };

  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      {/* 상단 타이틀 영역 */}
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 스마트 가로등 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">시스템 개요</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">스마트 가로등 제어 시스템</h1>
        </div>
      </div>
      
      {/* 본문 영역 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        
        {/* 좌측 LNB (사이드바) - App.tsx 라우터 주소에 맞게 완벽 수정됨 */}
        <aside className="w-full md:w-[280px] flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">통신망 솔루션</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <Link to="/streetlight-intro" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] tracking-tight bg-cyan-50 text-[#1eb4c8] font-bold whitespace-nowrap">
                  시스템 개요 <svg className="w-4 h-4 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              <li className="border-b border-slate-200">
                <Link to="/lora" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  LoRa-Mesh 솔루션
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/nbiot" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  NB-IoT 솔루션
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        
        {/* 우측 메인 콘텐츠 */}
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            스마트 가로등 제어 시스템 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Overview</span>
          </h2>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>

            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              <strong className="text-lg text-slate-800 block mb-3">낭비는 줄이고 안전은 더하는 스마트 가로등 제어</strong>
              기존에 단순히 시간을 맞춰 켜고 끄던 방식을 넘어, 꼭 필요한 곳에만 똑똑하게 빛을 채우는 사물인터넷(IoT) 기반의 지능형 관제 솔루션입니다.
              <br/><br/>
              플로림(FLOLIM)은 현장의 지형, 규모, 예산 등을 꼼꼼히 분석합니다. 통신비 부담이 없는 <b>LoRa-Mesh(자가망)</b>부터 전국 어디서나 끊김 없는 <b>NB-IoT(상용망)</b>까지 현장에 최적화된 맞춤형 통신망을 설계합니다. 획기적으로 전력 낭비를 줄이고 거리의 안전을 빈틈없이 지키며 스마트시티의 기반을 완성해 보세요.
            </p>

            {/* =========================================
                🔥 대시보드 시뮬레이터 UI 시작
            ========================================= */}
            <div className="flex flex-col lg:flex-row gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-14 shadow-sm">
              
              {/* 1. 이미지 시뮬레이션 영역 (좌측) */}
              <div className="relative flex-1 aspect-video rounded-xl overflow-hidden shadow-inner bg-black border border-slate-300">
                
                {/* ----------------------------------------------------
                    View 1: 일상 제어 (일출, 일몰, 수동 디밍) 
                    - 고장 모드가 아닐 때만 보입니다.
                ----------------------------------------------------- */}
                <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out z-10
                  ${activeMode !== "failure" ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  
                  {/* Base: 완전 소등 상태 이미지 */}
                  <img src="/images/streetlightintro_off.jpg" className="w-full h-full object-cover absolute inset-0" alt="가로등 소등 상태" />
                  
                  {/* Overlay: 점등 이미지 (opacity로 밝기 디밍 조절) */}
                  <img 
                    src="/images/streetlightintro_on.jpg" 
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-out" 
                    style={{ opacity: getNormalOpacity() }}
                    alt="가로등 점등/디밍 상태" 
                  />

                  {/* 모드별 상태 뱃지 */}
                  {power && (activeMode === "sunset" || activeMode === "sunrise") && (
                    <div className={`absolute bottom-6 left-6 z-30 flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border shadow-lg transition-all duration-500
                      ${activeMode === "sunset" ? 'bg-orange-900/80 border-orange-400' : 'bg-indigo-900/80 border-indigo-400'}`}>
                      <span className="text-2xl">{activeMode === "sunset" ? "🌆" : "🌅"}</span>
                      <span className="text-white text-sm font-bold tracking-wide">
                        {activeMode === "sunset" ? "일몰 모드" : "일출 모드"} 
                        <span className={activeMode === "sunset" ? "text-orange-200" : "text-indigo-200"}> (조도 {brightness}%)</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* ----------------------------------------------------
                    View 2: 항공 관제 뷰 (고장 시뮬레이션 전용) 
                    - 고장 모드일 때만 페이드인 됩니다.
                ----------------------------------------------------- */}
                <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out z-20
                  ${activeMode === "failure" ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  
                  {/* Base 드론 뷰 (정상) */}
                  <img 
                    src="/images/streetlightintro_normal.jpg" 
                    className="w-full h-full object-cover absolute inset-0" 
                    alt="항공 관제 정상 뷰" 
                  />

                  {/* Overlay 드론 뷰 (고장 핀 포함) */}
                  <img 
                    src="/images/streetlightintro_failure.jpg" 
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 delay-300 ease-out
                      ${activeMode === "failure" ? 'opacity-100' : 'opacity-0'}`}
                    alt="고장 발생 시뮬레이션" 
                  />
                  
                  {/* 고장 경고 알림 UI (우측 하단) */}
                  <div className="absolute bottom-[10%] right-[5%] flex items-center justify-center pointer-events-none animate-pulse z-30">
                    <div className="bg-red-900/90 backdrop-blur-sm px-5 py-3 rounded-xl border border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.6)] flex items-center gap-3">
                      <span className="text-3xl">🚨</span>
                      <div className="text-left">
                        <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-0.5">Failure Alert</p>
                        <p className="text-white text-sm font-bold leading-tight">구역 A<br/>가로등 #4, #5, #6 꺼짐</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* 2. IoT 컨트롤 패널 영역 (우측) */}
              <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col justify-between z-10">
                
                {/* 패널 헤더 */}
                <div>
                  <div className="bg-slate-800 text-white text-xs rounded-lg p-3 mb-5 shadow-inner">
                    <div className="flex justify-between items-center mb-1.5 border-b border-slate-600 pb-1.5">
                      <span className="font-medium text-slate-300">통신망</span>
                      <span className="font-bold flex items-center gap-1.5 text-[#1eb4c8]">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#1eb4c8] animate-pulse"></span>
                        NB-IoT (수신양호)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-300">현재 모드</span>
                      <span className={`font-bold ${activeMode === 'failure' ? 'text-red-400' : ''}`}>
                        {activeMode === 'sunset' ? '🌆 일몰 (70%)' : 
                         activeMode === 'sunrise' ? '🌅 일출 (20%)' :
                         activeMode === 'failure' ? '🚨 고장 발생' : '⚙️ 수동 제어'}
                      </span>
                    </div>
                  </div>

                  {/* 밝기 디밍 제어 */}
                  <div className="mb-8">
                    <div className="flex justify-between items-end text-sm font-bold text-slate-600 mb-3">
                      <span>밝기 디밍 제어</span>
                      <span className={`text-lg px-2 py-0.5 rounded ${activeMode === 'failure' ? 'text-slate-400 bg-slate-100' : 'text-[#1eb4c8] bg-cyan-50'}`}>
                        {power ? brightness : 0}%
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="0" max="100" 
                      value={power ? brightness : 0} 
                      onChange={handleBrightnessChange}
                      disabled={activeMode === "failure"}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1eb4c8] disabled:opacity-50 disabled:cursor-not-allowed hover:accent-cyan-400 transition-all"
                    />
                  </div>
                </div>

                {/* 환경 모드 선택 */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Environment Mode</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleModeChange("sunset")}
                      disabled={activeMode === "failure"}
                      className={`py-3 px-2 text-sm font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1
                        ${activeMode === "sunset" && power
                          ? 'bg-orange-50 border-orange-400 text-orange-600' 
                          : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'} 
                        disabled:opacity-50 disabled:cursor-not-allowed
                      `}
                    >
                      <span className="text-xl">🌆</span>
                      일몰(70%)
                    </button>
                    <button 
                      onClick={() => handleModeChange("sunrise")}
                      disabled={activeMode === "failure"}
                      className={`py-3 px-2 text-sm font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1
                        ${activeMode === "sunrise" && power
                          ? 'bg-indigo-50 border-indigo-400 text-indigo-600' 
                          : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'}
                        disabled:opacity-50 disabled:cursor-not-allowed
                      `}
                    >
                      <span className="text-xl">🌅</span>
                      일출(20%)
                    </button>
                  </div>
                </div>

                {/* 고장 시뮬레이션 버튼 */}
                <div className="pt-5 border-t border-slate-100">
                  <button 
                    onClick={activeMode === "failure" ? handleRecovery : handleFailureTest}
                    className={`w-full py-3.5 rounded-xl font-bold transition-all flex justify-center items-center gap-2 shadow-sm
                      ${activeMode === "failure"
                        ? 'bg-slate-800 text-white hover:bg-slate-700 animate-pulse' 
                        : 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 hover:border-red-300'
                      }
                    `}
                  >
                    {activeMode === "failure" ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        시스템 복구 (이전 상태로)
                      </>
                    ) : (
                      <>
                        <span className="text-lg">🚨</span>
                        고장 발생 시뮬레이션
                      </>
                    )}
                  </button>
                </div>
                
              </div>
            </div>
            {/* =========================================
                대시보드 시뮬레이터 UI 끝
            ========================================= */}
            
          </div>
          
          {/* Key Benefits 영역 */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Key Benefits</h3>
            <ul className="space-y-6 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">불필요한 전력 낭비를 막는 에너지 및 예산 절감</b>
                  세밀한 밝기 조절(디밍) 기술과 함께 일출·일몰 시간, 날씨 등 주변 환경 데이터를 연동합니다. 상황에 맞춘 스마트한 조명 스케줄링으로 에너지를 아끼고 예산을 획기적으로 절감합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">거리의 안전을 지키는 선제적 유지보수</b>
                  누전, 정전, 램프 고장 등 현장에 이상이 발생하면 관리자에게 즉각 알림(팝업/SMS)을 발송합니다. 갑작스럽게 어두워진 거리로 인해 시민들이 불편이나 위험을 겪기 전에 신속하게 문제를 해결할 수 있습니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">현장에 맞춰 선택하는 유연한 통신망 구축</b>
                  설치 장소의 특성에 따라 최적의 방식을 선택할 수 있습니다. 매월 통신비가 없는 경제적인 'LoRa 자가망'과 사각지대 없이 촘촘하게 연결되는 'NB-IoT 전국망'을 필요에 따라 혼합(하이브리드)하여 완벽한 인프라를 구축합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">언제 어디서나 간편하게 제어하는 웹/모바일 플랫폼</b>
                  PC가 있는 관제 센터는 물론, 스마트폰과 태블릿 등 모바일 기기에서도 완벽하게 작동합니다. 직관적인 통합 대시보드를 통해 시공간의 제약 없이 언제 어디서나 조명을 효율적으로 관리할 수 있습니다.
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StreetLightIntro;