import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

export default function CompanyIntro() {
  return (
    <div className="pb-10">
      
      <PageHeader 
        category="About Us"
        title={<>"최적의 에너지 효율을 <span className="text-flolim drop-shadow-[0_0_15px_rgba(24,169,198,0.4)]">디자인</span>합니다"</>}
        subtitle={
          <>
            {/* 💡 mr-1(우측 여백) 제거 및 <br/> 태그들을 지워 자연스러운 문단 정렬 유도 */}
            <span className="text-flolim font-bold">(주)플로림</span>은 4차 산업혁명의 핵심인 사물인터넷(IoT) 기술을 기반으로, 
            도시와 빌딩의 조명 및 전력 인프라를 가장 스마트하게 제어하는 플랫폼 전문 기업입니다. 
            단순한 설비 교체를 넘어, 데이터 기반의 관제 시스템을 통해 고객의 ESG 경영 실현과 획기적인 비용 절감을 이끌어냅니다.
          </>
        }
      />

      <div className="border-t border-slate-800/50 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-flolim/5 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">플로림이 제공하는 <span className="text-flolim">핵심 가치</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-flolim/50 transition-colors">
                <svg className="w-8 h-8 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">지능형 제어 (AIoT)</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light">
                유무선 통신망(LoRa, NB-IoT)과 각종 스마트 센서를 결합하여, 환경 변화에 따라 기기들이 스스로 판단하고 동작하는 능동형 제어 인프라를 구축합니다.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 text-center relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-flolim shadow-[0_0_10px_rgba(24,169,198,1)]"></div>
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-flolim/50 transition-colors">
                <svg className="w-8 h-8 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">극대화된 비용 절감</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light">
                KEPCO 연계 ESCO 사업 모델을 통해 초기 투자비 0원으로 시스템을 도입하며, 초고효율 LED와 스마트 제어의 시너지로 매월 최대 70% 이상의 전력을 절감합니다.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-flolim/50 transition-colors">
                <svg className="w-8 h-8 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">지속가능성 (ESG)</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light">
                에너지 사용량 감축에 따른 직접적인 온실가스 배출 감소 효과를 제공하며, 통합 관제 플랫폼을 통해 객관적인 ESG 경영 성과 리포팅을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/50 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">핵심 비즈니스 영역</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[#0a1128] border border-[#1c2e5a] shadow-xl rounded-3xl p-10 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-flolim/10 rounded-full blur-2xl group-hover:bg-flolim/20 transition-colors"></div>
              <div className="w-14 h-14 bg-slate-800 text-flolim rounded-2xl flex items-center justify-center border border-slate-700 mb-6 group-hover:border-flolim/50 transition-colors relative z-10">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-flolim transition-colors relative z-10">스마트 시티 솔루션</h3>
              <p className="text-slate-400 font-light leading-relaxed flex-grow relative z-10 mb-8">
                도시 전체의 실외 가로등 및 경관 조명을 중앙에서 통합 관제하는 광역 네트워크 시스템
              </p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>LoRa-Mesh 무선 제어망 구축</li>
                <li className="flex items-center text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>NB-IoT 기반 개별 관제</li>
                <li className="flex items-center text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>DMX512 경관 조명 연동</li>
              </ul>
            </div>
            
            <div className="bg-[#0a1128] border border-[#1c2e5a] shadow-xl rounded-3xl p-10 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-flolim/10 rounded-full blur-2xl group-hover:bg-flolim/20 transition-colors"></div>
              <div className="w-14 h-14 bg-slate-800 text-flolim rounded-2xl flex items-center justify-center border border-slate-700 mb-6 group-hover:border-flolim/50 transition-colors relative z-10">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-flolim transition-colors relative z-10">스마트 빌딩 솔루션</h3>
              <p className="text-slate-400 font-light leading-relaxed flex-grow relative z-10 mb-8">
                공장, 학교, 오피스 등 실내 공간의 에너지를 낭비 없이 완벽하게 통제하는 자동화 시스템
              </p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>초고효율 25W LED 디밍 제어</li>
                <li className="flex items-center text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>재실/조도 감지 IoT 센서 연동</li>
                <li className="flex items-center text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>KEPCO 연계 무상 구축 (ESCO)</li>
              </ul>
            </div>

            <div className="bg-[#0a1128] border border-[#1c2e5a] shadow-xl rounded-3xl p-10 hover:border-flolim/50 hover:shadow-[0_0_30px_rgba(24,169,198,0.15)] transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-flolim/10 rounded-full blur-2xl group-hover:bg-flolim/20 transition-colors"></div>
              <div className="w-14 h-14 bg-slate-800 text-flolim rounded-2xl flex items-center justify-center border border-slate-700 mb-6 group-hover:border-flolim/50 transition-colors relative z-10">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-flolim transition-colors relative z-10">통합 관제 플랫폼</h3>
              <p className="text-slate-400 font-light leading-relaxed flex-grow relative z-10 mb-8">
                모든 IoT 하드웨어를 한눈에 모니터링하고 제어하며, 빅데이터 기반의 에너지 분석 제공
              </p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>직관적인 통합 대시보드</li>
                <li className="flex items-center text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>빅데이터 기반 전력 분석</li>
                <li className="flex items-center text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700"><svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>ESG 경영 성과 리포트</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <BottomNav 
          prev={{ label: '이전 페이지', title: 'CEO 인사말', path: '/company/ceo' }}
          next={{ label: '다음 페이지', title: '인증 및 파트너', path: '/company/cert' }}
        />
      </div>

    </div>
  );
}