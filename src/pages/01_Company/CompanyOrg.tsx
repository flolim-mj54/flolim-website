import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

export default function CompanyOrg() {
  // 💡 [수정됨] 애니메이션용 상태(State) 제거 및 Tailwind 친화적 데이터 매핑으로 최적화
  const departments = [
    { 
      id: 'dept1', title: '솔루션사업부', desc: '사업 기획 및\n프로젝트 총괄 운영', 
      textColor: 'text-flolim', lineHorizontal: 'left-1/2 right-0',
      cardHover: 'hover:border-flolim hover:shadow-[0_10px_30px_rgba(24,169,198,0.15)]',
      iconHover: 'group-hover:bg-flolim group-hover:text-slate-900',
      titleHover: 'group-hover:text-flolim', bgGlow: 'bg-flolim/5',
      icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    },
    { 
      id: 'dept2', title: '솔루션연구개발부', desc: '플랫폼 기술 및\n스마트 HW 개발', 
      textColor: 'text-amber-400', lineHorizontal: 'left-0 right-0',
      cardHover: 'hover:border-amber-400 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]',
      iconHover: 'group-hover:bg-amber-400 group-hover:text-slate-900',
      titleHover: 'group-hover:text-amber-400', bgGlow: 'bg-amber-400/5',
      icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    },
    { 
      id: 'dept3', title: '경영지원부', desc: '재무, 인사 및\n기업 운영 지원', 
      textColor: 'text-blue-400', lineHorizontal: 'left-0 right-0',
      cardHover: 'hover:border-blue-400 hover:shadow-[0_10px_30px_rgba(96,165,250,0.15)]',
      iconHover: 'group-hover:bg-blue-400 group-hover:text-slate-900',
      titleHover: 'group-hover:text-blue-400', bgGlow: 'bg-blue-400/5',
      icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
    },
    { 
      id: 'dept4', title: '생산관리부', desc: '제품 공정 및\n출하 품질(QA) 관리', 
      textColor: 'text-purple-400', lineHorizontal: 'left-0 right-0',
      cardHover: 'hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(192,132,252,0.15)]',
      iconHover: 'group-hover:bg-purple-400 group-hover:text-slate-900',
      titleHover: 'group-hover:text-purple-400', bgGlow: 'bg-purple-400/5',
      icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
    },
    { 
      id: 'dept5', title: '영업부', desc: '솔루션 컨설팅 및\n고객사 제휴', 
      textColor: 'text-rose-400', lineHorizontal: 'left-0 right-1/2',
      cardHover: 'hover:border-rose-400 hover:shadow-[0_10px_30px_rgba(251,113,133,0.15)]',
      iconHover: 'group-hover:bg-rose-400 group-hover:text-slate-900',
      titleHover: 'group-hover:text-rose-400', bgGlow: 'bg-rose-400/5',
      icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    }
  ];

  return (
    <div className="pb-10 relative overflow-hidden">
      
      <style>
        {`
          /* 모바일 환경 조직도 전용 가로 스크롤바 커스텀 */
          .custom-scrollbar::-webkit-scrollbar { height: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); border-radius: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(24, 169, 198, 0.3); border-radius: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(24, 169, 198, 0.6); }
        `}
      </style>

      <PageHeader 
        category="Organization"
        title="조직도"
        subtitle={
          <>
            세상을 밝히는 지능형 연결을 완성하기 위해,<br className="hidden md:block"/>
            <strong className="text-white font-bold">각 분야의 최고 전문가들이 유기적으로 협력</strong>하고 있습니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        <section className="bg-slate-900/50 pt-12 pb-16 md:pt-16 md:pb-20 rounded-[2.5rem] shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-10 relative z-10 px-4">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 break-keep">플로림 조직 구성</h2>
            <p className="text-slate-400 font-light text-xs md:text-sm break-keep">
              유연하고 수평적인 조직 문화를 바탕으로 신속한 의사결정과 혁신을 주도합니다.<br className="hidden md:block"/>
              <span className="md:hidden text-flolim font-medium">(※ 표를 좌우로 스크롤하여 확인하세요.)</span>
            </p>
          </div>

          <div className="w-full overflow-x-auto pb-10 px-4 md:px-8 relative z-10 custom-scrollbar">
            <div className="min-w-[900px] lg:min-w-full flex flex-col items-center pt-2 relative">

              {/* 💡 [수정됨] CEO 노드에 하단 부서들과 동일한 호버 효과 추가 */}
              <div className="group/ceo inline-flex flex-col items-center justify-center gap-1 bg-[#050b14] border border-slate-700 hover:bg-slate-800/80 hover:border-flolim hover:shadow-[0_10px_30px_rgba(24,169,198,0.2)] hover:-translate-y-2 px-12 py-5 rounded-full shadow-inner relative z-20 cursor-default transition-all duration-300 overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover/ceo:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="flex items-center gap-2 mb-1 relative z-10">
                  <div className="w-2 h-2 bg-flolim rounded-full animate-ping group-hover/ceo:bg-cyan-400 transition-colors"></div>
                  <span className="text-slate-400 group-hover/ceo:text-flolim transition-colors font-bold text-[10px] tracking-widest uppercase">CEO</span>
                </div>
                <div className="text-xl md:text-2xl font-black text-white tracking-[0.2em] ml-1 relative z-10 group-hover/ceo:text-flolim transition-colors">대 표</div>
              </div>

              {/* 중앙 메인 기둥 (Trunk Line) */}
              <div className="w-1 h-12 bg-flolim shadow-[0_0_15px_rgba(24,169,198,0.6)] z-10 relative"></div>

              {/* 부서 노드 (Branches) */}
              <div className="flex w-full relative">
                {departments.map((dept) => (
                  <div key={dept.id} className="w-1/5 relative pt-8 px-2 md:px-3 flex flex-col items-center group">
                    {/* 수평선 */}
                    <div className={`absolute top-0 ${dept.lineHorizontal} h-1 bg-flolim shadow-[0_0_10px_rgba(24,169,198,0.5)]`}></div>
                    {/* 수직선 */}
                    <div className="absolute top-0 left-1/2 w-1 h-8 bg-flolim shadow-[0_0_10px_rgba(24,169,198,0.5)] transform -translate-x-1/2"></div>
                    
                    {/* 부서 카드 본체 */}
                    <div className={`w-full bg-[#050b14] p-5 md:p-6 rounded-2xl md:rounded-3xl border border-slate-700 flex flex-col items-center text-center transition-all duration-300 shadow-inner group-hover:bg-slate-800/80 ${dept.cardHover} group-hover:-translate-y-2 cursor-default h-full relative overflow-hidden`}>
                      <div className={`absolute -right-6 -top-6 w-20 h-20 ${dept.bgGlow} rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>
                      
                      <div className={`w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 border border-slate-600 group-hover:scale-110 ${dept.iconHover} transition-all shadow-sm relative z-10 ${dept.textColor}`}>
                        {dept.icon}
                      </div>
                      
                      <h3 className={`font-bold text-white text-sm md:text-base mb-2 ${dept.titleHover} transition-colors break-keep relative z-10`}>
                        {dept.title}
                      </h3>
                      
                      <p className="text-[11px] md:text-xs text-slate-400 font-light break-keep mt-auto relative z-10 leading-relaxed">
                        {dept.desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 부서 간 시너지 텍스트 영역 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-1.5 h-6 md:h-8 bg-flolim rounded-full shadow-[0_0_15px_rgba(24,169,198,0.8)]"></div>
            <h3 className="text-xl md:text-2xl font-bold text-white break-keep">부서 간 시너지</h3>
          </div>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light break-keep relative z-10">
            플로림은 기술 개발부터 실제 시공, 그리고 유지보수까지 일원화된 <strong className="text-white font-medium">원스톱 서비스(One-Stop Service)</strong> 체계를 구축하고 있습니다. 각 부서는 수평적이고 긴밀한 소통을 통해 고객의 피드백을 기술에 즉각 반영하며, 가장 안정적이고 혁신적인 스마트 제어 인프라를 완성해 나갑니다.
          </p>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '임직원 인사말', path: '/company/greeting' }}
          next={{ label: '다음 페이지', title: '인증 및 파트너', path: '/company/cert' }}
        />

      </div>
    </div>
  );
}