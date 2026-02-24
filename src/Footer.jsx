import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 py-16 border-t-4 border-[#1eb4c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-slate-200 pb-12">
          <div className="md:col-span-1">
            <div className="text-4xl font-bold tracking-tight mb-2">
              <span className="text-[#1eb4c8]">Flo</span>
              <span className="text-[#4a5560]">Lim</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mb-6">
              The beginning of smart business
            </p>
            <ul className="space-y-2 text-[13px] text-slate-500 mb-6 break-keep">
              <li><span className="font-semibold text-slate-700">주소:</span> 충남 천안시 서북구 2공단4로 40-11 천안G1비즈캠퍼스 1223호 주식회사 플로림</li>
              <li><span className="font-semibold text-slate-700">전화:</span> 1660-0687</li>
              {/* 🚀 info -> sales 로 변경 완료 */}
              <li><span className="font-semibold text-slate-700">메일:</span> sales@flolim.com</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-slate-800 font-bold mb-6 text-sm border-l-2 border-[#1eb4c8] pl-2">가로등 제어 시스템</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/streetlight-intro" className="hover:text-[#1eb4c8] transition-colors">가로등 제어 시스템</Link></li>
              <li><Link to="/lora" className="hover:text-[#1eb4c8] transition-colors">LoRa-Mesh 솔루션</Link></li>
              <li><Link to="/nbiot" className="hover:text-[#1eb4c8] transition-colors">NB-IoT 솔루션</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-slate-800 font-bold mb-6 text-sm border-l-2 border-[#1eb4c8] pl-2">스마트 LED 전등 제어 시스템</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/led-intro" className="hover:text-[#1eb4c8] transition-colors">스마트 LED 전등 제어 시스템</Link></li>
              <li><Link to="/esco" className="hover:text-[#1eb4c8] transition-colors">켑코이에스 연계 사업</Link></li>
              <li><Link to="/led-solution" className="hover:text-[#1eb4c8] transition-colors">스마트 LED 제어 솔루션</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-slate-800 font-bold mb-6 text-sm border-l-2 border-[#1eb4c8] pl-2">통합 관제 플랫폼</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li><Link to="/platform" className="hover:text-[#1eb4c8] transition-colors">통합 관제 플랫폼</Link></li>
              <li><Link to="/dashboard" className="hover:text-[#1eb4c8] transition-colors">모니터링 대시보드</Link></li>
            </ul>
            <h4 className="text-slate-800 font-bold mb-4 text-sm border-l-2 border-[#1eb4c8] pl-2">고객지원</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/archive" className="hover:text-[#1eb4c8] transition-colors">자료실</Link></li>
              <li><Link to="/contact" className="hover:text-[#1eb4c8] transition-colors">온라인 문의</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-sm text-slate-400 text-center flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © {new Date().getFullYear()} FloLim Co., Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-slate-600 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-slate-600 transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;