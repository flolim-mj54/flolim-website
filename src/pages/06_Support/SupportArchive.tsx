import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const SupportArchive = () => {
  // 💡 [Map 데이터] file 속성에 실제 PDF 파일 경로를 연결합니다.
  const brochures = [
    { 
      id: 1, 
      title: '플로림 통합 브로슈어 (2026)', 
      desc: '스마트 시티 및 빌딩 솔루션 통합 안내서 (PDF, 8.45MB)', 
      iconColor: 'text-red-400', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />,
      file: '/docs/flolim_brochure.pdf'
    },
    { 
      id: 2, 
      title: 'ESCO 사업 제안서', 
      desc: '초기 투자비 0원 KEPCO 연계 사업 안내서 (PDF, 122KB)', 
      iconColor: 'text-blue-400', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
      file: '/docs/flolim_esco_proposal.pdf'
    },
  ];

  const manuals = [
    { id: 1, title: '단말기 기술 사양서', desc: 'LoRa / NB-IoT Node Spec', file: '/docs/flolim_spec.pdf' },
    { id: 2, title: '플랫폼 사용자 매뉴얼', desc: '관제 대시보드 사용 가이드', file: '/docs/flolim_manual.pdf' },
    { id: 3, title: '공식 인증 및 성적서', desc: 'KILT 등 통합 인증서 모음', file: '/docs/flolim_certs.pdf' },
  ];

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="자료실"
        title="브로슈어 및 기술 문서"
        subtitle={
          <>
            플로림의 솔루션 소개서, 제품 스펙 시트, 매뉴얼 등<br className="hidden md:block" />
            <strong className="text-white font-bold">도입 검토에 필요한 공식 문서</strong>를 다운로드하실 수 있습니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          <div className="mb-12 md:mb-16 relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-flolim pl-3 break-keep">회사 소개 및 제안서</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {brochures.map((b) => (
                <div key={b.id} className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 group relative overflow-hidden cursor-default">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-600 shrink-0 relative z-10 ${b.iconColor}`}>
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{b.icon}</svg>
                  </div>
                  <div className="flex-1 text-center sm:text-left relative z-10 w-full">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-flolim transition-colors break-keep">{b.title}</h3>
                    <p className="text-[11px] md:text-xs text-slate-400 mb-4 break-keep">{b.desc}</p>
                    
                    {/* 💡 [수정] inline-flex 단어를 삭제하여 경고 메시지 해결 */}
                    <a 
                      href={b.file} 
                      download 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-flolim active:scale-95 hover:text-slate-900 text-slate-300 text-xs font-bold rounded-lg transition-all border border-slate-600 hover:border-flolim flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                      다운로드
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-flolim pl-3 break-keep">기술 사양 및 매뉴얼</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {manuals.map((m) => (
                <div key={m.id} className="bg-[#050b14] p-5 md:p-6 rounded-2xl border border-slate-700 shadow-inner group relative overflow-hidden cursor-default flex flex-col justify-between h-full">
                  <div className="absolute -right-6 -top-6 w-20 h-20 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <div className="relative z-10 flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-white mb-1 group-hover:text-flolim transition-colors break-keep">{m.title}</h3>
                      <p className="text-[10px] md:text-xs text-slate-500 break-keep">{m.desc}</p>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600 text-slate-400 shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                  </div>
                  
                  <a 
                    href={m.file} 
                    download 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-slate-800 hover:bg-flolim active:scale-95 hover:text-slate-900 text-slate-300 text-xs font-bold rounded-lg transition-all border border-slate-600 hover:border-flolim relative z-10 flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    다운로드
                  </a>
                </div>
              ))}
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