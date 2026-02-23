import React from "react";

const NbIotSolution = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      {/* 1. 상단 배너 */}
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 가로등 제어 시스템 〉{" "}
            <span className="text-[#1eb4c8] font-bold">NB-IoT 솔루션</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            NB-IoT 스마트 가로등 제어 솔루션
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        {/* 2. 왼쪽 사이드바 */}
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
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  가로등 제어 시스템
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
                  className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold"
                >
                  NB-IoT 솔루션{" "}
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
            </ul>
          </div>

        </aside>

        {/* 3. 오른쪽 메인 본문 */}
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            NB-IoT 솔루션{" "}
            <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">
              Specification
            </span>
          </h2>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Overview
            </h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px]">
              NB-IoT(협대역 사물인터넷) 솔루션은 기존 이동통신사의 전국망
              기지국을 그대로 활용하여 통신하는 방식입니다.{" "}
              <b>초기 중계기(게이트웨이) 구축 비용이 발생하지 않으며</b>, 단말기
              하나만 설치하면 스마트폰이 터지는 전국 어디서나 즉시 서버와
              연결됩니다.
            </p>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Feature
            </h3>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>
                게이트웨이/중계기 설치 불필요 (초기 인프라 비용 절감)
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>통신사
                상용망 활용으로 산간/오지 등 음영 지역 최소화
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>가로등
                1:1 개별 직접 통신으로 장애 발생 시 독립적 대응 가능
              </li>
            </ul>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              System Diagram
            </h3>
            <div className="w-full bg-slate-50 border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="text-center">
                <svg
                  className="w-16 h-16 text-slate-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-slate-400 font-bold tracking-widest block mb-2">
                  [ NB-IoT 통신 구조도 이미지 삽입 영역 ]
                </span>
                <span className="text-sm text-slate-400">
                  관제 서버 ↔ 통신사 기지국(LTE) ↔ NB-IoT 개별 단말기
                </span>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Hardware Spec
            </h3>
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700 w-1/4">
                    통신 방식
                  </th>
                  <td className="py-3 px-4 text-slate-600">
                    NB-IoT (이동통신사 상용망)
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">
                    USIM 형태
                  </th>
                  <td className="py-3 px-4 text-slate-600">
                    내장형 / 외장형 USIM 지원
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">
                    입력 전압 / 디밍
                  </th>
                  <td className="py-3 px-4 text-slate-600">
                    AC 100~240V / 0-10V DC Dimming
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NbIotSolution;
