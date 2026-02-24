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
              {/* 🚀 수정된 카피 반영 */}
              <strong className="text-lg text-slate-800 block mb-3">누구나 쉽게 읽고 다루는 직관적인 대시보드</strong>
              복잡한 수치와 장비 상태를 누구나 한눈에 파악할 수 있도록 직관적인 화면 디자인에 초점을 맞추었습니다. 
              <br/><br/>
              장시간 화면을 쳐다봐야 하는 관리자의 눈 피로를 덜어주기 위해 고급스러운 <b>'다크 모드(Dark Mode)'</b> 테마를 기본으로 제공합니다. PC 웹 화면은 물론, 현장에서 들고 다니는 태블릿이나 스마트폰에서도 화면 깨짐 없이 완벽하게 반응하여 언제 어디서나 쾌적하게 조명을 관리할 수 있습니다.
            </p>

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
              
              {/* 🚀 수정된 4가지 핵심 기능 블록 반영 */}
              <div className="border border-slate-200 p-6 bg-slate-50">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🗺️</span>
                  <h4 className="font-bold text-slate-800 text-lg">지도와 도면 위에서 한눈에 확인하는 위치 관제</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed break-keep">
                  야외 가로등은 실제 지도(GIS) 위에, 실내 스마트 LED는 건물의 평면도 위에 조명의 위치를 핀(Pin) 형태로 정확히 표시합니다. 조명이 켜져 있는지, 꺼져 있는지, 통신이 끊겼는지를 색상만으로 직관적으로 파악할 수 있습니다.
                </p>
              </div>

              <div className="border border-slate-200 p-6 bg-slate-50">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">⚙️</span>
                  <h4 className="font-bold text-slate-800 text-lg">상황에 맞춰 자유롭게 조절하는 밝기와 스케줄</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed break-keep">
                  개별 조명 하나하나 또는 특정 그룹을 묶어 0~100%까지 세밀하게 밝기를 조절할 수 있습니다. 특정 시간대, 요일, 일출과 일몰 시간에 맞춰 알아서 조명이 켜지고 꺼지도록 간편하게 자동 스케줄을 설정합니다.
                </p>
              </div>

              <div className="border border-slate-200 p-6 bg-slate-50">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🚨</span>
                  <h4 className="font-bold text-slate-800 text-lg">고장 나기 전에 미리 알려주는 스마트 알림</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed break-keep">
                  기기의 통신이 끊기거나, 전압 이상, 램프 고장 등 문제가 감지되면 즉시 대시보드 화면에 빨간색 경고 알람을 띄우고 담당자의 휴대전화로 알림을 발송하여 신속한 조치를 돕습니다.
                </p>
              </div>

              <div className="border border-slate-200 p-6 bg-slate-50">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">📊</span>
                  <h4 className="font-bold text-slate-800 text-lg">클릭 한 번으로 뽑아보는 에너지 절감 리포트</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed break-keep">
                  조명들이 보내온 데이터를 취합하여 일간, 주간, 월간 전력 사용량과 에너지 절감률을 보기 쉬운 그래프로 제공합니다. 필요할 경우 모든 상세 데이터(Raw Data)를 엑셀 파일로 다운로드하여 보고서 작성에 바로 활용할 수 있습니다.
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