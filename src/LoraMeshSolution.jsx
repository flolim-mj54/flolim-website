import React from "react";
import { Link } from "react-router-dom";

const LoraMeshSolution = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 가로등 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">LoRa-Mesh 솔루션</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">LoRa-Mesh 가로등 제어 솔루션</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">가로등 제어 시스템</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200"><Link to="/streetlight-intro" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">가로등 제어 시스템</Link></li>
              <li className="border-b border-slate-200"><Link to="/lora" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">LoRa-Mesh 솔루션 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></Link></li>
              <li className="border-b border-slate-200 last:border-0"><Link to="/nbiot" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">NB-IoT 솔루션</Link></li>
            </ul>
          </div>
        </aside>
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            LoRa-Mesh 솔루션 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Specification</span>
          </h2>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px]">
              LoRa-Mesh 솔루션은 자체 무선 통신망(LoRa)을 기반으로 단말기 간 그물망(Mesh) 형태의 릴레이 통신을 구현합니다. 별도의 통신사 회선을 쓰지 않아 매월 발생하는 <b>통신비 부담이 전혀 없으며</b>, 특정 구간에 장애물이 생겨도 다른 경로를 스스로 찾아 데이터를 우회 전송하는 뛰어난 통신 생존력을 자랑합니다.
            </p>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Feature</h3>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start"><span className="text-[#1eb4c8] mr-2 font-bold">■</span>통신비 완전 무료 (자체 LoRa 자가망 구축)</li>
              <li className="flex items-start"><span className="text-[#1eb4c8] mr-2 font-bold">■</span>Mesh 알고리즘을 통한 자가 복구 및 통신 음영 지역 해소</li>
              <li className="flex items-start"><span className="text-[#1eb4c8] mr-2 font-bold">■</span>개별/그룹/전체 단위의 세밀한 원격 디밍 및 점소등 제어</li>
            </ul>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Diagram</h3>
            <div className="w-full bg-slate-50 border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="text-center">
                <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span className="text-slate-400 font-bold tracking-widest block mb-2">[ LoRa-Mesh 통신 구조도 이미지 삽입 영역 ]</span>
                <span className="text-sm text-slate-400">관제 서버 ↔ 메인 게이트웨이 ↔ LoRa 단말기(Mesh 연결)</span>
              </div>
            </div>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Hardware Spec</h3>
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <tbody>
                <tr className="border-b border-slate-200"><th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700 w-1/4">통신 방식</th><td className="py-3 px-4 text-slate-600">LoRa-Mesh 무선 통신 (920MHz 대역)</td></tr>
                <tr className="border-b border-slate-200"><th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">입력 전압 / 디밍</th><td className="py-3 px-4 text-slate-600">AC 100~240V / 0-10V DC Dimming, PWM</td></tr>
                <tr className="border-b border-slate-200"><th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">보호 등급 / 온도</th><td className="py-3 px-4 text-slate-600">IP65 / -30°C ~ +70°C</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};
export default LoraMeshSolution;