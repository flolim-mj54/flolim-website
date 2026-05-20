import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const PlatformDashboard = () => {
  // 원래 대시보드 페이지에 있던 상세 기능 라인업 전체 복구
  const dashboardFeatures = [
    {
      id: "01",
      title: "디지털 트윈 실시간 연동 (Digital Twin View)",
      desc: "실제 건물 내부 조명 배치를 3D 가상 공간에 그대로 투영합니다. 센서 감지에 따른 전등의 점소등 상태와 디밍 밝기를 현장에 가지 않고도 직관적으로 모니터링할 수 있습니다.",
    },
    {
      id: "02",
      title: "ESG 실시간 전력 데이터 모니터링",
      desc: "누적 전력 사용량(kWh), 탄소 배출 저감량(kg), 그리고 실시간으로 절감되고 있는 빌딩 요금을 시각화합니다. 축적된 데이터는 매월 ESG 경영 리포트 추출의 기반이 됩니다.",
    },
    {
      id: "03",
      title: "실시간 원격 조명 제어",
      desc: "사무실, 로비, 주차장 등 구역별 조명을 개별 또는 그룹 단위로 원격 토글할 수 있으며, 준비된 조명 시퀀스를 원터치로 실행하여 공간의 분위기를 즉각 제어합니다.",
    },
    {
      id: "04",
      title: "IoT 복합 센서 네트워크 관제",
      desc: "AI 비전 센서의 실시간 소비전력과 재실 감지 여부, 그리고 조도 센서가 측정하는 현재 공간의 밝기(Lux) 값을 딜레이 없이 수집하여 대시보드에 표기합니다.",
    },
    {
      id: "05",
      title: "기타 설비 및 기기 스위치 통합",
      desc: "조명 외에도 건물 내부에 연동된 환기 시스템, 냉난방기 등 기타 IoT 기기들의 전원 상태(ON/OFF)를 한곳에서 통합 관제하여 빌딩의 종합 두뇌 역할을 수행합니다.",
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
        {/* 💡 이미지 화질 최적화 섹션 (크기를 max-w-2xl로 축소하여 선명도 유지) */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 border border-slate-800 mb-16 relative overflow-hidden flex justify-center items-center">
          {/* 배경 은은한 푸른 빛 효과 */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          {/* ⭐️ 화질 저하 방지를 위해 max-w-2xl(너비 제한)을 주고, 그림자 효과로 고급스럽게 연출 */}
          <div className="relative w-full max-w-2xl rounded-2xl md:rounded-3xl border border-slate-700/60 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden bg-[#050b14]">
            <img
              src="/images/dashboard.png"
              alt="플로림 통합 관제 대시보드 전체 화면"
              className="w-full h-auto object-contain block mx-auto"
            />
          </div>
        </section>

        {/* 💡 복구된 풍성한 상세 기능 설명 영역 */}
        <section className="mb-20 relative z-10">
          <div className="text-left mb-10 border-l-4 border-flolim pl-3">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              통합 관제 플랫폼 주요 핵심 기능
            </h2>
            <p className="text-slate-400 font-light text-xs md:text-sm break-keep">
              웹 표준 기반 대시보드를 통해 현장의 모든 기기와 데이터를 실시간
              원격 제어합니다.
            </p>
          </div>

          {/* 세로 리스트 형태로 가독성 높게 전체 내용 복구 */}
          <div className="space-y-4">
            {dashboardFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#050b14] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-800 shadow-inner flex flex-col sm:flex-row gap-4 sm:gap-6 items-start hover:border-flolim/40 transition-colors cursor-default"
              >
                {/* 인덱스 번호 */}
                <span className="text-flolim font-mono font-black text-lg md:text-xl shrink-0 mt-0.5">
                  {feature.id}
                </span>

                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 break-keep">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed break-keep">
                    {feature.desc}
                  </p>
                </div>
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
