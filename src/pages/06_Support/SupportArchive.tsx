import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const SupportArchive = () => {
  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="자료실"
        title="브로슈어 및 기술 문서"
        subtitle={
          <>
            플로림의 솔루션 소개서, 제품 스펙 시트, 매뉴얼 등<br />
            <strong className="text-white font-bold">도입 검토에 필요한 공식 문서</strong>를 다운로드하실 수 있습니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        {/* 메인 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          {/* 1. 브로슈어 및 제안서 */}
          <div className="mb-16 relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-flolim pl-3">회사 소개 및 제안서</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner flex flex-col md:flex-row items-center gap-6 group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-600 text-red-400 shrink-0 relative z-10">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <div className="flex-1 text-center md:text-left relative z-10">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-flolim transition-colors">플로림 통합 브로슈어 (2026)</h3>
                  <p className="text-xs text-slate-400 mb-3">스마트 시티 및 빌딩 솔루션 통합 안내서 (PDF, 5.2MB)</p>
                  <button className="px-4 py-2 bg-slate-800 hover:bg-flolim hover:text-slate-900 text-slate-300 text-xs font-bold rounded-lg transition-colors border border-slate-600 hover:border-flolim flex items-center gap-2 mx-auto md:mx-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    다운로드
                  </button>
                </div>
              </div>

              <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner flex flex-col md:flex-row items-center gap-6 group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-600 text-blue-400 shrink-0 relative z-10">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <div className="flex-1 text-center md:text-left relative z-10">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-flolim transition-colors">ESCO 사업 제안서</h3>
                  <p className="text-xs text-slate-400 mb-3">초기 투자비 0원 KEPCO 연계 사업 안내서 (PDF, 3.8MB)</p>
                  <button className="px-4 py-2 bg-slate-800 hover:bg-flolim hover:text-slate-900 text-slate-300 text-xs font-bold rounded-lg transition-colors border border-slate-600 hover:border-flolim flex items-center gap-2 mx-auto md:mx-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    다운로드
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* 2. 기술 문서 및 매뉴얼 */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-flolim pl-3">기술 사양 및 매뉴얼</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-[#050b14] p-6 rounded-2xl border border-slate-700 shadow-inner group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-20 h-20 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-flolim transition-colors">단말기 기술 사양서</h3>
                    <p className="text-xs text-slate-500 mb-4">LoRa / NB-IoT Node Spec</p>
                  </div>
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600 text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg transition-colors border border-slate-600 relative z-10">다운로드</button>
              </div>

              <div className="bg-[#050b14] p-6 rounded-2xl border border-slate-700 shadow-inner group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-20 h-20 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-flolim transition-colors">플랫폼 사용자 매뉴얼</h3>
                    <p className="text-xs text-slate-500 mb-4">관제 대시보드 사용 가이드</p>
                  </div>
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600 text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg transition-colors border border-slate-600 relative z-10">다운로드</button>
              </div>

              <div className="bg-[#050b14] p-6 rounded-2xl border border-slate-700 shadow-inner group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-20 h-20 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-flolim transition-colors">공식 인증 및 성적서</h3>
                    <p className="text-xs text-slate-500 mb-4">KILT 등 통합 인증서 모음</p>
                  </div>
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600 text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg transition-colors border border-slate-600 relative z-10">다운로드</button>
              </div>

            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '도입(실증) 사례', path: '/support/references' }}
          next={{ label: '다음 페이지', title: '온라인 문의', path: '/support/contact' }}
        />
      </div>
    </div>
  );
};

export default SupportArchive;