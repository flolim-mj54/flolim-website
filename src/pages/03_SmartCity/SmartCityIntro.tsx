import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const SmartCityIntro = () => {
  return (
    <div className="pb-10">
      <PageHeader 
        category="Smart City System"
        title="스마트 시티 제어 시스템"
        subtitle={
          <>
            도시 전체의 조명과 센서를 하나의 플랫폼으로 묶어 통제하는 <strong className="text-flolim font-bold">지능형 통합 인프라</strong>입니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 1. 시스템 개요 (System Overview) */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-xl border border-slate-800 mb-20 flex flex-col lg:flex-row gap-12 items-center hover:border-flolim/50 transition-colors duration-500">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              데이터로 호흡하는 미래 도시,<br />
              <span className="text-flolim">모든 것을 하나로 통합 관리합니다</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 font-light">
              플로림의 스마트 시티 제어 시스템은 도로와 거리를 밝히는 수만 개의 가로등을 단순한 조명 기구가 아닌, <strong className="text-white">도시의 데이터를 수집하고 반응하는 지능형 노드(Node)</strong>로 탈바꿈시킵니다.
            </p>
            <p className="text-slate-400 leading-relaxed font-light mb-6">
              각 지주(Smart Pole)에 탑재된 복합 IoT 센서망이 교통, 환경, 시설물 상태를 실시간으로 감지하고, 이 데이터는 중앙 관제 센터로 전송되어 <strong className="text-white">자동화된 디밍(Dimming) 제어 및 선제적 유지보수</strong>의 기준이 됩니다.
            </p>
            <div className="bg-slate-800/80 border-l-4 border-flolim p-5 rounded-r-xl shadow-inner">
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                시민의 안전을 책임지고 도시의 에너지를 획기적으로 절감하는 <strong className="text-flolim">통합 도시 운영 플랫폼</strong>, 플로림이 완성합니다.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            {/* 대표 그래픽 요소 (추상적인 스마트 시티 통합망) */}
            <div className="relative w-full h-[350px] bg-[#050b14] rounded-2xl border border-slate-700 overflow-hidden flex items-center justify-center shadow-inner group">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMFYwem0yMCAyMHYyMGgyMFYyMEgyMHoiIGZpbGw9IiMxOEE5QzYiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')] opacity-30"></div>
              
              <div className="relative z-10 w-48 h-48">
                {/* 중앙 시스템 허브 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-800 border-2 border-flolim rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(24,169,198,0.5)] z-20 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                {/* 데이터 수집 궤도 */}
                <div className="absolute inset-0 border border-slate-600 rounded-full animate-[spin_10s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                </div>
                <div className="absolute -inset-8 border border-slate-700/50 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"></div>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 시스템 핵심 구성 요소: 다중 IoT 센서망 */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">시스템의 눈과 귀, 다중 IoT 센서망</h2>
            <p className="text-slate-400 font-light">
              스마트 폴에 탑재된 4가지 핵심 센서가 도시의 물리적 현상을 디지털 데이터로 변환하여 시스템에 전달합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 센서 1: 레이더 */}
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/40 transition-all group flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-24 h-24 shrink-0 bg-[#050b14] rounded-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-full h-full border border-cyan-500/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-12 h-12 origin-bottom-left animate-[spin_3s_linear_infinite] bg-gradient-to-br from-cyan-400/40 to-transparent rounded-tr-full"></div>
                <svg className="w-8 h-8 text-cyan-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">교통량 데이터 수집 (Radar)</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  도로의 차량 및 보행자 접근을 실시간으로 감지합니다. 이 데이터는 시스템으로 전달되어, 심야 시간대 <strong className="text-slate-300">동적 디밍(Dynamic Dimming) 제어</strong>를 통한 획기적인 에너지 절감의 기준이 됩니다.
                </p>
              </div>
            </div>

            {/* 센서 2: 환경 */}
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/40 transition-all group flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-24 h-24 shrink-0 bg-[#050b14] rounded-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-16 h-16 border border-green-500/30 rounded-full animate-[ping_3s_linear_infinite]"></div>
                <svg className="w-8 h-8 text-green-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">대기/기상 환경 감시 (Environment)</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  도심 곳곳의 온습도, 미세먼지(PM2.5), 유해가스를 그물망처럼 수집합니다. 중앙 시스템은 이를 취합하여 <strong className="text-slate-300">정확한 광역 대기질 매핑 및 기상 이변 조기 경보</strong>를 가능하게 합니다.
                </p>
              </div>
            </div>

            {/* 센서 3: CCTV */}
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/40 transition-all group flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-24 h-24 shrink-0 bg-[#050b14] rounded-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 w-full h-1 bg-blue-500/50 shadow-[0_0_10px_#3b82f6] animate-[scanDown_2s_linear_infinite]"></div>
                <svg className="w-8 h-8 text-blue-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">지능형 영상 분석 (CCTV Vision AI)</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  단순 영상 녹화를 넘어, 엣지(Edge) 단에서 불법 주정차나 쓰레기 무단 투기 등 <strong className="text-slate-300">이상 객체 및 상황을 자동 판독</strong>하여 관제 요원의 즉각적인 대응을 돕는 보안 시스템의 핵심입니다.
                </p>
              </div>
            </div>

            {/* 센서 4: 기울기 */}
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/40 transition-all group flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-24 h-24 shrink-0 bg-[#050b14] rounded-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-12 h-12 border border-purple-500/50 rounded-full border-dashed animate-[spin_4s_linear_infinite]"></div>
                <svg className="w-8 h-8 text-purple-400 relative z-10 transition-transform duration-1000 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">인프라 예방 정비 (Tilt/Vibration)</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  차량 충돌이나 강풍으로 인한 지주의 미세한 기울어짐을 감지합니다. 시스템은 이 데이터를 바탕으로 시설물 붕괴 위험을 예측하고 <strong className="text-slate-300">선제적인 유지보수 일정</strong>을 수립합니다.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 3. 시스템을 완성하는 통신 솔루션 (하위 솔루션 페이지 연결) */}
        <section className="mb-16">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-12 border border-slate-800 flex flex-col items-center gap-10">
            
            <div className="w-full text-center max-w-3xl">
              <h2 className="text-2xl font-bold text-white mb-4">시스템 구축을 위한 맞춤형 통신 솔루션</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-8">
                플로림 제어 시스템은 센서 데이터를 관제 센터로 끊김 없이 전달하기 위해, 
                현장의 지형과 시스템 규모에 맞춘 세 가지 하이브리드 통신 솔루션을 제공합니다. 
                아래 솔루션을 클릭하여 상세 기술 스펙을 확인하세요.
              </p>
            </div>

            {/* 라우팅 카드 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              
              {/* LoRa-Mesh 링크 카드 */}
              <Link to="/smart-city/lora" className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-flolim hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_30px_rgba(24,169,198,0.15)] flex flex-col h-full cursor-pointer">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-flolim mb-5 border border-slate-700 group-hover:bg-flolim group-hover:text-white transition-colors">
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors">LoRa-Mesh 솔루션</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed flex-grow">
                  매월 통신비 부담 없이, 수만 개의 조명을 촘촘하게 잇는 고신뢰성 무선 그물망 자가망 시스템
                </p>
                <div className="mt-6 text-flolim text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  자세히 보기 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </Link>

              {/* NB-IoT 링크 카드 */}
              <Link to="/smart-city/nb-iot" className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-flolim hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_30px_rgba(24,169,198,0.15)] flex flex-col h-full cursor-pointer">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-flolim mb-5 border border-slate-700 group-hover:bg-flolim group-hover:text-white transition-colors">
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors">NB-IoT 솔루션</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed flex-grow">
                  중계기 설치 없이 SKT/KT 상용망 기지국과 직접 연결되어 거리 제한이 극복된 광역 통신망
                </p>
                <div className="mt-6 text-flolim text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  자세히 보기 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </Link>

              {/* DMX512 링크 카드 */}
              <Link to="/smart-city/dmx" className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-flolim hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_30px_rgba(24,169,198,0.15)] flex flex-col h-full cursor-pointer">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-flolim mb-5 border border-slate-700 group-hover:bg-flolim group-hover:text-white transition-colors">
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors">DMX512 경관 솔루션</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed flex-grow">
                  초저지연 데이터 전송으로 1,600만 풀컬러 교량 및 랜드마크 애니메이션을 연출하는 특수 제어망
                </p>
                <div className="mt-6 text-flolim text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  자세히 보기 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* 💡 수정됨: 스마트 빌딩 -> 이전 카테고리(비즈니스 시뮬레이션)로 정상화 */}
        <BottomNav 
          prev={{ label: '이전 카테고리', title: '에너지 절감 시뮬레이션', path: '/business/simulation' }}
          next={{ label: '다음 페이지', title: 'LoRa-Mesh 제어 솔루션', path: '/smart-city/lora' }}
        />
      </div>

      <style>
        {`
          @keyframes scanDown {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default SmartCityIntro;