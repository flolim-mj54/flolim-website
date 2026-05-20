import { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const SmartBuildingSensor = () => {
  const [carPos, setCarPos] = useState<number>(-40);
  const [sunlight, setSunlight] = useState<number>(50);
  const [activeScene, setActiveScene] = useState<"work" | "pt" | "lunch">(
    "work",
  );
  const [isInternetConnected, setIsInternetConnected] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCarPos((prev) => (prev > 140 ? -40 : prev + 0.6));
    }, 20);
    return () => window.clearInterval(interval);
  }, []);

  const dimmingMiddle = Math.round(Math.max(45, 100 - sunlight / 2));
  const dimmingWindow = Math.round(Math.max(10, 100 - sunlight));

  const isLightOn = (pos: number) => {
    const diff = pos - carPos;
    return diff > -15 && diff < 35;
  };

  const getSceneOpacity = (index: number) => {
    if (activeScene === "pt") return index === 0 ? 0 : index === 1 ? 0.4 : 0.7;
    if (activeScene === "lunch") return 0.1;
    return 1;
  };

  return (
    <div className="pb-10 overflow-x-hidden bg-[#020617] min-h-screen text-slate-200">
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
            의 제어 로직을 실시간으로 확인해 보세요.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10 md:mt-16">
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none translate-x-1/4 -translate-y-1/4"></div>

          <div className="text-left mb-10 relative z-10 border-l-4 border-flolim pl-3">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              센서 기반 도면 정밀 제어 시스템
            </h2>
            <p className="text-slate-400 text-xs md:text-sm">
              현장에 적용되는 플로림의 3대 핵심 자동화 제어 로직을 직접 테스트할
              수 있습니다.
            </p>
          </div>

          <div className="space-y-10 relative z-10">
            <div className="bg-[#050b14] p-6 rounded-3xl border border-slate-800 shadow-inner flex flex-col">
              <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start mb-4 text-xs font-bold text-flolim tracking-widest shadow-md">
                <span className="w-1.5 h-1.5 bg-flolim rounded-full animate-ping"></span>
                <span>
                  시뮬레이션 01 : 지하 1층 주차장 (동체 추적 선제 디밍)
                </span>
              </div>
              <p className="text-slate-400 text-xs md:text-sm mb-6 font-light break-keep">
                차량이 진입하면 이동 방향을 예측하여 전방의 조명을{" "}
                <strong className="text-white">선제적으로 밝히고</strong>,
                지나간 구역은 에너지를 아끼기 위해 자동으로 10% 밝기로 낮춥니다.
              </p>

              <div className="w-full h-40 bg-[#020617] rounded-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-center px-4 md:px-10">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(24,169,198,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(24,169,198,0.15)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

                <div className="w-full h-16 border-y-2 border-dashed border-slate-700/50 relative flex items-center">
                  <div
                    className="absolute w-12 h-6 bg-cyan-400 rounded-md shadow-[0_0_20px_#22d3ee] z-20"
                    style={{
                      left: `${carPos}%`,
                      transform: "translateX(-50%)",
                      transition: carPos === -40 ? "none" : "left 0.02s linear",
                    }}
                  ></div>
                </div>

                <div className="absolute top-0 w-full h-full flex justify-around px-4 md:px-16 pointer-events-none left-0">
                  {[12, 31, 50, 69, 88].map((pos, idx) => {
                    const isOn = isLightOn(pos);
                    return (
                      <div
                        key={idx}
                        className="h-full w-1/5 flex flex-col items-center justify-start pt-6"
                      >
                        <div
                          className={`w-12 rounded-sm transition-all duration-300 ${isOn ? "h-[4px] bg-white shadow-[0_0_20px_#ffffff,0_0_40px_#18A9C6]" : "h-[1.5px] bg-slate-700 shadow-none"}`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#050b14] p-6 rounded-3xl border border-slate-800 shadow-inner flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start mb-4 text-xs font-bold text-amber-400 tracking-widest shadow-md">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
                    <span>시뮬레이션 02 : 지상 2층 오피스 (자연광 연동)</span>
                  </div>
                  <p className="text-slate-400 text-xs md:text-sm mb-6 font-light break-keep">
                    창가에서 들어오는 햇빛의 양을 실시간 측정하여, 창가 측
                    조명은 낮추고 내측 조명은 밝혀 사무실 전체 조도를 균일하게
                    유지합니다.
                  </p>
                </div>

                <div className="w-full bg-[#020617] rounded-xl border border-slate-800 p-6 flex items-center justify-around h-32 relative">
                  <div className="absolute right-3 top-3 text-[10px] text-slate-600 font-mono">
                    WINDOW ➔
                  </div>
                  {[
                    { label: "내측 1열", dim: 100 },
                    { label: "중간 2열", dim: dimmingMiddle },
                    { label: "창측 3열", dim: dimmingWindow },
                  ].map((col, i) => (
                    <div key={i} className="flex flex-col items-center z-10">
                      <div
                        className="w-10 md:w-14 h-2 bg-white rounded-md mb-2 transition-all duration-300"
                        style={{
                          opacity: col.dim / 100,
                          boxShadow: `0 0 ${15 * (col.dim / 100)}px #fff`,
                        }}
                      ></div>
                      <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                        {col.label} ({col.dim}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#050b14] p-6 rounded-3xl border border-slate-800 shadow-inner flex flex-col justify-center items-center">
                <h4 className="text-sm font-bold text-white mb-2">
                  외부 자연광 유입량
                </h4>
                <div className="text-3xl font-black text-amber-400 mb-6 font-mono">
                  {sunlight}%
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sunlight}
                  onChange={(e) => setSunlight(Number(e.target.value))}
                  className="w-full accent-amber-400 h-3 md:h-4 bg-slate-800 rounded-lg appearance-none cursor-pointer border border-slate-700"
                />
                <div className="flex justify-between w-full mt-3 text-[10px] text-slate-600 font-medium">
                  <span>흐림 (0%)</span>
                  <span>맑음 (100%)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#050b14] p-6 rounded-3xl border border-slate-800 shadow-inner">
                <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start mb-4 text-xs font-bold text-purple-400 tracking-widest shadow-md">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  <span>시뮬레이션 03 : 임원 회의실 (스마트 씬 제어)</span>
                </div>
                <p className="text-slate-400 text-xs md:text-sm mb-6 font-light break-keep">
                  사용 목적에 따라 여러 조명의 밝기를 한 번의 터치로 변경하여
                  상황에 맞는 최적의 환경(Scene)을 연출합니다.
                </p>

                <div className="w-full bg-[#020617] rounded-xl border border-slate-800 p-6 flex flex-col justify-center h-32 relative">
                  <div className="absolute left-4 top-3 text-[10px] text-slate-600 font-mono">
                    SCREEN ➔
                  </div>

                  {/* 💡 모바일 삐져나감 현상 수정: px/pl 패딩 반응형 조절 및 줄바꿈 허용 */}
                  <div className="flex justify-between md:justify-around items-center w-full z-10 px-1 md:px-0 md:pl-8 mt-4 md:mt-0">
                    {[
                      { label: "전방 스크린" },
                      { label: "중앙 테이블" },
                      { label: "후방 좌석" },
                    ].map((col, i) => {
                      const opacity = getSceneOpacity(i);
                      return (
                        <div
                          key={i}
                          className="flex flex-col items-center shrink-0"
                        >
                          <div
                            className="w-8 sm:w-10 md:w-12 h-1.5 md:h-2 rounded-md mb-2 transition-all duration-700"
                            style={{
                              backgroundColor:
                                opacity > 0 ? "#ffffff" : "#334155",
                              opacity: opacity > 0 ? opacity : 1,
                              boxShadow:
                                opacity > 0
                                  ? `0 0 15px rgba(255,255,255,${opacity})`
                                  : "none",
                            }}
                          ></div>
                          <span className="text-[9px] text-slate-500 text-center leading-snug">
                            <span className="block">{col.label}</span>
                            <span className="block">
                              ({Math.round(opacity * 100)}%)
                            </span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-[#050b14] p-6 rounded-3xl border border-slate-800 shadow-inner flex flex-col justify-center gap-3 w-full">
                <h4 className="text-[11px] md:text-xs font-bold text-slate-500 mb-1 text-center uppercase tracking-wider">
                  스마트 씬 콘솔
                </h4>
                <button
                  onClick={() => setActiveScene("work")}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${activeScene === "work" ? "border-flolim bg-flolim text-slate-900 shadow-[0_0_15px_rgba(24,169,198,0.3)]" : "border-slate-700 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-500"}`}
                >
                  업무 모드 (전체 100%)
                </button>
                <button
                  onClick={() => setActiveScene("pt")}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all break-keep ${activeScene === "pt" ? "border-flolim bg-flolim text-slate-900 shadow-[0_0_15px_rgba(24,169,198,0.3)]" : "border-slate-700 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-500"}`}
                >
                  PT 모드 (전방 소등 + 집중)
                </button>
                <button
                  onClick={() => setActiveScene("lunch")}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${activeScene === "lunch" ? "border-flolim bg-flolim text-slate-900 shadow-[0_0_15px_rgba(24,169,198,0.3)]" : "border-slate-700 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-500"}`}
                >
                  휴식 모드 (전체 10%)
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center relative z-10">
            <div className="lg:w-1/2 w-full">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                인터넷망이 차단되어도
                <br />
                <span className="text-flolim">
                  빌딩의 제어망은 멈추지 않습니다
                </span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 font-light text-xs md:text-base break-keep">
                클라우드에만 의존하는 일반 시스템과 달리, 플로림 인프라는 건물
                내부에{" "}
                <strong className="font-bold text-white">
                  현장 로컬 서버(On-Premise)
                </strong>
                를 구축합니다. 통신사 장애 시 즉시 제어권을 넘겨받아 365일
                무중단 가동됩니다.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
                <span className="text-[11px] md:text-xs text-slate-500 font-medium">
                  강제 단선 테스트 :
                </span>
                <button
                  onClick={() => setIsInternetConnected(!isInternetConnected)}
                  className={`px-6 py-2.5 rounded-full font-bold text-xs transition-all shadow-md w-full sm:w-auto ${isInternetConnected ? "bg-slate-800 text-red-400 border border-red-500/40 hover:bg-slate-700" : "bg-flolim text-slate-900 hover:bg-cyan-400"}`}
                >
                  {isInternetConnected
                    ? "인터넷 선로 강제 차단"
                    : "선로 정상 복구하기"}
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 text-center items-center justify-center relative overflow-hidden h-64 shadow-inner">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>

              <div className="relative z-10 flex flex-col items-center w-full">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 border transition-colors duration-500 ${isInternetConnected ? "bg-slate-800 border-flolim/50 text-flolim shadow-[0_0_15px_rgba(24,169,198,0.3)]" : "bg-red-950/30 border-red-500/50 text-red-500"}`}
                >
                  <svg
                    className="w-7 h-7"
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
                <p
                  className={`font-bold text-xs md:text-sm transition-colors duration-500 ${isInternetConnected ? "text-slate-400" : "text-red-500 animate-pulse"}`}
                >
                  {isInternetConnected
                    ? "클라우드 관제 정상"
                    : "⚠️ 외부 인터넷망 장애 발생"}
                </p>

                <div className="w-full h-8 relative flex items-center justify-center my-2">
                  <div
                    className={`w-px h-full relative transition-all duration-500 ${isInternetConnected ? "bg-slate-700" : "bg-red-900/30"}`}
                  >
                    {isInternetConnected && (
                      <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-flolim rounded-full -translate-x-1/2 animate-[ping_1.5s_infinite_linear]"></div>
                    )}
                  </div>
                  {!isInternetConnected && (
                    <div className="absolute text-red-500 font-bold text-sm bg-[#050b14] px-2">
                      ✕ 단선
                    </div>
                  )}
                </div>

                <div className="bg-slate-900 p-3 px-5 rounded-2xl border border-flolim shadow-[0_0_15px_rgba(24,169,198,0.2)] flex items-center gap-2">
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
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    ></path>
                  </svg>
                  <p className="text-flolim font-black text-[11px] md:text-xs">
                    현장 로컬 서버 (제어 권한 유지 중)
                  </p>
                </div>
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
            label: "다음 페이지",
            title: "제품소개",
            path: "/smart-building/product",
          }}
        />
      </div>
    </div>
  );
};

export default SmartBuildingSensor;
