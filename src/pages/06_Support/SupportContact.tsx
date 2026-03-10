import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const SupportContact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("도입 문의가 성공적으로 접수되었습니다. 담당자가 빠른 시일 내에 연락드리겠습니다.");
    // 추후 EmailJS 또는 백엔드 API 연동 로직 추가
  };

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="온라인 문의"
        title="도입 상담 및 문의"
        subtitle={
          <>
            스마트 조명 인프라 구축 및 ESCO 사업 도입과 관련하여 궁금하신 점을 남겨주시면,<br className="hidden md:block"/>
            <strong className="text-white font-bold">전문 컨설턴트가 현장에 맞는 최적의 솔루션을 제안</strong>해 드립니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        {/* 메인 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            
            {/* 좌측: 연락처 정보 */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-white mb-2">Direct Contact</h2>
              <p className="text-slate-400 font-light text-sm leading-relaxed mb-4">
                급한 문의나 빠른 상담이 필요하신 경우 아래 연락처로 직접 전화해 주시기 바랍니다.
              </p>

              <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-flolim mb-6 group-hover:bg-flolim/10 transition-colors relative z-10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">대표 번호</h3>
                <p className="text-2xl font-black text-flolim relative z-10">1660-0687</p>
                <p className="text-xs text-slate-500 mt-2 relative z-10">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
              </div>

              <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-flolim mb-6 group-hover:bg-flolim/10 transition-colors relative z-10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">이메일 문의</h3>
                <p className="text-lg font-bold text-white relative z-10">sales@flolim.com</p>
                <p className="text-xs text-slate-500 mt-2 relative z-10">제안서 및 관련 자료 첨부 시 이용해 주세요.</p>
              </div>
            </div>

            {/* 우측: 문의 폼 */}
            <div className="lg:w-2/3 bg-[#050b14] rounded-3xl border border-slate-700 p-8 md:p-10 shadow-inner">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">온라인 문의 양식</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-bold text-slate-300">기관/기업명 <span className="text-flolim">*</span></label>
                    <input type="text" id="company" required placeholder="예) 주식회사 플로림" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-slate-300">담당자 성함/직급 <span className="text-flolim">*</span></label>
                    <input type="text" id="name" required placeholder="예) 홍길동 과장" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact" className="block text-sm font-bold text-slate-300">연락처 <span className="text-flolim">*</span></label>
                    <input type="tel" id="contact" required placeholder="010-0000-0000" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-300">이메일 <span className="text-flolim">*</span></label>
                    <input type="email" id="email" required placeholder="example@company.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="block text-sm font-bold text-slate-300">문의 유형</label>
                  <div className="relative">
                    <select id="inquiryType" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 appearance-none focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors cursor-pointer">
                      <option value="esco">KEPCO 연계 ESCO (무상구축) 상담</option>
                      <option value="city">스마트 시티 (가로등/경관) 도입 문의</option>
                      <option value="building">스마트 빌딩 (실내조명) 도입 문의</option>
                      <option value="partnership">파트너십 및 대리점 제휴 문의</option>
                      <option value="other">기타 문의</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-300">상세 문의 내용 <span className="text-flolim">*</span></label>
                  <textarea id="message" required rows={5} placeholder="현재 현장 상황이나 도입을 원하시는 규모(수량), 궁금하신 점 등을 자유롭게 작성해 주세요." className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors resize-none"></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-flolim hover:bg-cyan-400 text-slate-900 font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(24,169,198,0.3)] transition-all duration-300 flex justify-center items-center gap-2">
                    문의 접수하기
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4 font-light">
                    * 접수된 정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '자료실', path: '/support/archive' }}
          next={{ label: '메인으로', title: '플로림 홈', path: '/' }}
        />
      </div>
    </div>
  );
};

export default SupportContact;