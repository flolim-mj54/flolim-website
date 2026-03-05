import React from 'react';
import { Link } from 'react-router-dom';

const SmartCityLora = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">LoRa-Mesh 기반 가로등 제어 솔루션</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            매월 발생하는 <strong className="text-blue-600 font-bold">통신비 부담 없이</strong>, 
            수많은 조명을 촘촘하게 잇는 고신뢰성 자가망 시스템
          </p>
        </div>

        {/* 1. 핵심 Overview 섹션 (브로슈어 내용 반영) */}
        <section className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-200 mb-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 leading-tight">
              음영 지역 없이 완벽하게 연결되는<br />그물망(Mesh) 통신 네트워크
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              플로림의 LoRa-Mesh 솔루션은 저전력 장거리 통신(LoRa) 기술과 그물망(Mesh) 구조의 장점을 완벽하게 결합한 차세대 도로조명 제어망입니다. 각 가로등에 설치된 단말기가 스스로 중계기 역할을 수행하여 통신 도달 거리와 안정성을 극대화합니다.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl">
              <p className="text-sm text-gray-700 font-medium">
                특히, 건물 등의 장애물이나 특정 단말기에 고장이 발생하더라도 시스템이 <strong>우회 경로를 자동 탐색</strong>하여 끊김 없는 제어망을 유지하므로, 도심지는 물론 골목길이나 산간 지역 등 통신 음영 지역을 해소하는 데 최적화된 시스템입니다.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            {/* Mesh 통신망 개념을 보여주는 시각적 장치 (추후 실제 이미지로 교체 가능) */}
            <div className="relative w-full aspect-video bg-slate-900 rounded-2xl shadow-inner overflow-hidden flex items-center justify-center p-6 border-4 border-slate-800">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
              {/* 애니메이션 노드 그래픽 */}
              <div className="relative w-full h-full flex items-center justify-center">
                 <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                 <div className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
                 {/* 주변 노드들 */}
                 <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full"></div>
                 <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full"></div>
                 <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full"></div>
                 {/* 선 연결 (가상) */}
                 <svg className="absolute inset-0 w-full h-full opacity-40">
                   <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
                   <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
                   <line x1="50%" y1="50%" x2="66%" y2="33%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
                 </svg>
              </div>
              <span className="absolute bottom-4 right-4 text-xs text-blue-300 font-mono tracking-widest bg-black/50 px-2 py-1 rounded">MESH_NETWORK_ACTIVE</span>
            </div>
          </div>
        </section>

        {/* 2. 시스템 구성 요소 (System Components) */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">스마트 가로등 핵심 구성 요소</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. 집중기(Gateway) */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black">1</div>
                <h3 className="text-2xl font-bold text-gray-800">현장을 지휘하는 똑똑한 중계기<br/><span className="text-blue-600 text-lg font-medium">IoT Gateway</span></h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                현장에 설치된 수많은 가로등 단말기(Node)의 데이터를 모아, 중앙 관제 서버로 실시간 전송하는 핵심 다리 역할을 합니다.
              </p>
              <ul className="space-y-3 text-sm text-gray-700 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> 관제 서버와의 빠르고 안정적인 양방향 통신 지원</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> 전력 사용량을 원격으로 측정하는 스마트 미터기 기능 내장</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> 다양한 외부 장비와 연결할 수 있는 확장 인터페이스 제공</li>
              </ul>
            </div>

            {/* 2. 스마트 단말기(Controller) */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl font-black">2</div>
                <h3 className="text-2xl font-bold text-gray-800">가로등을 제어하는 스마트 단말기<br/><span className="text-indigo-600 text-lg font-medium">Lamp Controller</span></h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                조명 상단이나 내부에 직접 장착되어 제어 명령을 정확하게 수행하고, 현재 램프의 상태와 전력량을 서버에 보고합니다.
              </p>
              <ul className="space-y-3 text-sm text-gray-700 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <li className="flex items-start"><span className="text-indigo-500 mr-2">✓</span> NEMA 7핀(외장형) 및 ZHAGA 4핀(내장형) 국제 표준 규격 완벽 지원</li>
                <li className="flex items-start"><span className="text-indigo-500 mr-2">✓</span> 주변 환경에 맞춘 세밀한 밝기 조절(디밍) 제어</li>
                <li className="flex items-start"><span className="text-indigo-500 mr-2">✓</span> 전압, 전류 등 조명의 전력 상태를 실시간으로 측정 및 위험 감지</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 3. 핵심 강점 (Key Functions) */}
        <section className="bg-blue-900 text-white rounded-3xl p-10 md:p-16 mb-20 shadow-xl relative overflow-hidden">
          {/* 장식용 배경 요소 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl font-bold mb-12 relative z-10 text-center">왜 플로림 LoRa-Mesh 솔루션인가요?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700 hover:bg-blue-800 transition-colors">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-blue-200 mb-3">통신비 평생 무료 (자가망)</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                통신사 망을 빌려 쓰지 않고 자체적인 무선 통신망을 구축하므로, 수만 개의 단말기를 연결해도 매월 납부해야 하는 통신 요금이 전혀 발생하지 않습니다.
              </p>
            </div>
            
            <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700 hover:bg-blue-800 transition-colors">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-blue-200 mb-3">고장 사전 예측 및 스마트 진단</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                램프 수명 저하, 누전, 통신 불량 등 문제가 발생하기 전 미세한 전력 변화를 즉각적으로 감지하여 대시보드 화면에 경고 알림을 띄워 선제적 대응을 돕습니다.
              </p>
            </div>
            
            <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700 hover:bg-blue-800 transition-colors">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-blue-200 mb-3">무선 원격 업데이트 (OTA)</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                새로운 제어 기능이 추가되거나 시스템 개선이 필요할 때, 직원이 고소작업차를 타고 현장에 갈 필요 없이 원격에서 쉽고 안전하게 무선으로 소프트웨어를 업그레이드합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 제품 기술 사양 (Tech Specs) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 px-4 border-l-4 border-blue-600">Technical Specifications</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold w-1/3 md:w-1/4">통신 속도 / 거리</th>
                  <td className="py-5 px-6 text-gray-600">256 Kbps / 노드 간 최대 150m, 넓은 지역 기준 1~3km (Mesh 확장 시)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold">무선 주파수</th>
                  <td className="py-5 px-6 text-gray-600">915MHz 대역 (10개 채널) / 2.4GHz 대역 (16개 채널) 지원</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold">네트워크 기술</th>
                  <td className="py-5 px-6 text-gray-600">IEEE 802.15.4 / 자가 그룹화(Self-Grouping) MESH 네트워크</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold">동작 전압</th>
                  <td className="py-5 px-6 text-gray-600">단말기 AC 96~264V (집중기 최대 500VAC 지원)</td>
                </tr>
                <tr>
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold">전력 소비</th>
                  <td className="py-5 px-6 text-gray-600">기기당 약 2W 내외의 초저전력 구동</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 다른 솔루션으로 이동하는 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <Link to="/smart-city/intro" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">스마트 시티 개요</span>
          </Link>
          <Link to="/smart-city/nb-iot" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">다음 페이지 →</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">NB-IoT 제어 솔루션</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SmartCityLora;