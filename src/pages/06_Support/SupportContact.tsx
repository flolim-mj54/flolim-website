import React, { useState } from 'react';

const SupportContact = () => {
  // 폼 제출 상태 관리 (UI 인터랙션용)
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 서버 전송 로직이 들어갈 자리입니다.
    // 현재는 전송 완료 메시지를 띄우는 UI 시뮬레이션입니다.
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // 5초 후 메시지 숨김
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20 relative overflow-hidden">
      {/* 배경 그래픽 장식 */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100 rounded-bl-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-100 rounded-tr-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* 페이지 타이틀 (브로슈어 카피 반영) */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold tracking-widest mb-3 uppercase text-sm">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            세상을 밝히는 지능형 연결,<br />플로림과 함께하세요.
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            스마트 IoT 제어 시스템 도입 및 ESCO 효율화 사업과 관련된<br/>
            모든 문의를 남겨주시면, 담당자가 신속하고 친절하게 답변해 드립니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* 1. 좌측: Contact Information 영역 */}
          <div className="lg:w-2/5 bg-blue-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPjwvc3ZnPg==')] opacity-30 z-0"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">도입 문의</h2>
              <p className="text-blue-200 mb-10 text-sm leading-relaxed">
                현장의 환경과 예산에 맞춘 최적의 솔루션을 제안해 드립니다. 지금 바로 문의하세요.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-xl shrink-0 border border-blue-700 shadow-inner">📍</div>
                  <div>
                    <h3 className="text-sm text-blue-300 font-bold mb-1">본사 주소</h3>
                    <p className="text-base leading-relaxed">충남 천안시 서북구 2공단4로 40-11<br/>천안G1비즈캠퍼스 1223호 주식회사 플로림</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-xl shrink-0 border border-blue-700 shadow-inner">📞</div>
                  <div>
                    <h3 className="text-sm text-blue-300 font-bold mb-1">대표 전화</h3>
                    <p className="text-2xl font-black tracking-wide">1660-0687</p>
                    <p className="text-xs text-blue-300 mt-1">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-xl shrink-0 border border-blue-700 shadow-inner">✉️</div>
                  <div>
                    <h3 className="text-sm text-blue-300 font-bold mb-1">이메일 문의</h3>
                    <p className="text-lg">sales@flolim.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-blue-800">
              <h3 className="text-xl font-bold text-white mb-2">주식회사 플로림</h3>
              <p className="text-sm text-blue-300">The beginning of smart business</p>
            </div>
          </div>

          {/* 2. 우측: 이메일 문의 폼 (Form) 영역 */}
          <div className="lg:w-3/5 p-10 md:p-12 relative">
            {isSubmitted ? (
              // 제출 완료 메시지
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm">✓</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">문의가 성공적으로 접수되었습니다.</h3>
                <p className="text-gray-600">내용을 확인한 후, 남겨주신 연락처로 신속히 회신드리겠습니다.<br/>플로림에 관심 가져주셔서 감사합니다.</p>
              </div>
            ) : null}

            <h2 className="text-2xl font-bold text-gray-800 mb-8">온라인 문의 작성</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 회사명 */}
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">회사/기관명 <span className="text-red-500">*</span></label>
                  <input type="text" id="company" required placeholder="예: 주식회사 플로림" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
                {/* 담당자명 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">담당자 성함 <span className="text-red-500">*</span></label>
                  <input type="text" id="name" required placeholder="예: 홍길동" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 연락처 */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                  <input type="tel" id="phone" required placeholder="예: 010-1234-5678" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
                {/* 이메일 */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">이메일 <span className="text-red-500">*</span></label>
                  <input type="email" id="email" required placeholder="예: email@domain.com" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
              </div>

              {/* 문의 분야 카테고리 */}
              <div>
                <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-2">문의 분야 <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select id="category" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer">
                    <option value="" disabled selected>문의하실 분야를 선택해 주세요</option>
                    <option value="city">스마트 시티 (가로등/보안등) 도입</option>
                    <option value="building">스마트 빌딩 (실내 LED) 도입</option>
                    <option value="esco">켑코이에스(ESCO) 0원 구축 연계 사업</option>
                    <option value="platform">통합 관제 플랫폼 및 ESG 리포트</option>
                    <option value="other">기타 제휴 및 문의</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    ▼
                  </div>
                </div>
              </div>

              {/* 문의 내용 */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">문의 내용 <span className="text-red-500">*</span></label>
                <textarea id="message" required rows={5} placeholder="도입을 원하시는 현장의 규모, 현재 조명 수량, 주요 요구사항 등을 자유롭게 적어주시면 더욱 정확한 상담이 가능합니다." className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white resize-none"></textarea>
              </div>

              {/* 개인정보 동의 */}
              <div className="flex items-start gap-3">
                <input type="checkbox" id="privacy" required className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                  (필수) 문의 응대를 위해 입력하신 개인정보(이름, 연락처, 이메일)를 수집 및 이용하는 것에 동의합니다.
                </label>
              </div>

              {/* 전송 버튼 */}
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                문의 접수하기
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportContact;
