import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-white border-b border-slate-200">
      
      {/* 🎬 배경 비디오 삽입 영역 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/hero-bg3.mp4" type="video/mp4" />
      </video>

      {/* 영상이 밝을 경우 텍스트 가독성을 위한 부드러운 반투명 화이트 막(Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/90 z-0 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <div className="inline-block border-2 border-[#1eb4c8] bg-white/80 backdrop-blur-sm text-[#1eb4c8] px-5 py-2 mb-8 text-sm font-extrabold tracking-widest uppercase shadow-sm">
          Smart Lighting Infrastructure
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-tight mb-8 break-keep tracking-tight drop-shadow-sm">
          안전은 <span className="text-[#1eb4c8]">더 밝게,</span> <br className="hidden sm:block" />
          에너지는 <span className="text-[#1eb4c8]">더 가볍게.</span>
        </h1>
        
        {/* 🚀 수정됨: max-w-2xl을 max-w-4xl로 넓혀서 긴 문장이 밑으로 떨어지지 않게 고정했습니다 */}
        <p className="text-[17px] md:text-lg font-medium text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed break-keep">
          밤거리의 가로등부터 실내의 스마트 LED까지, <br className="hidden md:block" />
          플로림은 꼭 필요한 곳에만 똑똑하게 빛을 채웁니다. <br className="hidden md:block" />
          발전된 통신 기술로 낭비는 줄이고 도시의 가치를 높이는 지능형 관제 솔루션을 만나보세요.
        </p>
        
        {/* 3분할 CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap items-center">
          <Link 
            to="/streetlight-intro" 
            className="w-full sm:w-auto px-8 py-4 bg-[#1eb4c8] hover:bg-[#189aa9] text-white font-bold text-[16px] md:text-lg rounded-none shadow-md transition-all duration-300 text-center"
          >
            가로등 제어 시스템
          </Link>
          <Link 
            to="/led-intro" 
            className="w-full sm:w-auto px-8 py-4 bg-[#1eb4c8] hover:bg-[#189aa9] text-white font-bold text-[16px] md:text-lg rounded-none shadow-md transition-all duration-300 text-center"
          >
            스마트 LED 제어 시스템
          </Link>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300 text-slate-600 hover:border-[#1eb4c8] hover:text-[#1eb4c8] hover:bg-white font-bold text-[16px] md:text-lg rounded-none transition-all duration-300 text-center shadow-sm"
          >
            기술 문의하기
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;