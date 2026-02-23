import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 고객지원 〉{" "}
            <span className="text-[#1eb4c8] font-bold">온라인 문의</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            온라인 문의
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">고객지원</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all"
                >
                  자료실
                </a>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold"
                >
                  온라인 문의{" "}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6 border border-slate-300 bg-slate-50 p-5">
            <h4 className="text-slate-800 font-bold mb-4 border-b border-slate-200 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-[13px] text-slate-600 break-keep">
              <p>
                <span className="font-bold text-slate-800">대표 전화:</span>
                <br />
                <span className="text-[#1eb4c8] font-bold text-lg">
                  1660-0687
                </span>
              </p>
              <p>
                <span className="font-bold text-slate-800">이메일:</span>
                <br />
                info@flolim.com
              </p>
              <p>
                <span className="font-bold text-slate-800">본사 주소:</span>
                <br />
                충남 천안시 서북구 2공단4로 40-11 천안G1비즈캠퍼스 1223호
                주식회사 플로림
              </p>
            </div>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            온라인 문의{" "}
            <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">
              Contact Us
            </span>
          </h2>
          <p className="text-slate-600 mb-8 break-keep">
            솔루션 도입, 시스템 구축 비용, ESCO 연계 사업 등 플로림의 서비스에
            대해 궁금하신 점을 남겨주시면 담당자가 신속하게 답변해 드리겠습니다.
          </p>

          <form className="bg-slate-50 border border-slate-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  회사명/기관명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8]"
                  placeholder="예) OO시청, OO건설"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  담당자 성함 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8]"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8]"
                  placeholder="010-0000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8]"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                관심 분야 (선택)
              </label>
              <select className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8] bg-white text-slate-600">
                <option>선택해주세요</option>
                <option>가로등 제어 시스템 (LoRa, NB-IoT)</option>
                <option>스마트 LED 제어 시스템</option>
                <option>켑코이에스(ESCO) 연계 사업 문의</option>
                <option>기타 시스템 구축 및 제휴 문의</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                문의 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="5"
                className="w-full border border-slate-300 px-4 py-2 focus:outline-none focus:border-[#1eb4c8] focus:ring-1 focus:ring-[#1eb4c8] resize-none"
                placeholder="문의하실 내용을 상세히 적어주세요."
              ></textarea>
            </div>

            <div className="mb-8 p-4 bg-white border border-slate-200 text-sm text-slate-500 h-24 overflow-y-auto">
              [개인정보 수집 및 이용 동의]
              <br />
              1. 수집 목적: 문의 내역 확인 및 답변 처리
              <br />
              2. 수집 항목: 이름, 연락처, 이메일, 소속
              <br />
              3. 보유 및 이용 기간: 문의 처리 완료 후 6개월간 보관 후 파기
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-bold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 text-[#1eb4c8] focus:ring-[#1eb4c8] border-slate-300"
                />
                개인정보 수집 및 이용에 동의합니다. (필수)
              </label>
              <button
                type="button"
                className="bg-[#1eb4c8] hover:bg-[#189aa9] text-white font-bold px-10 py-3 transition-colors"
              >
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
