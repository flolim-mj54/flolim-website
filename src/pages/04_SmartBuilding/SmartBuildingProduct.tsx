import BottomNav from "../../components/BottomNav";

const SmartBuildingProduct = () => {
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
    <div className="pb-10 relative overflow-hidden bg-[#020617] min-h-screen text-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-left pt-10 mb-16 animate-fade-in">
          <p className="text-flolim font-bold tracking-widest mb-4 uppercase text-sm">
            Smart Building Products
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            제품소개
          </h1>
          <div className="w-24 h-1 bg-flolim mb-8 shadow-[0_0_15px_rgba(24,169,198,0.8)]"></div>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-3xl leading-relaxed break-keep">
            압도적인 광효율을 자랑하는{" "}
            <strong className="text-white">프리미엄 LED 라인업</strong>과 공간을
            지휘하는 <strong className="text-white">핵심 시스템 인프라</strong>
            입니다.
          </p>
        </div>

        {/* 1. 스마트 LED 라인업 */}
        <section className="relative z-10 mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-flolim pl-3">
            스마트 LED 라인업 (Matter over Thread 지원)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {ledProducts.map((hw) => (
              <div
                key={hw.id}
                className="bg-[#050b14] p-6 rounded-[2rem] border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-500 relative overflow-hidden group flex flex-col h-full"
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
                  <span className="text-flolim text-[10px] font-bold uppercase tracking-widest block mb-1">
                    Hardware {hw.id}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-flolim transition-colors break-keep mb-1">
                    {hw.title}
                  </h3>
                  <span className="text-slate-500 text-[10px] font-medium uppercase block mb-3">
                    {hw.subtitle}
                  </span>
                  <p className="text-slate-400 font-light leading-relaxed text-xs break-keep mb-4 flex-grow">
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
        </section>

        {/* 2. 시스템 인프라 */}
        <section className="relative z-10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-flolim pl-3">
            시스템 인프라 및 센서
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systemHardwares.map((hw) => (
              <div
                key={hw.id}
                className="bg-[#050b14] p-8 md:p-10 rounded-[2rem] border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-500 relative overflow-hidden group flex flex-col h-full"
              >
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
        </section>

        <BottomNav
          prev={{
            label: "이전 페이지",
            title: "IoT 센서 자동 제어",
            path: "/smart-building/sensor",
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

export default SmartBuildingProduct;
