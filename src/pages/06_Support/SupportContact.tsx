import React, { useState } from 'react';
import BottomNav from '../../components/BottomNav';

const SupportContact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); 
  };

  return (
    <div className="pb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10 pt-20">
        <div className="text-center mb-16">
          <p className="text-flolim font-bold tracking-widest mb-3 uppercase text-sm">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            세상을 밝히는 지능형 연결,<br />
            <span className="text-flolim">플로림</span>과 함께하세요.
          </h1>
          <div className="w-24 h-1 bg-flolim mx-auto mb-6 shadow-[0_0_15px_rgba(24,169,198,0.5)]"></div>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            스마트 IoT 제어 시스템 도입 및 ESCO 효율화 사업과 관련된<br/>
            모든 문의를 남겨주시면, 전문가가 신속하고 정확하게 답변해 드립니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-lg hover:border-flolim/50 transition-all group h-full">
              <h2 className="text-2xl font-bold text-white mb-8">무엇을 도와드릴까요?</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim shrink-0 border border-slate-700 group-hover:border-flolim/50 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-slate-400 font-bold mb-1">본사 주소</h3>
                    <p className="text-sm text-white leading-relaxed font-light">충남 천안시 서북구 2공단4로 40-11<br/>천안G1비즈캠퍼스 1223호</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim shrink-0 border border-slate-700 group-hover:border-flolim/50 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-slate-400 font-bold mb-1">대표 전화</h3>
                    <p className="text-2xl font-black text-white tracking-wide">1660-0687</p>
                    <p className="text-xs text-slate-500 mt-1 font-light">평일 09:00 - 18:00 (휴무일 제외)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim shrink-0 border border-slate-700 group-hover:border-flolim/50 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-slate-400 font-bold mb-1">이메일 문의</h3>
                    <a href="mailto:sales@flolim.com" className="text-lg text-white font-medium hover:text-flolim transition-colors">sales@flolim.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700 relative">
            {isSubmitted && (
              <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 rounded-3xl border border-flolim/50 animate-fade-in">
                <div className="w-20 h-20 bg-flolim/10 text-flolim border border-flolim/50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(24,169,198,0.3)]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">문의가 성공적으로 접수되었습니다.</h3>
                <p className="text-slate-400 font-light leading-relaxed">내용을 확인한 후, 남겨주신 연락처로 신속히 회신드리겠습니다.<br/>플로림에 관심 가져주셔서 감사합니다.</p>
              </div>
            )}

            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              프로젝트 문의 양식
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">회사/기관명 <span className="text-flolim">*</span></label>
                  <input type="text" required placeholder="예: 한국전력공사" className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-flolim/50 focus:border-flolim outline-none transition-all placeholder-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">담당자 성함 <span className="text-flolim">*</span></label>
                  <input type="text" required placeholder="예: 홍길동" className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-flolim/50 focus:border-flolim outline-none transition-all placeholder-slate-600" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">연락처 <span className="text-flolim">*</span></label>
                  <input type="tel" required placeholder="예: 010-1234-5678" className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-flolim/50 focus:border-flolim outline-none transition-all placeholder-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">이메일 주소 <span className="text-flolim">*</span></label>
                  <input type="email" required placeholder="예: admin@flolim.com" className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-flolim/50 focus:border-flolim outline-none transition-all placeholder-slate-600" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">관심 솔루션 분야 <span className="text-flolim">*</span></label>
                <div className="relative">
                  <select required className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-flolim/50 focus:border-flolim outline-none transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-slate-500">문의하실 분야를 선택해 주세요</option>
                    <option value="city">스마트 시티 (가로등/보안등) 제어</option>
                    <option value="building">스마트 빌딩 (실내 조명) 제어</option>
                    <option value="esco">KEPCO 연계 초기비용 0원 ESCO 사업</option>
                    <option value="platform">통합 관제 플랫폼 및 ESG 리포트</option>
                    <option value="other">기타 솔루션 도입 및 제휴 문의</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">문의 상세 내용 <span className="text-slate-500 font-normal ml-1">(선택)</span></label>
                <textarea rows={5} placeholder="현장의 환경, 기존 조명 수량, 주요 요구사항 등을 기재해 주시면 더욱 정확한 맞춤 상담이 가능합니다." className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-flolim/50 focus:border-flolim outline-none transition-all resize-none placeholder-slate-600"></textarea>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" id="privacy" required className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900 text-flolim focus:ring-flolim/50 cursor-pointer" />
                <label htmlFor="privacy" className="text-xs text-slate-400 cursor-pointer leading-relaxed">
                  (필수) 개인정보 수집 및 이용 동의. 문의 응대를 위해 입력하신 개인정보를 수집하며, 목적 달성 후 안전하게 파기합니다.
                </label>
              </div>

              <button type="submit" className="w-full bg-flolim hover:bg-cyan-400 text-slate-900 font-black text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(24,169,198,0.3)] transition-all transform active:scale-[0.98] flex justify-center items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                문의 접수하기
              </button>
            </form>
          </div>
        </div>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '구축 사례', path: '/support/references' }}
        />
      </div>
    </div>
  );
};

export default SupportContact;