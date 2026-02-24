import React from "react";
import { Link } from "react-router-dom";

const StreetLightIntro = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      <div className="w-full bg-slate-50 py-12 border-b border-slate-200 border-t-4 border-t-[#1eb4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 mb-2 font-medium">
            홈 〉 <span className="text-[#1eb4c8] font-bold">가로등 제어 시스템</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">가로등 제어 시스템</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-slate-300">
            <div className="bg-[#1eb4c8] text-white py-4 px-5">
              <h2 className="text-lg font-bold tracking-tight">가로등 제어 시스템</h2>
            </div>
            <ul className="flex flex-col">
              <li className="border-b border-slate-200">
                <Link to="/streetlight-intro" className="flex items-center justify-between px-5 py-4 bg-cyan-50 text-[#1eb4c8] font-bold">
                  가로등 제어 시스템 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </li>
              {/* 🚀 사이드바 메뉴명 수정 완료 */}
              <li className="border-b border-slate-200">
                <Link to="/lora" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">
                  LoRa-Mesh 가로등 제어
                </Link>
              </li>
              <li className="border-b border-slate-200 last:border-0">
                <Link to="/nbiot" className="flex items-center justify-between px-5 py-4 text-slate-600 hover:text-[#1eb4c8] hover:bg-slate-50 transition-all">
                  NB-IoT 스마트 가로등 제어
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        
        <section className="flex-1 min-w-0">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8 pb-4 border-b-2 border-slate-200">
            가로등 제어 시스템 <span className="text-lg text-slate-400 font-normal tracking-widest uppercase ml-2">Overview</span>
          </h2>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Overview</h3>
            <p className="text-slate-700 leading-relaxed break-keep text-[15px] mb-8">
              {/* 🚀 강조 문구 적용 및 텍스트 교체 */}
              <strong className="text-lg text-slate-800 block mb-3">지능형 관제로 완성하는 스마트한 도시의 밤</strong>
              기존에 단순히 시간을 맞춰 켜고 끄던 방식을 넘어, 사물인터넷(IoT) 기술로 도시의 조명을 원격으로 통합 관리하는 지능형 관제 솔루션입니다. 
              <br/><br/>
              플로림(FLOLIM)의 가로등 제어 시스템은 현장의 지형, 규모, 예산 등 다양한 환경을 꼼꼼히 분석합니다. 이를 바탕으로 통신비 부담이 없는 <b>LoRa-Mesh(자가망)</b>부터, 전국 어디서나 끊김 없는 <b>NB-IoT(상용망)</b>까지 현장에 가장 최적화된 통신망을 설계합니다. 도심의 밤을 더 안전하게 밝히는 것은 물론, 획기적인 에너지 절감과 편리한 유지보수를 통해 스마트시티의 핵심 기반을 완성합니다.
            </p>

            {/* 🖼️ 메인 비주얼/3D 영상 삽입 영역 */}
            <div className="w-full aspect-video bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
              <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-bold tracking-wide">[ 스마트 가로등 제어 시스템 3D 소개 영상 또는 대표 이미지 삽입 영역 ]</span>
              <span className="text-sm mt-1">도심 전체의 조명이 지능적으로 제어되는 역동적인 시각 자료를 추천합니다.</span>
            </div>
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">Key Benefits</h3>
            {/* 🚀 수정된 Key Benefits 4가지 반영 */}
            <ul className="space-y-4 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">불필요한 낭비를 막는 에너지 및 예산 절감</b>
                  세밀한 밝기 조절(디밍) 기술과 함께 일출·일몰 시간, 날씨 등 주변 환경 데이터를 연동합니다. 상황에 맞춘 스마트한 조명 스케줄링으로 불필요한 전력 낭비를 최소화합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">민원 발생 전 해결하는 선제적 유지보수</b>
                  누전, 정전, 램프 고장, 통신 단절 등 현장에 이상이 발생하면 관리자에게 즉각적인 알림(팝업/SMS)을 발송합니다. 시민들의 불편 민원이 접수되기 전에 한발 앞서 신속하게 대처할 수 있습니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">현장에 맞춰 선택하는 유연한 통신망 구축</b>
                  설치 장소의 특성에 따라 최적의 방식을 선택할 수 있습니다. 매월 통신비가 발생하지 않는 경제적인 'LoRa 자가망'과 통신 사각지대 없이 촘촘하게 연결되는 'NB-IoT 전국망'을 필요에 따라 혼합하여 완벽한 인프라를 구축합니다.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1eb4c8] mr-3 font-bold text-lg mt-[-2px]">■</span>
                <div>
                  <b className="text-slate-800 block mb-1">언제 어디서나 제어하는 웹/모바일 플랫폼</b>
                  PC가 있는 관제 센터는 물론, 스마트폰과 태블릿 등 모바일 기기에서도 완벽하게 작동합니다. 직관적인 통합 대시보드를 제공하여 시공간의 제약 없이 언제 어디서나 편리하게 조명을 관리할 수 있습니다.
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-[#1eb4c8] border-b border-slate-300 pb-2 mb-6 inline-block pr-8">System Architecture</h3>
            {/* 🖼️ 다이어그램 삽입 영역 (System Architecture) */}
            <div className="w-full bg-slate-50 border-2 border-slate-200 border-dashed p-8 flex flex-col items-center justify-center min-h-[350px]">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-slate-500 font-bold tracking-widest block mb-2">[ 시스템 구성도(네트워크 토폴로지) 이미지 삽입 영역 ]</span>
              <span className="text-sm text-slate-400 text-center mb-6">일반 사용자도 데이터가 어떻게 이동하는지 시각적으로 쉽게 이해할 수 있는 다이어그램을 넣어주세요.</span>
              
              {/* 🚀 요청하신 텍스트 흐름도로 교체 완료 */}
              <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-slate-500 font-bold z-10 flex-wrap justify-center mt-4">
                <span className="bg-white px-4 py-2 border border-slate-300 rounded shadow-sm mb-2">통합 관제 플랫폼 (웹/모바일)</span>
                <span className="mb-2">↔</span>
                <span className="bg-cyan-50 text-[#1eb4c8] px-4 py-2 border border-cyan-200 rounded shadow-sm mb-2">무선 통신망 (LoRa/NB-IoT)</span>
                <span className="mb-2">↔</span>
                <span className="bg-white px-4 py-2 border border-slate-300 rounded shadow-sm mb-2">무선 제어 단말기 (스마트 가로등)</span>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default StreetLightIntro;