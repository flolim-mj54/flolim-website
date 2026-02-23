import React from "react";
import { Link } from "react-router-dom";

const SmartLedSolution = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 스마트 LED 전등 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">스마트 LED 제어 솔루션</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">스마트 LED 제어 솔루션</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">스마트 LED 제어</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200"><Link to="/led-intro" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">스마트 LED 제어 시스템</Link></li>
              <li className="border-b border-slate-200"><Link to="/esco" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">켑코이에스 연계 사업</Link></li>
              <li className="border-b border-slate-200 last:border-0"><Link to="/led-solution" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">스마트 LED 제어 솔루션 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></Link></li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            스마트 LED 제어 솔루션 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Technical Specification</span>
          </h2>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px]">
              플로림(FLOLIM)의 스마트 LED 제어 솔루션은 현장 내부에 직접 설치되는 <b>고성능 로컬 서버(Edge Server)</b>와 국제 표준 <b>Matter 프로토콜</b>을 지원하는 무선 센서/디밍 컨트롤러로 구성된 통합 하드웨어 아키텍처입니다.
              <br/><br/>
              이를 통해 지연 시간(Latency) 없는 즉각적인 초고속 조명 제어가 가능하며, 복잡한 릴레이 배선 공사 없이 무선 통신을 통해 구축되므로 신축은 물론 기존 기축 건물(공장, 주차장, 오피스 등)에도 매우 간편하게 도입할 수 있습니다.
            </p>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Components</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 로컬 서버 컴포넌트 */}
              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">01</span>
                  <h4 className="text-lg font-bold text-slate-800">플로림 독립형 로컬 서버</h4>
                </div>
                {/* 🖼️ 제품 이미지 삽입 영역 */}
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ 소형 랙마운트 또는 엣지 컴퓨팅 서버 사진 ]
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">
                  현장의 방재실/서버실에 설치되어 클라우드 연결 없이 독립적으로 조명 네트워크 전체를 통제하는 두뇌입니다.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>내부 DB 구축으로 스케줄, 전력 데이터 안전 저장</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>인터넷 망 장애 발생 시 100% 정상 작동 보장 (무중단)</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>폐쇄망 운영으로 해킹/데이터 유출 원천 차단</li>
                </ul>
              </div>

              {/* 램프 컨트롤러 컴포넌트 */}
              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">02</span>
                  <h4 className="text-lg font-bold text-slate-800">스마트 디밍 & 센서 모듈</h4>
                </div>
                {/* 🖼️ 제품 이미지 삽입 영역 */}
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ 무선 디밍 컨트롤러 / 복합 센서 사진 ]
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">
                  개별 조명 기구에 이식되어 로컬 서버의 명령을 즉각 수행하고 주변 환경(움직임/조도)을 스스로 감지합니다.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>국제 표준 Matter 프로토콜 인증 모듈 탑재</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>PIR 동체 감지 (차량/보행자) 및 포토 조도 센서 연동</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>0-10V, PWM, DALI 등 거의 모든 디밍 출력 방식 지원</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 🖼️ 다이어그램 삽입 영역 (System Architecture) */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Architecture</h3>
            <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-8 flex flex-col items-center justify-center min-h-[350px]">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-slate-500 font-bold tracking-widest block mb-2">[ 로컬 서버 중심의 아키텍처 다이어그램 삽입 영역 ]</span>
              <span className="text-sm text-slate-400 text-center">독립형 로컬 서버 ↔ 내부 무선망(Matter/Wi-Fi 등) ↔ 센서 및 LED 조명 기구</span>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Technical Specifications</h3>
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700 w-1/4">관제 서버 형태</th>
                  <td className="py-3 px-4 text-slate-600">독립형 로컬 서버 (On-Premise) / 폐쇄망 환경 100% 호환</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">무선 통신 프로토콜</th>
                  <td className="py-3 px-4 text-slate-600">Matter, Thread, Wi-Fi 기반 다중 호환</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">디밍 출력 및 입력 전압</th>
                  <td className="py-3 px-4 text-slate-600">0~10V DC Dimming, PWM 제어, DALI / AC 100~240V (50/60Hz)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">복합 센서 스펙</th>
                  <td className="py-3 px-4 text-slate-600">고감도 PIR 동체 감지 센서 (최대 8m 반경) / 자연광 감지 조도 센서 내장</td>
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