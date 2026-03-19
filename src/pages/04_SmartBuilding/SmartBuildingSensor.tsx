import { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const SmartBuildingSensor = () => {
  const [carPos, setCarPos] = useState<number>(-20);
  const [sunlight, setSunlight] = useState<number>(0);
  const [isInternetConnected, setIsInternetConnected] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCarPos((prev) => (prev > 120 ? -20 : prev + 1));
    }, 50);
    return () => window.clearInterval(interval);
  }, []);

  const dimmingMiddle = Math.round(Math.max(50, 100 - sunlight / 2));
  const dimmingWindow = Math.round(Math.max(10, 100 - sunlight));

  const hardwares = [
    {
      id: "01",
      title: "독립형 현장 전용 서버",
      desc: "건물의 방재실이나 통신실에 설치되어, 클라우드 연결 없이 독립적으로 조명 네트워크 전체를 통제하는 핵심 두뇌입니다.",
      features: [
        {
          title: "안전한 데이터 보관",
          text: "외부로 데이터를 보내지 않고 스케줄과 전력을 완벽히 보호합니다.",
        },
        {
          title: "강력한 폐쇄망 보안",
          text: "외부망과 단절된 폐쇄망으로 운영되어 해킹을 원천 차단합니다.",
        },
      ],
    },
    {
      id: "02",
      title: "무선 스마트 컨트롤러",
      desc: "개별 조명 기구에 장착되어 로컬 서버의 명령을 즉각 실행하고, 공간의 주변 환경을 스스로 감지하는 똑똑한 단말기입니다.",
      features: [
        {
          title: "기기 확장성 향상",
          text: "국제 표준 무선 모듈을 탑재하여 호환성이 뛰어납니다.",
        },
        {
          title: "정밀 밝기 제어",
          text: "환경에 맞춰 세밀한 디밍을 제공하여 에너지를 절약합니다.",
        },
      ],
    },
  ];

  return (
    <div className="pb-10 overflow-x-hidden bg-[#020617] min-h-screen text-slate-200">
      <style>
        {`
          @keyframes movePacket {
            0% { left: 0%; opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            5% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            95% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { left: 100%; opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          }
          /* 2배 빠른 2.5s 속도 */
          .packet-main { animation: movePacket 2.5s infinite linear; }

          /* 흰 공(packet-main)에서 뿜어져 나오도록 동기화된 유출 애니메이션 */
          @keyframes popLeak1 {
            0%, 15% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            40% { opacity: 0; transform: translate(15px, -45px) scale(0.9); }
            100% { opacity: 0; transform: translate(15px, -45px) scale(0.9); }
          }
          @keyframes popLeak2 {
            0%, 35% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            40% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            60% { opacity: 0; transform: translate(25px, 45px) scale(0.9); }
            100% { opacity: 0; transform: translate(25px, 45px) scale(0.9); }
          }
          @keyframes popLeak3 {
            0%, 55% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            60% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            80% { opacity: 0; transform: translate(-15px, -35px) scale(0.9); }
            100% { opacity: 0; transform: translate(-15px, -35px) scale(0.9); }
          }
          @keyframes popLeak4 {
            0%, 75% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            95% { opacity: 0; transform: translate(-10px, 45px) scale(0.9); }
            100% { opacity: 0; transform: translate(-10px, 45px) scale(0.9); }
          }
          .leak-1 { animation: popLeak1 2.5s infinite linear; }
          .leak-2 { animation: popLeak2 2.5s infinite linear; }
          .leak-3 { animation: popLeak3 2.5s infinite linear; }
          .leak-4 { animation: popLeak4 2.5s infinite linear; }
        `}
      </style>

      <PageHeader
        category="On-Premise Control & Sensor"
        title="IoT 센서 자동 제어"
        subtitle={
          <>
            복잡한 통신선 없이 간편하게, 딜레이 없이 즉각적으로.
            <br />
            <strong className="text-flolim font-bold">
              공간을 완벽히 통제하는 지능형 센서망
            </strong>
            을 체험해 보세요.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10 md:mt-16">
        {/* 1. 대형 2D 도면 시뮬레이터 래퍼 박스 */}
        <section className="mb-20 md:mb-24 animate-fade-in">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

            <div className="text-center mb-8 md:mb-12 relative z-10">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 break-keep">
                센서 기반 도면 정밀 제어망
              </h2>
              <p className="text-slate-400 text-xs md:text-sm break-keep">
                주차장 동체 추적과 오피스 구역별 자연광 연동을 통해{" "}
                <strong className="text-white font-medium">
                  플로림만의 정교한 구역 제어 기술
                </strong>
                을 확인하세요.
              </p>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {/* 상단: 지하 1층 주차장 */}
              <div className="w-full h-48 md:h-56 bg-[#050b14] rounded-2xl md:rounded-3xl border border-slate-700 relative overflow-hidden shadow-inner flex flex-col justify-center">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(24,169,198,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(24,169,198,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="absolute top-3 md:top-4 left-3 md:left-6 text-[9px] md:text-xs font-bold text-flolim tracking-widest z-30 flex items-center gap-1.5 md:gap-2 bg-slate-900/80 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-slate-800 shadow-md whitespace-nowrap">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-flolim rounded-full animate-ping"></span>
                  <span className="hidden sm:inline">
                    지하 1층 주차장 (레이더/모션 감지 동체 추적)
                  </span>
                  <span className="sm:hidden">지하 1층 (모션 감지 디밍)</span>
                </div>

                <div className="w-full h-20 md:h-24 border-y-2 border-dashed border-slate-600/50 relative flex items-center mt-4">
                  <div
                    className="absolute w-10 md:w-12 h-5 md:h-6 bg-cyan-400 rounded-md shadow-[0_0_20px_#22d3ee] z-20 flex items-center justify-center"
                    style={{
                      left: `${carPos}%`,
                      transform: "translateX(-50%)",
                      transition: carPos === -20 ? "none" : "left 50ms linear",
                    }}
                  >
                    <div className="w-3 md:w-4 h-2 md:h-2.5 bg-cyan-100/50 rounded-sm"></div>
                  </div>
                </div>

                <div className="absolute top-0 w-full h-full flex justify-around px-4 md:px-10 pointer-events-none z-10">
                  {[10, 30, 50, 70, 90].map((pos) => {
                    const isOn = Math.abs(carPos - pos) < 25;
                    return (
                      <div
                        key={pos}
                        className="h-full w-1/5 relative flex items-center justify-center"
                      >
                        <div
                          className={`absolute top-6 md:top-8 w-10 md:w-16 h-1.5 md:h-2 border border-slate-600 rounded-sm transition-all duration-500 ${isOn ? "bg-white shadow-[0_0_20px_#ffffff]" : "bg-slate-700"}`}
                        ></div>
                        <div
                          className={`absolute top-8 md:top-10 w-24 md:w-40 h-24 md:h-40 rounded-full transition-opacity duration-700 mix-blend-screen blur-xl md:blur-2xl ${isOn ? "bg-white/20 opacity-100" : "bg-slate-500/10 opacity-30"}`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 하단: 지상 2층 오피스 */}
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-2/3 h-56 bg-[#050b14] rounded-2xl md:rounded-3xl border border-slate-700 relative overflow-hidden shadow-inner flex flex-col justify-center">
                  <div className="absolute top-3 md:top-4 left-3 md:left-6 text-[9px] md:text-xs font-bold text-amber-400 tracking-widest flex items-center gap-1.5 md:gap-2 z-30 bg-slate-900/80 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-slate-800 shadow-md whitespace-nowrap">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-400 rounded-full animate-pulse"></span>
                    <span className="hidden sm:inline">
                      지상 2층 사무실 (자연광 연동 스마트 디밍)
                    </span>
                    <span className="sm:hidden">지상 2층 (자연광 연동)</span>
                  </div>

                  <div className="absolute right-0 top-0 bottom-0 w-3 md:w-4 border-l-[3px] md:border-l-4 border-slate-600 bg-slate-800 z-20 shadow-[-10px_0_20px_rgba(0,0,0,0.5)]"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 md:w-4 h-1/2 bg-blue-200/10 border-l-[3px] md:border-l-4 border-blue-300/30 z-20"></div>

                  <div
                    className="absolute inset-0 z-0 pointer-events-none mix-blend-screen transition-opacity duration-1000 ease-out"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(251,191,36,0.25) 0%, rgba(251,191,36,0.05) 70%, transparent 100%)",
                      opacity: sunlight / 100,
                    }}
                  ></div>

                  <div className="flex-1 flex justify-center items-center px-2 md:px-8 z-10 pt-10 pb-2">
                    <div className="grid grid-cols-3 gap-2 md:gap-10 w-full">
                      <div className="flex flex-col items-center">
                        <div className="w-10 md:w-20 h-2 md:h-3 bg-white rounded-md shadow-[0_0_15px_#fff] mb-3 md:mb-4"></div>
                        <div className="w-10 md:w-20 h-2 md:h-3 bg-white rounded-md shadow-[0_0_15px_#fff] mb-3 md:mb-4"></div>
                        <span className="text-[9px] md:text-xs text-white font-bold bg-slate-900/90 backdrop-blur border border-slate-700 px-2 md:px-3 py-1 md:py-1.5 rounded-md shadow-sm mb-1 text-center whitespace-nowrap">
                          내측 1열
                          <br className="sm:hidden" />
                          (100%)
                        </span>
                        <span className="hidden sm:block text-[9px] md:text-xs font-bold text-slate-500 mt-1">
                          100% 점등 유지
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 md:w-20 h-2 md:h-3 bg-white rounded-md transition-all duration-500 mb-3 md:mb-4"
                          style={{
                            opacity: Math.max(0.5, 1 - sunlight / 200),
                            boxShadow: `0 0 ${20 * Math.max(0.5, 1 - sunlight / 200)}px #fff`,
                          }}
                        ></div>
                        <div
                          className="w-10 md:w-20 h-2 md:h-3 bg-white rounded-md transition-all duration-500 mb-3 md:mb-4"
                          style={{
                            opacity: Math.max(0.5, 1 - sunlight / 200),
                            boxShadow: `0 0 ${20 * Math.max(0.5, 1 - sunlight / 200)}px #fff`,
                          }}
                        ></div>
                        <span
                          className={`text-[9px] md:text-xs font-bold bg-slate-900/90 backdrop-blur border px-2 md:px-3 py-1 md:py-1.5 rounded-md shadow-sm transition-colors duration-500 mb-1 text-center whitespace-nowrap ${sunlight > 0 ? "text-amber-400 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.15)]" : "text-slate-400 border-slate-700"}`}
                        >
                          중간 2열
                          <br className="sm:hidden" />({dimmingMiddle}%)
                        </span>
                        <span
                          className={`hidden sm:block text-[9px] md:text-xs font-bold text-cyan-400 mt-1 transition-opacity duration-300 ${sunlight > 0 ? "opacity-100" : "opacity-0"}`}
                        >
                          -{Math.round(sunlight / 2)}% 절감
                        </span>
                      </div>

                      <div className="flex flex-col items-center pr-2 md:pr-4">
                        <div
                          className="w-10 md:w-20 h-2 md:h-3 bg-white rounded-md transition-all duration-500 mb-3 md:mb-4"
                          style={{
                            opacity: Math.max(0.1, 1 - sunlight / 100),
                            boxShadow: `0 0 ${20 * Math.max(0.1, 1 - sunlight / 100)}px #fff`,
                          }}
                        ></div>
                        <div
                          className="w-10 md:w-20 h-2 md:h-3 bg-white rounded-md transition-all duration-500 mb-3 md:mb-4"
                          style={{
                            opacity: Math.max(0.1, 1 - sunlight / 100),
                            boxShadow: `0 0 ${20 * Math.max(0.1, 1 - sunlight / 100)}px #fff`,
                          }}
                        ></div>
                        <span
                          className={`text-[9px] md:text-xs font-bold bg-slate-900/90 backdrop-blur border px-2 md:px-3 py-1 md:py-1.5 rounded-md shadow-sm transition-colors duration-500 mb-1 text-center whitespace-nowrap ${sunlight > 0 ? "text-amber-400 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.25)]" : "text-slate-400 border-slate-700"}`}
                        >
                          창측 3열
                          <br className="sm:hidden" />({dimmingWindow}%)
                        </span>
                        <span
                          className={`hidden sm:block text-[9px] md:text-xs font-bold text-cyan-400 mt-1 transition-opacity duration-300 ${sunlight > 0 ? "opacity-100" : "opacity-0"}`}
                        >
                          -{sunlight}% 절감
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/3 h-48 md:h-56 bg-[#050b14] rounded-2xl md:rounded-3xl border border-slate-700 px-6 py-6 md:py-8 flex flex-col justify-center items-center shadow-inner relative overflow-hidden">
                  <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center border border-amber-400/30 shadow-sm mb-3">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-sm md:text-lg text-white font-bold mb-2 md:mb-3">
                      자연광 유입량 조절
                    </h4>
                    <div className="text-2xl md:text-3xl font-black text-amber-400 mb-3 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                      {sunlight}%
                    </div>

                    <div className="w-full max-w-[200px] md:max-w-full relative px-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sunlight}
                        onChange={(e) => setSunlight(Number(e.target.value))}
                        className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-amber-400/50 transition-all border border-slate-600 shadow-inner"
                      />
                      <div className="flex justify-between w-full mt-2 text-[10px] md:text-xs text-slate-500 font-medium">
                        <span>흐림(야간)</span>
                        <span>맑음(오후)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. On-Premise 무중단 제어 시뮬레이터 (가용성 강조) */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center relative z-10">
            {/* 좌측: 가용성 텍스트 */}
            <div className="lg:w-1/2 w-full">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                외부 인터넷이 끊겨도
                <br />
                <span className="text-flolim">조명은 멈추지 않습니다</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 font-light text-xs md:text-base break-keep">
                플로림의 스마트 LED 제어 솔루션은 외부 클라우드에 의존하지 않고,
                건물 내부에 직접 설치하는{" "}
                <strong className="font-bold text-white">
                  현장 전용 서버(On-Premise)
                </strong>
                를 중심으로 작동합니다. 외부망 장애가 발생하더라도, 로컬 서버와
                조명 간의 내부 무선망은 독립적으로 유지되어 365일 완벽하게
                제어됩니다.
              </p>
              <div className="bg-[#050b14] border-l-4 border-flolim p-4 md:p-5 rounded-r-xl shadow-inner">
                <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed break-keep">
                  천장을 뜯고 통신선을 깔아야 하는 복잡한 배선 공사 없이
                  무선으로 구축되므로, 기존 건물에도{" "}
                  <strong className="text-flolim">
                    영업 방해 없이 빠르게 설치
                  </strong>
                  할 수 있습니다.
                </p>
              </div>
            </div>

            {/* 우측: 수직 배치 레이아웃 (클라우드 ➔ 서버 ➔ 구역 분기) */}
            <div className="lg:w-1/2 w-full flex flex-col bg-[#050b14] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700 relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>

              {/* 클라우드 ~ 로컬 서버 수직 연결 */}
              <div className="flex flex-col items-center w-full mb-2 relative z-10 px-4">
                {/* 1) 외부 클라우드 */}
                <div
                  className={`flex flex-col items-center transition-opacity duration-500 ${isInternetConnected ? "opacity-100" : "opacity-30"}`}
                >
                  <div
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 transition-colors ${isInternetConnected ? "bg-slate-800 text-flolim border border-flolim/50 shadow-[0_0_15px_rgba(24,169,198,0.3)]" : "bg-slate-800 text-slate-600 border border-slate-700"}`}
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-[9px] md:text-xs font-bold text-slate-400 tracking-wider whitespace-nowrap">
                    외부 클라우드
                  </span>
                </div>

                {/* 2) 세로 점선 라인 */}
                <div className="flex flex-col items-center justify-center py-2 relative h-12 md:h-16 w-full">
                  <div
                    className={`w-1 h-full border-l-2 border-dashed transition-colors duration-500 ${isInternetConnected ? "border-flolim/50" : "border-red-500"}`}
                  ></div>
                  {isInternetConnected && (
                    <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-flolim rounded-full animate-ping shadow-[0_0_10px_rgba(24,169,198,1)]"></div>
                  )}
                  {!isInternetConnected && (
                    <span className="absolute top-1/2 -translate-y-1/2 text-red-500 text-xl md:text-2xl font-black bg-[#050b14] py-1">
                      ✕
                    </span>
                  )}
                </div>

                {/* 3) 현장 로컬 서버 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center text-flolim mb-2 border border-flolim/50 shadow-[0_0_15px_rgba(24,169,198,0.3)] relative">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      ></path>
                    </svg>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-flolim rounded-full border border-[#050b14] animate-pulse"></div>
                  </div>
                  <span className="text-[9px] md:text-xs font-bold text-flolim tracking-wider whitespace-nowrap">
                    현장 로컬서버
                  </span>
                </div>
              </div>

              {/* 중앙에서 매끄럽게 갈라지는 T자형 점선 */}
              <div className="w-full relative h-10 md:h-12 z-10 mb-3 px-4 md:px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[18px] border-l-2 border-dashed border-flolim/60"></div>
                <div className="absolute top-[18px] left-[16.6%] right-[16.6%] border-t-2 border-dashed border-flolim/60"></div>
                <div className="absolute top-[18px] left-[16.6%] w-px h-[15px] border-l-2 border-dashed border-flolim/60"></div>
                <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-px h-[15px] border-l-2 border-dashed border-flolim/60"></div>
                <div className="absolute top-[18px] right-[16.6%] w-px h-[15px] border-r-2 border-dashed border-flolim/60"></div>
              </div>

              {/* 하단: 3개 구역 박스 */}
              <div className="w-full flex justify-around bg-slate-900/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border-[3px] md:border-[4px] border-flolim relative z-10 shadow-[0_0_20px_rgba(24,169,198,0.15)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#050b14] px-3 py-0.5 border border-flolim rounded-full flex items-center gap-1.5 shadow-md whitespace-nowrap">
                  <svg
                    className="w-3 h-3 text-flolim"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span className="text-[10px] font-bold text-flolim tracking-wider">
                    가용성 유지 (무중단)
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 text-flolim mb-2 shadow-[0_0_15px_rgba(24,169,198,0.2)] rounded-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 16a5 5 0 116 0 3 3 0 00-6 0zM10 20h4M12 22v-2"
                    ></path>
                  </svg>
                  <span className="text-[8px] md:text-[10px] text-slate-400 font-bold bg-slate-800 px-2 md:px-3 py-1 rounded-lg border border-slate-700 whitespace-nowrap">
                    A구역
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 text-flolim mb-2 shadow-[0_0_15px_rgba(24,169,198,0.2)] rounded-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 16a5 5 0 116 0 3 3 0 00-6 0zM10 20h4M12 22v-2"
                    ></path>
                  </svg>
                  <span className="text-[8px] md:text-[10px] text-slate-400 font-bold bg-slate-800 px-2 md:px-3 py-1 rounded-lg border border-slate-700 whitespace-nowrap">
                    주차장
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 text-flolim mb-2 shadow-[0_0_15px_rgba(24,169,198,0.2)] rounded-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 16a5 5 0 116 0 3 3 0 00-6 0zM10 20h4M12 22v-2"
                    ></path>
                  </svg>
                  <span className="text-[8px] md:text-[10px] text-slate-400 font-bold bg-slate-800 px-2 md:px-3 py-1 rounded-lg border border-slate-700 whitespace-nowrap">
                    복도
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsInternetConnected(!isInternetConnected)}
                className={`mt-8 w-full md:w-auto px-4 md:px-6 py-3 rounded-xl md:rounded-full font-bold text-xs md:text-sm transition-all shadow-md relative z-20 flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap ${isInternetConnected ? "bg-slate-800 text-red-400 border border-red-500/50 hover:bg-slate-700" : "bg-flolim text-slate-900 hover:bg-cyan-400 animate-pulse"}`}
              >
                {isInternetConnected ? (
                  <>
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      ></path>
                    </svg>
                    인터넷 강제 종료 (시뮬레이션)
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      ></path>
                    </svg>
                    외부 인터넷 복구하기
                  </>
                )}
              </button>

              <p
                className={`mt-4 text-[10px] md:text-[11px] font-bold relative z-10 text-center break-keep ${isInternetConnected ? "text-slate-500" : "text-flolim"}`}
              >
                {isInternetConnected
                  ? "외부 클라우드 통신 원활"
                  : "경고: 망 장애 발생! 내부 무선망으로 100% 정상 제어 중"}
              </p>
            </div>
          </div>
        </section>

        {/* 3. 클라우드 데이터 유출 vs 온프레미스 보안 비교 (기밀성, 무결성 집중) */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center relative z-10">
            {/* 좌측: 기밀성, 무결성 텍스트 (텍스트량 위쪽 박스와 맞춤) */}
            <div className="lg:w-1/2 w-full">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                보안의 시작과 끝은 완벽한 통제,
                <br />
                <span className="text-flolim">
                  데이터는 오직 건물 안에만 머뭅니다
                </span>
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6 font-light text-xs md:text-base break-keep">
                개방형 클라우드 대신, 플로림은 데이터가 외부로 나가지 않는{" "}
                <strong className="font-bold text-white">
                  현장 전용 서버(On-Premise)
                </strong>{" "}
                방식으로 작동합니다. 완벽히 분리된 폐쇄망을 통해 통신 탈취를
                원천 차단하여 기밀성을 지키고, 데이터 위변조를 막아 무결성을
                보장합니다.
              </p>

              <div className="bg-[#050b14] border-l-4 border-flolim p-4 md:p-5 rounded-r-xl shadow-inner">
                <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed break-keep">
                  별도의 값비싼 네트워크 보안 솔루션을 구축할 필요가 없습니다.{" "}
                  <strong className="text-flolim font-bold">
                    플로림 시스템 도입만으로 가장 안전하고 독립적인 데이터 보호
                    환경
                  </strong>
                  이 완성됩니다.
                </p>
              </div>
            </div>

            {/* 우측: 유출 애니메이션 비교 영역 (박스 2개 분리 형태 복원) */}
            <div className="lg:w-1/2 w-full flex flex-col gap-6 lg:gap-8">
              {/* 상단 박스: 타사 클라우드망 (데이터 유출) */}
              <div className="bg-[#050b14] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-red-900/30 shadow-inner overflow-visible relative">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm md:text-base font-bold text-slate-400 flex items-center gap-1.5">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        ></path>
                      </svg>
                      타사 클라우드망
                    </h3>
                    <span className="bg-red-900/30 text-red-500 border border-red-500/50 text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1.5 rounded-md font-bold animate-pulse shadow-sm">
                      취약
                    </span>
                  </div>

                  <div className="relative w-full h-20 md:h-24 flex items-center px-2 md:px-4">
                    <div className="absolute left-6 w-[30%] h-[2px] bg-slate-500 top-1/2 -translate-y-1/2 z-0"></div>
                    <div className="absolute left-[30%] right-6 h-[2px] border-t-2 border-dashed border-red-500/50 top-1/2 -translate-y-1/2 z-0"></div>

                    <div className="relative w-full h-full">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-slate-800 border border-slate-500 rounded flex flex-col items-center justify-center text-[10px] md:text-xs text-white z-20 shadow-md">
                        빌딩
                      </div>

                      <div className="absolute left-[30%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-red-900/20 border border-red-500/50 rounded-full flex flex-col items-center justify-center text-[9px] md:text-[10px] text-red-400 z-20 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                        외부망
                      </div>

                      <div className="absolute left-[100%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-slate-800 border border-slate-500 rounded-lg flex flex-col items-center justify-center text-[10px] md:text-xs text-white z-20 shadow-md">
                        Cloud
                      </div>

                      {/* 흰색 공이 이동하면서 데이터를 직접 떨어뜨리는 애니메이션 구조 */}
                      <div className="absolute top-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full packet-main z-10 shadow-[0_0_12px_white]">
                        <div className="absolute top-1/2 left-1/2 leak-1 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
                          <span className="text-[9px] md:text-[10px] font-mono font-bold text-red-500">
                            admin
                          </span>
                        </div>
                        <div className="absolute top-1/2 left-1/2 leak-2 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
                          <span className="text-[9px] md:text-[10px] font-mono font-bold text-red-500">
                            pw:***
                          </span>
                        </div>
                        <div className="absolute top-1/2 left-1/2 leak-3 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
                          <span className="text-[9px] md:text-[10px] font-mono font-bold text-red-500">
                            sniff
                          </span>
                        </div>
                        <div className="absolute top-1/2 left-1/2 leak-4 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
                          <span className="text-[9px] md:text-[10px] font-mono font-bold text-red-500">{`{data}`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 하단 박스: 플로림 온프레미스 (안전 전송) */}
              <div className="bg-[#050b14] p-6 md:p-8 rounded-2xl md:rounded-3xl border-[3px] md:border-[4px] border-flolim shadow-[0_0_30px_rgba(24,169,198,0.15)] overflow-visible relative group">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-flolim/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm md:text-base font-bold text-white flex items-center gap-1.5">
                      <svg
                        className="w-5 h-5 text-flolim"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      플로림 전용 폐쇄망
                    </h3>
                    <span className="bg-cyan-900/30 text-cyan-300 border border-cyan-400/50 text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1.5 rounded-md font-bold shadow-[0_0_10px_rgba(24,169,198,0.3)]">
                      기밀성, 무결성 강화
                    </span>
                  </div>

                  <div className="relative w-full h-20 md:h-24 flex items-center px-2 md:px-4 z-10">
                    <div className="absolute left-6 right-6 h-[3px] md:h-[4px] bg-flolim top-1/2 -translate-y-1/2 z-0 shadow-[0_0_15px_rgba(24,169,198,0.8)]"></div>

                    <div className="relative w-full h-full">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-slate-900 border-[3px] border-flolim rounded-full flex flex-col items-center justify-center text-[10px] md:text-xs font-bold text-flolim z-20 shadow-md">
                        <svg
                          className="w-5 h-5 mb-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          ></path>
                        </svg>
                        센서
                      </div>

                      <div className="absolute left-[100%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-slate-900 border-[3px] border-flolim rounded-xl flex flex-col items-center justify-center text-[10px] md:text-xs font-bold text-flolim z-20 shadow-[0_0_20px_rgba(24,169,198,0.5)]">
                        <svg
                          className="w-5 h-5 mb-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                          ></path>
                        </svg>
                        서버
                      </div>

                      <div className="absolute top-1/2 w-4 h-4 md:w-5 md:h-5 bg-white rounded-full packet-main z-10 shadow-[0_0_20px_white] border-2 border-flolim flex items-center justify-center">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 스마트 실내 조명 핵심 하드웨어 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="text-center mb-10 md:mb-12 relative z-10">
            <h2 className="text-xl md:text-3xl font-bold text-white break-keep">
              스마트 실내 조명 핵심 하드웨어
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
            {hardwares.map((hw) => (
              <div
                key={hw.id}
                className="bg-[#050b14] p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] active:border-flolim transition-all relative overflow-hidden group cursor-default"
              >
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center text-lg md:text-xl font-black border border-slate-600 shrink-0">
                      {hw.id}
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white break-keep">
                      {hw.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-6 font-light leading-relaxed text-xs md:text-sm break-keep">
                    {hw.desc}
                  </p>
                  <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                    {hw.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start bg-slate-900/80 p-3 md:p-4 rounded-xl border border-slate-700 break-keep"
                      >
                        <svg
                          className="w-4 h-4 text-flolim mr-2 md:mr-3 mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <div>
                          <strong className="block text-white mb-0.5">
                            {f.title}
                          </strong>
                          {f.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* 아키텍처 흐름도 */}
          <div className="relative z-10 pt-10 md:pt-16 mt-8 border-t border-slate-800 text-center">
            <h2 className="text-sm md:text-lg font-bold text-slate-400 mb-6 md:mb-8 tracking-widest uppercase">
              시스템 구성 아키텍처
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 font-bold text-xs md:text-base">
              <div className="bg-[#050b14] w-full md:w-auto py-3 md:py-5 px-6 rounded-xl md:rounded-2xl border border-slate-700 shadow-inner flex flex-col items-center">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-slate-500 mb-1 md:mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  ></path>
                </svg>
                <span className="text-white whitespace-nowrap">
                  현장 로컬 서버
                </span>
              </div>
              <div className="text-flolim rotate-90 md:rotate-0 text-xl md:text-2xl animate-pulse">
                ⇌
              </div>
              <div className="bg-[#050b14] w-full md:w-auto py-3 md:py-5 px-6 rounded-xl md:rounded-2xl border border-slate-700 shadow-inner flex flex-col items-center">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-slate-500 mb-1 md:mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  ></path>
                </svg>
                <span className="text-white whitespace-nowrap">
                  내부 무선망
                </span>
              </div>
              <div className="text-flolim rotate-90 md:rotate-0 text-xl md:text-2xl animate-pulse">
                ⇌
              </div>
              <div className="bg-[#050b14] w-full md:w-auto py-3 md:py-5 px-6 rounded-xl md:rounded-2xl border border-flolim/50 shadow-[0_0_15px_rgba(24,169,198,0.15)] flex flex-col items-center text-flolim">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 16a5 5 0 116 0 3 3 0 00-6 0zM10 20h4M12 22v-2"
                  ></path>
                </svg>
                <span className="whitespace-nowrap">스마트 조명/센서</span>
              </div>
            </div>
          </div>
        </section>

        <BottomNav
          prev={{
            label: "이전 페이지",
            title: "스마트 빌딩 개요",
            path: "/smart-building/intro",
          }}
          next={{
            label: "다음 카테고리",
            title: "통합 관제 대시보드",
            path: "/platform/dashboard",
          }}
        />
      </div>
    </div>
  );
};

export default SmartBuildingSensor;
