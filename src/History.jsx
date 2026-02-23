import React from "react";

const History = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 회사소개 〉{" "}
            <span className="text-[#1eb4c8] font-bold">연혁</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            연혁
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">회사소개</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  인사말
                </a>
              </li>
              <li className="border-b border-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold"
                >
                  연혁{" "}
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
                  오시는 길
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-12 pb-4 border-b-2 border-slate-200">
            연혁{" "}
            <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">
              History
            </span>
          </h2>

          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 pl-8 space-y-12">
            {/* 2024년 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#1eb4c8] border-4 border-white shadow"></div>
              <h3 className="text-3xl font-black text-[#1eb4c8] tracking-tight mb-4">
                2024
              </h3>
              <ul className="space-y-4 text-[15px] text-slate-700 font-medium">
                <li className="flex">
                  <span className="w-16 font-bold text-slate-800 shrink-0">
                    10월
                  </span>{" "}
                  플로림 통합 관제 플랫폼 V2.0 클라우드 오픈
                </li>
                <li className="flex">
                  <span className="w-16 font-bold text-slate-800 shrink-0">
                    07월
                  </span>{" "}
                  한국전력 켑코이에스(ESCO) 연계 스마트 조명 교체 사업 파트너십
                  체결
                </li>
                <li className="flex">
                  <span className="w-16 font-bold text-slate-800 shrink-0">
                    03월
                  </span>{" "}
                  Matter 기반 스마트 LED 전등 제어 솔루션 출시
                </li>
              </ul>
            </div>

            {/* 2023년 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-300 border-4 border-white"></div>
              <h3 className="text-3xl font-black text-slate-400 tracking-tight mb-4">
                2023
              </h3>
              <ul className="space-y-4 text-[15px] text-slate-700 font-medium">
                <li className="flex">
                  <span className="w-16 font-bold text-slate-800 shrink-0">
                    11월
                  </span>{" "}
                  전국망 NB-IoT 스마트 가로등 제어 시스템 구축 완료
                </li>
                <li className="flex">
                  <span className="w-16 font-bold text-slate-800 shrink-0">
                    05월
                  </span>{" "}
                  자체망 LoRa-Mesh 무선 제어 단말기 KC 인증 획득
                </li>
                <li className="flex">
                  <span className="w-16 font-bold text-slate-800 shrink-0">
                    01월
                  </span>{" "}
                  기업부설 연구소 설립 및 R&D 센터 확장
                </li>
              </ul>
            </div>

            {/* 2022년 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-300 border-4 border-white"></div>
              <h3 className="text-3xl font-black text-slate-400 tracking-tight mb-4">
                2022
              </h3>
              <ul className="space-y-4 text-[15px] text-slate-700 font-medium">
                <li className="flex">
                  <span className="w-16 font-bold text-slate-800 shrink-0">
                    09월
                  </span>{" "}
                  플로림(FLOLIM) 스마트 솔루션 사업부 발족
                </li>
                <li className="flex">
                  <span className="w-16 font-bold text-slate-800 shrink-0">
                    04월
                  </span>{" "}
                  주식회사 플로림 법인 설립
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
