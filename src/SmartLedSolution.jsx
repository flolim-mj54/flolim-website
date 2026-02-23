import React from "react";

const SmartLedSolution = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 스마트 LED 전등 제어 시스템 〉{" "}
            <span className="text-[#1eb4c8] font-bold">
              스마트 LED 제어 솔루션
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            스마트 LED 제어 솔루션
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">
                스마트 LED 제어
              </h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  스마트 LED 제어 시스템
                </a>
              </li>
              <li className="border-b border-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  켑코이에스 연계 사업
                </a>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold"
                >
                  스마트 LED 제어 솔루션{" "}
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

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            스마트 LED 제어 솔루션{" "}
            <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">
              Specification
            </span>
          </h2>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Overview
            </h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px]">
              플로림(FLOLIM) 스마트 LED 제어 솔루션은 조명 기구에 직접 이식되는
              초소형 <b>무선 제어 모듈(디밍 컨트롤러)</b>과 주변 환경을 감지하는{" "}
              <b>복합 센서(동체/조도)</b>로 구성된 하드웨어 시스템입니다. 기존
              시스템의 복잡한 릴레이 배선 방식에서 벗어나, 모듈 간 무선 통신을
              통해 구축 비용을 낮추고 완벽한 개별/그룹 제어를 실현합니다.
            </p>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Hardware Spec
            </h3>
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700 w-1/4">
                    통신 프로토콜
                  </th>
                  <td className="py-3 px-4 text-slate-600">
                    Matter 기반 무선 통신 (Wi-Fi, Thread 호환)
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">
                    디밍 출력 방식
                  </th>
                  <td className="py-3 px-4 text-slate-600">
                    0~10V DC Dimming, PWM 제어, DALI 지원
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">
                    입력 전압
                  </th>
                  <td className="py-3 px-4 text-slate-600">
                    AC 100~240V (50/60Hz)
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">
                    센서 스펙
                  </th>
                  <td className="py-3 px-4 text-slate-600">
                    PIR 동체 감지 센서 (감지 반경 최대 8m) / 포토 조도 센서 내장
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

export default SmartLedSolution;
