import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SmartBuildingSensor = () => {
  // 인터넷 연결 상태 시뮬레이션 (true: 연결됨, false: 끊김)
  const [isInternetConnected, setIsInternetConnected] = useState(true);

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">IoT 센서 자동 제어 솔루션</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            복잡한 통신선 없이 간편하게, 딜레이 없이 즉각적으로.<br/>
            <strong className="text-green-600 font-bold">어떤 상황에서도 끊기지 않는 100% 무중단 제어망</strong>을 구축합니다.
          </p>
        </div>

        {/* 1. 핵심 Overview & 무중단 시뮬레이터 */}
        <section className="bg-white rounded-3xl p-10 md:p-12 shadow-lg border border-gray-200 mb-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
              외부 인터넷이 끊겨도<br/>조명은 멈추지 않습니다
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              플로림의 스마트 LED 제어 솔루션은 외부 클라우드에 의존하지 않고, 건물 내부에 직접 설치하는 <strong>현장 전용 서버(On-Premise)</strong>를 중심으로 작동합니다. 
              외부 인터넷망이나 통신사 망에 장애가 발생하더라도, 로컬 서버와 조명 간의 내부 무선망은 독립적으로 유지되어 365일 완벽하게 제어됩니다.
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-xl">
              <p className="text-sm text-gray-700 font-medium">
                특히, 천장을 뜯고 통신선을 깔아야 하는 복잡한 배선 공사 없이 무선으로 구축되므로 신축은 물론 기존 건물에도 영업 방해 없이 빠르게 설치할 수 있습니다.
              </p>
            </div>
          </div>

          {/* 무중단 제어 시각화 시뮬레이터 */}
          <div className="lg:w-1/2 w-full flex flex-col items-center bg-slate-100 p-8 rounded-2xl border-2 border-slate-200 relative">
             <div className="flex justify-between w-full mb-8 relative z-10">
                {/* 외부 클라우드 / 인터넷 */}
                <div className={`flex flex-col items-center transition-opacity duration-500 ${isInternetConnected ? 'opacity-100' : 'opacity-30'}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2 ${isInternetConnected ? 'bg-blue-100 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-gray-200 text-gray-400'}`}>☁️</div>
                  <span className="text-xs font-bold text-gray-500">외부 인터넷 망</span>
                </div>

                {/* 연결선 (인터넷 <-> 로컬 서버) */}
                <div className="flex-1 flex items-center justify-center px-4 relative">
                   <div className={`w-full h-1 border-t-2 border-dashed transition-colors duration-500 ${isInternetConnected ? 'border-blue-400' : 'border-red-400'}`}></div>
                   {!isInternetConnected && <span className="absolute text-red-500 text-2xl font-black bg-slate-100 px-1">X</span>}
                </div>

                {/* 플로림 로컬 서버 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-800 rounded-lg flex items-center justify-center text-3xl mb-2 shadow-[0_0_15px_rgba(34,197,94,0.5)] relative">
                    🖧
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-100 animate-pulse"></div>
                  </div>
                  <span className="text-xs font-bold text-green-700">현장 로컬 서버</span>
                </div>
             </div>

             {/* 로컬 서버 <-> 스마트 조명 연결선 */}
             <div className="w-full flex justify-end pr-8 pb-4 relative z-10">
               <div className="w-1/2 border-r-2 border-b-2 border-green-500 h-10 rounded-br-xl opacity-50"></div>
             </div>

             {/* 스마트 조명 그룹 */}
             <div className="w-full flex justify-around bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative z-10">
               <div className="flex flex-col items-center">
                 <div className="text-3xl text-yellow-400 mb-1 shadow-[0_0_20px_rgba(250,204,21,0.3)] rounded-full">💡</div>
                 <span className="text-[10px] text-gray-500 font-bold">오피스 A구역</span>
               </div>
               <div className="flex flex-col items-center">
                 <div className="text-3xl text-yellow-400 mb-1 shadow-[0_0_20px_rgba(250,204,21,0.3)] rounded-full">💡</div>
                 <span className="text-[10px] text-gray-500 font-bold">지하 주차장</span>
               </div>
               <div className="flex flex-col items-center">
                 <div className="text-3xl text-yellow-400 mb-1 shadow-[0_0_20px_rgba(250,204,21,0.3)] rounded-full">💡</div>
                 <span className="text-[10px] text-gray-500 font-bold">복도/화장실</span>
               </div>
             </div>

             {/* 컨트롤 버튼 */}
             <button 
               onClick={() => setIsInternetConnected(!isInternetConnected)}
               className={`mt-8 px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md ${isInternetConnected ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 animate-pulse'}`}
             >
               {isInternetConnected ? '🚨 인터넷 연결 강제 종료 (장애 시뮬레이션)' : '🔄 외부 인터넷 복구하기'}
             </button>
             
             {/* 상태 메시지 */}
             <p className={`mt-4 text-xs font-bold ${isInternetConnected ? 'text-gray-400' : 'text-green-600'}`}>
               {isInternetConnected ? '외부 통신과 정상 연결되어 있습니다.' : '인터넷 장애 발생! 하지만 내부 로컬 서버로 조명은 100% 정상 제어됩니다.'}
             </p>
          </div>
        </section>

        {/* 2. 시스템 핵심 구성 요소 (브로슈어 매핑) */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">스마트 실내 조명 핵심 구성 요소</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 로컬 서버 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full z-0 opacity-50"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl font-black">01</div>
                <h3 className="text-2xl font-bold text-gray-800">독립형 현장 전용 서버<br/><span className="text-green-600 text-base font-medium">Local On-Premise Server</span></h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                건물의 방재실이나 통신실에 설치되어, 클라우드 연결 없이 독립적으로 조명 네트워크 전체를 통제하는 핵심 두뇌입니다.
              </p>
              <ul className="space-y-4 text-sm text-gray-700 relative z-10">
                <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-green-500 mr-3 mt-0.5">✔</span>
                  <div>
                    <strong className="block text-gray-800">안전한 자체 데이터 보관</strong>
                    <span className="text-gray-500">외부로 데이터를 보내지 않고 기기 내부에 스케줄과 전력 데이터를 완벽하게 보호합니다.</span>
                  </div>
                </li>
                <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-green-500 mr-3 mt-0.5">✔</span>
                  <div>
                    <strong className="block text-gray-800">강력한 폐쇄망 보안 보장</strong>
                    <span className="text-gray-500">외부망과 철저히 단절된 폐쇄망으로 운영되어 해킹 위험을 원천 차단합니다.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* 스마트 센서/컨트롤러 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0 opacity-50"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl font-black">02</div>
                <h3 className="text-2xl font-bold text-gray-800">무선 스마트 센서 & 컨트롤러<br/><span className="text-blue-600 text-base font-medium">Smart Sensor & Controller</span></h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                개별 조명 기구에 장착되어 로컬 서버의 명령을 즉각 실행하고, 공간의 주변 환경을 스스로 감지하는 똑똑한 단말기입니다.
              </p>
              <ul className="space-y-4 text-sm text-gray-700 relative z-10">
                <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-blue-500 mr-3 mt-0.5">✔</span>
                  <div>
                    <strong className="block text-gray-800">자유로운 기기 확장성 (Matter)</strong>
                    <span className="text-gray-500">모든 스마트 기기와 호환되는 국제 표준 매터(Matter) 인증 모듈을 탑재했습니다.</span>
                  </div>
                </li>
                <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-blue-500 mr-3 mt-0.5">✔</span>
                  <div>
                    <strong className="block text-gray-800">현장 맞춤형 정밀 밝기 제어</strong>
                    <span className="text-gray-500">0-10V, PWM, DALI 등 기존 조명 규격에 맞춰 가장 세밀한 디밍 제어를 제공합니다.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* 3. 시스템 아키텍처 다이어그램 */}
        <section className="bg-gray-800 text-white rounded-3xl p-10 md:p-16 mb-20 shadow-xl text-center">
          <h2 className="text-2xl font-bold text-green-300 mb-12 tracking-widest uppercase text-sm">System Architecture</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 font-bold text-lg">
             {/* 1단계 */}
             <div className="bg-gray-700 py-6 px-8 rounded-2xl border border-gray-600 w-full md:w-auto shadow-inner flex flex-col items-center">
               <span className="text-3xl mb-2">🖧</span>
               <span>독립형 현장 서버</span>
               <span className="text-xs text-green-400 font-normal mt-1">방재실 / 통신실 내장</span>
             </div>
             
             {/* 연결 화살표 */}
             <div className="text-green-500 rotate-90 md:rotate-0 text-3xl animate-pulse">⇌</div>
             
             {/* 2단계 */}
             <div className="bg-gray-700 py-6 px-8 rounded-2xl border border-gray-600 w-full md:w-auto shadow-inner flex flex-col items-center">
               <span className="text-3xl mb-2">📶</span>
               <span>내부 무선망 (Router/Hub)</span>
               <span className="text-xs text-green-400 font-normal mt-1">Matter / Thread / Wi-Fi</span>
             </div>

             {/* 연결 화살표 */}
             <div className="text-green-500 rotate-90 md:rotate-0 text-3xl animate-pulse">⇌</div>
             
             {/* 3단계 */}
             <div className="bg-green-900 py-6 px-8 rounded-2xl border border-green-500 w-full md:w-auto shadow-[0_0_20px_rgba(34,197,94,0.2)] flex flex-col items-center">
               <span className="text-3xl mb-2">💡</span>
               <span>스마트 센서 및 LED 조명</span>
               <span className="text-xs text-green-200 font-normal mt-1">디밍 / 조도 / 모션 감지</span>
             </div>
          </div>
        </section>

        {/* 4. 제품 기술 사양 (Tech Specs) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 px-4 border-l-4 border-green-600">Technical Specifications</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold w-1/3 md:w-1/4">관제 서버 형태</th>
                  <td className="py-5 px-6 text-gray-600">독립형 현장 서버 (On-Premise) / 폐쇄망(Closed Network) 환경 100% 지원</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold">무선 통신 기술</th>
                  <td className="py-5 px-6 text-gray-600">Matter, Thread, Wi-Fi 기반 다중 무선 통신 호환</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold">디밍(밝기) 제어 규격</th>
                  <td className="py-5 px-6 text-gray-600">0~10V DC Dimming, PWM 정밀 제어, DALI / 동작 전압 AC 100~240V (50/60Hz)</td>
                </tr>
                <tr>
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold">복합 센서 스펙</th>
                  <td className="py-5 px-6 text-gray-600">고감도 움직임 감지 센서 (최대 8m 반경) / 자연광 연동 실시간 조도 센서 내장</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 대시보드로 넘어가는 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <Link to="/smart-building/intro" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-green-600 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-green-700 transition-colors">스마트 빌딩 개요</span>
          </Link>
          <Link to="/platform/dashboard" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-green-600 transition-colors mb-1">다음 카테고리 →</span>
            <span className="text-gray-700 font-bold group-hover:text-green-700 transition-colors">통합 관제 플랫폼 대시보드</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SmartBuildingSensor;
