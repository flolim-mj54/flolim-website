import React, { useState } from "react";

const Header = () => {
  const menuData = [
    { title: "회사소개", subMenu: ["인사말", "연혁", "오시는 길"] },
    {
      title: "가로등 제어 시스템",
      subMenu: [
        "가로등 제어 시스템",
        "LoRa-Mesh 가로등 제어 솔루션",
        "NB-IoT 스마트 가로등 제어 솔루션",
      ],
    },
    {
      title: "스마트 LED 전등 제어 시스템",
      subMenu: [
        "스마트 LED 전등 제어 시스템",
        "켑코이에스 연계 사업",
        "스마트 LED 전등 제어 솔루션",
      ],
    },
    {
      title: "통합 관제 플랫폼",
      subMenu: ["통합 관제 플랫폼", "모니터링 대시보드"],
    },
    { title: "고객지원", subMenu: ["자료실", "온라인 문의"] },
  ];
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="w-full border-b border-slate-200 bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex flex-col justify-center cursor-pointer">
            <div className="text-4xl font-bold tracking-tight">
              <span className="text-[#1eb4c8]">Flo</span>
              <span className="text-[#4a5560]">Lim</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-1">
              The beginning of smart business
            </span>
          </div>

          <nav className="hidden lg:flex space-x-10 h-full">
            {menuData.map((menu, index) => (
              <div
                key={index}
                className="h-full flex items-center relative group"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="flex flex-col items-center cursor-pointer px-2 py-2">
                  <span className="text-[16px] font-bold text-slate-800 group-hover:text-[#1eb4c8] transition-colors">
                    {menu.title}
                  </span>
                </div>
                {activeMenu === index && (
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 min-w-[260px] w-auto whitespace-nowrap bg-white border-t-4 border-[#1eb4c8] shadow-lg rounded-none">
                    {menu.subMenu.map((sub, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-6 py-3.5 text-[14px] font-medium text-slate-600 hover:bg-cyan-50 hover:text-[#1eb4c8] hover:font-bold border-b border-slate-100 last:border-0 transition-all"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
