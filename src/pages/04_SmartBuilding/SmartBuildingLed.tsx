import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const SmartBuildingLed = () => {
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
        { label: "통신", value: "Matter over Thread" },
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
        { label: "통신", value: "Matter over Thread" },
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
        { label: "통신", value: "Matter over Thread" },
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
        { label: "통신", value: "Matter over Thread" },
      ],
    },
  ];

  return (
    <div className="pb-10 relative overflow-hidden bg-[#020617] min-h-screen text-slate-200">
      {/* 브로슈어 톤앤매너: 좌측 정렬을 강제하기 위해 ml-0과 text-left 스타일 적용 */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-left pt-10 mb-16 animate-fade-in">
          <p className="text-flolim font-bold tracking-widest mb-4 uppercase text-sm">
            Smart Building LED
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            스마트 LED 라인업
          </h1>
          <div className="w-24 h-1 bg-flolim mb-8 shadow-[0_0_15px_rgba(24,169,198,0.8)]"></div>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-3xl leading-relaxed break-keep">
            압도적인 광효율과 차세대 IoT 통신 기술이 결합된{" "}
            <strong className="text-white">플로림 프리미엄 LED 시리즈</strong>
            입니다. Matter와 Thread 표준을 지원하여 가장 안정적인 무선 제어
            환경을 구축합니다.
          </p>
        </div>

        <section className="relative z-10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ledProducts.map((hw) => (
              <div
                key={hw.id}
                className="bg-[#050b14] p-6 rounded-[2rem] border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-500 relative overflow-hidden group cursor-default flex flex-col h-full"
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

                  <div className="space-y-1.5 mt-auto">
                    {hw.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center text-[11px] border-b border-slate-800/50 pb-1.5 last:border-0"
                      >
                        <span className="text-slate-500 font-medium">
                          {spec.label}
                        </span>
                        <span className="text-flolim font-bold">
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

        <BottomNav
          prev={{
            label: "이전 페이지",
            title: "스마트 빌딩 개요",
            path: "/smart-building/intro",
          }}
          next={{
            label: "다음 페이지",
            title: "IoT 센서 자동 제어",
            path: "/smart-building/sensor",
          }}
        />
      </div>
    </div>
  );
};

export default SmartBuildingLed;
