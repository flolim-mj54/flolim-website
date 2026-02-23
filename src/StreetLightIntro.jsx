import React from "react";

const StreetLightIntro = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      {/* 1. 상단 배너 */}
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉{" "}
            <span className="text-[#1eb4c8] font-bold">가로등 제어 시스템</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            가로등 제어 시스템
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        {/* 2. 왼쪽 사이드바 (LNB) */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">
                가로등 제어 시스템
              </h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold"
                >
                  가로등 제어 시스템{" "}
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
                  LoRa-Mesh 솔루션
                </a>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  NB-IoT 솔루션
                </a>
              </li>
            </ul>
          </div>

        </aside>

        {/* 3. 오른쪽 메인 본문 */}
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            가로등 제어 시스템{" "}
            <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">
              Overview
            </span>
          </h2>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Overview
            </h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px]">
              플로림(FLOLIM)의 가로등 제어 시스템은 단순한 점/소등 방식을 넘어
              현장 상황과 주변 환경에 맞춰 조명을 능동적으로 제어하는 지능형
              통합 관제 솔루션입니다. LoRa-Mesh 및 NB-IoT 등 현장 규모와 예산에
              맞는 최적의 통신 방식을 선택하여 인프라를 구축할 수 있으며,
              관리자는 중앙 관제 센터에서 수만 개의 가로등 상태를 실시간으로
              모니터링하고 제어합니다.
            </p>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Feature
            </h3>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>
                스케줄링, 디밍(밝기 조절) 및 센서 연동을 통한 획기적인 에너지
                절감
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>고장,
                누전, 정전 등 이상 상태 실시간 감지로 유지보수 효율 극대화
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>통신비
                없는 LoRa-Mesh 자가망부터 전국망 NB-IoT까지 최적의 인프라 지원
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>직관적인
                UI/UX의 웹 기반 대시보드로 PC 및 모바일 원격 통합 관리
              </li>
            </ul>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              System Diagram
            </h3>
            <div className="w-full bg-slate-50 border border-slate-200 h-[300px] flex flex-col items-center justify-center">
              <span className="text-slate-400 font-bold tracking-widest mb-4">
                [ 통합 운영 구조도 이미지 삽입 영역 ]
              </span>
              <span className="text-sm text-slate-400">
                관제 서버 ↔ 통신망 ↔ 가로등 단말기
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StreetLightIntro;
