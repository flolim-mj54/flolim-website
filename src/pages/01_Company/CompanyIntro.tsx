import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

export default function CompanyIntro() {
  return (
    <div className="pb-10">
      
      <PageHeader 
        category="About Us"
        title={<>세상을 밝히는 <span className="text-flolim drop-shadow-[0_0_15px_rgba(24,169,198,0.4)]">지능형 연결</span></>}
        subtitle={
          <>
            스마트 IoT 제어 시스템 전문 기업 <strong className="text-white font-bold">주식회사 플로림</strong>입니다.<br className="hidden md:block"/>
            단순한 조명 제어를 넘어, 딥러닝 기반의 데이터 분석과 첨단 IoT 센서 네트워크를 통해 도시와 빌딩의 에너지를 가장 스마트하게 관리합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        {/* 핵심 가치 섹션 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          {/* 메인 래퍼 글로우 효과 */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">플로림의 <span className="text-flolim">핵심 경쟁력</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* 카드 1 */}
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 hover:border-flolim/50 transition-all duration-300 text-center group relative overflow-hidden shadow-inner">
              {/* 💡 공통 원형 데코 */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-flolim/50 transition-colors relative z-10">
                <svg className="w-7 h-7 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-flolim transition-colors relative z-10">최적의 에너지 효율 디자인</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light relative z-10">
                단순한 조명 점소등을 넘어, 딥러닝 기반의 데이터 분석과 첨단 IoT 센서 네트워크를 통해 도시와 빌딩의 에너지를 가장 스마트하게 관리합니다.
              </p>
            </div>

            {/* 카드 2 */}
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 hover:border-flolim/50 transition-all duration-300 text-center group relative overflow-hidden shadow-inner">
              {/* 💡 공통 원형 데코 */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-flolim/50 transition-colors relative z-10">
                <svg className="w-7 h-7 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-flolim transition-colors relative z-10">탄소 중립과 ESG 경영 파트너</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light relative z-10">
                플로림의 기술력은 불필요한 전력 낭비를 원천 차단하여 압도적인 비용 절감을 실현함과 동시에, 고객사의 성공적인 친환경 ESG 경영을 지원합니다.
              </p>
            </div>

            {/* 카드 3 */}
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 hover:border-flolim/50 transition-all duration-300 text-center group relative overflow-hidden shadow-inner">
              {/* 💡 공통 원형 데코 */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-flolim/50 transition-colors relative z-10">
                <svg className="w-7 h-7 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-flolim transition-colors relative z-10">연구개발과 완벽한 신뢰</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light relative z-10">
                스마트 시티 통신망(LoRa, NB-IoT)부터 보안 인증 기반의 하드웨어 개발까지, 최상의 안정성과 퍼포먼스를 보장하는 토탈 제어 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 핵심 비즈니스 영역 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-slate-800 mb-20 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">핵심 비즈니스 영역</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* 비즈니스 카드 1 */}
            <div className="bg-[#050b14] border border-slate-700 shadow-inner rounded-3xl p-8 hover:border-flolim/50 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
              {/* 💡 공통 원형 데코 */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center border border-slate-600 mb-6 group-hover:border-flolim/50 transition-colors relative z-10 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-flolim transition-colors relative z-10">스마트 시티 제어 시스템</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed flex-grow relative z-10 mb-6">
                도시 전체의 실외 가로등 및 경관 조명을 중앙에서 통합 관제하는 광역 네트워크 시스템
              </p>
              <ul className="space-y-2 relative z-10">
                <li className="flex items-center text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700"><svg className="w-4 h-4 text-flolim mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>LoRa-Mesh 무선 제어망 구축</li>
                <li className="flex items-center text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700"><svg className="w-4 h-4 text-flolim mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>NB-IoT 기반 개별 관제</li>
                <li className="flex items-center text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700"><svg className="w-4 h-4 text-flolim mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>DMX512 경관 조명 연동</li>
              </ul>
            </div>
            
            {/* 비즈니스 카드 2 */}
            <div className="bg-[#050b14] border border-slate-700 shadow-inner rounded-3xl p-8 hover:border-flolim/50 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
              {/* 💡 공통 원형 데코 */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center border border-slate-600 mb-6 group-hover:border-flolim/50 transition-colors relative z-10 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-flolim transition-colors relative z-10">스마트 빌딩(LED) 제어</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed flex-grow relative z-10 mb-6">
                공장, 학교, 오피스 등 실내 공간의 에너지를 낭비 없이 완벽하게 통제하는 자동화 시스템
              </p>
              <ul className="space-y-2 relative z-10">
                <li className="flex items-center text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700"><svg className="w-4 h-4 text-flolim mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>초고효율 25W LED 디밍 제어</li>
                <li className="flex items-center text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700"><svg className="w-4 h-4 text-flolim mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>재실/조도 감지 IoT 센서 연동</li>
                <li className="flex items-center text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700"><svg className="w-4 h-4 text-flolim mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>KEPCO 연계 무상 구축 (ESCO)</li>
              </ul>
            </div>

            {/* 비즈니스 카드 3 */}
            <div className="bg-[#050b14] border border-slate-700 shadow-inner rounded-3xl p-8 hover:border-flolim/50 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
              {/* 💡 공통 원형 데코 */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center border border-slate-600 mb-6 group-hover:border-flolim/50 transition-colors relative z-10 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-flolim transition-colors relative z-10">통합 관제 플랫폼 (ESG)</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed flex-grow relative z-10 mb-6">
                모든 IoT 하드웨어를 한눈에 모니터링하고 제어하며, 빅데이터 기반의 에너지 분석 제공
              </p>
              <ul className="space-y-2 relative z-10">
                <li className="flex items-center text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700"><svg className="w-4 h-4 text-flolim mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>직관적인 통합 대시보드</li>
                <li className="flex items-center text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700"><svg className="w-4 h-4 text-flolim mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>빅데이터 기반 전력 분석</li>
                <li className="flex items-center text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700"><svg className="w-4 h-4 text-flolim mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>ESG 경영 성과 리포트</li>
              </ul>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '메인 홈', path: '/' }}
          next={{ label: '다음 페이지', title: 'CEO 인사말', path: '/company/ceo' }}
        />
      </div>

    </div>
  );
}