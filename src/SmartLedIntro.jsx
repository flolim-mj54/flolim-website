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
            스마트 LED 전등 제어 시스템 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Overview</span>
          </h2>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px]">
              플로림(FLOLIM)의 스마트 LED 전등 제어 시스템은 차세대 스마트홈 및 빌딩 자동화의 국제 표준인 <b>Matter(매터) 프로토콜</b>을 기반으로 구축됩니다. 기존의 폐쇄적인 조명 제어 방식에서 벗어나, 뛰어난 호환성과 확장성을 바탕으로 실내외 모든 조명을 하나의 플랫폼에서 통합 관리하여 혁신적인 에너지 절감과 사용자 편의성을 제공합니다.
            </p>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Feature</h3>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start"><span className="text-[#1eb4c8] mr-2 font-bold">■</span>국제 표준 Matter 프로토콜 적용으로 완벽한 이기종 기기 호환성 보장</li>
              <li className="flex items-start"><span className="text-[#1eb4c8] mr-2 font-bold">■</span>사용자 재실 유무 및 자연 채광량을 감지하는 복합 센서 연동 디밍 제어</li>
              <li className="flex items-start"><span className="text-[#1eb4c8] mr-2 font-bold">■</span>무선 통신 기반 시스템으로 별도의 복잡한 배선 공사 없이 간편한 설치</li>
            </ul>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Diagram</h3>
            <div className="w-full bg-slate-50 border border-slate-200 h-[300px] flex flex-col items-center justify-center">
              <span className="text-slate-400 font-bold tracking-widest mb-4">[ 스마트 LED 시스템 구성도 이미지 삽입 ]</span>
              <span className="text-sm text-slate-400">통합 관제 서버 ↔ Matter 게이트웨이 ↔ 스마트 LED 조명 & 센서</span>
            </div>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Application</h3>
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <tbody>
                <tr className="border-b border-slate-200"><th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700 w-1/4">스마트 오피스</th><td className="py-3 px-4 text-slate-600">회의실, 업무 공간의 스케줄링 및 재실 센서 연동 에너지 절감</td></tr>
                <tr className="border-b border-slate-200"><th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">지하 주차장</th><td className="py-3 px-4 text-slate-600">차량 및 보행자 동선에 맞춘 구역별 자동 디밍(Dimming) 제어</td></tr>
                <tr className="border-b border-slate-200"><th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">대형 공장/창고</th><td className="py-3 px-4 text-slate-600">넓은 실내 공간의 구역별 통합 그룹 제어 및 조도 유지 관리</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};
export default SmartLedIntro;