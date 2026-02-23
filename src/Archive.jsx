import React from "react";
// 🚀 링크 이동을 위한 컴포넌트 추가
import { Link } from "react-router-dom";

const Archive = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 고객지원 〉{" "}
            <span className="text-[#1eb4c8] font-bold">자료실</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            자료실
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">고객지원</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                {/* 🚀 a 태그를 Link 태그로 변경하고 to="/archive" 적용 */}
                <Link
                  to="/archive"
                  className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold"
                >
                  자료실{" "}
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
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                {/* 🚀 a 태그를 Link 태그로 변경하고 to="/contact" 적용 */}
                <Link
                  to="/contact"
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  온라인 문의
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            자료실{" "}
            <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">
              Download
            </span>
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <thead className="bg-slate-50 border-b border-slate-300">
                <tr>
                  <th className="py-4 px-4 text-center font-bold text-slate-700 w-16">
                    No
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-slate-700 w-24">
                    분류
                  </th>
                  <th className="py-4 px-4 text-left font-bold text-slate-700">
                    제목
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-slate-700 w-32">
                    등록일
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-slate-700 w-24">
                    다운로드
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-center text-slate-500">3</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded">
                      카탈로그
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-800 font-medium cursor-pointer hover:text-[#1eb4c8]">
                    2024년 플로림 통합 솔루션 브로슈어
                  </td>
                  <td className="py-4 px-4 text-center text-slate-500">
                    2024.05.01
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button className="text-[#1eb4c8] border border-[#1eb4c8] px-3 py-1 text-xs hover:bg-[#1eb4c8] hover:text-white transition-colors">
                      PDF
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-center text-slate-500">2</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-cyan-100 text-[#1eb4c8] text-xs px-2 py-1 rounded">
                      매뉴얼
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-800 font-medium cursor-pointer hover:text-[#1eb4c8]">
                    LoRa-Mesh 단말기 설치 및 세팅 매뉴얼
                  </td>
                  <td className="py-4 px-4 text-center text-slate-500">
                    2024.03.15
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button className="text-[#1eb4c8] border border-[#1eb4c8] px-3 py-1 text-xs hover:bg-[#1eb4c8] hover:text-white transition-colors">
                      PDF
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-center text-slate-500">1</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded">
                      인증서
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-800 font-medium cursor-pointer hover:text-[#1eb4c8]">
                    가로등 제어 단말기 KC 인증서 및 시험성적서
                  </td>
                  <td className="py-4 px-4 text-center text-slate-500">
                    2024.01.20
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button className="text-[#1eb4c8] border border-[#1eb4c8] px-3 py-1 text-xs hover:bg-[#1eb4c8] hover:text-white transition-colors">
                      ZIP
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 페이징 영역 */}
          <div className="flex justify-center mt-8 space-x-2">
            <button className="w-8 h-8 flex items-center justify-center border border-slate-300 text-slate-500 hover:bg-slate-100">
              &lt;
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-[#1eb4c8] bg-[#1eb4c8] text-white font-bold">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-300 text-slate-500 hover:bg-slate-100">
              &gt;
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Archive;