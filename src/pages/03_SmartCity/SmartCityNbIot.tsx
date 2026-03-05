import React from 'react';
import { Link } from 'react-router-dom';

const SmartCityNbIot = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">NB-IoT 기반 가로등 제어 솔루션</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            추가 중계기 장비 없이, 전국 통신망을 활용해 <strong className="text-blue-600 font-bold">사각지대 없이 기지국과 직접 연결</strong>됩니다.
          </p>
        </div>

        {/* 1. 핵심 Overview 섹션 (브로슈어 내용 반영) */}
        <section className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-200 mb-16 flex flex-col-reverse md:flex-row gap-12 items-center">
          <div className="md:w-1/2 w-full flex justify-center">
            {/* 기지국 1:1 직접 통신(Star Topology)을 보여주는 시각적 장치 */}
            <div className="relative w-full aspect-square max-w-md bg-slate-50 rounded-full shadow-inner flex items-center justify-center p-6 border-4 border-slate-100 overflow-hidden">
               {/* 기지국 파동 애니메이션 */}
               <div className="absolute w-full h-full border-2 border-blue-200 rounded-full animate-[ping_3s_infinite_ease-out]"></div>
               <div className="absolute w-3/4 h-3/4 border-2 border-blue-300 rounded-full animate-[ping_3s_infinite_ease-out_1s]"></div>
               <div className="absolute w-1/2 h-1/2 border-2 border-blue-400 rounded-full animate-[ping_3s_infinite_ease-out_2s]"></div>
               
               {/* 중앙 통신사 기지국 아이콘 */}
               <div className="relative z-10 w-20 h-20 bg-blue-900 rounded-2xl flex items-center justify-center text-white text-4xl shadow-xl">
                 📡
               </div>

               {/* 주변 개별 가로등 노드 (1:1 직접 연결) */}
               <div className="absolute top-10 left-20 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 border-2 border-blue-200 z-20">💡</div>
               <div className="absolute top-20 right-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 border-2 border-blue-200 z-20">💡</div>
               <div className="absolute bottom-16 left-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 border-2 border-blue-200 z-20">💡</div>
               <div className="absolute bottom-12 right-24 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 border-2 border-blue-200 z-20">💡</div>
               
               {/* 중앙 기지국과 노드들을 잇는 직접 연결 선 */}
               <svg className="absolute inset-0 w-full h-full z-0 opacity-50">
                 <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#3b82f6" strokeWidth="3" />
                 <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="#3b82f6" strokeWidth="3" />
                 <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#3b82f6" strokeWidth="3" />
                 <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="#3b82f6" strokeWidth="3" />
               </svg>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
              통신사망(LTE)을 그대로 활용하여<br />압도적인 통신 품질을 보장합니다
            </h2>
            <ul className="space-y-5 text-gray-600 leading-relaxed">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                <span><strong>초기 인프라 구축 비용 혁신적 절감:</strong> 개별 가로등이 통신사 기지국과 1:1로 직접 통신하므로, 데이터를 모아주는 별도의 중계기(Gateway) 장비를 설치할 필요가 없습니다.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                <span><strong>극한 환경에서도 끊김 없는 연결:</strong> 전파 투과력이 뛰어나 빌딩 숲, 산간 오지, 지하차도 등 통신 사각지대에서도 완벽한 제어와 모니터링이 가능합니다.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                <span><strong>가장 안전한 최고 수준의 보안망:</strong> 상용 통신사(SKT, KT, LGU+)의 강력한 보안망을 그대로 적용하여 해킹 및 데이터 유출 위험을 원천 차단합니다.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 단말기 구성 요소 (Terminal Components) */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">현장에 맞춘 단일 램프 컨트롤러</h2>
            <p className="text-gray-600">복잡한 중계 장비 없이, 가로등에 컨트롤러 하나만 달면 통신사 기지국과 즉시 연결됩니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NEMA 7핀 */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full z-0"></div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2 relative z-10">외장형 컨트롤러 (NEMA)</h3>
              <p className="text-gray-500 mb-8 font-medium relative z-10">국제 표준 NEMA 7핀 기반 실시간 모니터링</p>
              
              <ul className="space-y-4 text-sm text-gray-700 relative z-10">
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span> 꽂기만 하면 바로 작동하는 플러그 앤 플레이(Plug & Play) 방식</li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span> 세밀한 밝기 조절(DALI 2.0 및 0-10V) 완벽 지원</li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span> 위치를 파악하는 GPS와 주변 밝기를 감지하는 광전지 센서 내장</li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span> 비바람에 강한 방수·방진(IP65) 및 정전 시 이전 상태 자동 복구</li>
              </ul>
            </div>

            {/* ZHAGA 4핀 */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-50 rounded-full z-0"></div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-2 relative z-10">내장형 컨트롤러 (ZHAGA)</h3>
              <p className="text-gray-500 mb-8 font-medium relative z-10">유럽 표준 ZHAGA 4핀 기반 정밀 고장 검출</p>
              
              <ul className="space-y-4 text-sm text-gray-700 relative z-10">
                <li className="flex items-start"><span className="text-indigo-500 mr-3 font-bold">✓</span> 유럽 표준 규격(ZHAGA)에 최적화된 소형 디자인 및 뛰어난 호환성</li>
                <li className="flex items-start"><span className="text-indigo-500 mr-3 font-bold">✓</span> 통신 단절 시에도 자체 시계(RTC)로 정해진 조명 스케줄 정상 실행</li>
                <li className="flex items-start"><span className="text-indigo-500 mr-3 font-bold">✓</span> 가로등의 기울어짐이나 온도 변화를 감지하는 안전 센서 추가 연동</li>
                <li className="flex items-start"><span className="text-indigo-500 mr-3 font-bold">✓</span> 조명 기구 내부에 완벽히 매립되는 크기와 강력한 방수·방진(IP66/IP67)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. 시스템 아키텍처 및 강점 */}
        <section className="bg-gray-800 text-white rounded-3xl p-10 md:p-16 mb-20 shadow-xl">
          <h2 className="text-2xl font-bold text-blue-300 mb-8 text-center tracking-widest uppercase text-sm">System Architecture</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-16 text-center font-bold text-lg md:text-xl">
             <div className="bg-gray-700 py-4 px-8 rounded-xl border border-gray-600 w-full md:w-auto shadow-inner">
               플로림 통합 관제 서버
             </div>
             <div className="text-blue-400 rotate-90 md:rotate-0 text-3xl">⇌</div>
             <div className="bg-blue-900 py-4 px-8 rounded-xl border border-blue-500 w-full md:w-auto shadow-[0_0_20px_rgba(59,130,246,0.3)]">
               통신사 이동통신 기지국 (LTE망)
             </div>
             <div className="text-blue-400 rotate-90 md:rotate-0 text-3xl">⇌</div>
             <div className="bg-gray-700 py-4 px-8 rounded-xl border border-gray-600 w-full md:w-auto shadow-inner">
               개별 무선 단말기 (스마트 가로등)
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-600 pt-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center"><span className="text-2xl mr-3">🔌</span> 꼼꼼한 전력 측정과 모니터링</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                단말기에 내장된 스마트 미터기가 전압, 전류, 소비 전력 등을 실시간으로 정밀하게 측정합니다. 과전압 등 전원에 이상이 생기면 관리자에게 즉시 알림을 발송하여 고장과 안전사고를 미리 예방합니다.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center"><span className="text-2xl mr-3">🔄</span> 현장 방문 없는 무선 원격 관리 (OTA)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                시스템 기능 업데이트나 펌웨어 패치가 필요할 때, 직원이 직접 고소작업차를 타고 가로등에 올라갈 필요 없이 통신망을 통해 원격으로 소프트웨어를 업그레이드하여 유지보수 비용을 크게 아껴줍니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 기술 사양 (Tech Specs) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 px-4 border-l-4 border-blue-600">Technical Specifications</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold w-1/3 md:w-1/4">네트워크 기술</th>
                  <td className="py-5 px-6 text-gray-600">LTE Cat NB1, Cat M1, EGPRS / 1:1 직접 통신(Star Topology)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold">지원 주파수 대역</th>
                  <td className="py-5 px-6 text-gray-600">통신사 허가 대역 (LTE-FDD B1 / B3 / B5 / B8 등 상용망 완벽 호환)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold">디밍(밝기) 제어 규격</th>
                  <td className="py-5 px-6 text-gray-600">DALI 2.0 프로토콜, 0-10V DC, PWM 완벽 지원</td>
                </tr>
                <tr>
                  <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold">동작 전압 및 릴레이</th>
                  <td className="py-5 px-6 text-gray-600">AC 96~264V (50/60Hz) / 16A 내장 릴레이 스위치 적용</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 다른 솔루션으로 이동하는 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <Link to="/smart-city/lora" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">LoRa-Mesh 제어 솔루션</span>
          </Link>
          <Link to="/smart-city/dmx" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">다음 페이지 →</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">DMX 경관조명 제어 솔루션</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SmartCityNbIot;