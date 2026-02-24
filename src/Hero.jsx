import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-white border-b border-slate-200">
      
      {/* 🎬 AI로 생성한 드론 시점의 무선 제어 3D 루핑 영상 배경 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/hero-bg2.mp4" type="video/mp4" />
      </video>

      {/* 영상이 밝으므로 텍스트가 잘 보이도록 부드러운 반투명 화이트 막(Overlay)을 씌워줍니다 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/90 z-0 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <div className="inline-block border-2 border-[#1eb4c8] bg-white/80 backdrop-blur-sm text-[#1eb4c8] px-5 py-2 mb-8 text-sm font-extrabold tracking-widest uppercase shadow-sm">
          Smart Lighting Infrastructure
        </div>
        
        {/* 🚀 수정된 H1 (메인 카피): 가장 크고 두껍게, 핵심 키워드 강조 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-tight mb-8 break-keep tracking-tight drop-shadow-sm">
          빛을 제어하여 도시의 밤을 <br className="hidden sm:block" />
          <span className="text-[#1eb4c8]">더 스마트하게</span>
        </h1>
        
        {/* 🚀 수정된 P (서브 카피): 2~3줄 이내로 핵심 내용만 전달 */}
        <p className="text-[17px] md:text-lg font-medium text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed break-keep">
          플로림은 사물인터넷(IoT) 기술을 통해 최적의 조명 환경을 만듭니다. <br className="hidden md:block" />
          광범위한 가로등 관제부터 차세대 표준 기술이 적용된 스마트 LED까지, <br className="hidden md:block" />
          가장 진보된 통합 관제 시스템을 경험해 보세요.
        </p>
        
        {/* 기존의 완벽한 3분할 CTA 버튼 구조 유지 */}
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