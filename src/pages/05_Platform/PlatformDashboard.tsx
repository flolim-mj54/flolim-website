import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const PlatformDashboard = () => {
  // 기존 하단 텍스트/카드 영역 데이터 유지 (앞서 다듬었던 텍스트 반영)
  const features = [
    {
      id: 1,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
      title: "실시간 통합 모니터링",
      desc: "건물 및 도시 내 모든 조명과 센서의 상태를 직관적인 2D/3D 디지털 트윈 뷰로 실시간 확인하고 관리합니다.",
    },
    {
      id: 2,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "스마트 자동화",
      desc: "관리자 설정과 센서에 따른 스마트 자동 점/소등, 스케줄링 및 디밍 제어 기능을 제공합니다.",
    },
    {
      id: 3,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "에너지 및 ESG 관리",
      desc: "전력 소비량, 탄소 배출 저감량 등 핵심 데이터를 시각화하여 체계적인 에너지 관리를 지원합니다.",
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

      <div className="container mx-auto px-4 max-w-7xl mt-10">
        
        {/* 💡 수정된 부분: 두 장이었던 이미지를 한 장으로 합치고, 세로 비율에 맞게 폼나게 배치 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-4 md:p-8 lg:p-12 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden flex justify-center items-center">
          {/* 배경 빛 효과 */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* 세로로 긴 이미지가 데스크탑에서 너무 커지지 않도록 max-w-4xl로 너비 제한 */}
          <div className="relative w-full max-w-4xl rounded-2xl md:rounded-3xl border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden bg-[#0a1120]">
            <img
              src="/images/dashboard.png"
              alt="플로림 통합 관제 대시보드 전체 화면"
              className="w-full h-auto object-contain block"
            />
          </div>
        </section>

        {/* 기존 대시보드 기능 설명 영역 (유지) */}
        <section className="mb-20 relative z-10">
          <div className="text-center mb-10 md:mb-12 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 break-keep">
              데이터 기반의 지능형 공간 제어
            </h2>
            <p className="text-slate-400 font-light text-xs md:text-base break-keep">
              현장에 설치된 수많은 하드웨어를 웹 기반 플랫폼 하나로 완벽하게 통제합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner flex flex-col group hover:border-flolim/50 active:scale-[0.98] transition-all cursor-default"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-flolim mb-5 border border-slate-700 group-hover:bg-flolim group-hover:text-white transition-colors">
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-flolim transition-colors break-keep">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed break-keep">
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