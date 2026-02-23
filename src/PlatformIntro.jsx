import React from "react";

const PlatformIntro = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉{" "}
            <span className="text-[#1eb4c8] font-bold">통합 관제 플랫폼</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            통합 관제 플랫폼
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">관제 플랫폼</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold"
                >
                  통합 관제 플랫폼{" "}
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
              <li className="border-b border-slate-200 last:border-0">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  모니터링 대시보드
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            통합 관제 플랫폼{" "}
            <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">
              Overview
            </span>
          </h2>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Overview
            </h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px]">
              플로림 통합 관제 플랫폼은 수만 개의 스마트 가로등과 실내외 LED
              조명을 중앙에서 한눈에 통제할 수 있는 강력한 클라우드 기반
              소프트웨어입니다. 복잡한 통신 데이터와 센서 정보를 직관적으로
              시각화하여, 관리자가 PC나 모바일 환경 어디서든 즉각적인 의사결정을
              내릴 수 있도록 지원합니다.
            </p>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Feature
            </h3>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>
                클라우드(AWS) 기반 구축으로 뛰어난 서버 안정성 및 데이터 보안
                제공
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>수집된
                전력 소비 데이터를 분석하여 최적의 에너지 절감 스케줄 자동 추천
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>이기종
                디바이스(LoRa, NB-IoT, Matter) 통합 연동 API 지원
              </li>
            </ul>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Platform Architecture
            </h3>
            <div className="w-full bg-slate-50 border border-slate-200 h-[300px] flex flex-col items-center justify-center">
              <span className="text-slate-400 font-bold tracking-widest mb-4">
                [ 클라우드 서버 아키텍처 다이어그램 삽입 영역 ]
              </span>
              <span className="text-sm text-slate-400">
                디바이스 데이터 수집 ➡️ 클라우드 서버 분석 ➡️ 웹 대시보드 출력
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlatformIntro;
