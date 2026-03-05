import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SmartCityDmx = () => {
  // 경관 조명 색상 시뮬레이션을 위한 상태 관리
  const [activeColor, setActiveColor] = useState(0);

  const colors = [
    { name: "Ocean Blue", gradient: "from-blue-600 to-cyan-400", hex: "bg-cyan-400", shadow: "shadow-cyan-500/50" },
    { name: "Neon Purple", gradient: "from-purple-700 to-fuchsia-500", hex: "bg-fuchsia-500", shadow: "shadow-fuchsia-500/50" },
    { name: "Sunset Orange", gradient: "from-orange-600 to-amber-400", hex: "bg-amber-400", shadow: "shadow-amber-500/50" },
    { name: "Emerald Green", gradient: "from-emerald-700 to-green-400", hex: "bg-green-400", shadow: "shadow-green-500/50" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">DMX 경관조명 제어 솔루션</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            다채로운 빛의 예술로 <strong className="text-indigo-600 font-bold">도시의 야간 랜드마크를 완성</strong>합니다.
          </p>
        </div>

        {/* 1. 인터랙티브 DMX 시뮬레이터 (브로슈어 메시지 결합) */}
        <section className="bg-white rounded-3xl shadow-xl border border-gray-200 mb-20 overflow-hidden flex flex-col lg:flex-row">
          
          {/* 시각화 영역: 대교(Bridge) 경관 조명 시뮬레이션 */}
          <div className="lg:w-3/5 relative aspect-video lg:aspect-auto bg-slate-900 overflow-hidden">
            {/* 동적 그라데이션 배경 (하늘/물 반사 효과) */}
            <div className={`absolute inset-0 bg-gradient-to-t ${colors[activeColor].gradient} opacity-20 transition-colors duration-1000`}></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
              {/* 대교 그래픽 (추상화) */}
              <div className="relative w-full max-w-lg h-40 mt-10">
                 {/* 교각 */}
                 <div className="absolute bottom-0 left-1/4 w-4 h-full bg-slate-800 z-10"></div>
                 <div className="absolute bottom-0 right-1/4 w-4 h-full bg-slate-800 z-10"></div>
                 {/* 상판 */}
                 <div className="absolute bottom-1/4 w-full h-3 bg-slate-700 z-20"></div>
                 {/* 케이블 (조명 효과) */}
                 <svg className="absolute inset-0 w-full h-full z-30" preserveAspectRatio="none">
                   <path d="M0,100 Q125,10 250,60 T500,100" fill="none" stroke="currentColor" strokeWidth="2" className={`text-transparent transition-all duration-1000`} style={{ stroke: 'rgba(255,255,255,0.2)' }} />
                   <path d="M0,100 Q125,10 250,60 T500,100" fill="none" stroke="currentColor" strokeWidth="4" className={`${colors[activeColor].hex} transition-colors duration-1000 blur-sm`} />
                 </svg>
                 {/* 빛 반사 포인트들 */}
                 <div className={`absolute bottom-[28%] left-[20%] w-3 h-3 rounded-full ${colors[activeColor].hex} ${colors[activeColor].shadow} shadow-[0_0_20px_rgba(0,0,0,0)] transition-all duration-1000 z-40`}></div>
                 <div className={`absolute bottom-[28%] left-[50%] w-3 h-3 rounded-full ${colors[activeColor].hex} ${colors[activeColor].shadow} shadow-[0_0_20px_rgba(0,0,0,0)] transition-all duration-1000 z-40`}></div>
                 <div className={`absolute bottom-[28%] right-[20%] w-3 h-3 rounded-full ${colors[activeColor].hex} ${colors[activeColor].shadow} shadow-[0_0_20px_rgba(0,0,0,0)] transition-all duration-1000 z-40`}></div>
              </div>
            </div>
            
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
              <span className="text-white text-sm font-bold tracking-wider">LIVE DMX PREVIEW</span>
            </div>
          </div>

          {/* 컨트롤 패널 영역 */}
          <div className="lg:w-2/5 p-10 flex flex-col justify-center bg-gray-900 text-white relative z-10">
            <h2 className="text-2xl font-bold mb-3">수만 가지의 섬세한 색상 변환</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              DMX512 프로토콜을 활용하여 중앙 관제 시스템에서 실시간으로 RGB 컬러와 조도를 완벽하게 통제합니다. 아래 컬러 패드를 클릭하여 제어 시스템을 체험해 보세요.
            </p>
            
            <div className="space-y-4 mb-8">
              {colors.map((color, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveColor(idx)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                    activeColor === idx 
                    ? 'border-white bg-white/10' 
                    : 'border-gray-700 hover:bg-gray-800'
                  }`}
                >
                  <span className="font-bold">{color.name}</span>
                  <span className={`w-6 h-6 rounded-full ${color.hex} shadow-lg`}></span>
                </button>
              ))}
            </div>

            <div className="bg-black/30 p-4 rounded-xl border border-gray-800 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-mono">DMX UNIVERSE: 1</span>
              <span className="text-xs text-green-400 font-bold tracking-widest flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>CONNECTED</span>
            </div>
          </div>
        </section>

        {/* 2. 핵심 강점 (브로슈어 내용 매핑) */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">옥외 환경에 최적화된 맞춤형 정밀 제어</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-3xl mb-6">🌉</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">옥외 환경 완벽 대응</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                교량, 테마공원, 대형 건축물 외벽 등 극한의 옥외 환경에 최적화된 DMX512 기반의 고신뢰성 정밀 제어 시스템을 제공합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-3xl mb-6">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">역동적인 조명 연출</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                RGB / RGBW LED 조명과 연동하여 수만 가지의 섬세한 색상 변환은 물론, 물결치듯 부드럽게 변하는 역동적인 디밍(Dimming) 효과를 완벽하게 구현합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-3xl mb-6">📅</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">계절·이벤트별 스케줄링</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                중앙 관제 서버와 연동하여 평일, 주말, 국경일, 계절별로 각기 다른 조명 테마를 미리 스케줄링하고 언제든 원격으로 제어할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. 시스템 아키텍처 및 상세 스펙 */}
        <section className="bg-gray-800 text-white rounded-3xl p-10 md:p-16 mb-16 shadow-xl flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-indigo-300 mb-6">System Architecture</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              플로림의 DMX 제어 솔루션은 중앙 관제 서버에서 이더넷(Ethernet) 망을 통해 현장의 DMX 컨트롤러(Master/Slave)로 신호를 전송합니다. 이후 각 경관 조명 기구로 DMX512 표준 신호를 데이지 체인(Daisy Chain) 방식으로 분배하여 화려한 퍼포먼스를 만들어냅니다.
            </p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start"><span className="text-indigo-400 mr-2">✓</span> 통신 규격: DMX512-A / Art-Net 지원</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">✓</span> 제어 채널: 1 Universe 당 최대 512 채널 독립 제어</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">✓</span> 연동 호환: 관제 대시보드 내 색상 휠(Color Wheel) 및 팔레트 완벽 연동</li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 shadow-inner">
               <h3 className="text-center font-bold text-gray-400 mb-6 tracking-widest text-sm">DMX 제어 흐름도</h3>
               <div className="flex flex-col gap-4 text-center font-bold">
                 <div className="bg-indigo-900 text-white py-3 rounded-lg border border-indigo-700">중앙 관제 서버 (통합 대시보드)</div>
                 <div className="text-indigo-500">▼ (Art-Net / TCP/IP)</div>
                 <div className="bg-gray-800 py-3 rounded-lg border border-gray-600">DMX 마스터 컨트롤러</div>
                 <div className="text-indigo-500">▼ (DMX512 신호)</div>
                 <div className="flex gap-2">
                   <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white flex-1 py-3 rounded-lg text-xs">RGB 조명 1</div>
                   <div className="bg-gradient-to-r from-purple-600 to-fuchsia-400 text-white flex-1 py-3 rounded-lg text-xs">RGB 조명 2</div>
                   <div className="bg-gradient-to-r from-amber-500 to-orange-400 text-white flex-1 py-3 rounded-lg text-xs">RGB 조명 3</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 다른 솔루션으로 이동하는 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <Link to="/smart-city/nb-iot" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-indigo-600 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-indigo-700 transition-colors">NB-IoT 제어 솔루션</span>
          </Link>
          {/* 스마트 시티가 끝났으므로, 다음 대메뉴인 스마트 빌딩의 첫 페이지로 연결 */}
          <Link to="/smart-building/intro" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-indigo-600 transition-colors mb-1">다음 카테고리 →</span>
            <span className="text-gray-700 font-bold group-hover:text-indigo-700 transition-colors">스마트 빌딩 솔루션</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SmartCityDmx;
