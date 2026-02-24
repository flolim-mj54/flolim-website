import React from "react";
import { Link } from "react-router-dom";

const PlatformIntro = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 통합 관제 플랫폼 〉 <span className="text-[#1eb4c8] font-bold">플랫폼 소개</span>
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
                <Link to="/platform" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">
                  플랫폼 소개 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/dashboard" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">
                  대시보드
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            통합 관제 플랫폼 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Overview</span>
          </h2>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              플로림(FLOLIM) 통합 관제 플랫폼은 수만 개의 조명 인프라를 중앙에서 직관적으로 통제할 수 있는 강력한 시스템 소프트웨어입니다. 
              <br/><br/>
              관리 대상의 특성에 따라 <b>'클라우드(Cloud)'</b> 기반의 광역 가로등 제어 환경과 <b>'로컬 서버(On-Premise)'</b> 기반의 실내외 스마트 LED 제어 환경을 각각 완벽하게 독립적으로 지원합니다. 사용자(관리자)는 어떤 환경으로 구축되든 플로림이 제공하는 일관되고 직관적인 인터페이스를 통해 편리하게 조명을 통제할 수 있습니다.
            </p>

            {/* 🖼️ 플랫폼 메인 비주얼 삽입 영역 */}
            <div className="w-full aspect-video bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
              <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="font-bold tracking-wide">[ 관제 플랫폼 메인 대시보드 화면 또는 대표 홍보 영상 삽입 영역 ]</span>
              <span className="text-sm mt-1">플로림 소프트웨어의 깔끔하고 전문적인 UI를 보여주는 시각 자료를 추천합니다.</span>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Key Features</h3>
            <ul className="space-y-4 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">현장 맞춤형 독립 운영 아키텍처</b>
                  광역 단위의 관제가 필요한 가로등은 접근성이 뛰어난 클라우드로 구축하고, 완벽한 보안이 필요한 실내 LED 시스템은 폐쇄망 로컬 서버로 구축하여 각 현장에 가장 최적화된 독립된 환경을 제공합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">통합된 UI 및 이기종 통신 호환성</b>
                  LoRa, NB-IoT, Matter 등 하부 통신 방식이 달라도, 관리자는 하나의 플랫폼이 제공하는 통일된 화면 인터페이스를 통해 이질감 없이 조명을 제어할 수 있습니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">데이터 통계 리포트 및 운영 최적화</b>
                  구역별 전력 사용량, 에너지 절감액, 에러 발생 내역 등을 알기 쉬운 통계 리포트 형태로 제공합니다. 관리자는 이 명확한 데이터를 바탕으로 스케줄과 디밍 수치를 유연하게 직접 조정하여 시스템을 고도화할 수 있습니다.
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Platform Architecture</h3>
            <p className="text-slate-600 mb-6 text-[15px] break-keep">
              플로림 플랫폼은 도입 환경의 특성에 따라 다음과 같이 두 가지 <b>독립적인 시스템 운영 구조</b>를 유연하게 지원합니다.
            </p>
            
            {/* 🚀 분할된 아키텍처 다이어그램 영역 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. 클라우드 아키텍처 (가로등) */}
              <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-6 flex flex-col items-center justify-center min-h-[300px] hover:bg-white transition-colors">
                <span className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-2xl mb-4 shadow-sm">☁️</span>
                <span className="text-slate-700 font-bold tracking-wide mb-2 text-center text-lg">가로등 제어 시스템<br/><span className="text-[#1eb4c8] text-sm">(Cloud Server)</span></span>
                <span className="text-sm text-slate-500 text-center mt-3 break-keep px-4">
                  외부망을 통해 광역 단위의 LoRa / NB-IoT 단말기를 원격 제어하는 시스템 구성도를 넣어주세요.
                </span>
              </div>
              
              {/* 2. 로컬 아키텍처 (스마트 LED) */}
              <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-6 flex flex-col items-center justify-center min-h-[300px] hover:bg-white transition-colors">
                <span className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-2xl mb-4 shadow-sm">🏢</span>
                <span className="text-slate-700 font-bold tracking-wide mb-2 text-center text-lg">스마트 LED 제어 시스템<br/><span className="text-[#1eb4c8] text-sm">(Local Server)</span></span>
                <span className="text-sm text-slate-500 text-center mt-3 break-keep px-4">
                  폐쇄망 내부에 설치된 엣지 서버와 단말기 간의 100% 무중단 독립 운영 구성도를 넣어주세요.
                </span>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlatformIntro;