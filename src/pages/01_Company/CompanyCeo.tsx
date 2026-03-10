import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

export default function CompanyCeo() {
  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="CEO Message"
        title="CEO 인사말"
        subtitle="보이지 않는 에너지를 통제하여 기업의 내일을 밝히는 혁신을 약속합니다."
      />

      <div className="container mx-auto px-4 max-w-5xl mb-10 relative z-10 mt-10">
        
        {/* 모든 콘텐츠를 감싸는 프리미엄 다크 패널 */}
        <section className="bg-slate-900/50 backdrop-blur-md p-10 md:p-20 rounded-[2.5rem] shadow-2xl border border-slate-800 mb-16 relative overflow-hidden group">
          
          {/* 메인 래퍼 글로우 효과 */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          <div className="text-center mb-16 relative z-10 border-b border-slate-800/50 pb-12">
            <p className="text-flolim font-bold tracking-widest text-sm mb-4 uppercase">The beginning of smart business</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              "지속 가능한 비즈니스의 시작,<br />
              <span className="text-flolim drop-shadow-[0_0_20px_rgba(24,169,198,0.5)] mt-2 inline-block">플로림이 함께 하겠습니다."</span>
            </h2>
          </div>

          <div className="space-y-8 text-slate-300 text-base md:text-lg leading-relaxed font-light relative z-10 px-0 md:px-8">
            <p className="text-xl text-white font-medium mb-6">
              안녕하십니까, 주식회사 플로림 대표이사입니다.
            </p>
            
            <p>
              과거의 에너지는 단순히 '소비'하는 대상이었습니다. 하지만 기후 변화와 탄소 중립이 전 지구적 과제로 떠오른 지금, 에너지는 기업의 생존과 성장을 결정짓는 가장 중요한 '관리'의 영역이 되었습니다.
            </p>
            
            <p>
              저희 플로림은 <strong className="text-white font-medium">세상을 밝히는 지능형 연결</strong>을 모토로, 딥러닝 기반의 데이터 분석과 첨단 IoT 센서 네트워크를 결합하여 도시와 빌딩의 에너지를 가장 스마트하게 관리하는 혁신 기술 기업입니다. 노후화된 조명 인프라를 스마트 제어 환경으로 전환하여 불필요한 전력 낭비를 원천적으로 차단합니다.
            </p>
            
            {/* 서브 카드 (강조 박스) */}
            <div className="bg-[#050b14]/80 p-8 rounded-2xl border border-slate-700 border-l-4 border-l-flolim my-10 shadow-inner relative overflow-hidden group/card">
              {/* 💡 공통 원형 데코 */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover/card:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <p className="text-base text-slate-300 leading-relaxed relative z-10">
                특히, KEPCO(한국전력공사) 연계 ESCO 사업 모델을 통해 <strong className="text-flolim font-bold">초기 투자비용 0원으로 국가 지원을 활용하여 최대 80%의 압도적인 에너지 절감과 ESG 경영 성과를 동시에 달성</strong>할 수 있는 최적의 로드맵을 제공합니다.
              </p>
            </div>
            
            <p>
              탄소 중립과 ESG 경영의 든든한 파트너로서, 끊임없는 연구개발과 완벽한 신뢰를 바탕으로 고객의 자산을 보호하고 지속 가능한 미래를 앞당기는 통합 제어 솔루션을 제공하겠습니다. 
            </p>
            
            {/* 서명 영역 */}
            <div className="pt-12 mt-16 flex flex-col items-end">
              <p className="text-lg text-slate-400 mb-2 font-medium">감사합니다.</p>
              <p className="text-2xl font-bold text-white tracking-wide">주식회사 플로림 대표이사</p>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '플로림 소개', path: '/company/intro' }}
          next={{ label: '다음 페이지', title: '인증 및 파트너', path: '/company/cert' }}
        />
      </div>
    </div>
  );
}