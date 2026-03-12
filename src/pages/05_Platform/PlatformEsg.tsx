import { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const PlatformEsg = () => {
  const [isUnpacked, setIsUnpacked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsUnpacked(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const esgIndicators = [
    { 
      id: 1, 
      title: 'Environment (환경)', 
      subtitle: '탄소 배출량 저감', 
      desc: '에너지 사용량 감축에 따른 온실가스 배출량의 직접적인 감소 효과를 수치화하여 제공합니다.', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
      classes: {
        border: 'hover:border-emerald-500/50 active:border-emerald-500',
        bgGlow: 'bg-emerald-500/5',
        iconBox: 'text-emerald-400 group-hover:bg-emerald-500/10',
        titleHover: 'group-hover:text-emerald-400',
        subtitle: 'text-emerald-400'
      }
    },
    { 
      id: 2, 
      title: 'Social (사회)', 
      subtitle: '시민 안전 및 빛 공해 저감', 
      desc: '심야 디밍 적용 시간과 가동률을 분석하여 보행자 안전 확보 및 빛 공해 저감 데이터를 산출합니다.', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
      classes: {
        border: 'hover:border-flolim/50 active:border-flolim',
        bgGlow: 'bg-flolim/5',
        iconBox: 'text-flolim group-hover:bg-flolim/10',
        titleHover: 'group-hover:text-flolim',
        subtitle: 'text-flolim'
      }
    },
    { 
      id: 3, 
      // 💡 [수정] 긴 타이틀이 태블릿 등에서 잘 줄바꿈되도록 띄어쓰기 보호 해제 및 break-words 적용
      title: <span className="break-words">Governance &<br className="hidden lg:block"/> Economy</span>, 
      subtitle: '운영 투명성 및 비용 혁신', 
      desc: '통신 오류, 제어 개입 등의 투명성 로그와 전력/유지보수 비용 최소화를 통한 예산 절감액을 리포팅합니다.', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
      classes: {
        border: 'hover:border-blue-500/50 active:border-blue-500',
        bgGlow: 'bg-blue-500/5',
        iconBox: 'text-blue-400 group-hover:bg-blue-500/10',
        titleHover: 'group-hover:text-blue-400',
        subtitle: 'text-blue-400'
      }
    }
  ];

  const strengths = [
    { id: 1, title: '위변조 불가능한 신뢰성', desc: '하드웨어 스마트 미터기에서 측정한 원본 데이터를 사용하여, 데이터 무결성이 100% 보장됩니다.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
    { id: 2, title: '스케줄 기반 자동 발행', desc: '원하는 주기(월간, 분기, 연간)를 설정하면, 플랫폼이 자동으로 성과를 분석하여 PDF 및 Excel 리포트를 완성합니다.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /> },
    { id: 3, title: '글로벌 표준 (RE100)', desc: '글로벌 RE100, K-ETS 지침에 맞춘 Scope 2 배출량 산정 공식을 정확하게 시스템에 반영합니다.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /> }
  ];

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="ESG & Sustainability"
        title="통합 경영 및 ESG 리포트"
        subtitle={
          <>
            수집된 모든 데이터를 분석하여 <strong className="text-flolim font-bold">탄소 감축 성과와 예산 절감액을 공식 리포트로 제공</strong>합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden min-h-[500px] md:min-h-[700px] flex flex-col">
          <div className="text-center mb-10 md:mb-16 relative z-20 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 break-keep">자동화된 ESG 성과 리포트</h2>
            <p className="text-slate-400 text-xs md:text-sm break-keep">데이터가 증명하는 객관적인 탄소 감축 및 예산 절감 성과를 확인하세요.</p>
          </div>

          <div className="perspective-[1200px] flex-1 flex items-center justify-center relative z-10 w-full pb-6 md:pb-10">
            <div 
              className="relative w-full max-w-5xl mx-auto transition-all duration-[1500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              style={{ transformStyle: 'preserve-3d', transform: isUnpacked ? 'rotateX(0deg) translateY(0) scale(1)' : 'rotateX(30deg) translateY(60px) scale(0.85)' }}
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-flolim/20 blur-[100px] rounded-full transition-all duration-[2000ms] z-0 pointer-events-none ${isUnpacked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>

              <div className="relative z-10 w-full shadow-[0_20px_40px_rgba(0,0,0,0.8)] md:shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                <div className="bg-slate-800 p-2 md:p-4 rounded-t-xl md:rounded-t-3xl border-t border-x border-slate-600 relative">
                  <div className="absolute top-1 md:top-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-950 rounded-full"></div>
                  <div className="relative w-full aspect-video bg-[#0a1128] rounded-lg md:rounded-xl overflow-hidden border border-slate-900 flex items-center justify-center mt-1 md:mt-0">
                    <img src="/images/dashboard-esg.jpg" alt="ESG 성과 분석 보고서" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="h-3 md:h-6 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-xl md:rounded-b-3xl w-full mx-auto flex justify-center">
                  <div className="w-16 md:w-32 h-1 bg-slate-500 rounded-b-md"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <div className="text-center mb-10 md:mb-12 relative z-10 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-white break-keep">데이터 기반 ESG 가치 증명</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
            {esgIndicators.map((ind) => (
              <div key={ind.id} className={`bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner transition-colors group relative overflow-hidden cursor-default active:scale-[0.98] flex flex-col ${ind.classes.border}`}>
                <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none ${ind.classes.bgGlow}`}></div>
                <div className={`w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 md:mb-5 transition-colors relative z-10 border border-slate-600 ${ind.classes.iconBox}`}>
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{ind.icon}</svg>
                </div>
                <h3 className={`text-base md:text-lg font-bold text-white mb-1 md:mb-2 transition-colors relative z-10 break-keep ${ind.classes.titleHover}`}>{ind.title}</h3>
                <p className={`font-bold text-xs md:text-sm mb-2 relative z-10 break-keep ${ind.classes.subtitle}`}>{ind.subtitle}</p>
                <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed relative z-10 break-keep flex-grow">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
            {strengths.map((str) => (
              <div key={str.id} className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] active:border-flolim transition-colors group relative overflow-hidden cursor-default flex flex-col">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-flolim/10 transition-colors relative z-10 border border-slate-600">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{str.icon}</svg>
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors relative z-10 break-keep">{str.title}</h3>
                <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed relative z-10 break-keep flex-grow">{str.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '통합 관제 대시보드', path: '/platform/dashboard' }}
          next={{ label: '다음 카테고리', title: '도입(실증) 사례', path: '/support/references' }}
        />
      </div>
    </div>
  );
};

export default PlatformEsg;