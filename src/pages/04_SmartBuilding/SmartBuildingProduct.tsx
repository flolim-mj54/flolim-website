import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const SmartBuildingProduct = () => {
  const systemHardwares = [
    {
      id: "01",
      title: "플로림 스마트 허브 프로",
      subtitle: "Flolim Smart Hub Pro",
      image: "/images/building_smart_hub_pro.png",
      tag: "Core Brain",
      desc: "(주)플로림이 자체 개발한 고성능 다중 통신 게이트웨이입니다. Matter, Thread 프로토콜을 동시에 처리하여 수천 개의 조명 기기와 센서를 하나의 네트워크로 완벽하게 연동합니다.",
    },
    {
      id: "02",
      title: "AI 비전 센서",
      subtitle: "Vision Control Sensor",
      image: "/images/building_vision_sensor.png",
      tag: "Vision Node",
      desc: "공간 내 차량과 보행자의 유동 흐름 및 동선을 정밀 추적·예측하는 첨단 센서입니다. 사각지대 없는 비전 센싱 데이터를 기반으로 조명 점소등의 완벽한 자동화를 실현합니다.",
    },
  ];

  const ledProducts = [
    {
      id: "03",
      title: "스마트 LED 다운라이트",
      subtitle: "6-inch Downlight",
      image: "/images/building_led_downlight.png",
      desc: "단 10.1W의 초저전력 구동. 고도의 정밀 디밍(0.0001%) 제어 기술로 호텔, 로비, 회의실 등에 격조 높은 명품 빛을 선사합니다.",
      specs: [
        { label: "소비 전력", value: "10.1W" },
        { label: "광효율", value: "100 Lm/W" },
      ],
    },
    {
      id: "04",
      title: "스마트 직사각 평판등",
      subtitle: "1285x320 Panel Light",
      image: "/images/building_led_panel_rect.png",
      desc: "국내 최고 수준의 170 Lm/W 광효율을 증명하는 고성능 조명입니다. 슬림한 일체형 강판 설계로 세련된 오피스 시각 환경을 보장합니다.",
      specs: [
        { label: "소비 전력", value: "24.8W" },
        { label: "광효율", value: "170 Lm/W" },
      ],
    },
    {
      id: "05",
      title: "스마트 정사각 평판등",
      subtitle: "640x640 Panel Light",
      image: "/images/building_led_panel_sq.png",
      desc: "정밀 모듈 패널화 공정으로 고품질 균일 광원을 뿜어내는 정사각 패널입니다. 일반 LED 제품 대비 열 발생을 혁신적으로 억제했습니다.",
      specs: [
        { label: "소비 전력", value: "24.8W" },
        { label: "광효율", value: "170 Lm/W" },
      ],
    },
    {
      id: "06",
      title: "스마트 레이스웨이등",
      subtitle: "1200mm Raceway Light",
      image: "/images/building_led_raceway.png",
      desc: "대형 마트 및 빌딩 지하주차장 트랙 레이스에 완벽 대응하는 직결 플러그 형태의 조명입니다. 차량 통행량 연동 제어에 최적화되었습니다.",
      specs: [
        { label: "소비 전력", value: "12W" },
        { label: "광효율", value: "150 Lm/W" },
      ],
    },
  ];

  return (
    <div className="pb-10 relative overflow-hidden bg-[#020617] min-h-screen text-slate-200">
      <PageHeader
        category="Smart Building Hardware"
        title="핵심 하드웨어 및 제품소개"
        subtitle={
          <>
            건물의 최상위 두뇌 역할을 하는 제어 장비부터
            <br className="hidden md:block" />
            독보적인 효율을 내는 고품질 LED까지{" "}
            <strong className="text-white font-bold">
              플로림 빌딩 생태계의 실물 라인업
            </strong>
            입니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        {/* 1. 핵심 제어 인프라 */}
        <section className="relative z-10 mb-20">
          <div className="flex items-center gap-3 mb-8 border-l-4 border-flolim pl-3">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              1. 핵심 제어 인프라 및 기기
            </h2>
            <span className="bg-slate-900 text-slate-400 text-[10px] md:text-xs px-2.5 py-1 rounded border border-slate-800 font-bold whitespace-nowrap">
              건물 통합 허브망
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systemHardwares.map((hw) => (
              <div
                key={hw.id}
                className="bg-[#050b14] p-6 md:p-8 rounded-[2rem] border border-slate-800 shadow-inner hover:border-slate-700/60 transition-all duration-300 flex flex-col md:flex-row items-center gap-6 group"
              >
                <div className="w-full md:w-40 aspect-square bg-slate-900/40 rounded-2xl flex items-center justify-center p-4 border border-slate-800 shrink-0 relative overflow-hidden">
                  <img
                    src={hw.image}
                    alt={hw.title}
                    className="max-w-full max-h-full object-contain mix-blend-screen drop-shadow-xl group-hover:scale-110 transition-transform duration-700 relative z-10"
                  />
                </div>
                <div className="text-left flex-1">
                  <span className="text-flolim font-mono text-[10px] uppercase tracking-widest block mb-1">
                    {hw.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-flolim transition-colors break-keep">
                    {hw.title}
                  </h3>
                  <p className="text-slate-500 font-mono text-[11px] mb-3 uppercase">
                    {hw.subtitle}
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed break-keep">
                    {hw.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 프리미엄 LED 라인업 */}
        <section className="relative z-10 mb-20">
          <div className="flex items-center gap-3 mb-8 border-l-4 border-flolim pl-3">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              2. 스마트 프리미엄 LED 라인업
            </h2>
            <span className="bg-slate-900 text-slate-400 text-[10px] md:text-xs px-2.5 py-1 rounded border border-slate-800 font-bold whitespace-nowrap">
              Matter over Thread 탑재
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {ledProducts.map((hw) => (
              <div
                key={hw.id}
                className="bg-[#050b14] p-5 md:p-6 rounded-[2rem] border border-slate-800 shadow-inner hover:border-flolim/40 transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 blur-2xl pointer-events-none"></div>
                <div className="w-full aspect-square bg-slate-900/40 rounded-xl mb-4 flex items-center justify-center border border-slate-800/80 p-3 relative overflow-hidden z-10">
                  <img
                    src={hw.image}
                    alt={hw.title}
                    className="max-w-full max-h-full object-contain mix-blend-screen drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-left flex flex-col flex-grow relative z-10">
                  <span className="text-flolim text-[9px] font-mono font-bold uppercase mb-1">
                    LED {hw.id}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-flolim transition-colors mb-1 break-keep">
                    {hw.title}
                  </h3>
                  <p className="text-slate-500 text-[10px] font-mono mb-3">
                    {hw.subtitle}
                  </p>
                  <p className="text-slate-400 text-[11px] md:text-xs font-light leading-relaxed mb-4 flex-grow break-keep">
                    {hw.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 mt-auto">
                    {hw.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 text-xs flex flex-col items-center justify-center"
                      >
                        <span className="text-slate-500 text-[8px] uppercase font-bold mb-0.5 whitespace-nowrap">
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

        {/* 3. Matter over Thread 기술 소개 브릿지 영역 */}
        <section className="bg-slate-900/30 rounded-[2.5rem] p-8 md:p-12 border border-slate-800/80 relative overflow-hidden mb-16">
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-flolim/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="text-left mb-10 relative z-10">
            <span className="text-xs font-bold text-flolim uppercase tracking-widest block mb-2">
              Technical Core Edge
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white break-keep">
              제품의 완벽성을 책임지는 무선 기술, Matter over Thread
            </h2>
            <div className="w-16 h-0.5 bg-flolim mt-4 mb-5 opacity-70"></div>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-4xl break-keep">
              플로림의 스마트 하드웨어 라인업이 일반 스마트 기기들과 결정적으로
              차별화되는 이유는, 글로벌 무선 표준 규격인{" "}
              <strong className="text-slate-200">Matter</strong>와 고신뢰성 IP
              기반 메시 네트워크 기술인{" "}
              <strong className="text-slate-200">Thread</strong>를 제품 내부에
              원천 탑재했기 때문입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-[#050b14]/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
              <h4 className="text-white font-bold text-sm md:text-base mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-flolim rounded-full"></span> 완벽한
                자가 치유 무선망
              </h4>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed break-keep">
                Thread 통신은 조명 기구들끼리 그물망처럼 촘촘히 엮여 신호를 우회
                중계합니다. 한 장비의 전원이 꺼져도 주변 기기를 통해 무선망을
                스스로 복구하는 고신뢰성 제어망입니다.
              </p>
            </div>
            <div className="bg-[#050b14]/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
              <h4 className="text-white font-bold text-sm md:text-base mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-flolim rounded-full"></span> 은행
                보안수준 암호화
              </h4>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed break-keep">
                강력한 종단간(E2EE) 암호화 통신 표준을 준수하여, 빌딩 제어
                데이터를 노리는 외부 악성 해킹 공격이나 조명 제어권 탈취 시도를
                원천 차단합니다.
              </p>
            </div>
            <div className="bg-[#050b14]/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
              <h4 className="text-white font-bold text-sm md:text-base mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-flolim rounded-full"></span>{" "}
                초저전력 무선 반응속도
              </h4>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed break-keep">
                대규모 연결 인프라에서도 통신 딜레이 현상을 수 밀리초(ms) 단위로
                억제하여, 센서 신호 감지 즉시 물 흐르듯 유기적으로 켜지는 쾌적한
                반응 속도를 완성합니다.
              </p>
            </div>
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
            title: "대시보드 및 ESG 리포트",
            path: "/platform/dashboard",
          }} // 💡 타이틀 수정
        />
      </div>
    </div>
  );
};

export default SmartBuildingProduct;
