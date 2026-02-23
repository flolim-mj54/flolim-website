import React from "react";
import { Link } from "react-router-dom";

const SmartLedIntro = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 <span className="text-[#1eb4c8] font-bold">스마트 LED 전등 제어 시스템</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">스마트 LED 전등 제어 시스템</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">스마트 LED 제어</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200"><Link to="/led-intro" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">스마트 LED 제어 시스템 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></Link></li>
              <li className="border-b border-slate-200"><Link to="/esco" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">켑코이에스 연계 사업</Link></li>
              <li className="border-b border-slate-200 last:border-0"><Link to="/led-solution" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">스마트 LED 제어 솔루션</Link></li>
            </ul>
          </div>
        </aside>
        
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            스마트 LED 제어 시스템 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Overview</span>
          </h2>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              플로림(FLOLIM)의 스마트 LED 전등 제어 시스템은 최신 사물인터넷(IoT) 통신 기술과 <b>독립형 로컬 서버(On-Premise)</b>를 결합한 초고신뢰성 실내외 조명 관제 솔루션입니다.
              <br/><br/>
              기존의 클라우드 의존형 시스템이 갖는 '외부 인터넷망 단절 시 제어 불가' 및 '데이터 해킹 위험'이라는 치명적인 단점을 완벽히 해결했습니다. 현장 내부에 자체 서버를 구축하여 어떤 재난 상황에서도 <b>100% 무중단 엣지(Edge) 제어</b>가 가능하며, 강력한 폐쇄망 보안을 통해 공공기관, 대형 빌딩, 보안 시설에 가장 최적화된 스마트 조명 환경을 제공합니다.
            </p>

            {/* 🖼️ 메인 비주얼/3D 영상 삽입 영역 */}
            <div className="w-full aspect-video bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
              <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-bold tracking-wide">[ 스마트 빌딩/공장 LED 제어 3D 영상 또는 하이라이트 이미지 삽입 ]</span>
              <span className="text-sm mt-1">로컬 서버를 중심으로 건물 전체 조명이 매끄럽게 연동되는 시각 자료를 추천합니다.</span>
            </div>
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Key Benefits</h3>
            <ul className="space-y-4 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">외부망 단절에도 끄떡없는 무중단 제어</b>
                  통신사 장애나 외부 인터넷망이 끊겨도 현장에 구축된 로컬 서버가 자체적으로 스케줄 및 센서 연동 로직을 실행하여 중단 없는 조명 제어를 보장합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">데이터 유출 원천 차단 (강력한 보안)</b>
                  모든 관제 데이터와 조작 권한이 클라우드가 아닌 내부 폐쇄망에 저장되므로, 외부 해킹이나 정보 유출 위험으로부터 100% 안전합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">국제 표준 Matter 프로토콜 적용</b>
                  차세대 스마트홈/빌딩 표준인 Matter를 지원하여 특정 제조사에 얽매이지 않고 다양한 센서 및 조명 기기를 자유롭게 확장하고 연동할 수 있습니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">복합 센서 연동을 통한 지능형 절감</b>
                  사용자의 재실 유무(동체 감지)와 자연 채광량(조도 센서)을 실시간으로 감지하여 자동으로 디밍(밝기 조절)을 수행해 에너지 효율을 극대화합니다.
                </div>
              </li>
            </ul>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default SmartLedIntro;