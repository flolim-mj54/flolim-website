import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-white border-b border-slate-200">
      
      {/* 🎬 AI로 생성한 밝은 톤의 가로등 3D 영상 배경 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/hero-bg2.mp4" type="video/mp4" />
      </video>

      {/* 💡 영상이 밝으므로 텍스트가 잘 보이도록 부드러운 반투명 화이트 막(Overlay)을 씌워줍니다 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/90 z-0 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        {/* 뱃지도 밝은 톤에 맞게 배경을 하얗게 조절했습니다 */}
        <div className="inline-block border-2 border-[#1eb4c8] bg-white/80 backdrop-blur-sm text-[#1eb4c8] px-5 py-2 mb-8 text-sm font-extrabold tracking-widest uppercase shadow-sm">
          Smart Lighting Infrastructure
        </div>
        
        {/* 배경이 밝아졌으므로 메인 카피는 다시 짙은 남색(slate-800)으로 설정합니다 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-tight mb-8 break-keep tracking-tight drop-shadow-sm">
          빛을 넘어 공간을 제어하는 <br />
          <span className="text-[#1eb4c8]">지능형 통합 관제 시스템</span>
        </h1>
        <p className="text-lg font-medium text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed break-keep">
          LoRa-Mesh 가로등부터 Matter 기반 스마트 LED까지. <br />
          플로림의 기술력으로 도시의 밤을 가장 밝고 효율적으로 혁신합니다.
        </p>
        
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
          {/* 세 번째 버튼도 밝은 배경에서 잘 보이도록 화이트 배경을 살짝 추가했습니다 */}
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