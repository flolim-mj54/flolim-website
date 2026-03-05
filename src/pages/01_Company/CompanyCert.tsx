import { Link } from 'react-router-dom';

const CompanyCert = () => {
  return (
    <div className="bg-white min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-24 mt-10">
          <p className="text-flolim font-bold tracking-widest mb-4 uppercase text-sm">Certificates & Partners</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">인증 및 파트너십</h1>
          <div className="w-24 h-1 bg-flolim mx-auto mb-8"></div>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            플로림은 공신력 있는 국가 기관의 인증을 통해<br />
            <strong className="text-slate-800 font-bold">최고 수준의 기술력과 네트워크 안전성</strong>을 증명합니다.
          </p>
        </div>

        {/* 1. 획득 완료 인증서 */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-2xl font-bold text-slate-900">공식 인증 및 성적서</h2>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">획득 완료</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center hover:shadow-md hover:border-flolim/30 transition-all group">
              <div className="w-full aspect-[3/4] bg-slate-50 rounded-2xl mb-6 flex items-center justify-center border border-slate-100 overflow-hidden relative">
                <img src="/images/cert-kilt.jpg" alt="KILT 성적서" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">키엘(KILT) 시험성적서</h3>
              <p className="text-xs text-slate-500 font-light">스마트 LED 조명 제어 시스템</p>
            </div>
            {/* ... (여성기업, 중소기업, 창업기업 동일하게 변경 적용) ... */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center hover:shadow-md hover:border-flolim/30 transition-all group">
              <div className="w-full aspect-[3/4] bg-slate-50 rounded-2xl mb-6 flex items-center justify-center border border-slate-100 overflow-hidden relative">
                <img src="/images/cert-women.jpg" alt="여성기업 확인서" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">여성기업확인서</h3>
              <p className="text-xs text-slate-500 font-light">중소벤처기업청 인증</p>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center hover:shadow-md hover:border-flolim/30 transition-all group">
              <div className="w-full aspect-[3/4] bg-slate-50 rounded-2xl mb-6 flex items-center justify-center border border-slate-100 overflow-hidden relative">
                <img src="/images/cert-sme.jpg" alt="중소기업 확인서" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">중소기업확인서</h3>
              <p className="text-xs text-slate-500 font-light">소기업(소상공인) 등록</p>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center hover:shadow-md hover:border-flolim/30 transition-all group">
              <div className="w-full aspect-[3/4] bg-slate-50 rounded-2xl mb-6 flex items-center justify-center border border-slate-100 overflow-hidden relative">
                <img src="/images/cert-startup.jpg" alt="창업기업 확인서" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">창업기업확인서</h3>
              <p className="text-xs text-slate-500 font-light">공공기관 우선 구매 대상</p>
            </div>
          </div>
        </section>

        {/* 2. 진행 중인 등록 현황 & 보안 인증 */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-2xl font-bold text-slate-900">진행 중인 심사 및 등록 현황</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 좌측: 리스트형 인증 현황 (백색 카드로 통일) */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <div className="space-y-4">
                
                {/* 내부 항목을 포인트 배경(slate-50)으로 전환 */}
                <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:border-flolim/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 p-1 overflow-hidden shrink-0 shadow-sm">
                      <img src="/images/logo-highefficiency.jpg" alt="고효율기자재 로고" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">고효율기자재 인증</h4>
                      <p className="text-xs text-slate-500 mt-1">에너지 효율 공식 마크</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-flolim bg-white px-4 py-2 rounded-full border border-flolim/20 shadow-sm whitespace-nowrap">4월 획득 목표</span>
                </div>
                
                <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:border-flolim/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 p-1 overflow-hidden shrink-0 shadow-sm">
                      <img src="/images/logo-g2b.jpg" alt="조달청 나라장터 로고" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">조달청 나라장터 등록</h4>
                      <p className="text-xs text-slate-500 mt-1">공공기관 우선 공급망 구축</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-flolim bg-white px-4 py-2 rounded-full border border-flolim/20 shadow-sm whitespace-nowrap">5월 등록 목표</span>
                </div>

                <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:border-flolim/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 p-1 overflow-hidden shrink-0 shadow-sm">
                      <img src="/images/logo-kepco.jpg" alt="켑코이에스 로고" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">켑코이에스(ESCO)</h4>
                      <p className="text-xs text-slate-500 mt-1">한국전력공사 파트너사 등록</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-flolim bg-white px-4 py-2 rounded-full border border-flolim/20 shadow-sm whitespace-nowrap">3월 완료 목표</span>
                </div>

              </div>
            </div>

            {/* 우측: KISA (프리미엄 패널 유지) */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-center shadow-xl border border-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-flolim rounded-full blur-[80px] opacity-20 -z-0 translate-x-10 -translate-y-10"></div>
              <div className="relative z-10">
                <div className="inline-block bg-slate-800 text-flolim border border-slate-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
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
                    <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    한국인터넷진흥원(KISA) 주관 국가 공인 제도
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    기기 인증, 암호화, 데이터 보호 등 엄격한 기준 통과
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    공공기관 및 주요 기업 스마트망 도입 시 필수
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 3. 파트너사 소개 (프리미엄 패널 유지) */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">핵심 파트너십</h2>
            <p className="text-slate-500 font-light">
              각 분야 최고의 전문 기업이 만나 <strong className="text-flolim font-bold">가장 완벽한 스마트 에너지 솔루션</strong>을 완성합니다.
            </p>
          </div>
          
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-flolim/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
              <div className="flex-1 flex flex-col items-center text-center w-full">
                <div className="w-48 h-48 bg-white rounded-3xl p-6 flex items-center justify-center shadow-lg border-4 border-slate-800 mb-6 transform hover:-translate-y-2 transition-transform duration-300">
                  <img src="/images/logo-flolim.jpg" alt="플로림 로고" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">주식회사 플로림</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">지능형 통합 제어 플랫폼 및<br />IoT 스마트 하드웨어 솔루션</p>
              </div>

              <div className="flex flex-col items-center justify-center shrink-0 px-4">
                <span className="text-flolim font-black tracking-widest text-xs mb-4 uppercase bg-flolim/10 px-5 py-2 rounded-full border border-flolim/30">
                  Cooperation & Synergy
                </span>
                <div className="hidden md:flex items-center gap-3 text-slate-500">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-flolim/60"></div>
                  <svg className="w-8 h-8 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                  <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-flolim/60"></div>
                </div>
                <div className="flex md:hidden text-flolim my-4">
                  <svg className="w-8 h-8 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center text-center w-full">
                <div className="w-48 h-48 bg-white rounded-3xl p-6 flex items-center justify-center shadow-lg border-4 border-slate-800 mb-6 transform hover:-translate-y-2 transition-transform duration-300">
                  <img src="/images/logo-tuvan.jpg" alt="투반테크 로고" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">(주)투반테크</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">초고효율 인증 LED 기기 및<br />스마트 조명 제조 전문</p>
              </div>
            </div>
          </div>
        </section>

        {/* 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <Link to="/company/intro" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">← 이전 페이지</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">플로림 소개</span>
          </Link>
          <Link to="/company/history" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">다음 페이지 →</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">연혁</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompanyCert;