import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-white border-b border-slate-200">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <div className="inline-block border-2 border-[#1eb4c8] bg-cyan-50 text-[#1eb4c8] px-5 py-2 mb-8 text-sm font-extrabold tracking-widest uppercase">
          Smart Lighting Infrastructure
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-tight mb-8 break-keep tracking-tight">
          빛을 넘어 공간을 제어하는 <br />
          <span className="text-[#1eb4c8]">지능형 통합 관제 시스템</span>
        </h1>
        <p className="text-lg font-medium text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed break-keep">
          LoRa-Mesh 가로등부터 Matter 기반 스마트 LED까지. <br />
          플로림의 기술력으로 도시의 밤을 가장 밝고 효율적으로 혁신합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button className="px-10 py-4 bg-[#1eb4c8] hover:bg-[#189aa9] text-white font-bold text-lg rounded-none shadow-sm transition-all duration-300">
            시스템 개요 보기
          </button>
          <button className="px-10 py-4 bg-transparent border-2 border-slate-300 text-slate-500 hover:border-[#1eb4c8] hover:text-[#1eb4c8] font-bold text-lg rounded-none transition-all duration-300">
            기술 문의하기
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
