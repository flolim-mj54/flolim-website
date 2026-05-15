import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

export default function CompanyGreeting() {
  return (
    <div className="pb-10 relative overflow-hidden bg-[#020617] min-h-screen text-slate-200">
      <PageHeader
        category="Greeting"
        title="혁신적인 조명 제어, 그 중심에 플로림이 있습니다"
        subtitle={
          <>
            에너지 효율을 넘어 인간 중심의 스마트한 빛을 만듭니다.
            <br className="hidden md:block" />
            <strong className="text-white font-bold">플로림 대표이사</strong>의
            인사를 전합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 mb-10 mt-10">
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-800 relative overflow-hidden transition-all duration-300">
          {/* 배경 장식 효과 (Glow) */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-flolim/10 rounded-full blur-[100px] pointer-events-none z-0 opacity-70"></div>

          {/* 💡 2컬럼 레이아웃 적용: 사진(왼쪽), 인사말(오른쪽) */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20 relative z-10">
            {/* 💡 왼쪽: 대표 사진 영역 */}
            <div className="w-full md:w-5/12 lg:w-4/12 shrink-0">
              <div className="relative group">
                {/* 사진 뒤 부드러운 빛 효과 */}
                <div className="absolute inset-0 bg-flolim/10 rounded-full blur-[80px] pointer-events-none scale-125 opacity-70 group-hover:bg-flolim/20 transition-all duration-700"></div>

                <img
                  src="/images/ceo.png" // 💡 요청하신 파일명 반영
                  alt="주식회사 플로림 대표이사"
                  className="relative z-10 w-full max-w-[360px] mx-auto h-auto object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 drop-shadow-[0_15px_40px_rgba(24,169,198,0.3)] group-hover:scale-105"
                />

                {/* 하단 데코레이션 선 */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-flolim to-transparent opacity-60"></div>
              </div>
            </div>

            {/* 인사말 본문 영역 (오른쪽) */}
            <div className="w-full md:w-7/12 lg:w-8/12 space-y-6 md:space-y-8 text-slate-300 font-light leading-relaxed text-sm md:text-base break-keep">
              <p>
                안녕하십니까, <br />
                <strong className="text-white font-black text-xl md:text-2xl drop-shadow-sm tracking-tight transition-colors duration-300">
                  주식회사 플로림
                </strong>{" "}
                대표이사입니다.
              </p>

              <div className="relative p-6 bg-[#050b14] rounded-2xl border border-slate-700 shadow-inner group transition-colors duration-300 hover:border-flolim/30">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
                <h3 className="text-base md:text-xl font-bold text-white mb-5 group-hover:text-flolim transition-colors duration-300 relative z-10">
                  빛, 그 이상의 가치를 실현하는 플로림
                </h3>
                <p className="relative z-10 text-xs md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  조명은 단순히 어둠을 밝히는 도구를 넘어, 공간의 분위기를
                  결정하고 인간의 심리와 건강에 영향을 미치는 중요한 요소입니다.
                  플로림은 단순히 에너지를 절감하는 기술을 넘어, 사용자의
                  라이프스타일과 공간의 본질을 이해하는 인텔리전트 조명 제어
                  솔루션을 제공하고자 합니다.
                </p>
              </div>

              <p>
                우리는 끊임없는 R&D 투자와 차세대 IoT 기술인{" "}
                <strong className="text-flolim font-medium">
                  Matter over Thread
                </strong>
                의 선제적인 도입을 통해, 빌딩 전체를 그물망처럼 연결하는
                무중단·초고속 제어 인프라를 구축했습니다. 압도적인 광효율을
                자랑하는 LED 하드웨어와 지능형 센서 자동 제어가 결합된 플로림의
                솔루션은 최소한의 에너지만 사용하여 인간 중심의 고품질 조명
                환경을 완성합니다.
              </p>

              <p>
                또한, 관리자가 스마트폰이나 PC에서 도시 전체의 조명을 실시간으로
                관제하고 제어할 수 있는{" "}
                <strong className="text-flolim font-medium">
                  플랫폼(Platform)
                </strong>
                과 기업의 성과를 객관적인 데이터로 보여주는{" "}
                <strong className="text-flolim font-medium">ESG 리포트</strong>
                를 통해 비즈니스의 투명성과 지속 가능성을 높여드립니다.
              </p>

              <div className="bg-[#050b14] p-5 rounded-xl border border-slate-700 shadow-inner group hover:border-flolim/20 transition-colors duration-300">
                <p className="text-slate-300 text-[11px] md:text-xs">
                  <strong className="text-white">플로림</strong>은 단순히 제품을
                  파는 기업이 아닌, 빛의 가치를 새롭게 정의하고 고객과 함께
                  스마트한 미래를 만들어가는 파트너가 되겠습니다. 혁신적인
                  기술력과 인간을 향한 따뜻한 시선으로, 플로림만의 차별화된
                  스마트 시티·빌딩 조명 솔루션을 선보일 것을 약속드립니다.
                </p>
              </div>

              <p>
                변함없는 신뢰와 성원을 보내주시는 고객 여러분께 깊은 감사를
                드리며, 늘 건강과 행복이 가득하시기를 기원합니다.
              </p>

              <div className="mt-12 md:mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative">
                <div className="order-2 sm:order-1">
                  <p className="text-xs md:text-sm text-slate-500 font-light mb-1.5 break-keep">
                    인간과 환경을 생각하는 스마트 조명의 기준
                  </p>
                  <p className="text-flolim font-extrabold text-lg md:text-2xl drop-shadow-sm tracking-tighter">
                    주식회사 플로림{" "}
                    <span className="text-white font-light text-base md:text-xl ml-1">
                      임직원 일동
                    </span>
                  </p>
                </div>
                <div className="w-full sm:w-auto text-left sm:text-right order-1 sm:order-2 self-start sm:self-center">
                  <div className="relative inline-block">
                    <img
                      src="/images/logo-highefficiency-cutout.png"
                      alt="플로림 로고"
                      className="h-10 md:h-12 object-contain mix-blend-luminosity opacity-40 group-hover:opacity-70 group-hover:mix-blend-normal transition-all duration-300 drop-shadow-[0_0_10px_rgba(24,169,198,0.2)]"
                    />
                    <div className="absolute inset-0 bg-flolim/5 rounded-full blur-2xl group-hover:bg-flolim/10"></div>
                  </div>
                </div>
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
