import React, { useState } from "react";
import { Link } from "react-router-dom";

const SmartLedIntro = () => {
  // --- 상태 관리 ---
  const [power, setPower] = useState(true); 
  const [brightness, setBrightness] = useState(100); 
  const [activeMode, setActiveMode] = useState("manual"); // manual, schedule, eco

  // --- 제어 핸들러 ---
  const handleModeChange = (mode) => {
    setActiveMode(mode);
    setPower(true); 
    if (mode === "eco") setBrightness(60); 
    if (mode === "schedule") setBrightness(30); 
    if (mode === "manual") setBrightness(100); 
  };

  const handleBrightnessChange = (e) => {
    setActiveMode("manual"); 
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
    if (nextPower && brightness === 0) {
      setBrightness(100);
      setActiveMode("manual");
    }
  };

  const brightLayerOpacity = power ? brightness / 100 : 0;

  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      {/* 상단 타이틀 영역 */}
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 스마트 LED 전등 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">시스템 개요</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">스마트 LED 전등 제어 시스템</h1>
        </div>
      </div>
      
      {/* 본문 영역 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        
        {/* 좌측 LNB (사이드바) */}
        <aside className="w-full md:w-[280px] flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">스마트 LED 전등 제어 시스템</h2>
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
            스마트 LED 전등 제어 시스템 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Overview</span>
          </h2>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>

            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              <strong className="text-lg text-slate-800 block mb-3">끊기지 않는 연결, 샐 틈 없는 보안의 스마트 조명 제어</strong>
              플로림(FLOLIM)의 스마트 LED 전등 제어 시스템은 최신 사물인터넷(IoT) 기술에 현장 전용 서버(On-Premise)를 결합하여, 실내외 조명을 가장 안전하고 확실하게 관리하는 솔루션입니다.
              <br/><br/>
              외부 인터넷이 끊기면 조명 제어까지 멈추거나 해킹에 노출될 수 있는 기존 클라우드 방식의 불안함을 완벽히 해결했습니다. 건물 내부에 독립적인 자체 서버를 구축하여, 어떤 비상 상황에서도 조명이 꺼지지 않는 <b>100% 무중단 제어</b>를 실현합니다. 외부와 철저히 차단된 강력한 보안망을 갖춰 공공기관, 대형 빌딩, 보안 시설에 최적화된 환경을 제공합니다.
            </p>

            {/* =========================================
                🔥 대시보드 시뮬레이터 UI 시작
            ========================================= */}
            <div className="flex flex-col lg:flex-row gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-14 shadow-sm">
              
              {/* 1. 이미지 시뮬레이션 영역 (좌측) */}
              <div className="relative flex-1 aspect-video rounded-xl overflow-hidden shadow-inner bg-black border border-slate-300">
                
                {/* [Layer 1: 완전 소등] 항상 바닥에 깔려있는 어두운 이미지 */}
                <div className="absolute inset-0 w-full h-full bg-black">
                  <img 
                    src="/images/SmartLedIntro_Off.jpg" 
                    className="w-full h-full object-cover absolute inset-0" 
                    alt="사무실 소등 상태" 
                  />
                </div>
                
                {/* [Layer 2: 점등 & 디밍] 투명도가 변하는 100% 밝은 이미지 */}
                <div 
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-out"
                  style={{ opacity: brightLayerOpacity }}
                >
                  <img 
                    src="/images/SmartLedIntro_On.jpg" 
                    className="w-full h-full object-cover absolute inset-0" 
                    alt="사무실 점등 상태" 
                  />
                </div>

                {/* 🔥 스케줄 모드 활성화 시 표시되는 UI 뱃지 */}
                {activeMode === "schedule" && power && (
                  <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2 bg-indigo-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-400 shadow-lg animate-fade-in-up">
                    <span className="text-indigo-300 text-lg">⏰</span>
                    <span className="text-white text-sm font-bold tracking-wide">야간 스케줄 유지 (조도 30%)</span>
                  </div>
                )}

                {/* 🔥 에코 모드 활성화 시 표시되는 UI 뱃지 (추가됨) */}
                {activeMode === "eco" && power && (
                  <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2 bg-green-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400 shadow-lg animate-fade-in-up">
                    <span className="text-green-300 text-lg">🌱</span>
                    <span className="text-white text-sm font-bold tracking-wide">에코 절전 모드 (조도 60%)</span>
                  </div>
                )}
              </div>

              {/* 2. IoT 컨트롤 패널 영역 (우측) */}
              <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col justify-between z-10">
                
                {/* 패널 헤더 (상태 표시) */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <h4 className="font-bold text-slate-800 text-lg tracking-tight">로컬 관제 패널</h4>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1.5 ${power ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                      <span className={`block w-2 h-2 rounded-full ${power ? 'bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]' : 'bg-slate-400'}`}></span>
                      {power ? 'Online' : 'Offline'}
                    </span>
                  </div>

                  {/* 제어 버튼 1: 전원 ON/OFF */}
                  <button 
                    onClick={handlePowerToggle}
                    className={`w-full py-3.5 rounded-xl font-bold transition-all flex justify-center items-center gap-2 mb-6 shadow-sm
                      ${power 
                        ? 'bg-slate-800 text-white hover:bg-slate-700' 
                        : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-[#1eb4c8] hover:text-[#1eb4c8]'
                      }
                    `}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {power ? "시스템 전원 끄기" : "시스템 전원 켜기"}
                  </button>

                  {/* 제어 버튼 2: 수동 디밍 조절 */}
                  <div className="mb-8">
                    <div className="flex justify-between items-end text-sm font-bold text-slate-600 mb-3">
                      <span>밝기 디밍 제어</span>
                      <span className="text-[#1eb4c8] text-lg bg-cyan-50 px-2 py-0.5 rounded">
                        {power ? brightness : 0}%
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="0" max="100" 
                      value={power ? brightness : 0} 
                      onChange={handleBrightnessChange}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1eb4c8] hover:accent-cyan-400 transition-all"
                    />
                  </div>
                </div>

                {/* 스마트 환경 모드 (스케줄 / 에코) */}
                <div>
                  <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Smart Mode</p>
                  <div className="grid grid-cols-2 gap-3">
                    {/* 제어 버튼 3: 스케줄 모드 */}
                    <button 
                      onClick={() => handleModeChange("schedule")}
                      className={`py-3 px-2 text-sm font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1
                        ${activeMode === "schedule" && power
                          ? 'bg-indigo-50 border-indigo-400 text-indigo-600' 
                          : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'} 
                      `}
                    >
                      <span className="text-xl">⏰</span>
                      스케줄(30%)
                    </button>
                    {/* 제어 버튼 4: 에코 모드 */}
                    <button 
                      onClick={() => handleModeChange("eco")}
                      className={`py-3 px-2 text-sm font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1
                        ${activeMode === "eco" && power
                          ? 'bg-green-50 border-green-500 text-green-600' 
                          : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'}
                      `}
                    >
                      <span className="text-xl">🌱</span>
                      에코(60%)
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
            {/* =========================================
                대시보드 시뮬레이터 UI 끝
            ========================================= */}
            
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Key Benefits</h3>
            <ul className="space-y-5 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">통신 장애에도 끄떡없는 100% 무중단 제어</b>
                  외부 인터넷이 끊기거나 통신사 장애가 발생해도 걱정 없습니다. 현장에 설치된 단독 서버가 정해진 스케줄과 센서에 따라 독립적으로 작동하여, 언제 어떤 상황에서도 안정적으로 조명을 제어합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">해킹과 데이터 유출을 원천 차단하는 강력한 보안</b>
                  모든 데이터와 제어 권한을 외부 클라우드가 아닌 내부의 독립된 보안망(폐쇄망)에 안전하게 저장합니다. 외부의 해킹이나 정보 유출 위험을 100% 차단하여 보안이 생명인 주요 시설에 가장 적합합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">어떤 기기와도 자유롭게 연결되는 차세대 표준(Matter)</b>
                  스마트 기기 국제 표준인 '매터(Matter)' 프로토콜을 적용했습니다. 특정 브랜드나 제조사에 얽매일 필요 없이, 다양한 센서와 스마트 조명 기기를 자유롭게 연결하고 확장할 수 있어 관리가 훨씬 유연해집니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">스스로 환경을 읽고 에너지를 아끼는 똑똑한 센서 연동</b>
                  공간에 사람이 있는지(움직임 감지), 창문으로 자연 빛이 얼마나 들어오는지(밝기 감지)를 센서가 실시간 파악합니다. 상황에 맞춰 스스로 조명의 밝기를 조절(디밍)하여 불필요한 전력 낭비를 획기적으로 줄여줍니다.
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SmartLedIntro;