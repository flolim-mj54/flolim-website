import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const PlatformDashboard = () => {
  // 💡 2D/3D 지원 명시 및 조명 통합 제어 중심으로 문구 압축
  const dashboardFeatures = [
    {
      id: "01",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      ),
      title: "2D · 3D 멀티 디지털 트윈",
      desc: "현장 조명 배치를 2D 도면 뷰와 3D 가상 뷰로 동시 구현하여, 모든 전등의 상태를 가장 입체적이고 명확하게 모니터링합니다.",
    },
    {
      id: "02",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      title: "ESG 전력 데이터 시각화",
      desc: "누적 전력량, 탄소 저감량, 절감 요금을 실시간 시각화하여 매월 ESG 경영 리포트의 기반 데이터를 자동으로 제공합니다.",
    },
    {
      id: "03",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
      title: "실시간 원격 조명 제어",
      desc: "사무실, 로비, 주차장 등 구역별 조명을 개별 또는 그룹 단위로 원격 토글하고 등록된 자동화 시퀀스를 즉각 제어합니다.",
    },
    {
      id: "04",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: "IoT 센서 네트워크 관제",
      desc: "현장에 배치된 AI 비전 센서의 재실 감지 신호와 조도 센서의 현재 공간 밝기(Lux) 데이터를 실시간 수집 및 동기화합니다.",
    },
    {
      id: "05",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      ),
      title: "이종 조명 설비 시스템 통합",
      desc: "제조사나 규격이 다른 실내 다양한 LED 인프라 및 디밍 제어 드라이버를 단 하나의 플랫폼에서 누수 없이 통합 관리합니다.",
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
        {/* 이미지 관제 영역 */}
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

        {/* 대시보드 주요 기능 설명 리스트 */}
        <section className="mb-20 relative z-10">
          <div className="text-center mb-10 md:mb-12 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 break-keep">
              데이터 기반의 지능형 공간 제어
            </h2>
            <p className="text-slate-400 font-light text-xs md:text-base break-keep">
              웹 표준 기반 플랫폼 하나로 수많은 조명 인프라를 직관적이고
              완벽하게 통제합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-800 shadow-inner flex flex-col group hover:border-flolim/40 active:scale-[0.98] transition-all cursor-default relative overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                <div className="relative z-10 flex items-center justify-between mb-5 border-b border-slate-800/80 pb-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-flolim border border-slate-700 group-hover:bg-flolim group-hover:text-white transition-colors shadow-sm">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <span className="text-slate-700 font-mono font-black text-sm group-hover:text-flolim/40 transition-colors">
                    {feature.id}
                  </span>
                </div>

                <h3 className="relative z-10 text-base md:text-lg font-bold text-white mb-2 break-keep group-hover:text-flolim transition-colors">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-xs md:text-sm text-slate-400 font-light leading-relaxed break-keep">
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
