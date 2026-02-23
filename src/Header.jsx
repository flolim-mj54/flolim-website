import React, { useState } from "react";
// 🚀 주소 이동을 담당하는 Link 컴포넌트를 가져옵니다.
import { Link } from "react-router-dom";

const Header = () => {
  // 🚀 각 메뉴 항목에 실제 이동할 주소(path)를 꼼꼼하게 매칭했습니다.
  const menuData = [
    { 
      title: "회사소개", 
      subMenu: [
        { name: "인사말", path: "/greeting" },
        { name: "연혁", path: "/history" },
        { name: "오시는 길", path: "/location" }
      ] 
    },
    {
      title: "가로등 제어 시스템",
      subMenu: [
        { name: "가로등 제어 시스템", path: "/streetlight-intro" },
        { name: "LoRa-Mesh 가로등 제어 솔루션", path: "/lora" },
        { name: "NB-IoT 스마트 가로등 제어 솔루션", path: "/nbiot" },
      ],
    },
    {
      title: "스마트 LED 전등 제어 시스템",
      subMenu: [
        { name: "스마트 LED 전등 제어 시스템", path: "/led-intro" },
        { name: "켑코이에스 연계 사업", path: "/esco" },
        { name: "스마트 LED 전등 제어 솔루션", path: "/led-solution" },
      ],
    },
    {
      title: "통합 관제 플랫폼",
      subMenu: [
        { name: "통합 관제 플랫폼", path: "/platform" },
        { name: "모니터링 대시보드", path: "/dashboard" },
      ],
    },
    { 
      title: "고객지원", 
      subMenu: [
        { name: "자료실", path: "/archive" },
        { name: "온라인 문의", path: "/contact" }
      ] 
    },
  ];

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="w-full border-b border-slate-200 bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* 🚀 로고를 클릭하면 메인 화면("/")으로 이동하게 만들었습니다. */}
          <Link to="/" className="flex-shrink-0 flex flex-col justify-center cursor-pointer hover:opacity-80 transition-opacity">
            <div className="text-4xl font-bold tracking-tight">
              <span className="text-[#1eb4c8]">Flo</span>
              <span className="text-[#4a5560]">Lim</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-1">
              The beginning of smart business
            </span>
          </Link>

          <nav className="hidden lg:flex space-x-10 h-full">
            {menuData.map((menu, index) => (
              <div
                key={index}
                className="h-full flex items-center relative group"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="flex flex-col items-center cursor-pointer px-2 py-2">
                  {/* 메인 메뉴 타이틀 (클릭 시 첫 번째 서브메뉴로 이동하도록 만들 수도 있지만, 일단은 Hover 용도로 둡니다) */}
                  <span className="text-[16px] font-bold text-slate-800 group-hover:text-[#1eb4c8] transition-colors">
                    {menu.title}
                  </span>
                </div>
                
                {activeMenu === index && (
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 min-w-[260px] w-auto whitespace-nowrap bg-white border-t-4 border-[#1eb4c8] shadow-lg rounded-none">
                    {menu.subMenu.map((sub, subIndex) => (
                      // 🚀 a 태그 대신 Link 태그를 사용하여 새로고침 없이 부드럽게 화면을 전환합니다.
                      <Link
                        key={subIndex}
                        to={sub.path}
                        className="block px-6 py-3.5 text-[14px] font-medium text-slate-600 hover:bg-cyan-50 hover:text-[#1eb4c8] hover:font-bold border-b border-slate-100 last:border-0 transition-all"
                        onClick={() => setActiveMenu(null)} // 클릭하면 열려있던 메뉴창을 닫아줍니다.
                      >
                        {sub.name}
                      </Link>
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