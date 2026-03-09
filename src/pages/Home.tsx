import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="font-sans bg-slate-950 text-slate-200">
      
      {/* 1. 메인 히어로 섹션 */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen grayscale"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950 z-10"></div>

        {/* 💡 빛 번짐 효과를 플로림 컬러 하나로 통일하여 깔끔하게 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-flolim/10 blur-[150px] rounded-full pointer-events-none z-10"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-20 text-center mt-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/50 text-flolim text-xs font-bold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase shadow-[0_0_15px_rgba(24,169,198,0.2)] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-flolim animate-pulse"></span>
            Smart IoT Control Platform
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
            보이지 않는 에너지를 통제하여<br />
            <span className="text-flolim drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">
              기업의 내일을 밝힙니다
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            초고효율 LED와 AIoT 지능형 통합 관제 솔루션, <br className="hidden md:block"/>
            그리고 KEPCO ESCO 모델을 통해 <strong className="text-flolim font-medium">초기 투자비 없는 압도적인 절감</strong>을 경험하세요.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/business/esco" className="w-full sm:w-auto px-8 py-4 bg-flolim hover:bg-cyan-500 text-white font-black rounded-2xl shadow-[0_0_20px_rgba(24,169,198,0.4)] transition-all duration-300 text-lg flex items-center justify-center gap-2">
              ESCO 비즈니스 모델 보기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            <Link to="/company/intro" className="w-full sm:w-auto px-8 py-4 bg-slate-800/80 backdrop-blur-md hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-700 transition-all duration-300 text-lg">
              플로림 소개
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 핵심 가치 섹션 */}
      <section className="py-24 relative overflow-hidden border-b border-slate-800/50">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <p className="text-flolim font-bold tracking-widest mb-3 uppercase text-sm">Core Value</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">플로림이 제공하는 핵심 가치</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-flolim/50 transition-colors">
                <svg className="w-8 h-8 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">지능형 제어 (AIoT)</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light">
                유무선 통신망과 스마트 센서를 결합하여, 환경 변화에 스스로 반응하는 능동형 제어 인프라를 구축합니다.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 text-center relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-flolim shadow-[0_0_10px_rgba(24,169,198,1)]"></div>
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-flolim/50 transition-colors">
                <svg className="w-8 h-8 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">초기 비용 ZERO</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light">
                KEPCO 연계 ESCO 사업으로 구축비용 부담을 없애고, 매월 최대 70% 이상의 전력을 즉각적으로 절감합니다.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-flolim/50 transition-colors">
                <svg className="w-8 h-8 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">지속가능성 (ESG)</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light">
                획기적인 탄소 배출 감소 효과와 객관적인 에너지 리포팅 시스템으로 기업의 성공적인 ESG 경영을 돕습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 핵심 비즈니스 미리보기 */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <p className="text-flolim font-bold tracking-widest mb-3 uppercase text-sm">Our Business</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">통합 스마트 솔루션</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <Link to="/smart-city/intro" className="bg-[#0a1128] border border-[#1c2e5a] shadow-xl rounded-3xl p-10 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-flolim/10 rounded-full blur-2xl group-hover:bg-flolim/20 transition-colors"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 bg-slate-800 text-flolim rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-flolim/50 transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 group-hover:bg-flolim group-hover:text-white group-hover:border-flolim transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-flolim transition-colors relative z-10">스마트 시티 솔루션</h3>
              <p className="text-slate-400 font-light leading-relaxed flex-grow relative z-10">
                도시 전체의 실외 가로등 및 경관 조명을 중앙에서 완벽하게 통합 관제하는 광역 네트워크 인프라 구축
              </p>
            </Link>
            
            <Link to="/smart-building/intro" className="bg-[#0a1128] border border-[#1c2e5a] shadow-xl rounded-3xl p-10 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-flolim/10 rounded-full blur-2xl group-hover:bg-flolim/20 transition-colors"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 bg-slate-800 text-flolim rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-flolim/50 transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 group-hover:bg-flolim group-hover:text-white group-hover:border-flolim transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-flolim transition-colors relative z-10">스마트 빌딩 솔루션</h3>
              <p className="text-slate-400 font-light leading-relaxed flex-grow relative z-10">
                공장, 학교, 오피스 등 실내 공간의 에너지를 낭비 없이 완벽하게 자동 통제하는 시스템 설계 및 구축
              </p>
            </Link>

            <Link to="/platform/dashboard" className="bg-[#0a1128] border border-[#1c2e5a] shadow-xl rounded-3xl p-10 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-flolim/10 rounded-full blur-2xl group-hover:bg-flolim/20 transition-colors"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 bg-slate-800 text-flolim rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-flolim/50 transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 group-hover:bg-flolim group-hover:text-white group-hover:border-flolim transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-flolim transition-colors relative z-10">통합 관제 플랫폼</h3>
              <p className="text-slate-400 font-light leading-relaxed flex-grow relative z-10">
                모든 IoT 하드웨어를 한눈에 모니터링하고 제어하며, 에너지 데이터를 분석하는 프리미엄 대시보드
              </p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}