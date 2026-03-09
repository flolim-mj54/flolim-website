import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const CompanyCert = () => {
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

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 1. 획득 완료 인증서 */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-2xl font-bold text-white">공식 인증 및 성적서</h2>
            <span className="px-3 py-1 bg-flolim/10 text-flolim text-xs font-bold rounded-full border border-flolim/30">획득 완료</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-800 p-6 flex flex-col items-center text-center hover:border-flolim/50 hover:shadow-[0_0_20px_rgba(24,169,198,0.15)] transition-all group">
              <div className="w-full aspect-[3/4] bg-slate-800 rounded-2xl mb-6 flex items-center justify-center border border-slate-700 overflow-hidden relative">
                <img src="/images/cert-kilt.jpg" alt="KILT 성적서" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-flolim transition-colors">키엘(KILT) 시험성적서</h3>
              <p className="text-xs text-slate-400 font-light">스마트 LED 조명 제어 시스템</p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-800 p-6 flex flex-col items-center text-center hover:border-flolim/50 hover:shadow-[0_0_20px_rgba(24,169,198,0.15)] transition-all group">
              <div className="w-full aspect-[3/4] bg-slate-800 rounded-2xl mb-6 flex items-center justify-center border border-slate-700 overflow-hidden relative">
                <img src="/images/cert-women.jpg" alt="여성기업 확인서" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-flolim transition-colors">여성기업확인서</h3>
              <p className="text-xs text-slate-400 font-light">중소벤처기업청 인증</p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-800 p-6 flex flex-col items-center text-center hover:border-flolim/50 hover:shadow-[0_0_20px_rgba(24,169,198,0.15)] transition-all group">
              <div className="w-full aspect-[3/4] bg-slate-800 rounded-2xl mb-6 flex items-center justify-center border border-slate-700 overflow-hidden relative">
                <img src="/images/cert-sme.jpg" alt="중소기업 확인서" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-flolim transition-colors">중소기업확인서</h3>
              <p className="text-xs text-slate-400 font-light">소기업(소상공인) 등록</p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-800 p-6 flex flex-col items-center text-center hover:border-flolim/50 hover:shadow-[0_0_20px_rgba(24,169,198,0.15)] transition-all group">
              <div className="w-full aspect-[3/4] bg-slate-800 rounded-2xl mb-6 flex items-center justify-center border border-slate-700 overflow-hidden relative">
                <img src="/images/cert-startup.jpg" alt="창업기업 확인서" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-flolim transition-colors">창업기업확인서</h3>
              <p className="text-xs text-slate-400 font-light">공공기관 우선 구매 대상</p>
            </div>
          </div>
        </section>

        {/* 2. 진행 중인 등록 현황 & 보안 인증 */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-2xl font-bold text-white">진행 중인 심사 및 등록 현황</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-lg flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-flolim/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 overflow-hidden shrink-0 shadow-sm">
                      <img src="/images/logo-highefficiency.jpg" alt="고효율기자재" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-flolim transition-colors">고효율기자재 인증</h4>
                      <p className="text-xs text-slate-400 mt-1">에너지 효율 공식 마크</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-flolim bg-flolim/10 px-4 py-2 rounded-full border border-flolim/30 whitespace-nowrap">4월 획득 목표</span>
                </div>
                
                <div className="flex items-center justify-between p-5 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-flolim/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 overflow-hidden shrink-0 shadow-sm">
                      <img src="/images/logo-g2b.jpg" alt="조달청" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-flolim transition-colors">조달청 나라장터 등록</h4>
                      <p className="text-xs text-slate-400 mt-1">공공기관 우선 공급망 구축</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-flolim bg-flolim/10 px-4 py-2 rounded-full border border-flolim/30 whitespace-nowrap">5월 등록 목표</span>
                </div>

                <div className="flex items-center justify-between p-5 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-flolim/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 overflow-hidden shrink-0 shadow-sm">
                      <img src="/images/logo-kepco.jpg" alt="켑코이에스" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-flolim transition-colors">켑코이에스(ESCO)</h4>
                      <p className="text-xs text-slate-400 mt-1">한국전력공사 파트너사 등록</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-flolim bg-flolim/10 px-4 py-2 rounded-full border border-flolim/30 whitespace-nowrap">3월 완료 목표</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0a1128] rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-center shadow-2xl border border-[#1c2e5a]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-flolim rounded-full blur-[100px] opacity-10 pointer-events-none translate-x-10 -translate-y-10"></div>
              <div className="relative z-10">
                <div className="inline-block bg-slate-800/80 text-flolim border border-flolim/30 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wider">
                  심사 진행 중 (7월 완료 목표)
                </div>
                <h3 className="text-3xl font-black mb-4 leading-tight">
                  KISA IoT 보안인증<br/>스마트 센서
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  국가 공인 보안 기준을 충족하여<br/>
                  해킹과 데이터 유출로부터 완벽하게 보호합니다.
                </p>
                <ul className="space-y-4 text-sm text-slate-300 font-light">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    한국인터넷진흥원(KISA) 주관 국가 공인 제도
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    기기 인증, 암호화, 데이터 보호 등 엄격한 기준 통과
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-flolim mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    공공기관 및 주요 기업 스마트망 도입 시 필수
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 💡 3. 파트너사 소개 (바깥 제목은 차분하게 유지, 안쪽 콘텐츠만 거대하게!) */}
        <section className="mb-10">
          {/* 바깥쪽 제목 영역: 원래 사이즈로 복구 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">핵심 파트너십</h2>
            <p className="text-slate-400 font-light">
              각 분야 최고의 전문 기업이 만나 <strong className="text-flolim font-bold">가장 완벽한 스마트 에너지 솔루션</strong>을 완성합니다.
            </p>
          </div>
          
          {/* 박스 안쪽 영역: 크고 웅장하게 유지 */}
          <div className="bg-slate-900/80 backdrop-blur-md rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-flolim/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
              
              {/* 좌측 기업 */}
              <div className="flex-1 flex flex-col items-center text-center w-full group">
                <div className="w-56 h-56 md:w-64 md:h-64 bg-white rounded-[2rem] p-8 flex items-center justify-center shadow-lg border-4 border-slate-800 mb-8 transform group-hover:-translate-y-3 transition-transform duration-500">
                  <img src="/images/logo-flolim.jpg" alt="플로림 로고" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">주식회사 플로림</h3>
                <p className="text-slate-400 font-light text-base leading-relaxed">지능형 통합 제어 플랫폼 및<br />IoT 스마트 하드웨어 솔루션</p>
              </div>

              {/* 중앙 시너지 아이콘 */}
              <div className="flex flex-col items-center justify-center shrink-0 px-4">
                <span className="text-flolim font-black tracking-widest text-sm mb-6 uppercase bg-flolim/10 px-6 py-2.5 rounded-full border border-flolim/30 shadow-[0_0_15px_rgba(24,169,198,0.2)]">
                  Cooperation & Synergy
                </span>
                <div className="hidden md:flex items-center gap-4 text-slate-500">
                  <div className="w-20 md:w-32 h-[3px] bg-gradient-to-r from-transparent to-flolim/50"></div>
                  <svg className="w-10 h-10 text-flolim drop-shadow-[0_0_15px_rgba(24,169,198,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                  <div className="w-20 md:w-32 h-[3px] bg-gradient-to-l from-transparent to-flolim/50"></div>
                </div>
                <div className="flex md:hidden text-flolim my-6">
                  <svg className="w-10 h-10 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                </div>
              </div>

              {/* 우측 기업 */}
              <div className="flex-1 flex flex-col items-center text-center w-full group">
                <div className="w-56 h-56 md:w-64 md:h-64 bg-white rounded-[2rem] p-8 flex items-center justify-center shadow-lg border-4 border-slate-800 mb-8 transform group-hover:-translate-y-3 transition-transform duration-500">
                  <img src="/images/logo-tuvan.jpg" alt="투반테크 로고" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-flolim transition-colors">(주)투반테크</h3>
                <p className="text-slate-400 font-light text-base leading-relaxed">초고효율 인증 LED 기기 및<br />스마트 조명 제조 전문</p>
              </div>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '플로림 소개', path: '/company/intro' }}
          next={{ label: '다음 페이지', title: '연혁', path: '/company/history' }}
        />
      </div>
    </div>
  );
};

export default CompanyCert;