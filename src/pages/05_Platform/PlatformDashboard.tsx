import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const PlatformDashboard = () => {
  const dashboardFeatures = [
    {
      id: 1,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      ),
      title: "2D · 3D 멀티 디지털 트윈",
      desc: "현장 조명 배치를 2D 도면과 3D 가상 뷰로 동시 구현하여, 모든 전등의 상태를 가장 입체적이고 명확하게 모니터링합니다.",
    },
    {
      id: 2,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      title: "ESG 전력 데이터 시각화",
      desc: "누적 전력량, 탄소 저감량, 절감 요금을 실시간 시각화하여 매월 ESG 경영 리포트의 기반 데이터를 자동으로 생성합니다.",
    },
    {
      id: 3,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
      title: "실시간 원격 조명 제어",
      desc: "사무실, 로비, 주차장 등 구역별 조명을 개별 또는 그룹 단위로 원격 토글하고 설정된 자동화 시퀀스를 즉각 제어합니다.",
    },
    {
      id: 4,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: "IoT 센서 네트워크 관제",
      desc: "현장에 배치된 AI 비전 센서의 재실 감지 신호와 조도 센서가 측정하는 현재 공간의 밝기(Lux) 데이터를 실시간 수집합니다.",
    },
  ];

  return (
    <div className="pb-10 relative overflow-hidden bg-[#020617] min-h-screen text-slate-200">
      <PageHeader
        category="Unified Control Platform"
        title="통합 관제 대시보드"
        subtitle={
          <>
            모든 조명, 센서, 전력 사용량을 한눈에 확인하고 제어하는
            <br className="hidden md:block" />
            <strong className="text-white font-bold">
              플로림 빌딩·시티 최상위 통합 관제 센터
            </strong>
            입니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        {/* 대시보드 통합 이미지 영역 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 border border-slate-800 mb-16 relative overflow-hidden flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative w-full max-w-2xl rounded-2xl md:rounded-3xl border border-slate-700/60 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden bg-[#050b14]">
            <img
              src="/images/dashboard.png"
              alt="플로림 통합 관제 대시보드 전체 화면"
              className="w-full h-auto object-contain block mx-auto"
            />
          </div>
        </section>

        {/* 핵심 기능 2x2 배치 영역 */}
        <section className="mb-20 relative z-10">
          <div className="text-center mb-10 md:mb-14 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 break-keep">
              데이터 기반의 지능형 공간 제어
            </h2>
            <p className="text-slate-400 font-light text-xs md:text-base break-keep">
              웹 표준 기반 플랫폼 하나로 수많은 조명 인프라를 직관적이고
              완벽하게 통제합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {dashboardFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#050b14] p-6 md:p-10 rounded-[2rem] border border-slate-800 shadow-inner flex flex-col group hover:border-flolim/40 active:scale-[0.99] transition-all cursor-default relative overflow-hidden"
              >
                {/* 배경 장식 효과 */}
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                {/* 💡 숫자(id) 렌더링 삭제 및 아이콘 단독 배치로 심플하게 변경 */}
                <div className="relative z-10 flex items-center mb-6 border-b border-slate-800/80 pb-5">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-flolim border border-slate-700 group-hover:bg-flolim group-hover:text-white transition-all shadow-sm">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                </div>

                <h3 className="relative z-10 text-lg md:text-xl font-bold text-white mb-3 break-keep group-hover:text-flolim transition-colors">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-xs md:text-base text-slate-400 font-light leading-relaxed break-keep">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <BottomNav
          prev={{
            label: "이전 카테고리",
            title: "핵심 하드웨어 및 제품소개",
            path: "/smart-building/product",
          }}
          next={{
            label: "다음 페이지",
            title: "ESG 경영 리포트",
            path: "/platform/esg",
          }}
        />
      </div>
    </div>
  );
};

export default PlatformDashboard;
