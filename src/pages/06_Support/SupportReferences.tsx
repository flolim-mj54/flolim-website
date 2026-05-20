import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const SupportReferences = () => {
  const cityCases = [
    {
      id: 1,
      tag: "경기도 안산시",
      title: "안산스마트허브 (1,594개)",
      desc: "통행량 분석 IoT 조명제어 장치 적용",
      prefix: "",
      percent: "70",
      unit: "%",
      label: "에너지 감축",
    },
    {
      id: 2,
      tag: "서울특별시",
      title: "강남 4구 도로 (1,500개)",
      desc: "유동 인구 밀집 지역 스마트 제어망 구축",
      prefix: "",
      percent: "50",
      unit: "%",
      label: "이상 절감 (912MW)",
    },
    {
      id: 3,
      tag: "서울특별시",
      title: "금천구 G밸리 (601개)",
      desc: "심야 시간대 교통량 연동 자동 조도 조절",
      prefix: "연간",
      percent: "6만",
      unit: "kWh",
      label: "절감",
    },
  ];

  const buildingCases = [
    {
      id: 4,
      tag: "공장 및 상업시설",
      title: "한국전자통신연구원 실증",
      desc: "스마트조명 플랫폼 개별/그룹 제어 적용",
      prefix: "최대",
      percent: "74.1",
      unit: "%",
      label: "절감",
    },
    {
      id: 5,
      tag: "공동주택 및 건물",
      title: "대한민국 LH공사 실증",
      desc: "IoT 기반 10단계 자동 조도 조절(디밍) 적용",
      prefix: "최대",
      percent: "70",
      unit: "%",
      label: "이상 절감",
    },
    {
      id: 6,
      tag: "학교 및 사무실",
      title: "한국광기술원 실증",
      desc: "자연광 연동 스마트 센서망 자동 제어",
      prefix: "일반 LED 대비",
      percent: "43",
      unit: "%",
      label: "추가 절감",
    },
  ];

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader
        category="공식 실증 데이터"
        title="공식 실증 데이터"
        subtitle={
          <>
            기존 노후 조명을 스마트 제어 시스템으로 전환했을 때 입증되는
            <br className="hidden md:block" />
            <strong className="text-white font-bold">
              객관적인 에너지 절감 및 탄소 중립 지표
            </strong>
            를 확인해 보세요.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

          <div className="mb-8 md:mb-10 relative z-10">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-flolim shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
              <h2 className="text-xl md:text-2xl font-bold text-white break-keep">
                스마트 가로등 공식 실증 데이터
              </h2>
            </div>
            <p className="text-slate-400 text-xs md:text-sm font-light break-keep">
              전력 소모가 큰 노후 가로등을 통합 제어형 스마트 가로등으로
              교체하여 입증된 국내외 공식 에너지 절감 데이터입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {cityCases.map((c) => (
              <div
                key={c.id}
                className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden flex flex-col h-full cursor-default"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="inline-block px-3 py-1 bg-slate-800 text-slate-400 text-[10px] md:text-xs font-bold rounded-lg mb-4 border border-slate-700 self-start">
                    {c.tag}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors break-keep">
                    {c.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-medium mb-6 break-keep flex-grow">
                    {c.desc}
                  </p>

                  <div className="flex flex-wrap items-end gap-x-2 gap-y-1 mt-auto">
                    {c.prefix && (
                      <span className="text-slate-400 font-bold mb-1 text-xs md:text-sm">
                        {c.prefix}
                      </span>
                    )}
                    <span className="text-3xl md:text-4xl font-black text-flolim tracking-tight drop-shadow-[0_0_15px_rgba(24,169,198,0.3)] whitespace-nowrap">
                      {c.percent}
                      <span className="text-lg md:text-xl font-medium ml-0.5">
                        {c.unit}
                      </span>
                    </span>
                    <span className="text-slate-400 font-bold mb-1 text-xs md:text-sm whitespace-nowrap">
                      {c.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none translate-y-1/4 -translate-x-1/4"></div>

          <div className="mb-8 md:mb-10 relative z-10">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-flolim shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
              <h2 className="text-xl md:text-2xl font-bold text-white break-keep">
                스마트 빌딩 및 산업 현장 실증 데이터
              </h2>
            </div>
            <p className="text-slate-400 text-xs md:text-sm font-light break-keep">
              고효율 스마트 조명에 첨단 IoT 센서망을 결합하여 실내 공간의 전력
              효율을 최적화한 공식 실증 데이터입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {buildingCases.map((c) => (
              <div
                key={c.id}
                className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden flex flex-col h-full cursor-default"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="inline-block px-3 py-1 bg-slate-800 text-slate-400 text-[10px] md:text-xs font-bold rounded-lg mb-4 border border-slate-700 self-start">
                    {c.tag}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors break-keep">
                    {c.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-medium mb-6 break-keep flex-grow">
                    {c.desc}
                  </p>

                  <div className="flex flex-wrap items-end gap-x-2 gap-y-1 mt-auto">
                    {c.prefix && (
                      <span className="text-slate-400 font-bold mb-1 text-xs md:text-sm break-keep">
                        {c.prefix}
                      </span>
                    )}
                    <span className="text-3xl md:text-4xl font-black text-flolim tracking-tight drop-shadow-[0_0_15px_rgba(24,169,198,0.3)] whitespace-nowrap">
                      {c.percent}
                      <span className="text-lg md:text-xl font-medium ml-0.5">
                        {c.unit}
                      </span>
                    </span>
                    <span className="text-slate-400 font-bold mb-1 text-xs md:text-sm whitespace-nowrap">
                      {c.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-slate-800 text-center relative z-10 bg-[#050b14]/80 p-4 rounded-xl border border-slate-700/50">
            <p className="text-slate-400 text-[10px] md:text-xs font-light break-keep leading-relaxed">
              ※ 본 페이지의 데이터는 플로림의 직접 시공 실적이 아니며, 스마트
              제어 시스템의 우수성과 기대 효과에 대한 이해를 돕기 위해 인용된
              국가/공공기관 및 산업계의 공식 실증 사례입니다.
            </p>
          </div>
        </section>

        <BottomNav
          prev={{
            label: "이전 페이지",
            title: "ESG 경영 리포트",
            path: "/platform/esg",
          }}
          next={{
            label: "다음 페이지",
            title: "자료실",
            path: "/support/archive",
          }}
        />
      </div>
    </div>
  );
};

export default SupportReferences;
