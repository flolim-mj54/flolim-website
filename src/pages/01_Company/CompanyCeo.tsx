import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

export default function CompanyCeo() {
  return (
    <div className="pb-10 relative overflow-hidden">
      {/* 배경 네온 글로우 */}
      <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2"></div>

      <PageHeader 
        category="CEO Message"
        title="CEO 인사말"
        subtitle="보이지 않는 에너지를 통제하여 기업의 내일을 밝히는 혁신을 약속합니다."
      />

      <div className="container mx-auto px-4 max-w-4xl mb-10 relative z-10">
        
        {/* 💡 1. 핵심 슬로건을 단독으로 중앙에 크게 배치 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            "지속 가능한 비즈니스의 시작,<br />
            <span className="text-flolim drop-shadow-[0_0_20px_rgba(24,169,198,0.5)]">플로림</span>이 함께 하겠습니다."
          </h2>
        </div>

        {/* 💡 2. 텍스트를 감싸는 프리미엄 다크 패널 */}
        <div className="bg-slate-900/60 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-slate-800 mb-16 relative overflow-hidden group">
          
          {/* 패널 내부 장식 효과 */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-flolim/10 rounded-full blur-[80px] transition-colors duration-700 group-hover:bg-flolim/20"></div>

          <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-light relative z-10">
            <p className="text-xl text-slate-300 font-medium mb-6">
              안녕하십니까, 주식회사 플로림 대표이사입니다.
            </p>
            
            <p>
              과거의 에너지는 단순히 '소비'하는 대상이었습니다. 하지만 기후 변화와 탄소 중립이 전 지구적 과제로 떠오른 지금, 에너지는 기업의 생존과 성장을 결정짓는 가장 중요한 '관리'의 영역이 되었습니다.
            </p>
            
            <p>
              저희 플로림은 단순한 기기 교체를 넘어, <strong className="text-white font-medium">도시와 빌딩의 에너지를 가장 스마트하게 통제하는 지능형 IoT 제어 솔루션</strong>을 제공합니다. 
              노후화된 조명 인프라를 초고효율 스마트 LED로 전환하고, 자체 개발한 통합 관제 플랫폼을 통해 불필요한 전력 낭비를 원천적으로 차단합니다.
            </p>
            
            {/* 강조 박스 스타일 최적화 */}
            <div className="bg-[#0a1128]/80 p-8 rounded-2xl border border-slate-800 border-l-4 border-l-flolim my-8 shadow-inner">
              <p className="text-base text-slate-300 leading-relaxed">
                특히, 한국전력공사 파트너십 기반의 ESCO 사업 모델을 통해 <strong className="text-flolim font-bold">초기 투자비용 없이 압도적인 에너지 절감과 ESG 경영 성과를 동시에 달성</strong>할 수 있는 최적의 로드맵을 제시하고 있습니다.
              </p>
            </div>
            
            <p>
              플로림의 기술력은 수많은 실증 사례를 통해 그 가치를 증명해 왔습니다. 앞으로도 끊임없는 연구개발과 혁신을 통해, 고객의 자산을 보호하고 지속 가능한 미래를 앞당기는 든든한 파트너가 되겠습니다.
            </p>
            
            {/* 서명 영역을 우측 하단으로 고급스럽게 배치 */}
            <div className="pt-12 mt-12 border-t border-slate-800/50 flex flex-col items-end">
              <p className="text-lg text-slate-400 mb-2 font-medium">감사합니다.</p>
              <p className="text-2xl font-bold text-white tracking-wide">주식회사 플로림 대표이사</p>
            </div>
          </div>
        </div>

        <BottomNav 
          prev={{ label: '메인으로', title: '홈페이지', path: '/' }}
          next={{ label: '다음 페이지', title: '플로림 소개', path: '/company/intro' }}
        />
      </div>
    </div>
  );
}