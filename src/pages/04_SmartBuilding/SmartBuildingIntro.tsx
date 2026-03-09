import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const SmartBuildingIntro = () => {
  // 시뮬레이션 상태: 자연광 유입 여부 & 현재 사용자가 마우스를 올린 구역(재실)
  const [isSunny, setIsSunny] = useState<boolean>(false);
  const [activeZone, setActiveZone] = useState<number | null>(null);

  // 평면도 구역(Zone) 데이터
  const zones = [
    { id: 1, name: '내측 회의실', isWindow: false, position: 'top-6 left-6 w-[45%] h-[40%]' },
    { id: 2, name: '창가 오피스 A', isWindow: true, position: 'top-6 right-6 w-[45%] h-[40%]' },
    { id: 3, name: '휴게실 및 복도', isWindow: false, position: 'bottom-6 left-6 w-[45%] h-[40%]' },
    { id: 4, name: '창가 오피스 B', isWindow: true, position: 'bottom-6 right-6 w-[45%] h-[40%]' },
  ];

  // 구역별 조명 상태 계산 함수
  const getLightState = (id: number, isWindow: boolean) => {
    const isOccupied = activeZone === id;
    
    // 기본 대기 전력
    let opacity = 0.2; 
    let statusText = "대기 전력 (20%)";
    let colorClass = "bg-slate-400";

    // 재실 시
    if (isOccupied) {
      opacity = 1;
      statusText = "최적 조도 (100%)";
      colorClass = "bg-flolim";
    }

    // 자연광 유입 시 (창가 구역만 해당)
    if (isSunny && isWindow) {
      if (isOccupied) {
        opacity = 0.4; // 재실 중이지만 햇빛이 들어와 밝기를 낮춤
        statusText = "자연광 디밍 (40%)";
        colorClass = "bg-flolim";
      } else {
        opacity = 0.05; // 빈 공간 + 햇빛 = 거의 소등
        statusText = "소등 절전 (5%)";
        colorClass = "bg-slate-500";
      }
    }

    return { opacity, statusText, colorClass, isOccupied };
  };

  return (
    <div className="pb-10 bg-[#020617] min-h-screen font-sans">
      
      <PageHeader 
        category="Smart Building System"
        title="스마트 빌딩 제어 시스템"
        subtitle={
          <>
            빌딩 내 모든 조명과 센서를 하나로 연결하여, 에너지를 낭비 없이 완벽하게 통제하는 <strong className="text-flolim font-bold">지능형 통합 인프라</strong>입니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-16">
        
        {/* 1. 시스템 개요 */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-xl border border-slate-800 mb-20 flex flex-col lg:flex-row gap-12 items-center hover:border-flolim/40 transition-colors duration-500">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
              공간을 이해하는 똑똑한 빌딩,<br />
              <span className="text-flolim drop-shadow-md">에너지 효율의 극대화를 실현합니다</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 font-light">
              플로림의 스마트 빌딩 제어 시스템은 빌딩, 지하주차장, 사무실 등 실내 환경에 최적화된 스마트 조명 제어망입니다. 단순한 점소등을 넘어, <strong className="text-white font-medium">공간의 활용도와 주변 환경 데이터를 실시간으로 수집</strong>하여 능동적으로 반응합니다.
            </p>
            <ul className="space-y-4 text-slate-300 text-sm font-light">
              <li className="flex items-start">
                <span className="text-flolim mr-3 font-bold">✔</span>
                관리자 대시보드를 통해 구역별 정밀한 스케줄링 및 원격 그룹 제어 지원
              </li>
              <li className="flex items-start">
                <span className="text-flolim mr-3 font-bold">✔</span>
                쾌적한 실내 환경을 조성하고 획기적인 건물 유지비용(OPEX) 절감 달성
              </li>
              <li className="flex items-start">
                <span className="text-flolim mr-3 font-bold">✔</span>
                매월 ESG 리포트를 발행하여 탄소 배출 저감 성과 증빙 및 기업 가치 제고
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="relative w-full h-[320px] bg-[#050b14] rounded-2xl shadow-2xl overflow-hidden border border-slate-700 flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-flolim/10 to-transparent opacity-50"></div>
              <div className="relative z-10 w-48 h-48 flex items-center justify-center">
                <div className="w-16 h-16 bg-slate-800 border-2 border-flolim rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(24,169,198,0.5)] z-20 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🏢</span>
                </div>
                <div className="absolute inset-0 border border-slate-600 rounded-full animate-[spin_8s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-flolim rounded-full shadow-[0_0_10px_#18A9C6]"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-flolim rounded-full shadow-[0_0_10px_#18A9C6]"></div>
                </div>
                <div className="absolute -inset-8 border border-slate-700/50 rounded-full animate-[spin_12s_linear_infinite_reverse]">
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-flolim rounded-full shadow-[0_0_10px_#18A9C6]"></div>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-flolim rounded-full shadow-[0_0_10px_#18A9C6]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 💡 2. 평면도(Floor Plan) 히트맵 시뮬레이터 */}
        <section className="mb-24">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">센서 기반 2D 평면도 히트맵 시뮬레이터</h3>
              <p className="text-slate-400 text-sm">오른쪽 평면도의 각 구역에 마우스를 올려 <strong className="text-white">재실 상태</strong>를 만들고, 자연광 버튼을 켜보세요.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-stretch bg-[#070e1a] p-6 md:p-8 rounded-2xl border border-slate-700/50">
              
              {/* 좌측: 제어 패널 */}
              <div className="w-full lg:w-1/3 flex flex-col gap-6 justify-center">
                <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 shadow-inner">
                  <h4 className="font-bold text-white mb-4 flex items-center text-sm tracking-wider uppercase">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse shadow-[0_0_8px_#fbbf24]"></span>
                    환경 제어 (조도 센서)
                  </h4>
                  <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700">
                    <button 
                      onClick={() => setIsSunny(false)} 
                      className={`flex-1 py-2.5 rounded-md font-bold text-sm transition-all ${!isSunny ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      야간 / 흐림
                    </button>
                    <button 
                      onClick={() => setIsSunny(true)} 
                      className={`flex-1 py-2.5 rounded-md font-bold text-sm transition-all ${isSunny ? 'bg-flolim text-slate-900 shadow-[0_0_15px_rgba(24,169,198,0.4)]' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      ☀️ 햇빛 유입
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 font-light leading-relaxed">
                    자연광이 들어오면 창가 쪽 구역의 센서가 이를 감지하여 조명을 자동으로 디밍(어둡게)합니다.
                  </p>
                </div>

                <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 shadow-inner">
                  <h4 className="font-bold text-white mb-4 flex items-center text-sm tracking-wider uppercase">
                    <span className="w-2 h-2 bg-flolim rounded-full mr-3 animate-pulse shadow-[0_0_8px_#18A9C6]"></span>
                    시스템 동작 로그
                  </h4>
                  <div className="space-y-3">
                    {zones.map(zone => {
                      const state = getLightState(zone.id, zone.isWindow);
                      return (
                        <div key={zone.id} className="flex justify-between items-center text-xs">
                          <span className={`font-medium ${state.isOccupied ? 'text-flolim' : 'text-slate-400'}`}>
                            {zone.name}
                          </span>
                          <span className={`px-2 py-1 rounded bg-slate-900 border border-slate-700 ${state.isOccupied ? 'text-white' : 'text-slate-500'}`}>
                            {state.statusText}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 우측: 2D 평면도 뷰 */}
              <div className="w-full lg:w-2/3 relative aspect-video bg-[#0b1320] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
                
                {/* 1. 배경 격자(Grid) 무늬 */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                
                {/* 2. 우측 창문(자연광) 효과 */}
                <div className="absolute right-0 top-0 w-12 h-full flex flex-col justify-center">
                  <div className="w-full h-4/5 bg-slate-800 border-l-4 border-slate-600 rounded-l-xl relative">
                    {isSunny && (
                      <div className="absolute inset-0 bg-gradient-to-l from-amber-400/20 to-transparent shadow-[-30px_0_60px_rgba(251,191,36,0.2)] rounded-l-xl border-l-4 border-amber-300"></div>
                    )}
                  </div>
                </div>

                {/* 3. 구역(Zones) 렌더링 */}
                {zones.map((zone) => {
                  const { opacity, colorClass, isOccupied } = getLightState(zone.id, zone.isWindow);
                  
                  return (
                    <div 
                      key={zone.id}
                      onMouseEnter={() => setActiveZone(zone.id)}
                      onMouseLeave={() => setActiveZone(null)}
                      className={`absolute ${zone.position} rounded-xl border-2 transition-all duration-500 cursor-pointer overflow-hidden flex items-center justify-center ${isOccupied ? 'border-flolim/50 bg-slate-800/80 z-20 scale-[1.02] shadow-2xl' : 'border-slate-700 bg-slate-900/50 hover:bg-slate-800'}`}
                    >
                      {/* 조명 히트맵 (Radial Gradient) */}
                      <div 
                        className={`absolute inset-0 opacity-50 transition-opacity duration-700`}
                        style={{
                          background: `radial-gradient(circle at center, ${isOccupied ? '#18A9C6' : '#64748b'} 0%, transparent 70%)`,
                          opacity: opacity
                        }}
                      ></div>

                      {/* 중앙 조명 아이콘/점 */}
                      <div className={`relative z-10 w-4 h-4 rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0)] ${colorClass}`} style={{ opacity }}>
                         {isOccupied && <div className="absolute -inset-2 rounded-full border border-flolim animate-ping opacity-50"></div>}
                      </div>

                      {/* 구역명 라벨 */}
                      <span className={`absolute top-3 left-4 text-xs font-bold px-2 py-1 rounded-md backdrop-blur-md transition-colors ${isOccupied ? 'bg-flolim text-slate-900' : 'bg-slate-950/80 text-slate-400 border border-slate-700'}`}>
                        {zone.name}
                      </span>

                      {/* 사람 모션 표시 */}
                      <div className={`absolute bottom-3 right-4 text-2xl transition-all duration-300 ${isOccupied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        🚶
                      </div>
                    </div>
                  );
                })}

                <div className="absolute bottom-4 left-4 bg-slate-950/80 border border-slate-800 px-4 py-2 rounded-lg text-[10px] text-slate-500 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></span>
                  RADAR MOTION DETECTION ACTIVE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 압도적 절감 효과 (숫자에 텍스트 하이라이트 반영) */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">단순한 교체를 넘은 획기적 절감</h2>
            <p className="text-slate-400 text-lg font-light">
              단순한 LED 교체를 넘어, IoT 센서 연동 제어로 <strong className="text-flolim font-bold">최대 70% 이상의 압도적인 에너지 절감률</strong>을 실현합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* ETRI 실증 */}
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/40 transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-flolim transition-colors">대한민국 ETRI 실증</h3>
              <p className="text-sm text-slate-500 font-medium mb-6 relative z-10">공장 및 상업시설</p>
              <div className="flex items-end gap-2 mb-4 relative z-10">
                {/* 💡 숫자를 플로림 컬러로 확실하게 강조 */}
                <span className="text-5xl font-black text-flolim tracking-tighter drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">74.1<span className="text-3xl font-medium">%</span></span>
                <span className="text-slate-400 font-bold mb-1">절감</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-light relative z-10">
                스마트조명 플랫폼 개별/그룹 제어 적용으로 기존 대비 최대 74.1%의 압도적인 에너지를 절감했습니다.
              </p>
            </div>

            {/* LH공사 실증 */}
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/40 transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-flolim transition-colors">대한민국 LH공사 실증</h3>
              <p className="text-sm text-slate-500 font-medium mb-6 relative z-10">공동주택 및 건물</p>
              <div className="flex items-end gap-2 mb-4 relative z-10">
                <span className="text-slate-400 font-bold mb-1 text-sm mr-1">최대</span>
                {/* 💡 숫자를 플로림 컬러로 확실하게 강조 */}
                <span className="text-5xl font-black text-flolim tracking-tighter drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">70<span className="text-3xl font-medium">%</span></span>
                <span className="text-slate-400 font-bold mb-1">이상 절감</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-light relative z-10">
                IoT 기반 10단계 자동 조도 조절(디밍)을 적용하여 기존 조명 대비 전력량을 70% 이상 대폭 낮췄습니다.
              </p>
            </div>

            {/* 한국광기술원 실증 */}
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/40 transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-flolim transition-colors">한국광기술원 실증</h3>
              <p className="text-sm text-slate-500 font-medium mb-6 relative z-10">학교 및 사무실</p>
              <div className="flex items-end gap-2 mb-4 relative z-10">
                <span className="text-slate-400 font-bold mb-1 text-sm mr-1">일반 LED 대비</span>
                {/* 💡 숫자를 플로림 컬러로 확실하게 강조 */}
                <span className="text-5xl font-black text-flolim tracking-tighter drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">43<span className="text-3xl font-medium">%</span></span>
                <span className="text-slate-400 font-bold mb-1">추가 절감</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-light relative z-10">
                자연광 연동 자동 제어 시스템을 통해, 고효율 일반 LED 조명에서 약 43%의 에너지를 추가로 절약했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. BottomNav (다음 페이지: IoT 센서 자동 제어) */}
        <BottomNav 
          prev={{ label: '이전 카테고리', title: 'DMX 경관조명 제어', path: '/smart-city/dmx' }}
          next={{ label: '다음 페이지', title: 'IoT 센서 자동 제어', path: '/smart-building/sensor' }}
        />

      </div>
    </div>
  );
};

export default SmartBuildingIntro;