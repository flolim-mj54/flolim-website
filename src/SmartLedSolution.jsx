import React from "react";
import { Link } from "react-router-dom";

const SmartLedSolution = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 스마트 LED 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">스마트 LED 전등 제어 솔루션</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">스마트 LED 전등 제어 솔루션</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        
        {/* 🚀 사이드바: 3개의 정확한 링크 적용 및 세 번째 메뉴 활성화 */}
        <aside className="w-full md:w-[350px] flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">스마트 LED 제어 시스템</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <Link to="/led-intro" className="flex items-center justify-between px-4 py-4 text-[13px] lg:text-[14px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  스마트 LED 전등 제어 시스템
                </Link>
              </li>
              <li className="border-b border-slate-200">
                <Link to="/esco" className="flex items-center justify-between px-4 py-4 text-[13px] lg:text-[14px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  켑코이에스(ESCO) 에너지 효율화 연계 사업
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/led-solution" className="flex items-center justify-between px-4 py-4 text-[13px] lg:text-[14px] tracking-tight bg-cyan-50 text-[#1eb4c8] font-bold whitespace-nowrap">
                  스마트 LED 전등 제어 솔루션 <svg className="w-4 h-4 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            스마트 LED 전등 제어 솔루션 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Technical Specification</span>
          </h2>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              <strong className="text-lg text-slate-800 block mb-3">복잡한 선 없이 간편하게, 딜레이 없이 즉각적으로</strong>
              플로림(FLOLIM)의 스마트 LED 전등 제어 솔루션은 건물 내부에 직접 설치하는 현장 전용 서버(로컬 서버)와 국제 표준(Matter) 기반의 무선 스마트 센서로 이루어져 있습니다.
              <br/><br/>
              외부 인터넷망을 거치지 않기 때문에 명령을 내리는 즉시 지연(딜레이) 없이 초고속으로 조명이 반응합니다. 특히 천장을 뜯고 선을 깔아야 하는 복잡한 배선 공사 없이 무선으로 구축되므로, 신축 건물은 물론 현재 사용 중인 공장, 주차장, 오피스 등에도 영업 방해 없이 매우 빠르고 간편하게 설치할 수 있습니다.
            </p>
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">01</span>
                  <h4 className="text-lg font-bold text-slate-800">현장 전용 서버 (로컬 서버)</h4>
                </div>
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ 소형 랙마운트 또는 엣지 컴퓨팅 서버 사진 ]
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1 break-keep">
                  건물의 방재실이나 통신실에 설치되어, 클라우드 연결 없이 독립적으로 조명 네트워크 전체를 통제하는 핵심 두뇌입니다.
                </p>
                <ul className="space-y-3 text-[13px] text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#1eb4c8] mr-2 mt-0.5">✔️</span>
                    <div><b>안전한 자체 데이터 보관:</b> 외부로 데이터를 보내지 않고 기기 내부에 스케줄과 전력 데이터를 안전하게 저장합니다.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1eb4c8] mr-2 mt-0.5">✔️</span>
                    <div><b>인터넷이 끊겨도 100% 정상 작동:</b> 통신사 장애 등으로 외부 인터넷이 끊겨도 건물 내 조명은 무중단으로 정상 작동합니다.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1eb4c8] mr-2 mt-0.5">✔️</span>
                    <div><b>강력한 폐쇄망 보안:</b> 외부와 철저히 단절된 폐쇄망으로 운영되어 데이터 유출이나 해킹 위험을 원천 차단합니다.</div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">02</span>
                  <h4 className="text-lg font-bold text-slate-800">무선 스마트 센서 & 컨트롤러</h4>
                </div>
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ 무선 디밍 컨트롤러 / 복합 센서 사진 ]
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1 break-keep">
                  개별 조명 기구에 장착되어 서버의 명령을 즉각 실행하고, 주변 환경을 스스로 감지하는 똑똑한 단말기입니다.
                </p>
                <ul className="space-y-3 text-[13px] text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#1eb4c8] mr-2 mt-0.5">✔️</span>
                    <div><b>자유로운 기기 확장성:</b> 모든 스마트 기기와 연결되는 국제 표준 매터(Matter) 인증 모듈을 탑재했습니다.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1eb4c8] mr-2 mt-0.5">✔️</span>
                    <div><b>정밀한 복합 센서 연동:</b> 차량이나 사람의 움직임은 물론, 공간에 들어오는 자연광의 밝기까지 스스로 감지합니다.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1eb4c8] mr-2 mt-0.5">✔️</span>
                    <div><b>현장 맞춤형 밝기 조절:</b> 기존에 설치된 조명 방식(0-10V, PWM, DALI 등)에 맞춰 가장 세밀하게 밝기를 조절(디밍)합니다.</div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Architecture</h3>
            <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-8 flex flex-col items-center justify-center min-h-[350px]">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-slate-500 font-bold tracking-widest block mb-2">[ 시스템 아키텍처 다이어그램 삽입 영역 ]</span>
              <span className="text-sm text-slate-400 text-center mb-6 break-keep">로컬 서버를 중심으로 건물 내부가 선 없이 무선으로 연결된 아키텍처 다이어그램을 넣어주세요.</span>
              
              <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-slate-500 font-bold z-10 flex-wrap justify-center mt-4">
                <span className="bg-white px-4 py-2 border border-slate-300 rounded shadow-sm mb-2">독립형 현장 서버</span>
                <span className="mb-2">↔</span>
                <span className="bg-cyan-50 text-[#1eb4c8] px-4 py-2 border border-cyan-200 rounded shadow-sm mb-2">내부 무선망 (Matter/Wi-Fi 등)</span>
                <span className="mb-2">↔</span>
                <span className="bg-white px-4 py-2 border border-slate-300 rounded shadow-sm mb-2">스마트 센서 및 LED 조명</span>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Technical Specifications</h3>
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700 w-[28%]">관제 서버 형태</th>
                  <td className="py-3 px-4 text-slate-600">독립형 현장 서버 (On-Premise) / 폐쇄망 환경 100% 지원</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">무선 통신 기술</th>
                  <td className="py-3 px-4 text-slate-600">Matter, Thread, Wi-Fi 기반 다중 호환</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">디밍(밝기) 제어</th>
                  <td className="py-3 px-4 text-slate-600">0~10V DC Dimming, PWM 제어, DALI / AC 100~240V (50/60Hz)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">복합 센서 스펙</th>
                  <td className="py-3 px-4 text-slate-600">고감도 움직임 감지 센서 (최대 8m 반경) / 자연광 감지 조도 센서 내장</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default SmartLedSolution;