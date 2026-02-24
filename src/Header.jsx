import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 🚀 전체 메뉴 구조 및 라우터 주소 완벽 동기화
  const menuItems = [
    {
      title: "회사소개",
      path: "/greeting",
      subItems: [
        { name: "CEO 인사말", path: "/greeting" },
        { name: "연혁", path: "/history" },
        { name: "오시는 길", path: "/location" },
      ],
    },
    {
      title: "가로등 제어 시스템",
      path: "/streetlight-intro",
      subItems: [
        { name: "시스템 개요", path: "/streetlight-intro" },
        { name: "LoRa-Mesh 솔루션", path: "/lora" },
        { name: "NB-IoT 솔루션", path: "/nbiot" },
      ],
    },
    {
      title: "스마트 LED 전등 제어 시스템",
      path: "/led-intro",
      subItems: [
        { name: "시스템 개요", path: "/led-intro" },
        { name: "ESCO 연계 사업", path: "/esco" },
        { name: "스마트 LED 솔루션", path: "/led-solution" },
      ],
    },
    {
      title: "통합 관제 플랫폼",
      path: "/platform",
      subItems: [
        { name: "플랫폼 소개", path: "/platform" },
        { name: "대시보드", path: "/dashboard" },
      ],
    },
    {
      title: "고객지원",
      path: "/archive",
      subItems: [
        { name: "자료실", path: "/archive" },
        { name: "문의하기", path: "/contact" },
      ],
    },
  ];

  // 현재 경로가 해당 메뉴 그룹에 속해 있는지 확인하는 함수 (활성화 효과용)
  const isActive = (path, subItems) => {
    if (location.pathname === path) return true;
    return subItems?.some((item) => location.pathname === item.path);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 로고 영역 */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-2xl font-black text-[#1eb4c8] tracking-tighter">FLOLIM</span>
            </Link>
          </div>

          {/* PC 데스크탑 메뉴 영역 */}
          <nav className="hidden lg:flex h-full">
            <ul className="flex space-x-8 h-full">
              {menuItems.map((menu, index) => (
                <li key={index} className="group relative h-full flex items-center">
                  <Link
                    to={menu.path}
                    className={`text-[15px] font-bold tracking-tight transition-colors duration-200 ${
                      isActive(menu.path, menu.subItems)
                        ? "text-[#1eb4c8]"
                        : "text-slate-700 hover:text-[#1eb4c8]"
                    }`}
                  >
                    {menu.title}
                  </Link>

                  {/* 드롭다운 하위 메뉴 */}
                  {menu.subItems && (
                    <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-48 bg-white border border-slate-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-md overflow-hidden">
                      {/* 상단 포인트 라인 */}
                      <div className="w-full h-1 bg-[#1eb4c8]"></div>
                      <ul className="flex flex-col py-2">
                        {menu.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              className={`block px-5 py-3 text-[14px] font-medium transition-colors ${
                                location.pathname === subItem.path
                                  ? "bg-cyan-50 text-[#1eb4c8]"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-[#1eb4c8]"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-[#1eb4c8] focus:outline-none p-2"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 슬라이드 메뉴 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="flex flex-col divide-y divide-slate-100 px-4 pt-2 pb-6">
            {menuItems.map((menu, index) => (
              <li key={index} className="py-2">
                <div className="block px-2 py-3 text-[16px] font-bold text-[#1eb4c8]">
                  {menu.title}
                </div>
                {menu.subItems && (
                  <ul className="flex flex-col pl-4 mt-1 space-y-1">
                    {menu.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.path}
                          onClick={() => setIsMobileMenuOpen(false)} // 클릭 시 메뉴 닫힘
                          className={`block px-2 py-2.5 text-[14px] font-medium rounded-md ${
                            location.pathname === subItem.path
                              ? "bg-cyan-50 text-[#1eb4c8]"
                              : "text-slate-600 hover:bg-slate-50 hover:text-[#1eb4c8]"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;