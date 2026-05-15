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

  // 💡 상단 배치를 위한 LED 라인업 (4개) - 정사각 추가 및 사양 업데이트
  const ledProducts = [
    {
      id: "01",
      title: "스마트 LED 다운라이트",
      subtitle: "6-inch Downlight",
      image: "/images/building_led_downlight.png",
      desc: "단 10.1W 전력으로 효율적인 빛을 구현합니다. 초정밀 디밍(0.0001%)과 플리커 프리 기술로 눈이 편안한 환경을 제공합니다.",
      specs: [
        { label: "소비 전력", value: "10.1W" },
        { label: "광효율", value: "100 Lm/W" },
      ],
    },
    {
      id: "02",
      title: "스마트 LED 직사각 평판등",
      subtitle: "1285x320 Panel Light",
      image: "/images/building_led_panel_rect.png",
      desc: "독보적인 170 Lm/W 광효율을 자랑하는 초슬림 패널입니다. 천장 일체형 디자인으로 세련된 오피스 인테리어와 높은 업무 집중도를 완성합니다.",
      specs: [
        { label: "소비 전력", value: "24.8W" },
        { label: "광효율", value: "170 Lm/W" },
      ],
    },
    {
      id: "03",
      title: "스마트 LED 정사각 평판등",
      subtitle: "640x640 Panel Light",
      image: "/images/building_led_panel_sq.png",
      desc: "압도적인 170 Lm/W 광효율을 구현하는 정사각 스마트 패널입니다. 정교한 규격으로 다양한 공간에 조화롭게 어우러지며 고품질 면광원을 선사합니다.",
      specs: [
        { label: "소비 전력", value: "24.8W" },
        { label: "광효율", value: "170 Lm/W" },
      ],
    },
    {
      id: "04",
      title: "스마트 LED 레이스웨이등",
      subtitle: "1200mm Raceway Light",
      image: "/images/building_led_raceway.png",
      desc: "지하 주차장에 최적화된 직결 설계 조명입니다. 차량 통행량에 따른 실시간 디밍 제어로 불필요한 에너지 낭비를 완벽하게 차단합니다.",
      specs: [
        { label: "소비 전력", value: "12W" },
        { label: "광효율", value: "150 Lm/W" },
      ],
    },
  ];

  // 💡 하단 배치를 위한 시스템 인프라 (2개)
  const systemHardwares = [
    {
      id: "05",
      title: "플로림 스마트 허브 프로",
      subtitle: "Flolim Smart Hub Pro",
      image: "/images/building_smart_hub_pro.png",
      desc: "(주)플로림이 자체 개발한 멀티 프로토콜 통합 게이트웨이입니다. Matter, Thread 등 다양한 통신 표준을 사용하는 기기들을 하나의 네트워크로 완벽하게 연동합니다.",
    },
    {
      id: "06",
      title: "AI 비전 센서",
      subtitle: "Vision Sensor",
      image: "/images/building_vision_sensor.png",
      desc: "공간 내 차량과 보행자의 동선을 실시간 분석합니다. 이동 방향을 예측하여 조명을 미리 밝히는 정밀 동체 추적 기술의 핵심 센서입니다.",
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
          .packet-main { animation: movePacket 2.5s infinite linear; }
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
        {/* 1. 도면 시뮬레이터 섹션 */}
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
              <div className="w-full h-48 md:h-56 bg-[#050b14] rounded-2xl md:rounded-3xl border border-slate-700 relative overflow-hidden shadow-inner flex flex-col justify-center">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(24,169,198,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(24,169,198,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="absolute top-3 md:top-4 left-3 md:left-6 text-[9px] md:text-xs font-bold text-flolim tracking-widest z-30 flex items-center gap-1.5 md:gap-2 bg-slate-900/80 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-slate-800 shadow-md whitespace-nowrap">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-flolim rounded-full animate-ping"></span>
                  <span className="hidden sm:inline">
                    지하 1층 주차장 (동체 추적 디밍)
                  </span>
                  <span className="sm:hidden">지하 1층 (동체 추적)</span>
                </div>

                <div className="w-full h-20 md:h-24 border-y-2 border-dashed border-slate-600/50 relative flex items-center mt-4">
                  <div
                    className="absolute w-10 md:w-12 h-5 md:h-6 bg-cyan-400 rounded-md shadow-[0_0_20px_#22d3ee] z-20"
                    style={{
                      left: `${carPos}%`,
                      transform: "translateX(-50%)",
                    }}
                  ></div>
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

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-2/3 h-56 bg-[#050b14] rounded-2xl md:rounded-3xl border border-slate-700 relative overflow-hidden shadow-inner flex flex-col justify-center">
                  <div className="absolute top-3 md:top-4 left-3 md:left-6 text-[9px] md:text-xs font-bold text-amber-400 tracking-widest flex items-center gap-1.5 md:gap-2 z-30 bg-slate-900/80 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-slate-800 shadow-md">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-400 rounded-full animate-pulse"></span>
                    <span>지상 2층 사무실 (자연광 연동)</span>
                  </div>

                  <div className="flex-1 flex justify-center items-center px-4 md:px-8 pt-10">
                    <div className="grid grid-cols-3 gap-4 md:gap-10 w-full">
                      {[
                        { label: "내측 1열", dim: 100 },
                        { label: "중간 2열", dim: dimmingMiddle },
                        { label: "창측 3열", dim: dimmingWindow },
                      ].map((col, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div
                            className="w-10 md:w-20 h-2 md:h-3 bg-white rounded-md mb-4 shadow-[0_0_15px_#fff]"
                            style={{ opacity: col.dim / 100 }}
                          ></div>
                          <span className="text-[9px] md:text-xs text-white font-bold bg-slate-900/90 border border-slate-700 px-2 py-1 rounded-md">
                            {col.label} ({col.dim}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/3 h-48 md:h-56 bg-[#050b14] rounded-2xl md:rounded-3xl border border-slate-700 px-6 py-8 flex flex-col justify-center items-center shadow-inner">
                  <h4 className="text-sm md:text-lg text-white font-bold mb-3">
                    자연광 유입량:{" "}
                    <span className="text-amber-400">{sunlight}%</span>
                  </h4>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sunlight}
                    onChange={(e) => setSunlight(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. On-Premise 무중단 제어 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center relative z-10">
            <div className="lg:w-1/2 w-full">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                외부 인터넷이 끊겨도
                <br />
                <span className="text-flolim">조명은 멈추지 않습니다</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 font-light text-xs md:text-base break-keep">
                플로림의 스마트 LED 제어 솔루션은 클라우드에만 의존하지 않고
                건물 내부의{" "}
                <strong className="font-bold text-white">
                  현장 전용 서버(On-Premise)
                </strong>
                를 중심으로 작동합니다. 외부망 장애 시에도 로컬 제어는 365일
                완벽하게 유지됩니다.
              </p>
              <button
                onClick={() => setIsInternetConnected(!isInternetConnected)}
                className={`w-full md:w-auto px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 ${isInternetConnected ? "bg-slate-800 text-red-400 border border-red-500/50 hover:bg-slate-700" : "bg-flolim text-slate-900 hover:bg-cyan-400 animate-pulse"}`}
              >
                {isInternetConnected
                  ? "인터넷 강제 종료 테스트"
                  : "외부 인터넷 복구하기"}
              </button>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col bg-[#050b14] p-8 rounded-3xl border border-slate-700 text-center items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border transition-colors ${isInternetConnected ? "bg-slate-800 border-flolim/50 text-flolim shadow-[0_0_15px_rgba(24,169,198,0.3)]" : "bg-slate-800 border-red-500 text-red-500 opacity-50"}`}
                >
                  <svg
                    className="w-8 h-8"
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
                  className={`font-bold text-sm ${isInternetConnected ? "text-slate-400" : "text-red-500"}`}
                >
                  {isInternetConnected
                    ? "클라우드 정상 연결됨"
                    : "망 장애 시뮬레이션 중"}
                </p>
                <div className="w-px h-10 bg-slate-700 my-4 relative">
                  {!isInternetConnected && (
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 text-xl font-black bg-[#050b14] p-1">
                      ✕
                    </span>
                  )}
                </div>
                <div className="bg-slate-900 p-4 px-6 rounded-2xl border border-flolim shadow-[0_0_15px_rgba(24,169,198,0.2)] flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-flolim"
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
                  <p className="text-flolim font-black text-sm">
                    현장 로컬 서버 (정상 작동)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 스마트 실내 조명 핵심 하드웨어 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="text-center mb-12 md:mb-16 relative z-10">
            <h2 className="text-xl md:text-3xl font-bold text-white break-keep">
              스마트 실내 조명 핵심 하드웨어
            </h2>
            <p className="text-slate-400 font-light text-xs md:text-sm mt-3 break-keep">
              플로림의 차세대 빌딩 제어 인프라 및 프리미엄 LED 라인업
            </p>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 relative z-10">
            {/* 💡 상단: 스마트 LED 라인업 (4열 배치) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {ledProducts.map((hw) => (
                <div
                  key={hw.id}
                  className="bg-[#050b14] p-5 md:p-6 rounded-[1.5rem] border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-500 relative overflow-hidden group cursor-default flex flex-col h-full"
                >
                  <div className="absolute -right-10 -top-10 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 blur-3xl pointer-events-none"></div>
                  <div className="w-full aspect-square bg-slate-800/30 rounded-xl mb-5 flex items-center justify-center p-3 border border-slate-700/50 overflow-hidden relative">
                    <img
                      src={hw.image}
                      alt={hw.title}
                      className="max-w-full max-h-full object-contain mix-blend-screen drop-shadow-xl group-hover:scale-110 transition-transform duration-700 relative z-10"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <span className="text-flolim text-[9px] font-bold uppercase tracking-widest block mb-1">
                      Device {hw.id}
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-flolim transition-colors break-keep mb-1">
                      {hw.title}
                    </h3>
                    <span className="text-slate-500 text-[10px] font-medium uppercase block mb-3">
                      {hw.subtitle}
                    </span>
                    <p className="text-slate-400 font-light leading-relaxed text-[11px] md:text-xs break-keep mb-4 flex-grow">
                      {hw.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 mt-auto">
                      {hw.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="bg-slate-900/80 p-2 rounded-lg border border-slate-700 text-center flex flex-col justify-center"
                        >
                          <span className="block text-slate-500 text-[8px] font-bold uppercase mb-0.5">
                            {spec.label}
                          </span>
                          <span className="text-flolim font-black text-[10px] md:text-xs whitespace-nowrap">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 💡 하단: 시스템 인프라 (2열 - 상단 넓이에 맞춰 정렬) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {systemHardwares.map((hw) => (
                <div
                  key={hw.id}
                  className="bg-[#050b14] p-8 md:p-10 rounded-[2rem] border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-500 relative overflow-hidden group cursor-default flex flex-col h-full"
                >
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 blur-3xl pointer-events-none"></div>
                  <div className="w-full aspect-[21/9] bg-slate-800/30 rounded-2xl mb-6 flex items-center justify-center p-6 border border-slate-700/50 overflow-hidden relative">
                    <img
                      src={hw.image}
                      alt={hw.title}
                      className="max-w-full max-h-full object-contain mix-blend-screen drop-shadow-xl group-hover:scale-110 transition-transform duration-700 relative z-10"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <span className="text-flolim text-[10px] font-bold uppercase tracking-widest block mb-1">
                      Device {hw.id}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-flolim transition-colors break-keep mb-1">
                      {hw.title}
                    </h3>
                    <span className="text-slate-500 text-xs font-medium uppercase block mb-4">
                      {hw.subtitle}
                    </span>
                    <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base break-keep mt-auto">
                      {hw.desc}
                    </p>
                  </div>
                </div>
              ))}
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
