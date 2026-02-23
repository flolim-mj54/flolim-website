import React from "react";
import { Link } from "react-router-dom";

const LoraMeshSolution = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      {/* 1. 상단 배너 */}
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 가로등 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">LoRa-Mesh 솔루션</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">LoRa-Mesh 가로등 제어 솔루션</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        {/* 2. 왼쪽 사이드바 */}
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

        {/* 3. 오른쪽 메인 본문 */}
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            LoRa-Mesh 솔루션 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Technical Specification</span>
          </h2>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px]">
              플로림(FLOLIM)의 LoRa-Mesh 솔루션은 <b>IEEE 802.15.4 물리 계층</b>을 기반으로 단말기 간 자체적인 그물망(Self-Grouping MESH)을 형성하는 고신뢰성 무선 통신 네트워크입니다.
              <br/><br/>
              지점 간(Node-to-Node) 최대 150m 통신을 지원하며, 릴레이 전송을 통해 <b>도시권 기준 1~3km 반경의 광역 커버리지</b>를 확보합니다. 매월 발생하는 통신망 이용료가 전면 무료이며, 특정 구간의 통신 장애 발생 시 우회 경로를 스스로 탐색하는 자가 복구 알고리즘을 탑재하여 뛰어난 네트워크 생존력을 보장합니다.
            </p>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Components</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 집중기 컴포넌트 */}
              <div className="bg-slate-50 border border-slate-200 p-6">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">01</span>
                  <h4 className="text-lg font-bold text-slate-800">중앙 집중기 (Gateway / RTU)</h4>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  서버(이더넷/4G)와 무선 램프 컨트롤러(LoRa MESH) 사이의 핵심 통신 브리지 역할을 수행합니다.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>고성능 ARM9 CPU 및 임베디드 Linux OS 탑재</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>내장형 스마트 미터기로 원격 전력량 측정 지원</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>4 DO / 6 DI 지원 및 RS485 (지능형 터널 제어 확장)</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>고전압, 낙뢰, 고주파 신호를 차단하는 강력한 간섭 방지 케이스 (IP54)</li>
                </ul>
              </div>

              {/* 단말기 컴포넌트 */}
              <div className="bg-slate-50 border border-slate-200 p-6">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">02</span>
                  <h4 className="text-lg font-bold text-slate-800">단일 램프 컨트롤러 (Node)</h4>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  LED 드라이버와 직접 연결되어 조명을 제어하고 상세 전력 데이터를 집중기로 전송합니다.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>표준 NEMA 7핀 인터페이스 적용 (플러그 앤 플레이)</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>16A 릴레이 내장 및 0-10V / PWM 디밍 인터페이스 지원</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>전류, 전압, 전력, 역률 등 세밀한 전기 매개변수 실시간 수집</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>옵션 센서(GPS, 기울기 감지) 및 광전지 자동 제어 지원 (IP65)</li>
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
                  <b className="text-slate-800 block">다중 제어 및 브로드캐스트 모드</b>
                  전체 점소등(Broadcast), 특정 그룹 제어(Multicast), 개별 제어(Unicast)를 모두 지원하며 다중 전략(위도/경도 연동, 휴일 모드) 설정이 가능합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold mt-1">■</span>
                <div>
                  <b className="text-slate-800 block">램프 고장 및 상태 진단</b>
                  램프의 이상 여부, 누전, 통신 불량 등을 즉각적으로 감지하여 통합 관제 서버에 알람(Alarm)을 자동 보고합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold mt-1">■</span>
                <div>
                  <b className="text-slate-800 block">OTA(Over-The-Air) 원격 업데이트</b>
                  현장 방문 없이 이더넷/4G 네트워크를 통해 펌웨어 및 로직을 원격으로 쉽게 업그레이드할 수 있습니다.
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Technical Specifications</h3>
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700 w-1/4">통신 속도 / 거리</th>
                  <td className="py-3 px-4 text-slate-600">256 Kbps / 노드 간 최대 150m, 도시권역 기준 1M ~ 3KM (Mesh 확장 시)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">무선 주파수 / 채널</th>
                  <td className="py-3 px-4 text-slate-600">915MHz 대역 (10개 채널) / 2.4GHz 대역 (16개 채널) 등 자체 MESH 구축 지원</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">물리 계층 / 네트워크</th>
                  <td className="py-3 px-4 text-slate-600">IEEE 802.15.4 / 자가 그룹화(Self-Grouping) MESH 네트워크</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">동작 전압 / 전력 소비</th>
                  <td className="py-3 px-4 text-slate-600">AC 96~264V (집중기의 경우 100~500VAC 지원) / 시스템당 약 2W 내외 소비</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">하드웨어 확장성</th>
                  <td className="py-3 px-4 text-slate-600">표준 NEMA 인터페이스 연동, 외부 1-10V 컨트롤 인터페이스(DCI)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoraMeshSolution;