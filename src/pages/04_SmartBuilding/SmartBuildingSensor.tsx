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

  const systemHardwares = [
    {
      id: "01",
      title: "플로림 스마트 허브 프로",
      subtitle: "Flolim Smart Hub Pro",
      image: "/images/building_smart_hub_pro.png",
      desc: "(주)플로림이 자체 개발한 멀티 프로토콜 통합 게이트웨이입니다. Matter, Thread 등 다양한 통신 표준을 사용하는 기기들을 하나의 네트워크로 완벽하게 연동합니다.",
    },
    {
      id: "02",
      title: "AI 비전 센서",
      subtitle: "Vision Sensor",
      image: "/images/building_vision_sensor.png",
      desc: "공간 내 차량과 보행자의 동선을 실시간 분석합니다. 이동 방향을 예측하여 조명을 미리 밝히는 정밀 동체 추적 기술의 핵심 센서입니다.",
    },
  ];

  return (
    <div className="pb-10 overflow-x-hidden bg-[#020617] min-h-screen text-slate-200">
      <PageHeader
        category="On-Premise Control & Sensor"
        title="IoT 센서 자동 제어"
        subtitle={
          <>
            공간을 스스로 제어하는 지능형 센서망과 무중단 로컬 제어망의 핵심
            기술을 체험해 보세요.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10 md:mt-16">
        {/* 1. 도면 시뮬레이터 섹션 */}
        <section className="mb-20 md:mb-24">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

            <div className="text-center mb-8 md:mb-12 relative z-10">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 break-keep">
                센서 기반 도면 정밀 제어망
              </h2>
              <p className="text-slate-400 text-xs md:text-sm break-keep">
                주차장 동체 추적과 오피스 구역별 자연광 연동 기술을 확인하세요.
              </p>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              <div className="w-full h-48 md:h-56 bg-[#050b14] rounded-2xl border border-slate-700 relative overflow-hidden shadow-inner flex flex-col justify-center">
                <div className="absolute top-3 left-6 text-[9px] md:text-xs font-bold text-flolim tracking-widest z-30 flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 shadow-md">
                  <span className="w-2 h-2 bg-flolim rounded-full animate-ping"></span>
                  <span>지하 1층 주차장 (동체 추적 디밍)</span>
                </div>
                <div className="w-full h-20 border-y-2 border-dashed border-slate-600/50 relative flex items-center mt-4">
                  <div
                    className="absolute w-12 h-6 bg-cyan-400 rounded-md shadow-[0_0_20px_#22d3ee] z-20"
                    style={{
                      left: `${carPos}%`,
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                </div>
                <div className="absolute top-0 w-full h-full flex justify-around px-10 pointer-events-none z-10">
                  {[10, 30, 50, 70, 90].map((pos) => {
                    const isOn = Math.abs(carPos - pos) < 25;
                    return (
                      <div
                        key={pos}
                        className="h-full w-1/5 relative flex items-center justify-center"
                      >
                        <div
                          className={`absolute top-8 w-16 h-2 border border-slate-600 rounded-sm transition-all duration-500 ${isOn ? "bg-white shadow-[0_0_20px_#ffffff]" : "bg-slate-700"}`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-2/3 h-56 bg-[#050b14] rounded-2xl border border-slate-700 relative overflow-hidden shadow-inner flex flex-col justify-center">
                  <div className="absolute top-4 left-6 text-[9px] md:text-xs font-bold text-amber-400 tracking-widest flex items-center gap-2 z-30 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 shadow-md">
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                    <span>지상 2층 사무실 (자연광 연동)</span>
                  </div>
                  <div className="flex-1 flex justify-center items-center pt-10">
                    <div className="grid grid-cols-3 gap-10 w-full px-10">
                      {[
                        { label: "내측 1열", dim: 100 },
                        { label: "중간 2열", dim: dimmingMiddle },
                        { label: "창측 3열", dim: dimmingWindow },
                      ].map((col, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div
                            className="w-20 h-3 bg-white rounded-md mb-4 shadow-[0_0_15px_#fff]"
                            style={{ opacity: col.dim / 100 }}
                          ></div>
                          <span className="text-[10px] text-white font-bold bg-slate-900/90 border border-slate-700 px-2 py-1 rounded-md">
                            {col.label} ({col.dim}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 h-56 bg-[#050b14] rounded-2xl border border-slate-700 px-6 py-8 flex flex-col justify-center items-center shadow-inner">
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

        {/* 2. On-Premise 섹션 */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight break-keep">
                인터넷이 끊겨도 <br />
                <span className="text-flolim">시스템은 멈추지 않습니다</span>
              </h2>
              <p className="text-slate-400 font-light text-xs md:text-base leading-relaxed">
                현장 전용 서버(On-Premise) 중심 설계로 외부망 장애 시에도 건물
                내 조명 제어는 365일 완벽하게 유지됩니다.
              </p>
            </div>
            <div className="lg:w-1/2 w-full flex bg-[#050b14] p-10 rounded-3xl border border-slate-700 justify-center">
              <div className="bg-slate-900 p-6 rounded-2xl border border-flolim shadow-[0_0_15px_rgba(24,169,198,0.2)] flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-flolim"
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
                <p className="text-flolim font-black text-sm md:text-base">
                  현장 로컬 서버 (무중단 가동)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 시스템 하드웨어 섹션 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systemHardwares.map((hw) => (
              <div
                key={hw.id}
                className="bg-[#050b14] p-8 md:p-10 rounded-[2rem] border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
              >
                <div className="w-full aspect-[21/9] bg-slate-800/30 rounded-2xl mb-6 flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={hw.image}
                    alt={hw.title}
                    className="max-w-full max-h-full object-contain mix-blend-screen drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-flolim transition-colors">
                  {hw.title}
                </h3>
                <span className="text-slate-500 text-xs font-medium uppercase block mb-4">
                  {hw.subtitle}
                </span>
                <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">
                  {hw.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <BottomNav
          prev={{
            label: "이전 페이지",
            title: "스마트 LED 라인업",
            path: "/smart-building/led",
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
