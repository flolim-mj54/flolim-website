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
              <li className="border-b border-slate-200">
                <Link to="/streetlight-intro" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">
                  가로등 제어 시스템
                </Link>
              </li>
              <li className="border-b border-slate-200">
                <Link to="/lora" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">
                  LoRa-Mesh 가로등 제어 솔루션 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/nbiot" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">
                  NB-IoT 스마트 가로등 제어 솔루션
                </Link>
              </li>
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
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              플로림(FLOLIM)의 LoRa-Mesh 솔루션은 <b>IEEE 802.15.4 물리 계층</b>을 기반으로 단말기 간 자체적인 그물망(Self-Grouping MESH)을 형성하는 고신뢰성 무선 통신 네트워크입니다.
              <br/><br/>
              지점 간(Node-to-Node) 통신을 통해 <b>도시권 기준 1~3km 반경의 광역 커버리지</b>를 확보합니다. 매월 발생하는 통신망 이용료가 전면 무료이며, 단말기 간 통신 장애 발생 시 우회 경로를 스스로 탐색하여 서버와의 연결을 유지하는 뛰어난 네트워크 생존력을 자랑합니다.
            </p>

            {/* 🖼️ 메인 비주얼/3D 영상 삽입 영역 */}
            <div className="w-full aspect-video bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
              <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-bold tracking-wide">[ 3D 소개 영상 또는 고화질 솔루션 이미지 삽입 영역 ]</span>
              <span className="text-sm mt-1">LoRa-Mesh의 그물망 통신을 직관적으로 보여주는 시각 자료를 추천합니다.</span>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Components</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 집중기 컴포넌트 */}
              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">01</span>
                  <h4 className="text-lg font-bold text-slate-800">중앙 집중기 (Gateway)</h4>
                </div>
                {/* 🖼️ 제품 이미지 삽입 영역 */}
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ 집중기 하드웨어 제품 사진 ]
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">
                  현장의 무선 단말기(LoRa MESH) 데이터를 수집하여 관제 서버로 실시간 전송하는 핵심 통신 브리지입니다.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>고성능 ARM9 CPU 및 임베디드 Linux OS 탑재</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>내장형 스마트 미터기로 원격 전력량 측정 지원</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>4 DO / 6 DI 지원 및 RS485 통신 인터페이스</li>
                </ul>
              </div>

              {/* 단말기 컴포넌트 */}
              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">02</span>
                  <h4 className="text-lg font-bold text-slate-800">무선 램프 컨트롤러 (Node)</h4>
                </div>
                {/* 🖼️ 제품 이미지 삽입 영역 */}
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ NEMA 컨트롤러 / 내장형 모듈 사진 ]
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">
                  조명(가로등)에 장착되어 제어 명령을 오차 없이 수행하고 전력 상태를 보고하는 스마트 단말기입니다.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>표준 NEMA 7핀 인터페이스 적용 (플러그 앤 플레이)</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>16A 릴레이 내장 및 0-10V / PWM 정밀 디밍 지원</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>전류, 전압, 전력, 역률 등 전기 매개변수 실시간 수집</li>
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
                  <b className="text-slate-800 block">다중 제어 및 유연한 그룹화</b>
                  전체 점소등(Broadcast), 특정 그룹 제어(Multicast), 개별 제어(Unicast)를 원격으로 실행하며 위도/경도, 휴일 모드 등 다중 전략 설정이 가능합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold mt-1">■</span>
                <div>
                  <b className="text-slate-800 block">램프 고장 및 상태 진단</b>
                  램프의 이상 여부, 누전, 통신 불량 등을 즉각적으로 감지하여 관제 서버 대시보드에 알람(Alarm)을 자동 표출합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-2 font-bold mt-1">■</span>
                <div>
                  <b className="text-slate-800 block">OTA(Over-The-Air) 원격 펌웨어 업데이트</b>
                  현장 방문 없이 네트워크를 통해 하드웨어의 펌웨어 및 로직을 원격으로 안전하고 쉽게 업그레이드할 수 있습니다.
                </div>
              </li>
            </ul>
          </div>

          {/* 🖼️ 다이어그램 삽입 영역 (System Architecture) */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Architecture</h3>
            <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-8 flex flex-col items-center justify-center min-h-[350px]">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-slate-500 font-bold tracking-widest block mb-2">[ 시스템 구성도(네트워크 토폴로지) 이미지 삽입 영역 ]</span>
              <span className="text-sm text-slate-400 text-center">관제 서버 ↔ 집중기(Gateway) ↔ 다수의 램프 컨트롤러(Mesh 연결) 형태의 이미지를 넣어주세요.</span>
            </div>
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
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoraMeshSolution;