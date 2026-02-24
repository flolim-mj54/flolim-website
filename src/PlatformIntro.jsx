import React from "react";
import { Link } from "react-router-dom";

const PlatformIntro = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 <span className="text-[#1eb4c8] font-bold">통합 관제 플랫폼</span>
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
                  통합 관제 플랫폼 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/dashboard" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">
                  모니터링 대시보드
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
              특히, 현장의 특성과 보안 요구사항에 맞춰 <b>'클라우드(Cloud)'</b>와 <b>'로컬 서버(On-Premise)'</b> 방식을 모두 지원하는 <b>유연한 하이브리드 아키텍처</b>를 자랑합니다. 광역 단위의 가로등 제어는 클라우드를 통해 무한한 확장성을 제공하며, 빌딩 및 공장 내부의 스마트 LED 제어는 독립된 로컬 서버를 통해 강력한 보안과 무중단 제어 환경을 완벽하게 보장합니다.
            </p>

            {/* 🖼️ 플랫폼 메인 비주얼 삽입 영역 */}
            <div className="w-full aspect-video bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
              <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="font-bold tracking-wide">[ 하이브리드 플랫폼 개념을 나타내는 고화질 이미지 또는 3D 영상 ]</span>
              <span className="text-sm mt-1">클라우드와 로컬 서버가 유기적으로 연동되는 소프트웨어 이미지를 추천합니다.</span>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Key Features</h3>
            <ul className="space-y-4 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">현장 맞춤형 하이브리드 서버 구축</b>
                  가로등 시스템은 AWS 기반의 클라우드로 글로벌 접근성을 확보하고, 실내 LED 시스템은 폐쇄망 로컬 서버로 구축하여 고객사의 네트워크 환경에 100% 대응합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">이기종 통신 프로토콜 완벽 통합</b>
                  LoRa, NB-IoT, Matter, Wi-Fi 등 서로 다른 통신 방식을 사용하는 단말기들도 하나의 플랫폼 안에서 동일한 UI로 제어하고 모니터링할 수 있습니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">빅데이터 기반 에너지 최적화</b>
                  수집된 전력 사용량 및 센서 감지 데이터를 플랫폼 엔진이 분석하여, 가장 전력 효율이 높은 디밍 스케줄을 관리자에게 자동으로 제안합니다.
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Platform Architecture</h3>
            <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-8 flex flex-col items-center justify-center min-h-[350px]">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              <span className="text-slate-500 font-bold tracking-widest block mb-2">[ 클라우드 & 로컬 서버 듀얼 아키텍처 다이어그램 삽입 영역 ]</span>
              <span className="text-sm text-slate-400 text-center">가로등(Cloud 연동)과 스마트 LED(Local 연동)가 하나로 묶이는 개념도를 넣어주세요.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlatformIntro;