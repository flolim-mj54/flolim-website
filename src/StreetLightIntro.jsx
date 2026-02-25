import React, { useState } from "react";
import { Link } from "react-router-dom";

const StreetLightIntro = () => {
  // --- 상태 관리 ---
  const [power, setPower] = useState(true); 
  const [brightness, setBrightness] = useState(70); // 초기 밝기를 일몰(70%)로 설정
  const [activeMode, setActiveMode] = useState("sunset"); // manual, sunset, midnight
  const [isFailure, setIsFailure] = useState(false); 
  
  // 고장 발생 직전의 상태를 기억하기 위한 상태 추가
  const [prevMode, setPrevMode] = useState("sunset");
  const [prevBrightness, setPrevBrightness] = useState(70);

  // --- 제어 핸들러 ---
  const handleModeChange = (mode) => {
    setActiveMode(mode);
    setPower(true);
    setIsFailure(false); 

    if (mode === "sunset") setBrightness(70); // 일몰: 현실적으로 70% 조도로 점등
    if (mode === "midnight") setBrightness(40); // 심야 절전: 40% 조도로 점등
  };

  const handleBrightnessChange = (e) => {
    setActiveMode("manual");
    setIsFailure(false); 
    const val = parseInt(e.target.value, 10);
    setBrightness(val);
    
    if (val > 0) {
      setPower(true); 
    } else {
      setPower(false); 
    }
  };

  const handlePowerToggle = () => {
    const nextPower = !power;
    setPower(nextPower);
    setIsFailure(false); 
    // 전원을 켤 때 이전 밝기가 0이었다면 수동 100%로 켜짐
    if (nextPower && brightness === 0) {
      setBrightness(100);
      setActiveMode("manual");
    }
  };

  // 고장 발생 테스트 핸들러
  const handleFailureTest = () => {
    if (!isFailure) {
      // 고장 직전의 상태를 백업
      setPrevMode(activeMode);
      setPrevBrightness(brightness);
      
      setIsFailure(true);
      setPower(true); // 이미지가 보이도록 전원 강제 ON
      setBrightness(100); // 고장 이미지가 100% 점등 기반이므로 100%로 세팅
      setActiveMode("failure");
    }
  };

  // 시스템 복구 핸들러 (0%가 아닌 이전 상태로 완벽 복구)
  const handleRecovery = () => {
    setIsFailure(false);
    setPower(true);
    setBrightness(prevBrightness); // 백업해둔 밝기로 복귀
    setActiveMode(prevMode); // 백업해둔 모드로 복귀
  };

  // --- 이미지 레이어 투명도 계산 ---
  const brightLayerOpacity = power && !isFailure ? brightness / 100 : 0;
  const failureLayerOpacity = isFailure ? 1 : 0;

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
        
        {/* 좌측 LNB (사이드바 - 예전 LED 버전 상태로 복구) */}
        <aside className="w-full md:w-[280px] flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">스마트 가로등 제어 시스템</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <Link to="/led-intro" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] tracking-tight bg-cyan-50 text-[#1eb4c8] font-bold whitespace-nowrap">
                  시스템 개요 <svg className="w-4 h-4 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              <li className="border-b border-slate-200">
                <Link to="/esco" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  ESCO 연계 사업
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/led-solution" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  스마트 LED 솔루션
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
                
                {/* [Layer 1: Base - 소등] */}
                <div className="absolute inset-0 w-full h-full bg-black">
                  <img 
                    src="/images/streetlightintro_off.jpg" 
                    className="w-full h-full object-cover absolute inset-0" 
                    alt="가로등 소등 상태" 
                  />
                </div>
                
                {/* [Layer 2: 점등 & 디밍] */}
                <div 
                  className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-out"
                  style={{ opacity: brightLayerOpacity }}
                >
                  <img 
                    src="/images/streetlightintro_on.jpg" 
                    className="w-full h-full object-cover absolute inset-0" 
                    alt="가로등 점등 상태" 
                  />
                </div>

                {/* [Layer 3: 고장 발생 연출] */}
                <div 
                  className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-out
                    ${isFailure ? 'z-20' : 'pointer-events-none'}`}
                  style={{ opacity: failureLayerOpacity }}
                >
                  <img 
                    src="/images/streetlightintro_failure.jpg" 
                    className="w-full h-full object-cover absolute inset-0" 
                    alt="가로등 고장 연출" 
                  />
                  
                  {/* 🔥 고장 위치를 알려주는 시각적 핀 마커 (대략적인 3번째 가로등 위치 우측) */}
                  {isFailure && (
                    <div className="absolute top-[35%] right-[22%] flex flex-col items-center">
                      <div className="relative">
                        <span className="text-3xl filter drop-shadow-md animate-bounce inline-block">📍</span>
                        <div className="absolute -inset-2 bg-red-500 rounded-full opacity-30 animate-ping"></div>
                      </div>
                      <span className="bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full mt-1 shadow-lg border border-red-400">
                        고장 발생 위치
                      </span>
                    </div>
                  )}

                  {/* 고장 시 화면에 뜨는 중앙 경고 UI */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-red-900/90 backdrop-blur-sm px-6 py-4 rounded-xl border border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.5)] flex items-center gap-4">
                      <span className="text-4xl animate-pulse">🚨</span>
                      <div className="text-left">
                        <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-1">System Alert</p>
                        <p className="text-white text-lg font-bold">2구역-C열 가로등 램프 고장!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 일몰 모드 뱃지 */}
                {activeMode === "sunset" && power && !isFailure && (
                  <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2 bg-orange-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400 shadow-lg transition-all duration-500">
                    <span className="text-orange-300 text-lg">🌆</span>
                    <span className="text-white text-sm font-bold tracking-wide">초저녁 일몰 모드 <span className="text-orange-200 ml-1">(조도 70%)</span></span>
                  </div>
                )}

                {/* 심야 절전 모드 뱃지 */}
                {activeMode === "midnight" && power && !isFailure && (
                  <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2 bg-indigo-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-400 shadow-lg transition-all duration-500">
                    <span className="text-indigo-300 text-lg">🌃</span>
                    <span className="text-white text-sm font-bold tracking-wide">심야 절전 모드 <span className="text-yellow-400 ml-1">⚡ 전력 60% 절감 중</span></span>
                  </div>
                )}
              </div>

              {/* 2. IoT 컨트롤 패널 영역 (우측) */}
              <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col justify-between z-10">
                
                {/* 패널 헤더 (환경 및 통신 상태) */}
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
                      <span className="font-medium text-slate-300">환경 연동</span>
                      <span className="font-bold">
                        {activeMode === 'midnight' ? '🌙 심야 (23:45)' : activeMode === 'sunset' ? '🌆 일몰 (18:30)' : '⚙️ 수동 제어'}
                      </span>
                    </div>
                  </div>

                  {/* 수동 디밍 조절 */}
                  <div className="mb-8">
                    <div className="flex justify-between items-end text-sm font-bold text-slate-600 mb-3">
                      <span>밝기 디밍 제어</span>
                      <span className="text-[#1eb4c8] text-lg bg-cyan-50 px-2 py-0.5 rounded">
                        {power && !isFailure ? brightness : 0}%
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="0" max="100" 
                      value={power && !isFailure ? brightness : 0} 
                      onChange={handleBrightnessChange}
                      disabled={isFailure} // 고장 상태일때는 슬라이더 잠금
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1eb4c8] disabled:opacity-50 disabled:cursor-not-allowed hover:accent-cyan-400 transition-all"
                    />
                  </div>
                </div>

                {/* 스마트 환경 모드 (일몰 / 심야) */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Smart Scheduling</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleModeChange("sunset")}
                      disabled={isFailure} // 고장 상태일때 모드 변경 불가
                      className={`py-3 px-2 text-sm font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1
                        ${activeMode === "sunset" && power && !isFailure
                          ? 'bg-orange-50 border-orange-400 text-orange-600' 
                          : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'} 
                        disabled:opacity-50 disabled:cursor-not-allowed
                      `}
                    >
                      <span className="text-xl">🌆</span>
                      일몰(70%)
                    </button>
                    <button 
                      onClick={() => handleModeChange("midnight")}
                      disabled={isFailure}
                      className={`py-3 px-2 text-sm font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1
                        ${activeMode === "midnight" && power && !isFailure
                          ? 'bg-indigo-50 border-indigo-400 text-indigo-600' 
                          : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'}
                        disabled:opacity-50 disabled:cursor-not-allowed
                      `}
                    >
                      <span className="text-xl">🌃</span>
                      심야(40%)
                    </button>
                  </div>
                </div>

                {/* 선제적 유지보수 (고장 테스트) */}
                <div className="pt-5 border-t border-slate-100">
                  <button 
                    onClick={isFailure ? handleRecovery : handleFailureTest}
                    className={`w-full py-3.5 rounded-xl font-bold transition-all flex justify-center items-center gap-2 shadow-sm
                      ${isFailure 
                        ? 'bg-slate-800 text-white hover:bg-slate-700' 
                        : 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 hover:border-red-300'
                      }
                    `}
                  >
                    {isFailure ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        시스템 복구 및 정상화
                      </>
                    ) : (
                      <>
                        <span className="text-lg">🚨</span>
                        고장 발생 시뮬레이션
                      </>
                    )}
                  </button>
                  {/* 고장 상태일 때 우측 패널 하단에 뜨는 SMS 알림 연출 */}
                  {isFailure && (
                    <div className="mt-3 p-3 bg-red-100 border-l-4 border-red-500 rounded text-xs text-red-800 font-medium">
                      ✓ 담당자에게 고장 위치 SMS가 즉각 발송되었습니다.
                    </div>
                  )}
                </div>
                
              </div>
            </div>
            {/* =========================================
                대시보드 시뮬레이터 UI 끝
            ========================================= */}
            
          </div>
          
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