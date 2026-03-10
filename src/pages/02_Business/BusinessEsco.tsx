import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const BusinessEsco = () => {
  // 💡 [Map 데이터] 3단계 프로세스를 배열로 만들어 코드를 획기적으로 압축합니다.
  const steps = [
    {
      num: '1',
      title: '[도입] 초기 투자비 0원',
      desc: <>모든 교체 비용을 <strong className="font-medium text-white">켑코이에스에서 100% 선투자</strong>합니다.<br/><span className="text-flolim font-bold mt-1 inline-block">(귀사 부담 0원)</span></>,
      highlight: true
    },
    {
      num: '2',
      title: '[상환] 절감액 분할 상환',
      desc: <>매달 내던 <strong className="font-medium text-white">전기료를 그대로 납부</strong>하여 절감된 금액만큼 시설비를 상환합니다.<br/><span className="text-slate-500 mt-1 inline-block">(평균 2~5년 소요)</span></>,
      highlight: false
    },
    {
      num: '3',
      title: '[수익] 고정 수익 발생',
      desc: <>상환 완료 후, 시설물 소유권이 이전되며 <strong className="font-medium text-flolim">전기료 70% 고정 수익</strong>(절감액)이 발생합니다.</>,
      highlight: true
    }
  ];

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="비즈니스 모델"
        title="KEPCO 연계 에너지 효율화 사업"
        subtitle={
          <>
            초기 투자비 <strong className="text-flolim font-bold">0원</strong>, 
            국가 지원으로 누리는 전력비 <strong className="text-flolim font-bold">최대 80% 절감</strong>
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        {/* 메인 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          {/* 시스템 개요 */}
          <div className="mb-16 md:mb-20 relative z-10">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center break-keep">
              예산 부담은 지우고, 조명은 더 스마트하게
            </h2>
            <p className="text-sm md:text-lg text-slate-400 leading-relaxed text-center max-w-4xl mx-auto font-light break-keep">
              플로림(FLOLIM)은 한국전력공사 출자 기업인 <strong className="font-bold text-white">켑코이에스(KEPCO ES)</strong>와 공식 연계하여 혁신적인 스마트 조명 에너지 효율화 사업을 진행합니다. 
              노후 조명을 고효율 스마트 LED 및 지능형 제어 시스템으로 교체하는 비용 <strong className="font-bold text-flolim">전액을 켑코이에스에서 선투자</strong>하므로, 
              단 1원의 추가 예산 편성 없이 최첨단 인프라를 구축할 수 있습니다.
            </p>
          </div>

          {/* 3단계 도입 및 상환 프로세스 */}
          <div className="mb-20 md:mb-24 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 break-keep">3단계 도입 및 상환 프로세스</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-[2px] bg-slate-700 -z-10"></div>
              
              {/* 💡 [Map 렌더링] */}
              {steps.map((step) => (
                <div key={step.num} className={`bg-[#050b14] p-6 md:p-8 rounded-3xl text-center shadow-inner hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden cursor-default ${step.highlight ? 'border border-flolim/30 hover:border-flolim' : 'border border-slate-700 hover:border-flolim/50'}`}>
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  {step.highlight && <div className="absolute top-0 inset-x-0 h-1 bg-flolim shadow-[0_0_10px_rgba(24,169,198,0.8)] z-10"></div>}
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-lg md:text-2xl font-black transform group-hover:scale-110 transition-all ${step.highlight ? 'bg-flolim/10 text-flolim shadow-[0_0_15px_rgba(24,169,198,0.2)] border border-flolim/50' : 'bg-slate-800 text-slate-400 border border-slate-600 shadow-sm group-hover:bg-flolim/10 group-hover:text-flolim group-hover:border-flolim/50'}`}>
                      {step.num}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 group-hover:text-flolim transition-colors break-keep">{step.title}</h3>
                    <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed break-keep">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 하단 2단 구조 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 relative z-10">
            
            {/* 2단계 효율화 전략 카드 */}
            <div className="bg-[#050b14] p-8 md:p-10 rounded-3xl border border-slate-700 flex flex-col justify-center shadow-inner hover:border-flolim/50 transition-colors group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 group-hover:text-flolim transition-colors break-keep">단순 교체를 넘은 2단계 효율화 전략</h3>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 border border-slate-600 rounded-xl flex items-center justify-center text-flolim font-black text-lg md:text-xl shrink-0">1</div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white mb-1.5 md:mb-2 break-keep">[LED 교체] 소비전력 60% 절감</h4>
                      <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed break-keep">기존 60W 노후 조명을 25W 초고효율 스마트 LED로 교체하여 하드웨어적인 전력 소모를 대폭 줄입니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-flolim/10 border border-flolim/30 rounded-xl flex items-center justify-center text-flolim font-black text-lg md:text-xl shrink-0">2</div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white mb-1.5 md:mb-2 break-keep">[지능형 제어] 20% 추가 절감</h4>
                      <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed break-keep">스마트 디밍(밝기 조절) 및 스케줄링 제어를 통해 불필요한 낭비를 원천 차단하고 추가 에너지를 아낍니다.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/business/simulation" className="mt-8 md:mt-10 group/btn relative overflow-hidden bg-slate-800 border border-slate-600 rounded-2xl p-5 md:p-6 text-center shadow-lg hover:border-flolim/50 active:scale-[0.98] active:border-flolim transition-all duration-300 block">
                  <p className="text-white font-bold text-sm md:text-base mb-3 group-hover/btn:text-flolim transition-colors break-keep">우리 회사는 얼마나 절감될까?</p>
                  <div className="inline-flex items-center gap-2 text-slate-900 bg-flolim px-4 md:px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:bg-cyan-400 transition-all whitespace-nowrap">
                    맞춤형 시뮬레이션 해보기 
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* ESCO + EERS 결합 카드 */}
            <div className="bg-[#050b14] p-8 md:p-10 rounded-3xl shadow-inner border border-slate-700 flex flex-col justify-center hover:border-flolim/50 transition-colors group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-slate-800 text-flolim border border-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-full mb-4 md:mb-6 uppercase tracking-wider whitespace-nowrap">
                  결합 시너지
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 leading-tight text-white group-hover:text-flolim transition-colors break-keep">
                  한전 지원금이 더해져<br/>더 빨라지는 상환
                </h3>
                <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed mb-6 md:mb-8 break-keep">
                  초기 투자비 0원으로 구축하는 <strong className="text-white font-medium">[ESCO 자금]</strong>에, 절감된 전력량에 비례하여 한국전력공사에서 현금 지원금을 직접 수령하는 <strong className="text-white font-medium">[EERS 현금 보너스]</strong>를 결합합니다.
                </p>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-slate-600 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-flolim/10 flex items-center justify-center text-flolim shrink-0 border border-flolim/30">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs md:text-sm mb-0.5 md:mb-1 break-keep">투자 회수율 극대화</span>
                    <span className="text-[10px] md:text-xs text-flolim font-medium break-keep">상환 기간 평균 3년 단축 및 순수익 조기 전환</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 카테고리', title: '오시는 길', path: '/company/location' }}
          next={{ label: '다음 페이지', title: '에너지 절감 시뮬레이션', path: '/business/simulation' }}
        />

      </div>
    </div>
  );
};

export default BusinessEsco;