import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 통합 관제 플랫폼 〉 <span className="text-[#1eb4c8] font-bold">대시보드</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">모니터링 대시보드</h1>
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
                <Link to="/platform" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">
                  플랫폼 소개
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/dashboard" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">
                  대시보드 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            모니터링 대시보드 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">UI & Feature</span>
          </h2>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Dashboard Concept</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              관리자가 실제로 마주하게 될 플로림 관제 시스템의 프론트엔드(화면)입니다. 
              <br/>
              복잡한 수치와 장비 상태를 누구나 쉽게 파악할 수 있도록 <b>직관적인 데이터 시각화(Data Visualization)</b>에 초점을 맞추었습니다. 장시간 모니터링 시 눈의 피로를 덜어주는 다크 모드(Dark Mode) 테마를 기본으로 제공하며, 클라우드 환경(PC 웹)과 로컬 엣지 환경(태블릿/스마트폰) 모두에서 깨짐 없이 완벽하게 반응형으로 작동합니다.
            </p>

            {/* 🖼 대시보드 스크린샷 삽입 영역 */}
            <div className="w-full bg-slate-900 border-4 border-slate-300 rounded-lg p-2 flex flex-col items-center justify-center min-h-[450px] shadow-xl relative overflow-hidden group hover:border-[#1eb4c8] transition-colors">
              <svg className="w-16 h-16 text-slate-600 mb-4 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="text-slate-400 font-bold tracking-widest mb-2 z-10">
                [ 웹 기반 모니터링 대시보드 UI 화면 삽입 영역 ]
              </span>
              <span className="text-sm text-slate-500 z-10 text-center">
                실제 개발 예정인 다크 모드 기반의 고급스러운 관제 화면 목업(Mock-up)을 넣어주세요.
              </span>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Key Functions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="border border-slate-200 p-6 bg-slate-50">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🗺️</span>
                  <h4 className="font-bold text-slate-800 text-lg">위치 기반 맵핑 관제</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  가로등은 GIS(지도) API와 연동하여, 실내 스마트 LED는 빌딩 평면도와 연동하여 조명의 위치를 핀(Pin) 형태로 표시합니다. 점/소등 및 오프라인 상태를 직관적인 색상으로 한눈에 파악할 수 있습니다.
                </p>
              </div>

              <div className="border border-slate-200 p-6 bg-slate-50">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">⚙️</span>
                  <h4 className="font-bold text-slate-800 text-lg">원격 디밍 & 스케줄링</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  개별 또는 그룹 단위로 0~100%의 세밀한 밝기 조절 명령을 즉시 전송합니다. 관리자가 특정 시간대, 요일, 일출/일몰 데이터에 맞춰 간편하게 스케줄 로직을 설정할 수 있습니다.
                </p>
              </div>

              {/* 🚀 무선 통신 환경(단말기 자체 미터기 기반)에 맞게 에러 진단 내용 현실화 */}
              <div className="border border-slate-200 p-6 bg-slate-50">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🚨</span>
                  <h4 className="font-bold text-slate-800 text-lg">단말기 상태 진단 및 경보</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  서버 응답 지연(오프라인), 단말기 내장 미터기 기반의 전압 이상(과/저전압), 비정상적 전류 강하(램프 고장 판단) 감지 시 대시보드에 적색 알람을 띄우고 담당자에게 알림을 발송합니다.
                </p>
              </div>

              <div className="border border-slate-200 p-6 bg-slate-50">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">📊</span>
                  <h4 className="font-bold text-slate-800 text-lg">전력 통계 및 리포트 추출</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  단말기들이 보고한 데이터를 취합하여 일/주/월간 전력 사용량 및 절감률을 그래프 위젯으로 제공합니다. 관리자는 모든 로우 데이터(Raw Data)를 엑셀 파일로 다운로드하여 분석할 수 있습니다.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;