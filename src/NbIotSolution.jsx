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
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            NB-IoT 스마트 가로등 제어 솔루션
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        
        {/* 🚀 수정된 사이드바 (너비 넓힘, 1줄 고정) */}
        <aside className="w-full md:w-[280px] flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">가로등 제어 시스템</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <Link to="/streetlight-intro" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all break-keep">
                  가로등 제어 시스템
                </Link>
              </li>
              <li className="border-b border-slate-200">
                <Link to="/lora" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all break-keep">
                  LoRa-Mesh 가로등 제어 솔루션
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/nbiot" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] bg-cyan-50 text-[#1eb4c8] font-bold break-keep">
                  NB-IoT 스마트 가로등 제어 솔루션 <svg className="w-4 h-4 flex-shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          {/* 🚀 본문 제목(H2) 통일: 가로등 제어 솔루션 추가 */}
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            NB-IoT 스마트 가로등 제어 솔루션 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Technical Specification</span>
          </h2>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              플로림(FLOLIM)의 NB-IoT(협대역 사물인터넷) 솔루션은 이동통신사의 상용망 기지국을 그대로 활용하여 서버와 단말기가 1:1(Star Topology)로 직접 연결되는 광역 통신 시스템입니다. 
              <br/><br/>
              가장 큰 장점은 <b>초기 중계기(Gateway) 구축 비용과 설치 공수가 전혀 발생하지 않는다</b>는 것입니다. 20dB 이상의 높은 수신 이득(Gain)을 통해 산간, 오지, 지하 차도 등 기존 통신 음영 지역에서도 안정적인 제어가 가능하며, 저전력 장거리 통신(LPWA) 기술로 수만 개의 가로등을 동시에 효율적으로 통합 관리할 수 있습니다.
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
              NB-IoT 솔루션은 별도의 집중기 없이, 조명 기구의 규격에 맞춘 <b>독립형 램프 컨트롤러(단말기)</b>만을 부착하여 관제 서버와 통신합니다. 플로림은 현장의 램프 타입에 맞춰 다양한 표준 인터페이스를 지원합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">A</span>
                  <h4 className="text-lg font-bold text-slate-800">표준 NEMA 7핀 컨트롤러</h4>
                </div>
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ NEMA 7핀 규격 단말기 이미지 ]
                </div>
                <ul className="space-y-2 text-[13px] text-slate-700 flex-1">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>표준 NEMA 7핀 인터페이스 (플러그 앤 플레이)</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>DALI 2.0 및 0-10V 디밍 동시 지원</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>GPS 모듈 내장 및 광전지(Photocell) 자동 제어</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>정전 대비 최후 상태 저장 기능 (IP65 방수방진)</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">B</span>
                  <h4 className="text-lg font-bold text-slate-800">ZHAGA 4핀 / 내장형 모듈</h4>
                </div>
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ ZHAGA 규격 또는 내장형 컨트롤러 이미지 ]
                </div>
                <ul className="space-y-2 text-[13px] text-slate-700 flex-1">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>유럽 표준 ZHAGA 4핀 인터페이스 최적화</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>RTC(Real-Time Clock) 내장으로 통신 단절 시에도 스케줄 실행</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>옵션 구성: 기울기 센서 및 온도 센서 결합 가능</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>소형화된 폼팩터로 등기구 내부 삽입에 용이 (IP66/IP67)</li>
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
                  <b className="text-slate-800 block">초광역 커버리지 및 대규모 연결 (Massive IoT)</b>
                  협대역 스펙트럼 밀도 기술로 기존 통신망 대비 수신 감도를 대폭 개선했으며, 기지국 하나당 최대 수만 개의 조명 노드를 안정적으로 연결합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold mt-1">■</span>
                <div>
                  <b className="text-slate-800 block">정밀 전력 측정 및 상태 모니터링</b>
                  단말기에 내장된 스마트 미터를 통해 전압, 전류, 소비 전력, 역률 등을 실시간으로 수집하고 과전압, 저전압 등 전원 이상을 즉각 보고합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold mt-1">■</span>
                <div>
                  <b className="text-slate-800 block">TCP/UDP 기반 통신 및 OTA 업데이트</b>
                  안정적인 데이터 패킷 전송은 물론, 현장 출동 없이도 펌웨어를 무선으로 업데이트(OTA) 할 수 있어 사후 관리 비용을 혁신적으로 절감합니다.
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Architecture</h3>
            <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-8 flex flex-col items-center justify-center min-h-[350px]">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-slate-500 font-bold tracking-widest block mb-2">[ NB-IoT 네트워크 토폴로지 다이어그램 삽입 영역 ]</span>
              <span className="text-sm text-slate-400 text-center">관제 서버 ↔ 통신사 이동통신 기지국(LTE-FDD/NB-IoT) ↔ 개별 램프 컨트롤러 (Star 구조)</span>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Technical Specifications</h3>
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700 w-1/4">통신 기술 / 위상 구조</th>
                  <td className="py-3 px-4 text-slate-600">LTE Cat NB1, Cat M1, EGPRS / Star Topology (1:1 직접 통신)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">지원 주파수 대역</th>
                  <td className="py-3 px-4 text-slate-600">LTE-FDD (B1 / B3 / B5 / B8 / B20 / B28 등 통신사 허가 대역)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">디밍 출력 방식</th>
                  <td className="py-3 px-4 text-slate-600">DALI 2.0 프로토콜, 0-10V DC, PWM 제어</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">입력 전압 / 릴레이</th>
                  <td className="py-3 px-4 text-slate-600">AC 96~264V (50/60Hz) / 16A 내장 릴레이 스위치</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">시스템 아키텍처</th>
                  <td className="py-3 px-4 text-slate-600"><b>플로림 통합 서버 (SCCS)</b> + 통신사 NB-IoT 망 + 단일 램프 컨트롤러</td>
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