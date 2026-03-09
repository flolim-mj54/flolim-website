import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const PlatformEsg = () => {
  return (
    <div className="pb-10">
      <PageHeader 
        category="ESG & Sustainability"
        title="통합 경영 및 ESG 리포트"
        subtitle={
          <>
            수집된 모든 데이터를 분석하여 <strong className="text-flolim font-bold">탄소 감축 성과와 예산 절감액을 공식 리포트로 제공</strong>합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <section className="mb-20">
          <div className="bg-[#0a1128] rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-slate-800 pb-6 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flolim/10 border border-flolim/30 text-flolim text-xs font-bold tracking-wider mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  MONTHLY REPORT
                </div>
                <h2 className="text-2xl font-bold text-white">5월 에너지 및 탄소 저감 분석 리포트</h2>
                <p className="text-slate-400 text-sm mt-1 font-mono">발행일: 2026.06.01 / 대상: 스마트허브 A지구</p>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-flolim rounded-lg text-sm font-bold border border-slate-700 hover:border-flolim/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  Excel 다운로드
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-flolim hover:bg-cyan-400 text-slate-900 rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(24,169,198,0.4)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  PDF 내보내기
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
              
              <div className="lg:col-span-1 flex flex-col gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex-1 shadow-inner relative overflow-hidden group hover:border-flolim/50 transition-colors">
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity text-flolim">
                    <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h3 className="text-flolim/80 font-bold text-xs tracking-wider mb-2 uppercase">Environment</h3>
                  <p className="text-white font-bold mb-4">소나무 식재 효과</p>
                  <div className="text-4xl font-black text-flolim mb-2">92 <span className="text-xl font-bold">그루</span></div>
                  <div className="text-xs text-slate-400">
                    월간 탄소 배출량 <strong className="text-flolim">5% 추가 감소</strong>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex-1 shadow-inner hover:border-flolim/50 transition-colors">
                  <h3 className="text-flolim/80 font-bold text-xs tracking-wider mb-2 uppercase">Economy</h3>
                  <p className="text-white font-bold mb-4">월간 예산 절감액</p>
                  <div className="text-3xl font-black text-flolim mb-2">162,000 <span className="text-lg font-bold">원</span></div>
                  <div className="text-xs text-slate-400">
                    전력 사용량 <strong className="text-flolim">45% (1,350 kWh) 감소</strong>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-inner flex flex-col justify-between">
                <div>
                  <h3 className="text-flolim/80 font-bold text-xs tracking-wider mb-2 uppercase">Analysis</h3>
                  <p className="text-white font-bold mb-6">시스템 에너지 기여도 분석</p>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-flolim">센서 기반 동적 제어</span>
                        <span className="text-white">55%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-flolim h-2 rounded-full shadow-[0_0_10px_rgba(24,169,198,0.8)]" style={{ width: '55%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-cyan-600">타임 스케줄 디밍</span>
                        <span className="text-white">35%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-500">고효율 LED 자체 성능</span>
                        <span className="text-white">10%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-slate-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-slate-800 pt-5 flex justify-between items-center">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">심야 디밍 적용 시간</div>
                    <div className="text-lg font-bold text-white">120시간</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 mb-1">가동률 / 보행자 안전</div>
                    <div className="text-lg font-bold text-flolim">100% / 1,240명</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 flex flex-col gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex-1 shadow-inner">
                  <h3 className="text-flolim/80 font-bold text-xs tracking-wider mb-2 uppercase">Governance</h3>
                  <p className="text-white font-bold mb-4">운영 투명성 로그 (최근 30일)</p>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-flolim"></span>
                        <span className="text-slate-400">통신 오류 / 오프라인</span>
                      </div>
                      <strong className="text-flolim">0건 (안정)</strong>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                        <span className="text-slate-400">원격 제어 개입</span>
                      </div>
                      <strong className="text-white">3회 (우천)</strong>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span className="text-slate-400">고장 예측 알림</span>
                      </div>
                      <strong className="text-amber-400">1건 (사전교체)</strong>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800 border border-flolim/30 p-5 rounded-2xl shadow-[0_0_15px_rgba(24,169,198,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <span className="text-xs font-bold text-flolim uppercase tracking-wider">AI 분석 인사이트</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    잦은 우천으로 인해 주간 조도 센서 개입이 증가하여, 평월 대비 에너지 절감율이 <strong className="text-white font-bold">12% 상승</strong>했습니다. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">단순한 절감을 넘어, 완벽한 증명으로</h2>
            <p className="text-slate-400 font-light">ESG 공시에 바로 사용할 수 있는 신뢰성 높은 데이터를 생성합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-5 group-hover:bg-flolim/10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-flolim transition-colors">위변조 불가능한 신뢰성</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                하드웨어 스마트 미터기에서 측정한 원본 데이터를 사용하여, <strong className="text-flolim">감사(Audit) 추적성</strong>이 100% 보장됩니다.
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-5 group-hover:bg-flolim/10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-flolim transition-colors">스케줄 기반 원클릭 발행</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                원하는 주기(월간, 분기, 연간)를 설정하면, 플랫폼이 자동으로 성과를 분석하여 <strong className="text-flolim">PDF 및 Excel</strong> 리포트를 완성합니다.
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-5 group-hover:bg-flolim/10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-flolim transition-colors">글로벌 표준 (RE100)</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                글로벌 RE100, K-ETS 지침에 맞춘 <strong className="text-flolim">Scope 2 배출량 산정 공식</strong>을 정확하게 적용합니다.
              </p>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '통합 관제 대시보드', path: '/platform/dashboard' }}
          next={{ label: '다음 카테고리', title: '자료실 및 고객지원', path: '/support/archive' }}
        />
      </div>
    </div>
  );
};

export default PlatformEsg;