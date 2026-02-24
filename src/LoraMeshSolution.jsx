import React from "react";
import { Link } from "react-router-dom";

const LoraSolution = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 가로등 제어 시스템 〉 <span className="text-[#1eb4c8] font-bold">LoRa-Mesh 가로등 제어 솔루션</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">LoRa-Mesh 가로등 제어 솔루션</h1>
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
                <Link to="/lora" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] bg-cyan-50 text-[#1eb4c8] font-bold break-keep">
                  LoRa-Mesh 가로등 제어 솔루션 <svg className="w-4 h-4 flex-shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/nbiot" className="flex items-center justify-between px-4 py-4 text-[14px] lg:text-[15px] text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all break-keep">
                  NB-IoT 스마트 가로등 제어 솔루션
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        
        <section className="flex-1 min-w-0">
          {/* 🚀 본문 제목(H2) 통일: 가로등 제어 솔루션 추가 */}
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            LoRa-Mesh 가로등 제어 솔루션 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Overview</span>
          </h2>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              <strong className="text-lg text-slate-800 block mb-3">통신비 부담 없이, 촘촘하게 이어지는 그물망 무선 제어</strong>
              플로림(FLOLIM)의 LoRa-Mesh 가로등 제어 솔루션은 가로등에 설치된 단말기들이 자체적으로 통신을 주고받으며 하나의 거대한 그물망(Mesh)을 형성하는 고신뢰성 무선 네트워크입니다.
              <br/><br/>
              기기 간 릴레이 통신을 통해 도시권 기준 1~3km 반경의 넓은 지역을 커버합니다. 매월 발생하는 통신망 이용료가 전면 무료이며, 중간에 일부 통신 장애가 발생하더라도 기기 스스로 우회 경로를 찾아 서버와의 연결을 유지하는 뛰어난 안정성을 자랑합니다.
            </p>
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">01</span>
                  <h4 className="text-lg font-bold text-slate-800">현장을 지휘하는 똑똑한 중계기</h4>
                </div>
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ 집중기(Gateway) 하드웨어 제품 사진 ]
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1 break-keep">
                  현장에 설치된 수많은 가로등 단말기(Node)의 데이터를 모아, 중앙 관제 서버로 실시간 전송하는 핵심 다리 역할을 합니다.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>원활한 데이터 처리를 위한 고성능 프로세서(CPU) 탑재</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>전력 사용량을 원격으로 측정하는 스마트 미터기 기능 내장</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>다양한 외부 장비와 연결할 수 있는 확장 인터페이스 지원</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-[#1eb4c8] text-white flex items-center justify-center font-bold text-xl mr-3">02</span>
                  <h4 className="text-lg font-bold text-slate-800">가로등을 제어하는 스마트 단말기</h4>
                </div>
                <div className="w-full h-40 bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-sm mb-4">
                  [ NEMA 컨트롤러 / 내장형 모듈 사진 ]
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1 break-keep">
                  조명(가로등) 상단이나 내부에 장착되어 제어 명령을 정확하게 수행하고, 현재 상태를 서버에 보고합니다.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700">
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>설치가 간편한 국제 표준(NEMA) 플러그 앤 플레이 방식 적용</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>주변 환경에 맞춘 세밀한 밝기 조절(디밍) 지원</li>
                  <li className="flex items-start"><span className="text-[#1eb4c8] mr-2">✔️</span>전압, 전류 등 조명의 전력 상태를 실시간으로 측정 및 보고</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Key Functions</h3>
            <ul className="space-y-4 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">원하는 대로 묶고 나누는 맞춤형 제어</b>
                  전체 가로등을 한 번에 제어하는 것은 물론, 특정 구역만 묶어서 제어하거나 가로등 하나하나를 개별적으로 제어할 수 있습니다. 위도/경도, 휴일 모드 등 현장 상황에 맞춘 다중 스케줄 설정이 가능합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">고장 나기 전에 알아채는 스마트 진단</b>
                  램프 이상, 누전, 통신 불량 등 문제가 발생하면 즉각적으로 감지하여 관리자의 대시보드 화면에 알림(Alarm)을 띄웁니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">현장 방문이 필요 없는 원격 무선 업데이트 (OTA)</b>
                  새로운 기능이 추가되거나 시스템 개선이 필요할 때, 직원이 직접 현장에 갈 필요 없이 네트워크를 통해 쉽고 안전하게 무선으로 소프트웨어를 업그레이드합니다.
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Architecture</h3>
            <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-8 flex flex-col items-center justify-center min-h-[350px]">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-slate-500 font-bold tracking-widest block mb-2">[ LoRa-Mesh 네트워크 토폴로지 다이어그램 삽입 영역 ]</span>
              <span className="text-sm text-slate-400 text-center">관제 서버 ↔ 집중기(Gateway) ↔ 다수의 램프 컨트롤러(Mesh 연결) 형태의 이미지를 넣어주세요.</span>
            </div>
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Technical Specifications</h3>
            <table className="w-full border-t-2 border-slate-800 text-[14px]">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700 w-1/4">통신 속도 / 거리</th>
                  <td className="py-3 px-4 text-slate-600">256 Kbps / 노드 간 최대 150m, 넓은 지역 기준 1~3km (Mesh 확장 시)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">무선 주파수</th>
                  <td className="py-3 px-4 text-slate-600">915MHz 대역 (10개 채널) / 2.4GHz 대역 (16개 채널) 지원</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">네트워크 기술</th>
                  <td className="py-3 px-4 text-slate-600">IEEE 802.15.4 / 자가 그룹화(Self-Grouping) MESH 네트워크</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">동작 전압</th>
                  <td className="py-3 px-4 text-slate-600">단말기 AC 96~264V (집중기 최대 500VAC 지원)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 py-3 px-4 text-left font-bold text-slate-700">전력 소비</th>
                  <td className="py-3 px-4 text-slate-600">기기당 약 2W 내외의 초저전력 구동</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default LoraSolution;