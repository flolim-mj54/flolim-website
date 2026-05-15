import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

export default function CompanyGreeting() {
  return (
    <div className="pb-10 relative overflow-hidden bg-[#020617] min-h-screen text-slate-200">
      <PageHeader
        category="Greeting"
        title="대표 인사말"
        subtitle={
          <>
            보이지 않는 에너지를 통제하여 기업의 내일을 밝히는 혁신을
            약속합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 mb-10 mt-10">
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* 배경 장식 효과 */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>

          {/* 💡 레이아웃: 텍스트(왼쪽), 사진(오른쪽) 배치 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16 relative z-10">
            {/* 왼쪽: 인사말 본문 영역 */}
            <div className="w-full md:w-7/12 lg:w-8/12 space-y-6 md:space-y-8 text-slate-300 font-light leading-relaxed text-sm md:text-base break-keep">
              <div className="mb-8 md:mb-10">
                <p className="text-flolim font-bold tracking-widest text-xs md:text-sm mb-4 uppercase">
                  The beginning of smart business
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight break-keep">
                  "지속 가능한 비즈니스의 시작, <br />
                  <span className="text-flolim drop-shadow-[0_0_20px_rgba(24,169,198,0.5)]">
                    (주)플로림이 함께 하겠습니다. "
                  </span>
                </h2>
              </div>

              <p className="text-lg md:text-xl text-white font-medium mb-4">
                안녕하십니까, 주식회사 플로림 대표입니다.
              </p>

              <p>
                과거의 에너지는 단순히 '소비'하는 대상이었습니다. 하지만 기후
                변화와 탄소 중립이 전 지구적 과제로 떠오른 지금, 에너지는 기업의
                생존과 성장을 결정짓는 가장 중요한 '관리'의 영역이 되었습니다.
              </p>

              <p>
                저희 플로림은{" "}
                <strong className="text-white font-medium">
                  세상을 밝히는 지능형 연결
                </strong>
                을 모토로, 지능형 데이터 분석과 첨단 IoT 센서 네트워크를
                결합하여 도시와 빌딩의 에너지를 가장 스마트하게 관리하는 혁신
                기술 기업입니다.
              </p>

              <div className="bg-[#050b14]/80 p-6 md:p-8 rounded-2xl border-l-4 border-l-flolim border-slate-700 shadow-inner">
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  특히, KEPCO ES 연계 ESCO 사업 모델을 통해 초기 투자비용{" "}
                  <strong className="text-flolim font-bold">0원</strong>으로
                  노후 조명을 교체하고,{" "}
                  <strong className="text-flolim font-bold">
                    최대 78%의 압도적인 에너지 절감
                  </strong>
                  을 달성할 수 있는 최적의 로드맵을 제공합니다.
                </p>
              </div>

              <p>
                탄소 중립과 ESG 경영의 든든한 파트너로서, 끊임없는 연구개발과
                완벽한 신뢰를 바탕으로 고객의 자산을 보호하고 지속 가능한 미래를
                앞당기는 통합 제어 솔루션을 제공하겠습니다.
              </p>

              {/* 💡 하단 서명: 대표이사로 수정 완료 */}
              <div className="pt-10 mt-10 border-t border-slate-800 flex flex-col items-start">
                <p className="text-base md:text-lg text-slate-400 mb-2 font-medium">
                  감사합니다.{" "}
                </p>
                <p className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  주식회사 플로림 대표이사
                </p>
              </div>
            </div>

            {/* 💡 오른쪽: 대표 사진 영역 (우측 배치) */}
            <div className="w-full md:w-5/12 lg:w-4/12 shrink-0 order-first md:order-last">
              <div className="relative group">
                <div className="absolute inset-0 bg-flolim/10 rounded-full blur-[80px] pointer-events-none scale-110 opacity-70 group-hover:bg-flolim/20 transition-all duration-700"></div>
                <img
                  src="/images/ceo.png"
                  alt="주식회사 플로림 대표이사"
                  className="relative z-10 w-full max-w-[320px] md:max-w-full mx-auto h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] transition-transform duration-500"
                />
                {/* 사진 하단 데코레이션 */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-flolim/30 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </section>

        <BottomNav
          prev={{
            label: "이전 페이지",
            title: "플로림 소개",
            path: "/company/intro",
          }}
          next={{ label: "다음 페이지", title: "조직도", path: "/company/org" }}
        />
      </div>
    </div>
  );
}
