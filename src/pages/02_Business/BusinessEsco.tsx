import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const BusinessEsco = () => {
  return (
    <div className="pb-10">
      <PageHeader 
        category="Business Model"
        title="KEPCO 연계 에너지 효율화 사업"
        subtitle={
          <>
            초기 투자비 <strong className="text-flolim font-bold">0원</strong>, 
            국가 지원으로 누리는 전력비 <strong className="text-flolim font-bold">최대 80% 절감</strong>
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl">
        
        <section className="bg-slate-900/50 rounded-3xl p-10 md:p-16 mb-24 shadow-lg border border-slate-800 relative overflow-hidden group hover:border-flolim/50 transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-flolim rounded-full blur-[100px] opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"></div>
          
          <h2 className="text-3xl font-bold text-white mb-6 text-center relative z-10">
            예산 부담은 지우고, 조명은 더 스마트하게
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed text-center max-w-4xl mx-auto font-light relative z-10">
            플로림(FLOLIM)은 한국전력공사 출자 기업인 <strong className="font-bold text-white">켑코이에스(KEPCO ES)</strong>와 공식 연계하여 혁신적인 스마트 조명 에너지 효율화 사업을 진행합니다. 
            노후 조명을 고효율 스마트 LED 및 지능형 제어 시스템으로 교체하는 비용 <strong className="font-bold text-flolim">전액을 켑코이에스에서 선투자</strong>하므로, 
            단 1원의 추가 예산 편성 없이 최첨단 인프라를 구축할 수 있습니다.
          </p>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">3단계 도입 및 상환 프로세스</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-[2px] bg-slate-800 -z-10"></div>
            
            {/* 💡 Step 1: 초기 투자비 0원 (강력하게 강조 적용!) */}
            <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-3xl border border-flolim/30 text-center hover:-translate-y-1 hover:border-flolim transition-all duration-300 group overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-flolim shadow-[0_0_10px_rgba(24,169,198,0.8)]"></div>
              <div className="w-16 h-16 bg-flolim/10 text-flolim rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-[0_0_15px_rgba(24,169,198,0.2)] border border-flolim/50 transform group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">[도입] 초기 투자비 0원</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                모든 교체 비용을 <strong className="font-medium text-white">켑코이에스에서 100% 선투자</strong>합니다.<br/>
                <span className="text-sm text-flolim font-bold">(귀사 부담 0원)</span>
              </p>
            </div>

            {/* Step 2: 절감액 분할 상환 (기본 다크 패널로 유지하여 대비감 부여) */}
            <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 text-center hover:-translate-y-1 hover:border-flolim/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-slate-800 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black border border-slate-700 shadow-sm group-hover:bg-flolim/10 group-hover:text-flolim group-hover:border-flolim/50 transition-colors">2</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">[상환] 절감액 분할 상환</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                매달 내던 <strong className="font-medium text-white">전기료를 그대로 납부</strong>하여 절감된 금액만큼 시설비를 상환합니다.<br/>
                <span className="text-sm">(평균 2~5년)</span>
              </p>
            </div>

            {/* 💡 Step 3: 고정 수익 발생 (기존처럼 강조) */}
            <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-3xl border border-flolim/30 text-center hover:-translate-y-1 hover:border-flolim transition-all duration-300 group overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-flolim shadow-[0_0_10px_rgba(24,169,198,0.8)]"></div>
              <div className="w-16 h-16 bg-flolim/10 text-flolim rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-[0_0_15px_rgba(24,169,198,0.2)] border border-flolim/50 transform group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">[수익] 고정 수익 발생</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                상환 완료 후, 시설물 소유권이 이전되며 <strong className="font-medium text-flolim">전기료 70% 고정 수익</strong>(절감액)이 발생합니다.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <section className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 flex flex-col justify-center hover:border-flolim/30 transition-colors group">
            <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-flolim transition-colors">단순 교체를 넘은 2단계 효율화 전략</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-flolim font-black text-xl shrink-0">1</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">[LED 교체] 소비전력 60% 절감</h4>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">기존 60W 노후 조명을 25W 초고효율 스마트 LED로 교체하여 하드웨어적인 전력 소모를 대폭 줄입니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-flolim/10 border border-flolim/30 rounded-xl flex items-center justify-center text-flolim font-black text-xl shrink-0">2</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">[지능형 제어] 20% 추가 절감</h4>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">스마트 디밍(밝기 조절) 및 스케줄링 제어를 통해 불필요한 낭비를 원천 차단하고 추가 에너지를 아낍니다.</p>
                </div>
              </div>
            </div>
            
            <Link to="/business/simulation" className="mt-10 group/btn relative overflow-hidden bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center shadow-lg hover:border-flolim/50 transition-all duration-300">
              <p className="text-white font-bold text-lg mb-2 group-hover/btn:text-flolim transition-colors">우리 회사는 얼마나 절감될까?</p>
              <div className="inline-flex items-center gap-2 text-slate-900 bg-flolim px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-cyan-400 transition-all">
                맞춤형 시뮬레이션 해보기 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </Link>
          </section>

          <section className="flex flex-col gap-8 h-full">
            <div className="bg-[#0a1128] text-white p-10 rounded-3xl shadow-2xl border border-[#1c2e5a] relative overflow-hidden group flex-grow hover:border-flolim/30 transition-colors">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-flolim rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="inline-block bg-slate-800 text-flolim border border-slate-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider w-fit">
                  ESCO + EERS 결합 시너지
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight text-white group-hover:text-flolim transition-colors">
                  한전 지원금이 더해져<br/>더 빨라지는 상환
                </h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8">
                  초기 투자비 0원으로 구축하는 <strong className="text-white font-medium">[ESCO 자금]</strong>에, 절감된 전력량에 비례하여 한국전력공사에서 현금 지원금을 직접 수령하는 <strong className="text-white font-medium">[EERS 현금 보너스]</strong>를 결합합니다.
                </p>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700 flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-xl bg-flolim/10 flex items-center justify-center text-flolim shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <span className="font-bold text-white">투자 회수율(ROI) 극대화<br/><span className="text-sm text-flolim font-medium">상환 기간 평균 3년 단축</span></span>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* 하단 네비게이션 (BottomNav 컴포넌트 적용 완료) */}
        <BottomNav 
          prev={{ label: '이전 카테고리', title: '오시는 길', path: '/company/location' }}
          next={{ label: '다음 페이지', title: '에너지 절감 시뮬레이션', path: '/business/simulation' }}
        />

      </div>
    </div>
  );
};

export default BusinessEsco;