import React, { useState } from "react";

const ContactUs = () => {
  const [result, setResult] = useState("");

  // 🚀 메일 발송 기능 (디자인은 건드리지 않고 기능만 살렸습니다)
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("메일을 전송하는 중입니다. 잠시만 기다려주세요...");
    
    const formData = new FormData(event.target);
    
    // ▼ 선임연구원님의 moojeong54@flolim.com 진짜 Access Key를 꼭 넣어주세요! ▼
    formData.append("access_key", "39f6bc8c-1219-4d84-8115-c581f1802a01");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ 문의가 성공적으로 접수되었습니다! 담당자가 확인 후 연락드리겠습니다.");
        event.target.reset(); 
      } else {
        setResult("❌ 전송에 실패했습니다. 이메일(moojeong54@flolim.com)로 직접 문의해 주세요.");
      }
    } catch (error) {
      setResult("❌ 네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 고객지원 〉 <span className="text-[#1eb4c8] font-bold">온라인 문의</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">온라인 문의</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        
        {/* 🚀 선임연구원님이 지시하신 '자료실', '온라인 문의' 메뉴로 완벽 복구했습니다 */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">고객지원</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200"><a href="#" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">자료실</a></li>
              <li className="border-b border-slate-200 last:border-0"><a href="#" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">온라인 문의 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></a></li>
            </ul>
          </div>
        </aside>

        {/* 🚀 원래의 깔끔한 폼 디자인 뼈대 유지 + 기능 연결 */}
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-6 pb-4 border-b-2 border-slate-200">
            온라인 문의 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Contact Us</span>
          </h2>
          <p className="text-slate-600 mb-8">플로림에 궁금하신 점이나 제휴 관련 문의를 남겨주시면, 신속하게 답변해 드리겠습니다.</p>

          <form onSubmit={onSubmit} className="bg-white border border-slate-200 p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">이름 또는 회사명 <span className="text-red-500">*</span></label>
                <input type="text" name="name" required className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1eb4c8]" placeholder="홍길동 / 주식회사 플로림" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">회신받으실 이메일 <span className="text-red-500">*</span></label>
                <input type="email" name="email" required className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1eb4c8]" placeholder="example@email.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">연락처</label>
                <input type="tel" name="phone" className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1eb4c8]" placeholder="010-0000-0000" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">문의 내용 <span className="text-red-500">*</span></label>
                <textarea name="message" required rows="6" className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1eb4c8] resize-none" placeholder="문의하실 내용을 상세히 적어주세요."></textarea>
              </div>

              {/* 결과 출력 메시지창 */}
              {result && (
                <div className={`p-4 font-bold ${result.includes("성공") ? "text-green-600 bg-green-50 border border-green-200" : "text-[#1eb4c8] bg-cyan-50 border border-cyan-200"}`}>
                  {result}
                </div>
              )}

              <div className="pt-4 text-center">
                <button type="submit" className="bg-[#1eb4c8] hover:bg-[#199ba8] text-white font-bold py-4 px-12 transition-colors duration-200 shadow-md">
                  문의 접수하기
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;