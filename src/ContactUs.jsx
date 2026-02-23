import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("메일을 전송하는 중입니다. 잠시만 기다려주세요...");
    const formData = new FormData(event.target);
    formData.append("access_key", "39f6bc8c-1219-4d84-8115-c581f1802a01");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
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
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">고객지원</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200"><Link to="/archive" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">자료실</Link></li>
              <li className="border-b border-slate-200 last:border-0"><Link to="/contact" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">온라인 문의 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></Link></li>
            </ul>
          </div>
        </aside>
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            온라인 문의 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Contact Us</span>
          </h2>
          <p className="text-slate-600 mb-8 break-keep">
            솔루션 도입, 시스템 구축 비용, ESCO 연계 사업 등 플로림의 서비스에 대해 궁금하신 점을 남겨주시면 담당자가 신속하게 답변해 드리겠습니다.
          </p>
          <form onSubmit={onSubmit} className="bg-slate-50 border border-slate-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">회사명/기관명 <span className="text-red-500">*</span></label>
                <input type="text" name="company" required className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8]" placeholder="예) OO시청, OO건설" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">담당자 성함 <span className="text-red-500">*</span></label>
                <input type="text" name="name" required className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8]" placeholder="홍길동" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                <input type="text" name="phone" required className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8]" placeholder="010-0000-0000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">이메일 <span className="text-red-500">*</span></label>
                <input type="email" name="email" required className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8]" placeholder="example@email.com" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2">관심 분야 (선택)</label>
              <select name="interest" className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8] bg-white text-slate-600">
                <option value="선택 안함">선택해주세요</option>
                <option value="가로등 제어 시스템">가로등 제어 시스템 (LoRa, NB-IoT)</option>
                <option value="스마트 LED 제어 시스템">스마트 LED 제어 시스템</option>
                <option value="ESCO 연계 사업">켑코이에스(ESCO) 연계 사업 문의</option>
                <option value="기타 문의">기타 시스템 구축 및 제휴 문의</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-2">문의 내용 <span className="text-red-500">*</span></label>
              <textarea name="message" required rows="5" className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8] resize-none" placeholder="문의하실 내용을 상세히 적어주세요."></textarea>
            </div>
            <div className="mb-8 p-4 bg-white border border-slate-200 text-sm text-slate-500 h-24 overflow-y-auto">
              [개인정보 수집 및 이용 동의]<br/>1. 수집 목적: 문의 내역 확인 및 답변 처리<br/>2. 수집 항목: 이름, 연락처, 이메일, 소속<br/>3. 보유 및 이용 기간: 문의 처리 완료 후 6개월간 보관 후 파기
            </div>
            {result && (
              <div className={`mb-4 p-4 font-bold text-center ${result.includes("성공") ? "text-green-600 bg-green-50 border border-green-200" : "text-[#1eb4c8] bg-cyan-50 border border-cyan-200"}`}>
                {result}
              </div>
            )}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <label className="flex items-center text-sm font-bold text-slate-700 cursor-pointer">
                <input type="checkbox" required className="mr-2 w-4 h-4 text-[#1eb4c8] focus:ring-[#1eb4c8] border-slate-300" />
                개인정보 수집 및 이용에 동의합니다. (필수)
              </label>
              <button type="submit" className="bg-[#1eb4c8] hover:bg-[#189aa9] text-white font-bold px-10 py-3 transition-colors w-full md:w-auto">
                문의 접수하기
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
export default ContactUs;