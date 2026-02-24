import React from "react";
import { Link } from "react-router-dom";

const NbIotSolution = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 가로등 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">NB-IoT 스마트 가로등 제어 솔루션</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">NB-IoT 스마트 가로등 제어 솔루션</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-[350px] flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">가로등 제어 시스템</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <Link to="/streetlight-intro" className="flex items-center justify-between px-4 py-4 text-[14px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  가로등 제어 시스템
                </Link>
              </li>
              <li className="border-b border-slate-200">
                <Link to="/lora" className="flex items-center justify-between px-4 py-4 text-[14px] tracking-tight text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all whitespace-nowrap">
                  LoRa-Mesh 가로등 제어 솔루션
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/nbiot" className="flex items-center justify-between px-4 py-4 text-[14px] tracking-tight bg-cyan-50 text-[#1eb4c8] font-bold whitespace-nowrap">
                  NB-IoT 스마트 가로등 제어 솔루션 <svg className="w-4 h-4 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            NB-IoT 스마트 가로등 제어 솔루션 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Overview</span>
          </h2>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              <strong className="text-lg text-slate-800 block mb-3">추가 장비 없이 전국을 빈틈없이 잇는 스마트 조명망</strong>
              플로림(FLOLIM)의 NB-IoT 솔루션은 우리가 흔히 쓰는 스마트폰처럼 이동통신사의 기지국을 그대로 활용하는 통신 방식입니다.
              <br/><br/>
              서버와 가로등이 1:1로 직접 연결되기 때문에, 별도의 중계기(Gateway)를 설치할 필요가 없어 초기 구축 비용과 시간을 획기적으로 줄여줍니다. 특히 통신이 잘 닿지 않던 산간, 오지, 지하 차도 같은 사각지대에서도 안정적으로 작동하며, 적은 전력(LPWA)으로 수만 개의 가로등을 한 번에 효율적으로 통합 관리할 수 있습니다.
            </p>
            <div className="w-full aspect-video bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
              <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-bold tracking-wide">[ NB-IoT 스마트 시티 적용 3D 영상 또는 고화질 이미지 삽입 영역 ]</span>
              <span className="text-sm mt-1">통신사 기지국과 가로등이 직접 연결되는 넓은 커버리지를 표현한 자료를 추천합니다.</span>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Terminal Components</h3>
            <p className="text-slate-600 mb-6 text-[15px] break-keep">
              이 솔루션은 복잡한 중계 장비 없이 가로등에 스마트 단말기(컨트롤러) 하나만 달면 바로 작동합니다. 현장의 가로등 종류에 맞춰 가장 알맞은 형태를 선택할 수 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">A</span>
                  <h4 className="text-lg font-bold text-slate-800">빠르고 간편한 설치 (표준 NEMA 7핀)</h4>
                </div>
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ NEMA 7핀 규격 단말기 이미지 ]
                </div>
                <ul className="space-y-2 text-[13px] text-slate-700 flex-1">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>꽂기만 하면 바로 작동하는 국제 표준 규격(플러그 앤 플레이)</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>세밀한 밝기 조절(DALI 2.0 및 0-10V) 완벽 지원</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>위치를 파악하는 GPS와 주변 밝기를 감지하는 센서(광전지) 내장</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>비바람에 강한 방수·방진(IP65) 및 정전 시 이전 상태 복구 기능</li>
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">B</span>
                  <h4 className="text-lg font-bold text-slate-800">작지만 강력한 내장형 (ZHAGA 4핀 / 모듈)</h4>
                </div>
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ ZHAGA 규격 또는 내장형 컨트롤러 이미지 ]
                </div>
                <ul className="space-y-2 text-[13px] text-slate-700 flex-1">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>유럽 표준 규격(ZHAGA)에 최적화된 뛰어난 호환성</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>통신이 잠시 끊겨도 자체 시계(RTC)로 정해진 조명 스케줄 정상 실행</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>가로등의 기울어짐이나 온도 변화를 감지하는 안전 센서 추가 가능(옵션)</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>조명 기구 안에 쏙 들어가는 작은 크기와 완벽한 방수·방진(IP66/IP67)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Key Functions</h3>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold mt-1">■</span>
                <div>
                  <b className="text-slate-800 block">사각지대 없이 수만 개의 조명을 한 번에 연결</b>
                  기존 통신망보다 수신 감도를 대폭 높여, 산속이나 지하차도에서도 끊김 없이 연결됩니다. 이동통신 기지국 하나로 수만 개의 가로등을 묶어서 안정적으로 관리할 수 있습니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold mt-1">■</span>
                <div>
                  <b className="text-slate-800 block">낭비를 막는 꼼꼼한 전력 측정과 실시간 모니터링</b>
                  단말기에 내장된 스마트 계량기가 전압, 전류, 소비 전력 등을 실시간으로 측정합니다. 과전압 등 전원에 이상이 생기면 관리자에게 즉시 보고하여 고장과 안전사고를 미리 예방합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold mt-1">■</span>
                <div>
                  <b className="text-slate-800 block">현장 방문이 필요 없는 무선 원격 관리 (OTA)</b>
                  가로등에 새로운 기능이나 시스템 업데이트가 필요할 때, 직원이 직접 현장에 갈 필요 없이 무선으로 간편하게 소프트웨어를 업그레이드하여 사후 관리 비용을 크게 아껴줍니다.
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Architecture</h3>
            <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-8 flex flex-col items-center justify-center min-h-[350px]">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-slate-500 font-bold tracking-widest block mb-2">[ 시스템 구성도(네트워크 토폴로지) 다이어그램 삽입 영역 ]</span>
              <span className="text-sm text-slate-400 text-center mb-6">일반 사용자도 직관적으로 이해할 수 있는 통신사 기지국 기반 연결 다이어그램을 넣어주세요.</span>
              <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-slate-500 font-bold z-10 flex-wrap justify-center mt-4">
                <span className="bg-white px-4 py-2 border border-slate-300 rounded shadow-sm mb-2">통합 관제 서버</span>
                <span className="mb-2">↔</span>
                <span className="bg-cyan-50 text-[#1eb4c8] px-4 py-2 border border-cyan-200 rounded shadow-sm mb-2">통신사 이동통신 기지국(LTE 망)</span>
                <span className="mb-2">↔</span>
                <span className="bg-white px-4 py-2 border border-slate-300 rounded shadow-sm mb-2">개별 무선 단말기(스마트 가로등)</span>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Technical Specifications</h3>
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700 w-1/4">통신 기술</th>
                  <td className="py-3 px-4 text-slate-600">LTE Cat NB1, Cat M1, EGPRS / 1:1 직접 통신(Star Topology)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">지원 주파수 대역</th>
                  <td className="py-3 px-4 text-slate-600">통신사 허가 대역 (LTE-FDD B1 / B3 / B5 / B8 등)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">디밍(밝기) 제어</th>
                  <td className="py-3 px-4 text-slate-600">DALI 2.0 프로토콜, 0-10V DC, PWM</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">동작 전압 / 릴레이</th>
                  <td className="py-3 px-4 text-slate-600">AC 96~264V (50/60Hz) / 16A 내장 릴레이 스위치</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">시스템 구조</th>
                  <td className="py-3 px-4 text-slate-600"><b>플로림 통합 서버(SCCS)</b> + 통신사 NB-IoT 망 + 단일 램프 컨트롤러</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NbIotSolution;