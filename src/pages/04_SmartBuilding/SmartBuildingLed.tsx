import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const SmartBuildingLed = () => {
  const ledProducts = [
    {
      id: "DL-06",
      badge: "6인치 다운라이트",
      title: "스마트 LED 고효율 다운라이트",
      image: "/images/building_led_downlight.png", // 확장자 확인 후 수정 요망
      power: "10.1W",
      efficiency: "170 Lm/W",
      protocol: "Matter over Thread",
      desc: "단 10.1W의 전력으로 타사 대비 압도적인 밝기를 구현합니다. 초정밀 디밍과 플리커 프리 기술로 눈이 편안한 고급스러운 분위기를 연출합니다.",
      features: [
        "동급 최강 170 Lm/W 초고효율",
        "0.0001% 심도 조절 초정밀 디밍",
        "끊김 없는 Thread 메쉬 네트워크",
      ],
    },
    {
      id: "PL-12",
      badge: "1285x320 평판등",
      title: "스마트 LED 고효율 평판등",
      image: "/images/building_led_panel.png", // 확장자 확인 후 수정 요망
      power: "24.8W",
      efficiency: "180 Lm/W",
      protocol: "Matter over Thread",
      desc: "단 24.8W 전력으로 독보적인 180 Lm/W 광효율을 자랑합니다. 천장에 완벽하게 밀착되는 슬림 디자인으로 세련된 업무 공간을 완성합니다.",
      features: [
        "독보적인 180 Lm/W 광효율",
        "천장 일체형 슬림 디자인",
        "눈이 편안한 고품질 면광원",
      ],
    },
    {
      id: "RW-12",
      badge: "1200mm 지하주차장등",
      title: "스마트 LED 레이스웨이등",
      image: "/images/building_led_raceway.png", // 확장자 확인 후 수정 요망
      power: "12W",
      efficiency: "170 Lm/W",
      protocol: "Matter over Thread",
      desc: "어두운 지하 주차장을 사각지대 없이 밝히며, 차량과 사람의 움직임에 따라 밝기를 실시간 조절하여 에너지를 완벽히 절감합니다.",
      features: [
        "레이스웨이 맞춤형 직결 설계",
        "통행량 반응형 디밍 제어",
        "음영 구역을 없앤 Thread 통신",
      ],
    },
  ];

  const coreTechs = [
    {
      title: "Matter over Thread",
      desc: "차세대 IoT 표준 규격을 탑재하여 별도의 복잡한 배선 없이 기기 간 그물망(Mesh)처럼 연결되는 빠르고 안정적인 통신을 자랑합니다.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: "압도적인 초고효율",
      desc: "최대 180 Lm/W의 독보적인 광효율로 최소한의 전력만 사용하여 타사 대비 월등히 밝은 빛을 내고 전기료를 극적으로 절감합니다.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ),
    },
    {
      title: "플리커 프리 & 초정밀 디밍",
      desc: "0.0001% 단위의 섬세한 빛 조절과 미세한 빛 떨림을 완벽히 차단하는 기술이 적용되어 업무 효율을 높이고 눈의 피로를 최소화합니다.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      ),
    },
  ];

  return (
    <div className="pb-10 relative overflow-hidden bg-[#020617] min-h-screen text-slate-200">
      <PageHeader
        category="Smart LED Lineup"
        title="초고효율 스마트 LED 라인업"
        subtitle={
          <>
            <strong className="text-flolim font-bold">압도적인 광효율</strong>과
            차세대 IoT 통신 기술이 결합된
            <br className="hidden md:block" />
            플로림의 프리미엄 실내 조명 라인업을 소개합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10 md:mt-16">
        {/* 1. 핵심 기술 (Core Technology) */}
        <section className="mb-16 md:mb-24 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-4 break-keep">
              조명의 본질을 혁신하는 핵심 기술
            </h2>
            <p className="text-slate-400 font-light text-xs md:text-sm break-keep">
              플로림의 모든 스마트 LED는 최고의 하드웨어 설계와 소프트웨어 제어
              기술이 집약되어 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreTechs.map((tech, idx) => (
              <div
                key={idx}
                className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden flex flex-col cursor-default"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="w-12 h-12 bg-slate-800 border border-slate-600 rounded-xl flex items-center justify-center text-flolim mb-5 group-hover:bg-flolim/10 group-hover:border-flolim/50 transition-colors relative z-10 shadow-sm shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {tech.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-flolim transition-colors relative z-10 break-keep">
                  {tech.title}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed relative z-10 break-keep">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 제품 라인업 쇼케이스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

          <div className="text-center mb-12 md:mb-16 relative z-10 border-b border-slate-800 pb-8">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-4 break-keep">
              스마트 빌딩 맞춤형 라인업
            </h2>
            <p className="text-slate-400 font-light text-xs md:text-sm break-keep">
              고효율기자재 인증 기준을 월등히 뛰어넘는 공간별 최적화 조명
            </p>
          </div>

          <div className="space-y-8 md:space-y-12 relative z-10">
            {ledProducts.map((product, idx) => (
              <div
                key={idx}
                className="bg-[#050b14] rounded-3xl border border-slate-700 shadow-inner overflow-hidden flex flex-col lg:flex-row group hover:border-flolim/50 transition-colors"
              >
                {/* 왼쪽: 이미지 영역 */}
                <div className="w-full lg:w-5/12 h-64 lg:h-auto bg-slate-800/30 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/50 z-0"></div>
                  {/* 글로우 효과 */}
                  <div className="absolute w-32 h-32 bg-flolim/10 rounded-full blur-3xl group-hover:bg-flolim/20 transition-colors z-0"></div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* 오른쪽: 상세 스펙 영역 */}
                <div className="w-full lg:w-7/12 p-6 md:p-8 lg:p-10 flex flex-col justify-center relative">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-flolim/10 text-flolim text-[10px] md:text-xs font-bold rounded-lg border border-flolim/30 mb-3 tracking-widest">
                      {product.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-flolim transition-colors break-keep">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed mb-6 break-keep">
                    {product.desc}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                      <span className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                        소비 전력
                      </span>
                      <span className="text-white font-medium text-sm">
                        {product.power}
                      </span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                      <span className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                        광효율
                      </span>
                      <span className="text-flolim font-black text-sm">
                        {product.efficiency}
                      </span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700 col-span-2 sm:col-span-1">
                      <span className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                        통신 규격
                      </span>
                      <span className="text-white font-medium text-[11px] md:text-xs">
                        {product.protocol}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {product.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start text-xs md:text-sm text-slate-300 font-light"
                      >
                        <svg
                          className="w-4 h-4 text-flolim mr-2 shrink-0 mt-0.5"
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
                        <span className="break-keep">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
