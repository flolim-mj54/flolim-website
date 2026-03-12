import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

export default function CompanyCert() {
  const certificates = [
    { id: 1, img: 'cert-kiel.jpg', title: '키엘연구원 시험성적서', desc: '스마트 LED 조명 제어 시스템' },
    { id: 2, img: 'cert-women.jpg', title: '여성기업 확인서', desc: '중소벤처기업청 인증' },
    { id: 3, img: 'cert-sme.jpg', title: '중소기업 확인서', desc: '소기업(소상공인) 등록' },
    { id: 4, img: 'cert-startup.jpg', title: '창업기업 확인서', desc: '공공기관 우선 구매 대상' },
  ];

  const progresses = [
    { id: 1, img: 'logo-highefficiency.jpg', title: '고효율기자재인증', desc: '에너지 효율 공식 마크', date: '4월 완료' },
    { id: 2, img: 'logo-g2b.jpg', title: '조달청 등록', desc: '공공기관 우선 공급망 구축', date: '5월 완료' },
    { id: 3, img: 'logo-kepcoes.jpg', title: '켑코이에스(ESCO) 파트너사', desc: '한국전력공사 출자 기업 제휴', date: '3월 완료' },
  ];

  return (
    <div className="pb-10">
      <PageHeader 
        category="Certificates & Partners"
        title="인증 및 파트너십"
        subtitle={
          <>
            플로림은 공신력 있는 국가 기관의 인증을 통해<br />
            <strong className="text-white font-bold">최고 수준의 기술력과 네트워크 안전성</strong>을 증명합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        {/* 1. 획득 완료 인증서 */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-8 md:mb-10 relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white break-keep">공식 인증 및 성적서</h2>
            <span className="px-3 py-1 bg-flolim/10 text-flolim text-[10px] md:text-xs font-bold rounded-full border border-flolim/30 whitespace-nowrap">획득 완료</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-[#050b14] rounded-2xl shadow-inner border border-slate-700 p-6 flex flex-col items-center text-center hover:border-flolim/50 hover:shadow-[0_0_20px_rgba(24,169,198,0.15)] active:scale-[0.98] transition-all group relative overflow-hidden cursor-pointer">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="w-full aspect-[3/4] bg-slate-800 rounded-xl mb-6 flex items-center justify-center border border-slate-600 overflow-hidden relative z-10">
                  <img src={`/images/${cert.img}`} alt={cert.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-white text-sm md:text-base mb-1 group-hover:text-flolim transition-colors relative z-10 break-keep">{cert.title}</h3>
                <p className="text-[10px] md:text-xs text-slate-400 font-light relative z-10 break-keep">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 진행 중인 등록 현황 & 보안 인증 */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="mb-8 md:mb-10 relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white break-keep">진행 중인 심사 및 등록 현황</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                {progresses.map((prog) => (
                  <div key={prog.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 bg-[#050b14] rounded-2xl border border-slate-700 hover:border-flolim/50 active:scale-[0.98] active:border-flolim shadow-inner transition-all group relative overflow-hidden gap-3 sm:gap-0 cursor-default">
                    <div className="absolute -right-6 -top-6 w-16 h-16 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                    <div className="flex items-center gap-3 md:gap-4 relative z-10 flex-1">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center p-1 overflow-hidden shrink-0 shadow-sm">
                        <img src={`/images/${prog.img}`} alt={prog.title} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm md:text-base text-white group-hover:text-flolim transition-colors break-keep">{prog.title}</h4>
                        <p className="text-[10px] md:text-xs text-slate-400 mt-1 break-keep">{prog.desc}</p>
                      </div>
                    </div>
                    <span className="self-end sm:self-auto text-[10px] md:text-xs font-bold text-flolim bg-flolim/10 px-3 md:px-4 py-1 md:py-2 rounded-full border border-flolim/30 whitespace-nowrap relative z-10">{prog.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* KISA 보안인증 카드 */}
            <div className="bg-[#050b14] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-center shadow-inner border border-slate-700 group hover:border-flolim/50 active:scale-[0.98] transition-all cursor-default">
              <div className="absolute -right-6 -top-6 w-40 h-40 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-slate-800/80 text-flolim border border-flolim/30 text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 rounded-full mb-4 md:mb-6 tracking-wider whitespace-nowrap">
                  심사 진행 중 (7월 완료 목표)
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 leading-tight group-hover:text-flolim transition-colors break-keep">
                  KISA IoT 보안인증<br className="hidden sm:block"/> 스마트 센서
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 break-keep">
                  국가 공인 보안 기준을 충족하여<br/>
                  해킹과 데이터 유출로부터 완벽하게 보호합니다.
                </p>
                <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-slate-300 font-light">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim mr-2 md:mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="break-keep">한국인터넷진흥원(KISA) 주관 국가 공인 제도</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim mr-2 md:mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="break-keep">기기 인증, 암호화, 데이터 보호 등 엄격한 5대 보안 통과</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim mr-2 md:mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="break-keep">공공기관 및 주요 기업 스마트망 도입 시 필수</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 파트너사 소개 */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-flolim/5 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="text-center mb-10 md:mb-12 relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 break-keep">파트너사 소개</h2>
            <p className="text-slate-400 font-light text-xs md:text-sm break-keep">
              더 스마트하게, 더 효율적으로. <strong className="text-flolim font-bold">플로림과 투반테크가 함께 미래를 밝힙니다.</strong>
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 lg:gap-8 bg-[#050b14] p-8 md:p-8 lg:p-10 rounded-3xl border border-slate-700 shadow-inner group/container overflow-hidden">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover/container:scale-150 transition-transform duration-700 pointer-events-none"></div>

            {/* 좌측 기업 */}
            <div className="flex-1 flex flex-col items-center text-center w-full group relative z-10 cursor-default">
              <div className="w-32 h-32 md:w-32 md:h-32 lg:w-56 lg:h-56 bg-white rounded-2xl lg:rounded-[2rem] p-4 lg:p-8 flex items-center justify-center shadow-lg border-[3px] lg:border-4 border-slate-800 mb-4 lg:mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                <img src="/images/logo-flolim.jpg" alt="플로림 로고" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg md:text-lg lg:text-2xl font-bold text-white mb-2 lg:mb-3 group-hover:text-flolim transition-colors break-keep">주식회사 플로림</h3>
              <p className="text-slate-400 font-light text-[10px] md:text-xs lg:text-sm leading-relaxed break-keep">
                지능형 통합 제어 시스템 및<br />스마트 하드웨어 솔루션 전문기업
              </p>
            </div>

            {/* 중앙 시너지 아이콘 */}
            <div className="flex flex-col items-center justify-center shrink-0 px-2 lg:px-4 relative z-10">
              <span className="text-flolim font-black tracking-widest text-[9px] md:text-[10px] lg:text-xs mb-2 md:mb-4 uppercase bg-flolim/10 px-3 lg:px-5 py-1.5 lg:py-2 rounded-full border border-flolim/30 shadow-[0_0_15px_rgba(24,169,198,0.2)] whitespace-nowrap">
                Cooperation & Synergy
              </span>
              <div className="hidden md:flex items-center gap-2 lg:gap-4 text-slate-600">
                <div className="w-8 md:w-8 lg:w-24 h-[2px] bg-gradient-to-r from-transparent to-flolim/50"></div>
                <svg className="w-6 h-6 lg:w-8 lg:h-8 text-flolim drop-shadow-[0_0_15px_rgba(24,169,198,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                <div className="w-8 md:w-8 lg:w-24 h-[2px] bg-gradient-to-l from-transparent to-flolim/50"></div>
              </div>
              <div className="flex md:hidden text-flolim my-2">
                <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </div>
            </div>

            {/* 우측 기업 */}
            <div className="flex-1 flex flex-col items-center text-center w-full group relative z-10 cursor-default">
              <div className="w-32 h-32 md:w-32 md:h-32 lg:w-56 lg:h-56 bg-white rounded-2xl lg:rounded-[2rem] p-4 lg:p-6 flex items-center justify-center shadow-lg border-[3px] lg:border-4 border-slate-800 mb-4 lg:mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                {/* 💡 [수정됨] logo-tuvan.jpg 이미지를 제거하고 스마트 LED 아이콘으로 교체 */}
                <div className="flex flex-col items-center justify-center text-slate-800 w-full h-full">
                  <svg className="w-12 h-12 lg:w-16 lg:h-16 text-slate-800 mb-1 lg:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                  <span className="text-[9px] lg:text-[11px] font-bold tracking-widest text-slate-500 text-center">SMART LED PARTNER</span>
                </div>
              </div>
              <h3 className="text-lg md:text-lg lg:text-2xl font-bold text-white mb-2 lg:mb-3 group-hover:text-flolim transition-colors break-keep">(주)투반테크</h3>
              <p className="text-slate-400 font-light text-[10px] md:text-xs lg:text-sm leading-relaxed break-keep">
                초고효율 LED 및<br />스마트 LED 전문기업
              </p>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: 'CEO 인사말', path: '/company/ceo' }}
          next={{ label: '다음 페이지', title: '연혁', path: '/company/history' }}
        />
      </div>
    </div>
  );
}