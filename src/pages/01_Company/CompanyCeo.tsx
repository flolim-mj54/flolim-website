import { Link } from 'react-router-dom';

export default function CompanyCeo() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* 페이지 헤더 */}
        <div className="text-center mb-16">
          <p className="text-flolim font-bold tracking-widest mb-3 uppercase text-sm">CEO Message</p>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">CEO 인사말</h1>
          <div className="w-24 h-1 bg-flolim mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
          
          {/* 좌측: 대표이사 이미지 영역 */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-80 bg-white rounded-3xl shadow-sm border border-slate-200 p-2 group">
               <div className="w-full h-full bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-slate-400 overflow-hidden border border-slate-100">
                 <span className="text-5xl mb-4">👨‍💼</span>
                 <span className="text-sm font-medium">대표이사 사진 영역</span>
                 {/* <img src="/images/ceo-profile.jpg" alt="CEO" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> */}
               </div>
               <div className="absolute inset-0 border-2 border-transparent group-hover:border-flolim/30 transition-colors rounded-3xl pointer-events-none"></div>
            </div>
          </div>

          {/* 우측: 인사말 텍스트 영역 */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-tight">
              "보이지 않는 에너지를 통제하여<br />
              <span className="text-flolim">기업의 내일을 밝히는 혁신</span>을 약속합니다."
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>안녕하십니까, 주식회사 플로림 대표이사입니다.</p>
              <p>
                과거의 에너지는 단순히 '소비'하는 대상이었습니다. 하지만 기후 변화와 탄소 중립이 전 지구적 과제로 떠오른 지금, 에너지는 기업의 생존과 성장을 결정짓는 가장 중요한 '관리'의 영역이 되었습니다.
              </p>
              <p>
                저희 플로림은 단순한 기기 교체를 넘어, <strong className="text-slate-800 font-bold">도시와 빌딩의 에너지를 가장 스마트하게 통제하는 지능형 IoT 제어 솔루션</strong>을 제공합니다. 
                노후화된 가로등과 실내 조명을 초고효율 LED로 전환하고, 자체 개발한 통합 관제 플랫폼을 통해 불필요한 전력 낭비를 원천적으로 차단합니다.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 border-l-4 border-l-flolim my-6">
                <p className="text-base text-slate-700">
                  특히, KEPCO 연계 ESCO 사업 모델을 통해 <strong className="text-flolim font-bold">초기 투자비용 없이 압도적인 에너지 절감과 ESG 경영 성과를 동시에 달성</strong>할 수 있는 최적의 로드맵을 제시하고 있습니다.
                </p>
              </div>
              <p>
                플로림의 기술력은 이미 여러 지자체와 기업의 실증 사례를 통해 그 가치를 증명해 왔습니다. 앞으로도 끊임없는 연구개발과 혁신을 통해, 고객의 자산을 보호하고 지속 가능한 미래를 앞당기는 든든한 파트너가 되겠습니다.
              </p>
              <p className="pt-4 font-bold text-slate-800">감사합니다.</p>
              
              <div className="pt-8 flex items-center gap-4">
                <p className="text-xl font-bold text-slate-800">주식회사 플로림 대표이사</p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <Link to="/" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">← 메인으로</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">홈페이지</span>
          </Link>
          <Link to="/company/intro" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">다음 페이지 →</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">플로림 소개</span>
          </Link>
        </div>

      </div>
    </div>
  );
}