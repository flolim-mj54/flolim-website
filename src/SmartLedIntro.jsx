import React from "react";
import { Link } from "react-router-dom";

const SmartLedIntro = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 스마트 LED 전등 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">시스템 개요</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">스마트 LED 전등 제어 시스템</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-[280px] flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">스마트 LED 전등 제어 시스템</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <Link to="/led-intro" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] tracking-tight bg-cyan-50 text-[#1eb4c8] font-bold whitespace-nowrap">
                  시스템 개요 <svg className="w-4 h-4 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              <li className="border-b border-slate-200">
                <Link to="/esco" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  ESCO 연계 사업
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/led-solution" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  스마트 LED 솔루션
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            스마트 LED 전등 제어 시스템 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Overview</span>
          </h2>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              <strong className="text-lg text-slate-800 block mb-3">끊기지 않는 연결, 샐 틈 없는 보안의 스마트 조명 제어</strong>
              플로림(FLOLIM)의 스마트 LED 전등 제어 시스템은 최신 사물인터넷(IoT) 기술에 현장 전용 서버(On-Premise)를 결합하여, 실내외 조명을 가장 안전하고 확실하게 관리하는 솔루션입니다.
              <br/><br/>
              외부 인터넷이 끊기면 조명 제어까지 멈추거나 해킹에 노출될 수 있는 기존 클라우드 방식의 불안함을 완벽히 해결했습니다. 건물 내부에 독립적인 자체 서버를 구축하여, 어떤 비상 상황에서도 조명이 꺼지지 않는 <b>100% 무중단 제어</b>를 실현합니다. 외부와 철저히 차단된 강력한 보안망을 갖춰 공공기관, 대형 빌딩, 보안 시설에 최적화된 환경을 제공합니다.
            </p>
            <div className="w-full aspect-video bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors p-6 text-center">
              <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <span className="font-bold tracking-wide mb-2 text-slate-600">[ 스마트 LED 로컬 보안 서버(On-Premise) 3D 조감도 삽입 영역 ]</span>
              <span className="text-sm text-slate-500 break-keep">건물이나 공장을 3D로 보여주면서, 중앙의 <b>'로컬 서버(자물쇠 아이콘 등 보안 강조)'</b>를 중심으로 건물 전체의 조명이 안전하게 연결되어 돌아가는 모습을 보여주는 시각 자료를 권장합니다.</span>
            </div>
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Key Benefits</h3>
            <ul className="space-y-5 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">통신 장애에도 끄떡없는 100% 무중단 제어</b>
                  외부 인터넷이 끊기거나 통신사 장애가 발생해도 걱정 없습니다. 현장에 설치된 단독 서버가 정해진 스케줄과 센서에 따라 독립적으로 작동하여, 언제 어떤 상황에서도 안정적으로 조명을 제어합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">해킹과 데이터 유출을 원천 차단하는 강력한 보안</b>
                  모든 데이터와 제어 권한을 외부 클라우드가 아닌 내부의 독립된 보안망(폐쇄망)에 안전하게 저장합니다. 외부의 해킹이나 정보 유출 위험을 100% 차단하여 보안이 생명인 주요 시설에 가장 적합합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">어떤 기기와도 자유롭게 연결되는 차세대 표준(Matter)</b>
                  스마트 기기 국제 표준인 '매터(Matter)' 프로토콜을 적용했습니다. 특정 브랜드나 제조사에 얽매일 필요 없이, 다양한 센서와 스마트 조명 기기를 자유롭게 연결하고 확장할 수 있어 관리가 훨씬 유연해집니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">스스로 환경을 읽고 에너지를 아끼는 똑똑한 센서 연동</b>
                  공간에 사람이 있는지(움직임 감지), 창문으로 자연 빛이 얼마나 들어오는지(밝기 감지)를 센서가 실시간으로 파악합니다. 상황에 맞춰 스스로 조명의 밝기를 조절(디밍)하여 불필요한 전력 낭비를 획기적으로 줄여줍니다.
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