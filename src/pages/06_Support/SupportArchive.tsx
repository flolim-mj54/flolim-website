import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const SupportArchive = () => {
  const brochures = [
    { 
      id: 1, 
      title: '플로림 통합 브로슈어 (2026)', 
      desc: '스마트 시티 및 빌딩 솔루션 통합 안내서 (PDF, 8.45MB)', 
      img: '/images/logo-pdf.jpg',
      url: '/docs/flolim_brochure.pdf',
      isLink: false,
      btnText: '다운로드'
    },
    { 
      id: 2, 
      title: 'KEPCO ES 에너지 효율화 사업', 
      desc: '초기 투자비 0원 ESCO 사업 공식 안내 페이지로 이동합니다.', 
      img: '/images/logo-kepcoes.jpg',
      url: 'https://www.kepcoes.co.kr/business/business01.asp',
      isLink: true,
      btnText: '공식 홈페이지 이동'
    },
  ];

  const manuals = [
    { 
      id: 3, 
      title: '공식 인증 및 성적서', 
      desc: 'KIEL 등 통합 인증서 모음', 
      file: '/docs/flolim_certs.pdf',
      img: '/images/logo-pdf.jpg',
      isReady: true 
    },
    { 
      id: 1, 
      title: '단말기 기술 사양서', 
      desc: 'LoRa / NB-IoT Node Spec', 
      file: '#',
      img: '/images/logo-pdf.jpg',
      isReady: false 
    },
    { 
      id: 2, 
      title: '플랫폼 사용자 매뉴얼', 
      desc: '관제 대시보드 사용 가이드', 
      file: '#',
      img: '/images/logo-pdf.jpg',
      isReady: false 
    },
  ];

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="자료실"
        title="브로슈어 및 기술 문서"
        subtitle={
          <>
            플로림의 솔루션 소개서, 제품 스펙 시트, 매뉴얼 등<br className="hidden md:block" />
            <strong className="text-white font-bold">도입 검토에 필요한 공식 문서</strong>를 확인하실 수 있습니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          <div className="mb-12 md:mb-16 relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-flolim pl-3 break-keep">회사 소개 및 ESCO 사업 소개</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {brochures.map((b) => (
                // 💡 [수정됨] flex-col, h-full 속성을 주어 카드 높이를 맞추고 내부 요소 정렬
                <div key={b.id} className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner flex flex-col h-full group relative overflow-hidden cursor-default">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  
                  {/* 상단: 이미지와 텍스트 영역 (flex-1을 주어 남는 공간 차지) */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-5 mb-6 relative z-10 flex-1 w-full">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shrink-0 relative p-2 md:p-3 shadow-md group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow">
                      <img src={b.img} alt={b.title} className="w-full h-full object-contain" />
                    </div>
                    
                    <div className="text-center sm:text-left w-full pt-1">
                      <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors break-keep">{b.title}</h3>
                      <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed break-keep">{b.desc}</p>
                    </div>
                  </div>
                  
                  {/* 💡 [수정됨] 하단: 버튼 영역 (mt-auto로 무조건 바닥에 고정, w-full로 가로 꽉 채움) */}
                  <div className="relative z-10 mt-auto w-full pt-2">
                    <a 
                      href={b.url} 
                      {...(!b.isLink ? { download: true } : {})}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`w-full py-3 md:py-3.5 rounded-xl transition-all border font-bold text-xs md:text-sm flex items-center justify-center gap-2 active:scale-95 shadow-sm ${
                        b.isLink
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500 hover:text-white hover:border-blue-500'
                          : 'bg-slate-800 text-slate-300 border-slate-600 hover:bg-flolim hover:text-slate-900 hover:border-flolim'
                      }`}
                    >
                      {b.isLink ? (
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      ) : (
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                      )}
                      {b.btnText}
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
                <div key={m.id} className={`bg-[#050b14] p-5 md:p-6 rounded-2xl border ${m.isReady ? 'border-slate-700 hover:border-flolim/50' : 'border-slate-800/50'} shadow-inner group relative overflow-hidden cursor-default flex flex-col justify-between h-full transition-colors`}>
                  {m.isReady && <div className="absolute -right-6 -top-6 w-20 h-20 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>}
                  
                  <div className="relative z-10 flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`text-sm md:text-base font-bold ${m.isReady ? 'text-white group-hover:text-flolim' : 'text-slate-500'} transition-colors break-keep`}>{m.title}</h3>
                        {!m.isReady && <span className="text-[9px] font-bold bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">준비중</span>}
                      </div>
                      <p className={`text-[10px] md:text-xs break-keep ${m.isReady ? 'text-slate-400' : 'text-slate-600'}`}>{m.desc}</p>
                    </div>
                    
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center border shrink-0 p-1.5 md:p-2 transition-all ${m.isReady ? 'border-slate-200 shadow-sm' : 'border-slate-800 opacity-30 grayscale'}`}>
                      <img src={m.img} alt="PDF 문서" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  
                  {m.isReady ? (
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
                  ) : (
                    <div className="w-full py-2.5 bg-slate-900/50 text-slate-600 text-xs font-bold rounded-lg border border-slate-800 relative z-10 flex items-center justify-center gap-1.5 cursor-not-allowed">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      자료 준비중
                    </div>
                  )}
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