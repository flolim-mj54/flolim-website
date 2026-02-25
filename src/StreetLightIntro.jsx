import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- 이미지 경로 상수 정의 (유지보수 용이성) ---
const IMG_PATH = "/images/";
const IMG_SUNSET_BASE = `${IMG_PATH}streetlightintro_sunset.jpg`;
const IMG_SUNSET_ON = `${IMG_PATH}streetlightintro_sunset_on.jpg`;
const IMG_SUNRISE_BASE = `${IMG_PATH}streetlightintro_sunrise.jpg`;
const IMG_SUNRISE_ON = `${IMG_PATH}streetlightintro_sunrise_on.jpg`;
const IMG_DRONE_NORMAL = `${IMG_PATH}streetlightintro_normal.jpg`;
const IMG_DRONE_FAILURE = `${IMG_PATH}streetlightintro_failure.jpg`;

const StreetLightIntro = () => {
  // --- 상태 관리 ---
  const [power, setPower] = useState(true);
  const [brightness, setBrightness] = useState(70); // 초기 밝기
  const [activeMode, setActiveMode] = useState("sunset"); // sunset, sunrise, failure, manual
  const [isRecovered, setIsRecovered] = useState(false); // 복구 완료 상태

  // --- 제어 핸들러 ---
  const handleModeChange = (mode) => {
    setActiveMode(mode);
    setPower(true);
    setIsRecovered(false);
    
    // 모드별 초기 밝기 설정
    if (mode === "sunset") setBrightness(70);
    if (mode === "sunrise") setBrightness(20);
  };

  const handleBrightnessChange = (e) => {
    if (activeMode === "failure") return;
    setActiveMode("manual"); // 수동 조작 시 모드 변경
    setIsRecovered(false);
    const val = parseInt(e.target.value, 10);
    setBrightness(val);
    setPower(val > 0); // 밝기 0이면 전원 OFF 처리
  };

  // 고장 시뮬레이션 모드 진입
  const handleFailureTest = () => {
    if (activeMode !== "failure") {
      setActiveMode("failure");
      setPower(true);
      setBrightness(100); 
      setIsRecovered(false);
    }
  };

  // 시스템 복구 처리
  const handleRecovery = () => {
    setIsRecovered(true);
    setActiveMode("manual");
    setBrightness(100);
    setPower(true);
  };

  // --- 🔥 핵심: 조명 레이어 투명도 계산 함수 ---
  const getLightingOpacity = (targetMode) => {
    if (!power) return 0; // 전원 OFF시 무조건 투명도 0

    // 현재 활성화된 모드와 계산하려는 대상 모드가 다르면 0 (다른 모드의 조명은 숨김)
    // 단, 수동(manual) 모드일 때는 일몰 배경을 기본으로 함
    const currentBaseMode = activeMode === 'sunrise' ? 'sunrise' : 'sunset';
    if (targetMode !== currentBaseMode) return 0;

    const baseOpacity = brightness / 100;
    
    // 요청사항 반영: 일출 모드는 주변이 밝으므로 조명 최대 밝기를 낮게 제한 (예: 30%)
    if (targetMode === "sunrise") {
      return baseOpacity * 0.3; 
    }
    
    // 일몰 모드는 0~100% 그대로 반영
    return baseOpacity;
  };

  // 현재 보여줄 배경 모드 결정 (수동 모드 포함)
  const currentBackgroundMode = activeMode === 'sunrise' ? 'sunrise' : 'sunset';

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
        
        {/* 좌측 LNB (사이드바) */}
        <aside className="w-full md:w-[280px] flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">통신망 솔루션</h2>
            </div>
            <ul className="flex flex-col">
              <li>
                <Link to="/streetlight-intro" className="flex items-center justify-between px-4 py-4 text-[15px] font-bold bg-cyan-50 text-[#1eb4c8] border-b border-slate-200">
                  시스템 개요 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              <li><Link to="/lora" className="block px-4 py-4 text-[15px] text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 border-b border-slate-200 transition-all">LoRa-Mesh 솔루션</Link></li>
              <li><Link to="/nbiot" className="block px-4 py-4 text-[15px] text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">NB-IoT 솔루션</Link></li>
            </ul>
          </div>
        </aside>
        
        {/* 우측 메인 콘텐츠 */}
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 mb-8 pb-4 border-b-2 border-slate-200">
            스마트 가로등 제어 시스템 <span className="text-lg text-slate-400 font-normal ml-2">Overview</span>
          </h2>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed text-[15px] mb-8">
              <strong className="text-lg text-slate-800 block mb-3">낭비는 줄이고 안전은 더하는 스마트 가로등 제어</strong>
              기존 방식을 넘어, 사물인터넷(IoT) 기반으로 꼭 필요한 곳에만 똑똑하게 빛을 채우는 지능형 관제 솔루션입니다.
            </p>

            {/* =========================================
                🔥 대시보드 시뮬레이터 UI
            ========================================= */}
            <div className="flex flex-col lg:flex-row gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-14 shadow-sm">
              
              {/* 1. 이미지 시뮬레이션 영역 (좌측) */}
              <div className="relative flex-1 aspect-video rounded-xl overflow-hidden shadow-inner bg-black border border-slate-300">
                
                {/* ----------------------------------------------------
                    VIEW 1: 일상 제어 뷰 (일몰/일출 겹치기 구현)
                    - 고장 모드가 아니고, 복구 완료 상태가 아닐 때 표시
                ----------------------------------------------------- */}
                <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out z-10
                  ${activeMode !== "failure" && !isRecovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  
                  {/* === A. 일몰(Sunset) 그룹 === */}
                  {/* 현재 모드가 일출이 아닐 때 보여짐 (일몰, 수동 등) */}
                  <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${currentBackgroundMode === 'sunset' ? 'opacity-100' : 'opacity-0'}`}>
                    {/* 베이스: 가로등 꺼진 배경 */}
                    <img src={IMG_SUNSET_BASE} className="absolute inset-0 w-full h-full object-cover" alt="일몰 배경(OFF)" />
                    {/* 오버레이: 가로등 켜진 조명 레이어 (투명도 조절) */}
                    <img src={IMG_SUNSET_ON} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-linear"
                         style={{ opacity: getLightingOpacity('sunset') }} alt="일몰 조명(ON)" />
                  </div>

                  {/* === B. 일출(Sunrise) 그룹 === */}
                  {/* 현재 모드가 일출일 때 보여짐 */}
                  <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${currentBackgroundMode === 'sunrise' ? 'opacity-100' : 'opacity-0'}`}>
                    {/* 베이스: 가로등 꺼진 배경 */}
                    <img src={IMG_SUNRISE_BASE} className="absolute inset-0 w-full h-full object-cover" alt="일출 배경(OFF)" />
                    {/* 오버레이: 가로등 켜진 조명 레이어 (투명도 조절 - 최대 밝기 제한 적용됨) */}
                    <img src={IMG_SUNRISE_ON} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-linear"
                         style={{ opacity: getLightingOpacity('sunrise') }} alt="일출 조명(ON)" />
                  </div>

                  {/* 모드 상태 뱃지 */}
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
                    VIEW 2: 고장 시뮬레이션 뷰 (항공 사진)
                ----------------------------------------------------- */}
                <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out z-20
                  ${activeMode === "failure" && !isRecovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <img src={IMG_DRONE_NORMAL} className="w-full h-full object-cover absolute inset-0" alt="정상 항공 뷰" />
                  <img src={IMG_DRONE_FAILURE} className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 delay-300
                      ${activeMode === "failure" ? 'opacity-100' : 'opacity-0'}`} alt="고장 표시 항공 뷰" />
                  <div className="absolute bottom-[10%] right-[5%] z-30 animate-pulse">
                    <div className="bg-red-900/90 backdrop-blur-sm px-5 py-3 rounded-xl border border-red-500 shadow-lg flex items-center gap-3">
                      <span className="text-3xl">🚨</span>
                      <div>
                        <p className="text-red-200 text-xs font-bold mb-0.5">고장 탐지</p>
                        <p className="text-white text-sm font-bold">구역 A<br/>가로등 #4, #5, #6 꺼짐</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ----------------------------------------------------
                    VIEW 3: 복구 완료 뷰
                ----------------------------------------------------- */}
                <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out z-30
                  ${isRecovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                   <img src={IMG_DRONE_NORMAL} className="w-full h-full object-cover absolute inset-0" alt="복구 완료 뷰" />
                  <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2 bg-green-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400 shadow-lg">
                    <span className="text-2xl">✅</span>
                    <span className="text-white text-sm font-bold">시스템 복구 완료 <span className="text-green-200">(정상 작동 중)</span></span>
                  </div>
                </div>

              </div>

              {/* 2. 컨트롤 패널 (우측) */}
              <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col justify-between z-10">
                <div>
                  <div className="bg-slate-800 text-white text-xs rounded-lg p-3 mb-5 shadow-inner">
                    <div className="flex justify-between items-center mb-2 border-b border-slate-600 pb-2">
                      <span className="font-medium text-slate-300">통신망 상태</span>
                      <span className="font-bold flex items-center gap-1.5 text-[#1eb4c8]">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#1eb4c8] animate-pulse"></span> NB-IoT (양호)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-300">현재 모드</span>
                      <span className={`font-bold ${activeMode === 'failure' ? 'text-red-400' : isRecovered ? 'text-green-400' : ''}`}>
                        {activeMode === 'sunset' ? '🌆 일몰 (자동)' : 
                         activeMode === 'sunrise' ? '🌅 일출 (자동)' :
                         activeMode === 'failure' ? '🚨 고장 발생' : 
                         isRecovered ? '✅ 정상 (복구됨)' : '⚙️ 수동 제어'}
                      </span>
                    </div>
                  </div>

                  {/* 밝기 제어 슬라이더 */}
                  <div className="mb-8">
                    <div className="flex justify-between items-end text-sm font-bold text-slate-600 mb-3">
                      <span>밝기 디밍 제어</span>
                      <span className={`text-lg px-2 py-0.5 rounded ${activeMode === 'failure' ? 'text-slate-400 bg-slate-100' : 'text-[#1eb4c8] bg-cyan-50'}`}>
                        {power ? brightness : 0}%
                      </span>
                    </div>
                    <input type="range" min="0" max="100" value={power ? brightness : 0} onChange={handleBrightnessChange} disabled={activeMode === "failure"}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1eb4c8] disabled:opacity-50 transition-all" />
                  </div>
                </div>

                {/* 환경 모드 버튼 */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-400 mb-3 uppercase">Environment Mode</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => handleModeChange("sunset")} disabled={activeMode === "failure"}
                      className={`py-3 px-2 text-sm font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${activeMode === "sunset" && power && !isRecovered ? 'bg-orange-50 border-orange-400 text-orange-600' : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50'} disabled:opacity-50`}>
                      <span className="text-xl">🌆</span> 일몰(70%)
                    </button>
                    <button onClick={() => handleModeChange("sunrise")} disabled={activeMode === "failure"}
                      className={`py-3 px-2 text-sm font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${activeMode === "sunrise" && power && !isRecovered ? 'bg-indigo-50 border-indigo-400 text-indigo-600' : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50'} disabled:opacity-50`}>
                      <span className="text-xl">🌅</span> 일출(20%)
                    </button>
                  </div>
                </div>

                {/* 고장/복구 버튼 */}
                <div className="pt-5 border-t border-slate-100">
                  <button onClick={activeMode === "failure" ? handleRecovery : handleFailureTest}
                    className={`w-full py-3.5 rounded-xl font-bold transition-all flex justify-center items-center gap-2 shadow-sm ${activeMode === "failure" ? 'bg-slate-800 text-white hover:bg-slate-700 animate-pulse' : 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100'}`}>
                    {activeMode === "failure" ? (<><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>시스템 복구 완료</>) : (<><span className="text-lg">🚨</span>고장 발생 시뮬레이션</>)}
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          {/* Key Benefits 영역 (생략 - 기존과 동일) */}
        </section>
      </div>
    </div>
  );
};

export default StreetLightIntro;