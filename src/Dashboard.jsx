import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 통합 관제 플랫폼 〉{" "}
            <span className="text-[#1eb4c8] font-bold">모니터링 대시보드</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            모니터링 대시보드
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
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  통합 관제 플랫폼
                </a>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold"
                >
                  모니터링 대시보드{" "}
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
            모니터링 대시보드{" "}
            <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">
              UI & Feature
            </span>
          </h2>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Dashboard UI
            </h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-6">
              실제 관리자가 사용하는 웹 기반 대시보드 화면입니다. GIS(지도)
              기반의 직관적인 인터페이스를 통해 현장에 가지 않고도 전 세계
              어디서든 조명 상태를 파악하고 원격 제어할 수 있습니다.
            </p>
            {/* 🖼 대시보드 스크린샷 삽입 영역 */}
            <div className="w-full bg-slate-800 border-4 border-slate-300 rounded-lg p-2 flex flex-col items-center justify-center min-h-[450px] shadow-xl relative overflow-hidden">
              <span className="text-slate-400 font-bold tracking-widest mb-4 z-10">
                [ 실제 대시보드 캡처 화면 삽입 영역 ]
              </span>
              <span className="text-sm text-slate-500 z-10">
                어두운 테마의 관제 화면 이미지를 넣어주세요.
              </span>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">
              Key Functions
            </h3>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>
                <b>GIS 지도 맵핑:</b> 지도 상에 가로등의 정확한 위치 및 실시간
                점/소등 상태 표시
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>
                <b>원격 디밍 및 스케줄링:</b> 그룹 단위 또는 개별 단위의 밝기
                조절 및 일출/일몰 시간 연동
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>
                <b>경보 알림(Alarm):</b> 정전, 누전, 통신 단절 등 이상 발생 시
                즉각적인 팝업 및 SMS 알림
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold">■</span>
                <b>통계 리포트:</b> 일간/월간 전력 사용량 및 절감액 통계 그래프
                제공 (엑셀 다운로드)
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
