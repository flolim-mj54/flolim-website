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
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* 배경 장식 효과 */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>

          <div className="relative z-10">
            {/* 💡 상단 영역: 텍스트(좌) / 사진(우) */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-10">
              {/* 좌측: 타이틀 및 인사말 첫 줄 (사진 높이에 맞춰 하단 정렬되도록 flex-col justify-between 적용) */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div className="mb-8 md:mb-0">
                  <p className="text-flolim font-bold tracking-widest text-xs md:text-sm mb-4 uppercase">
                    The beginning of smart business
                  </p>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight break-keep">
                    "지속 가능한 비즈니스의 시작, <br />
                    <span className="text-flolim drop-shadow-[0_0_20px_rgba(24,169,198,0.5)]">
                      (주)플로림이 함께 하겠습니다."
                    </span>
                  </h2>
                </div>

                {/* 💡 사진의 하단 끝선에 맞춰지는 텍스트 */}
                <p className="text-lg md:text-xl text-white font-medium break-keep mt-auto">
                  안녕하십니까, 주식회사 플로림 대표이사 모근영입니다.
                </p>
              </div>

              {/* 우측: 대표 사진 영역 */}
              <div className="w-full max-w-[280px] md:max-w-[300px] shrink-0 mx-auto md:mx-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-flolim/10 rounded-2xl blur-[40px] pointer-events-none scale-105 opacity-70 transition-all duration-700"></div>
                  <img
                    src="/images/ceo.png"
                    alt="주식회사 플로림 대표이사 모근영"
                    className="relative z-10 w-full h-auto rounded-2xl border border-slate-700 shadow-xl object-cover drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>
            </div>

            {/* 💡 하단 영역: 사진 아래부터 전체 너비(100%)로 채워지는 본문 */}
            <div className="text-slate-300 font-light leading-relaxed text-sm md:text-base break-keep space-y-6">
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

              <div className="bg-[#050b14]/80 p-6 md:p-8 rounded-2xl border-l-4 border-l-flolim border-slate-700 shadow-inner my-8">
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

              <p>
                우리는 단순히 제품을 파는 것을 넘어, 고객사의 에너지 데이터를
                정밀하게 분석하여 실질적인 비용 혁신과 기업 가치 제고를 돕는
                기술 리더로서 소임을 다할 것입니다.
              </p>

              <p>
                변함없는 신뢰와 성원을 보내주시는 고객 여러분께 깊은 감사를
                드리며, 늘 건강과 행복이 가득하시기를 기원합니다.
              </p>
            </div>

            {/* 💡 우측 정렬된 서명 영역 */}
            <div className="pt-10 mt-10 border-t border-slate-800 flex flex-col items-end text-right">
              <p className="text-base md:text-lg text-slate-400 mb-1.5 font-medium">
                감사합니다.
              </p>
              <p className="text-xl md:text-2xl font-bold text-white tracking-wide">
                주식회사 플로림 대표이사 모근영
              </p>
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
