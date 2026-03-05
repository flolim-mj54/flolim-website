import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="font-sans">
      
      {/* 1. 메인 히어로 섹션 (영상 배경 복구 & 웅장한 크기 유지) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        
        {/* 💡 배경 비디오 */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* 영상 위 다크 오버레이 (글씨 가독성 확보) */}
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>

        {/* 플로림 메인 컬러 빛 번짐 효과 (배경) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-flolim/30 blur-[150px] rounded-full pointer-events-none z-10"></div>
        
        {/* 격자 무늬 배경 패턴 */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] z-10"></div>

        {/* 콘텐츠 영역 */}
        <div className="container mx-auto px-4 max-w-5xl relative z-20 text-center mt-20">
          <div className="inline-block bg-slate-800 text-flolim border border-slate-700 text-xs font-bold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase shadow-lg">
            Smart IoT Control Platform
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight drop-shadow-lg">
            보이지 않는 에너지를 통제하여<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flolim to-emerald-400">
              기업의 내일을 밝힙니다
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            초고효율 LED와 AIoT 지능형 통합 관제 솔루션, <br className="hidden md:block"/>
            그리고 KEPCO ESCO 모델을 통해 초기 투자비 없는 압도적인 절감을 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/business/esco" className="w-full sm:w-auto px-8 py-4 bg-flolim hover:bg-flolim/90 text-white font-bold rounded-2xl shadow-lg hover:shadow-flolim/30 transition-all duration-300 text-lg">
              ESCO 비즈니스 모델 보기
            </Link>
            <Link to="/company/intro" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-700 transition-all duration-300 text-lg">
              플로림 소개
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 핵심 가치 섹션 */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-flolim font-bold tracking-widest mb-3 uppercase text-sm">Core Value</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">플로림이 제공하는 핵심 가치</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 hover:border-flolim/30 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-sm">💡</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">지능형 제어 (AIoT)</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                유무선 통신망과 스마트 센서를 결합하여 환경 변화에 스스로 반응하는 능동형 제어 인프라를 구축합니다.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 hover:border-flolim/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-flolim"></div>
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-sm">📉</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">초기 비용 ZERO</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                KEPCO 연계 ESCO 사업으로 구축비용 부담을 없애고, 매월 최대 70% 이상의 전력을 즉각적으로 절감합니다.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 hover:border-flolim/30 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-sm">🌍</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">지속가능성 (ESG)</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                획기적인 탄소 배출 감소 효과와 객관적인 에너지 리포팅 시스템으로 기업의 성공적인 ESG 경영을 돕습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 핵심 비즈니스 미리보기 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-flolim font-bold tracking-widest mb-3 uppercase text-sm">Our Business</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">통합 스마트 솔루션</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 💡 링크 수정: /smart-city/intro */}
            <Link to="/smart-city/intro" className="bg-white border border-slate-200 shadow-sm rounded-3xl p-10 hover:border-flolim/30 hover:shadow-md transition-all duration-300 group flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl">🏙️</div>
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-flolim group-hover:text-white group-hover:border-flolim transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-flolim transition-colors">스마트 시티 솔루션</h3>
              <p className="text-slate-500 font-light leading-relaxed flex-grow">
                도시 전체의 실외 가로등 및 경관 조명을 중앙에서 완벽하게 통합 관제하는 광역 네트워크 인프라 구축
              </p>
            </Link>
            
            {/* 💡 링크 수정: /smart-building/intro */}
            <Link to="/smart-building/intro" className="bg-white border border-slate-200 shadow-sm rounded-3xl p-10 hover:border-flolim/30 hover:shadow-md transition-all duration-300 group flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl">🏢</div>
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-flolim group-hover:text-white group-hover:border-flolim transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-flolim transition-colors">스마트 빌딩 솔루션</h3>
              <p className="text-slate-500 font-light leading-relaxed flex-grow">
                공장, 학교, 오피스 등 실내 공간의 에너지를 낭비 없이 완벽하게 자동 통제하는 시스템 설계 및 구축
              </p>
            </Link>

            {/* 💡 링크 수정: /platform/dashboard */}
            <Link to="/platform/dashboard" className="bg-white border border-slate-200 shadow-sm rounded-3xl p-10 hover:border-flolim/30 hover:shadow-md transition-all duration-300 group flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl">💻</div>
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-flolim group-hover:text-white group-hover:border-flolim transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-flolim transition-colors">통합 관제 플랫폼</h3>
              <p className="text-slate-500 font-light leading-relaxed flex-grow">
                모든 IoT 하드웨어를 한눈에 모니터링하고 제어하며, 에너지 데이터를 분석하는 대시보드 및 관제 소프트웨어 제공
              </p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}