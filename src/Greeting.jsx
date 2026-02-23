import React from "react";

const Greeting = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      {/* 상단 배너 */}
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 회사소개 〉{" "}
            <span className="text-[#1eb4c8] font-bold">인사말</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            인사말
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        {/* 왼쪽 사이드바 */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">회사소개</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold"
                >
                  인사말{" "}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="border-b border-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  연혁
                </a>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  오시는 길
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* 오른쪽 메인 본문 */}
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            인사말{" "}
            <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">
              CEO Message
            </span>
          </h2>

          <div className="mb-10 text-xl font-bold text-[#1eb4c8] leading-relaxed break-keep">
            "빛을 넘어 공간을 혁신하는 스마트 관제 시스템의 표준,
            <br />
            플로림(FLOLIM)이 미래 도시의 인프라를 새롭게 정의합니다."
          </div>

          <div className="space-y-6 text-[15px] text-slate-700 leading-loose break-keep">
            <p>
              안녕하십니까, 주식회사 플로림 홈페이지를 방문해 주셔서 진심으로
              감사드립니다.
            </p>
            <p>
              플로림(FLOLIM)은 4차 산업혁명 시대의 핵심 인프라인{" "}
              <b>스마트 조명 제어 솔루션 및 통합 관제 플랫폼 전문 기업</b>
              입니다. 단순한 조명을 넘어 LoRa-Mesh, NB-IoT, Matter 등 최신 IoT
              통신 기술을 융합하여, 사람과 공간, 그리고 에너지를 가장 효율적으로
              연결하는 최적의 솔루션을 제공하고 있습니다.
            </p>
            <p>
              지속 가능한 환경과 에너지 절감이 전 세계적인 화두로 떠오른 지금,
              플로림은 <b>켑코이에스(ESCO) 연계 사업</b>을 비롯한 혁신적인
              비즈니스 모델을 통해 고객의 초기 투자 비용 부담을 최소화하고
              극대화된 가치를 돌려드리고 있습니다. 수많은 현장에서 검증된
              기술력과 무결점의 하드웨어, 그리고 강력한 클라우드 플랫폼이 우리의
              자부심입니다.
            </p>
            <p>
              앞으로도 플로림은 끊임없는 R&D 투자와 기술 혁신을 통해 대한민국을
              넘어 세계 시장을 선도하는 스마트 시티 인프라의 글로벌 파트너로
              도약하겠습니다. 고객 여러분의 변함없는 성원과 관심을 부탁드립니다.
            </p>
            <p className="mt-8 font-bold text-lg text-slate-800 text-right">
              주식회사 플로림 대표이사{" "}
              <span className="text-2xl font-black ml-4">[대 표 이 름]</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Greeting;
