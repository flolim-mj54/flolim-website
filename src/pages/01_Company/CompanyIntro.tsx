import { Link } from 'react-router-dom';

export default function CompanyIntro() {
  return (
    <div className="bg-white min-h-screen pt-20 pb-10">
      
      <div className="container mx-auto px-4 max-w-5xl mb-24 text-center mt-10">
        <p className="text-flolim font-bold tracking-widest mb-4 uppercase text-sm">About Us</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
          "최적의 에너지 효율을 <span className="text-flolim">디자인</span>합니다"
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
          (주)플로림은 4차 산업혁명의 핵심인 사물인터넷(IoT) 기술을 기반으로, 
          도시와 빌딩의 조명 및 전력 인프라를 가장 스마트하게 제어하는 플랫폼 전문 기업입니다. 
          단순한 설비 교체를 넘어, 데이터 기반의 관제 시스템을 통해 고객의 ESG 경영 실현과 
          획기적인 비용 절감을 이끌어냅니다.
        </p>
      </div>

      <div className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">플로림이 제공하는 <span className="text-flolim">핵심 가치</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 hover:border-flolim/30 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">💡</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">지능형 제어 (AIoT)</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                유무선 통신망(LoRa, NB-IoT)과 각종 스마트 센서를 결합하여, 환경 변화에 따라 기기들이 스스로 판단하고 동작하는 능동형 제어 인프라를 구축합니다.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 hover:border-flolim/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-flolim"></div>
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">📉</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">극대화된 비용 절감</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                KEPCO 연계 ESCO 사업 모델을 통해 초기 투자비 0원으로 시스템을 도입하며, 초고효율 LED와 스마트 제어의 시너지로 매월 최대 70% 이상의 전력을 절감합니다.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 hover:border-flolim/30 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">🌍</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">지속가능성 (ESG)</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                에너지 사용량 감축에 따른 직접적인 온실가스 배출 감소 효과를 제공하며, 통합 관제 플랫폼을 통해 객관적인 ESG 경영 성과 리포팅을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">핵심 비즈니스 영역</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-10 hover:border-flolim/30 hover:shadow-md transition-all duration-300">
              <div className="text-5xl mb-6">🏙️</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">스마트 시티 솔루션</h3>
              <p className="text-slate-500 mb-8 font-light leading-relaxed">
                도시 전체의 실외 가로등 및 경관 조명을 중앙에서 통합 관제하는 광역 네트워크 시스템
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  LoRa-Mesh 무선 제어망 구축
                </li>
                <li className="flex items-center text-sm text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  NB-IoT 기반 개별 관제
                </li>
                <li className="flex items-center text-sm text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  DMX512 경관 조명 연동
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-10 hover:border-flolim/30 hover:shadow-md transition-all duration-300">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">스마트 빌딩 솔루션</h3>
              <p className="text-slate-500 mb-8 font-light leading-relaxed">
                공장, 학교, 오피스 등 실내 공간의 에너지를 낭비 없이 완벽하게 통제하는 자동화 시스템
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  초고효율 25W LED 디밍 제어
                </li>
                <li className="flex items-center text-sm text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  재실/조도 감지 IoT 센서 연동
                </li>
                <li className="flex items-center text-sm text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  KEPCO 연계 무상 구축 (ESCO)
                </li>
              </ul>
            </div>
          </div>

          {/* 하단 네비게이션 */}
          <div className="mt-16 flex justify-between items-center bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <Link to="/company/ceo" className="flex flex-col text-left group">
              <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">← 이전 페이지</span>
              <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">CEO 인사말</span>
            </Link>
            <Link to="/company/cert" className="flex flex-col text-right group">
              <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">다음 페이지 →</span>
              <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">인증 및 파트너</span>
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}