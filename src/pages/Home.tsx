import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pb-20 bg-[#020617] min-h-screen text-slate-200 selection:bg-flolim selection:text-slate-900 overflow-hidden">
      
      {/* 1. Hero Section (메인 배너) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-10">
        
        {/* 영상 배경 및 밝아진 오버레이 효과 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* 영상 재생 */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-[#020617]/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/30 to-[#020617]"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-flolim/20 rounded-full blur-[150px] opacity-40 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(24,169,198,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(24,169,198,0.2)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-30"></div>
        </div>

        <div className={`container mx-auto px-4 max-w-6xl relative z-10 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700 text-flolim text-xs md:text-sm font-bold tracking-widest mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(24,169,198,0.2)]">
            <span className="w-2 h-2 rounded-full bg-flolim animate-ping"></span>
            스마트 조명 통합 관제 플랫폼
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tight drop-shadow-xl">
            세상을 밝히는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(24,169,198,0.5)]">지능형 연결</span><br />
            플로림이 완성합니다
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-md">
            단순한 조명 제어를 넘어, 딥러닝 기반 데이터 분석과 첨단 IoT 센서 네트워크로<br className="hidden md:block"/> 
            도시와 빌딩의 에너지를 가장 완벽하게 통제합니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/business/esco" className="w-full sm:w-auto px-8 py-4 bg-flolim hover:bg-cyan-400 active:scale-95 text-slate-900 font-bold rounded-2xl shadow-[0_0_20px_rgba(24,169,198,0.4)] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1">
              초기 투자비 0원 도입 알아보기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            <Link to="/business/simulation" className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 active:scale-95 text-white font-bold rounded-2xl border border-slate-600 hover:border-flolim transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 shadow-lg">
              우리 회사 절감액 계산기
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 핵심 수치 요약 래퍼 박스 */}
      <div className="container mx-auto px-4 max-w-6xl relative z-20 -mt-10">
        {/* 💡 [수정] 태블릿 여백(p-8) 최적화 */}
        <section className="bg-slate-900/70 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-slate-700 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
            
            {/* 💡 [수정] 반응형 폰트(text-3xl lg:text-4xl) 및 break-keep 적용 */}
            <div className="px-2 lg:px-4 py-2">
              <p className="text-slate-400 font-medium mb-2 text-sm lg:text-base break-keep">KEPCO 연계 ESCO 모델</p>
              <div className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight break-keep">
                도입 비용 <span className="text-flolim drop-shadow-[0_0_10px_rgba(24,169,198,0.5)]">0</span>원
              </div>
              <p className="text-xs text-slate-500 font-light break-keep">전액 무상 교체 및 절감액 분할 상환</p>
            </div>
            
            <div className="px-2 lg:px-4 py-2 pt-6 md:pt-2">
              <p className="text-slate-400 font-medium mb-2 text-sm lg:text-base break-keep">초고효율 LED + 스마트 제어</p>
              <div className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight break-keep">
                최대 <span className="text-flolim drop-shadow-[0_0_10px_rgba(24,169,198,0.5)]">70</span>% 절감
              </div>
              <p className="text-xs text-slate-500 font-light break-keep">현장 맞춤형 디밍 및 스케줄링 적용 시</p>
            </div>
            
            <div className="px-2 lg:px-4 py-2 pt-6 md:pt-2">
              <p className="text-slate-400 font-medium mb-2 text-sm lg:text-base break-keep">스마트 센서 무선망</p>
              <div className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight break-keep">
                통신비 <span className="text-flolim drop-shadow-[0_0_10px_rgba(24,169,198,0.5)]">무료</span>
              </div>
              <p className="text-xs text-slate-500 font-light break-keep">LoRa-Mesh 자가망 구축 시 평생 무료</p>
            </div>

          </div>
        </section>
      </div>

      {/* 3. 핵심 비즈니스 솔루션 래퍼 박스 */}
      <div className="container mx-auto px-4 max-w-6xl mt-24">
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-12 md:mb-16 relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">가장 완벽한 공간 제어 솔루션</h2>
            <p className="text-slate-400 font-light text-sm md:text-base">현장의 규모와 목적에 맞는 플로림의 맞춤형 시스템을 확인하세요.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
            
            <Link to="/smart-city/intro" className="bg-[#050b14] p-8 md:p-10 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim hover:bg-slate-800/30 hover:shadow-[0_10px_30px_rgba(24,169,198,0.15)] active:scale-[0.98] active:border-flolim active:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 cursor-pointer">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-slate-800 text-flolim rounded-xl flex items-center justify-center border border-slate-700 mb-8 group-hover:bg-flolim group-hover:text-slate-900 group-hover:border-flolim transition-colors relative z-10 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-flolim transition-colors relative z-10">스마트 시티 솔루션</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed flex-grow relative z-10 mb-8 break-keep">
                도시 전체의 가로등과 경관 조명을 하나의 무선망으로 묶어 중앙에서 통합 관제하는 광역 네트워크 시스템입니다.
              </p>
              <div className="text-flolim font-bold text-sm flex items-center gap-2 relative z-10 group-hover:text-cyan-400 transition-colors">
                솔루션 자세히 보기 <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </Link>

            <Link to="/smart-building/intro" className="bg-[#050b14] p-8 md:p-10 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim hover:bg-slate-800/30 hover:shadow-[0_10px_30px_rgba(24,169,198,0.15)] active:scale-[0.98] active:border-flolim active:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 cursor-pointer">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-slate-800 text-flolim rounded-xl flex items-center justify-center border border-slate-700 mb-8 group-hover:bg-flolim group-hover:text-slate-900 group-hover:border-flolim transition-colors relative z-10 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-flolim transition-colors relative z-10">스마트 빌딩 솔루션</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed flex-grow relative z-10 mb-8 break-keep">
                공장, 학교, 오피스 등 실내 공간에서 재실 및 조도 센서를 연동하여 에너지를 낭비 없이 제어하는 자동화 시스템입니다.
              </p>
              <div className="text-flolim font-bold text-sm flex items-center gap-2 relative z-10 group-hover:text-cyan-400 transition-colors">
                솔루션 자세히 보기 <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </Link>

            <Link to="/platform/dashboard" className="bg-[#050b14] p-8 md:p-10 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim hover:bg-slate-800/30 hover:shadow-[0_10px_30px_rgba(24,169,198,0.15)] active:scale-[0.98] active:border-flolim active:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 cursor-pointer">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-slate-800 text-flolim rounded-xl flex items-center justify-center border border-slate-700 mb-8 group-hover:bg-flolim group-hover:text-slate-900 group-hover:border-flolim transition-colors relative z-10 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-flolim transition-colors relative z-10">통합 관제 플랫폼</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed flex-grow relative z-10 mb-8 break-keep">
                모든 IoT 하드웨어를 웹 기반 대시보드에서 통제하며, 빅데이터 기반의 ESG 탄소 감축 리포트를 자동으로 발행합니다.
              </p>
              <div className="text-flolim font-bold text-sm flex items-center gap-2 relative z-10 group-hover:text-cyan-400 transition-colors">
                대시보드 체험하기 <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </Link>
          </div>
        </section>
      </div>

      {/* 4. 문의 유도 (CTA) 래퍼 박스 */}
      <div className="container mx-auto px-4 max-w-6xl mt-16 mb-10">
        <section className="bg-gradient-to-br from-[#050b14] to-slate-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-flolim/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-flolim/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-3">도입을 망설이고 계신가요?</h2>
            <p className="text-slate-400 font-light text-sm md:text-lg break-keep">
              플로림 전문 컨설턴트가 귀사의 현장에 맞는 최적의 절감 시나리오를 무상으로 제안해 드립니다.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link to="/support/contact" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-flolim hover:bg-cyan-400 active:scale-95 text-slate-900 font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl shadow-[0_0_30px_rgba(24,169,198,0.5)] transition-all duration-300 hover:-translate-y-1">
              도입 상담 문의하기
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;