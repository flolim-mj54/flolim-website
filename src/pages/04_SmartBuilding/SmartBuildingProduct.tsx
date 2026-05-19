import PageHeader from "../../components/PageHeader";
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

  return (
    <div className="pb-10 relative overflow-hidden bg-[#020617] min-h-screen text-slate-200">
      {/* 💡 다른 페이지와 동일하게 가운데 정렬된 PageHeader 적용 */}
      <PageHeader
        category="Smart Building Products"
        title="제품소개"
        subtitle={
          <>
            압도적인 광효율을 자랑하는{" "}
            <strong className="text-white font-bold">
              프리미엄 LED 라인업
            </strong>
            입니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        <section className="relative z-10 mb-16">
          <div className="flex items-center gap-3 mb-8 border-l-4 border-flolim pl-3">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              스마트 LED 라인업
            </h2>
            <span className="bg-slate-800 text-slate-400 text-[10px] md:text-xs px-2 py-1 rounded border border-slate-700 font-bold">
              Matter over Thread 지원
            </span>
          </div>

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
