import React from "react";
import { Link } from "react-router-dom";

const BusinessAreas = () => {
  const areas = [
    {
      title: "LoRa-Mesh 가로등 제어",
      engTitle: "LORA-MESH STREET LIGHTING",
      description:
        "자체 무선 통신망(LoRa)을 구축하여 별도의 매월 통신비 부담 없이, 수많은 가로등을 안정적으로 통합 제어하는 솔루션입니다.",
      features: [
        "통신비 평생 무료 (자가망 구축)",
        "그물망(Mesh) 구조의 통신 안정성",
        "잔고장 없는 고신뢰성 무선 단말기",
      ],
      path: "/lora",
    },
    {
      title: "NB-IoT 스마트 가로등 제어",
      engTitle: "NB-IOT STREET LIGHTING",
      description:
        "통신사 상용망을 활용하여 별도의 추가 장비 없이, 광역 단위의 넓은 지역 가로등을 개별적으로 정밀하게 원격 제어합니다.",
      features: [
        "추가 중계기(게이트웨이) 설치 불필요",
        "통신 사각지대 없는 전국망 활용",
        "초기 인프라 구축 비용 대폭 절감",
      ],
      path: "/nbiot",
    },
    {
      title: "스마트 LED 전등 제어",
      engTitle: "SMART LED CONTROL",
      description:
        "국제 표준인 Matter 프로토콜을 적용하여 어떤 기기와도 유연하게 연결되며, 에너지 효율화 사업과 연계하여 최적의 절감 효과를 제공합니다.",
      features: [
        "모든 기기와 연결되는 Matter 표준",
        "켑코이에스(ESCO) 에너지 효율화 연계",
        "환경에 맞춘 자체 제작 맞춤형 컨트롤러",
      ],
      path: "/led-intro",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-slate-200 pb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
              BUSINESS AREA
            </h2>
            <p className="text-[#1eb4c8] font-bold mt-2">
              플로림 핵심 사업 분야
            </p>
          </div>
          <p className="text-slate-500 text-sm font-medium mt-4 md:mt-0 max-w-md md:text-right break-keep">
            다양한 통신 환경과 현장에 맞춰, 가장 효율적인 맞춤형 조명 제어 솔루션을 제공합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-l border-slate-200">
          {areas.map((area, index) => (
            <Link
              key={index}
              to={area.path}
              className="block group border-r border-t border-slate-200 p-10 hover:bg-slate-50 transition-colors duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#1eb4c8] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <h4 className="text-[#1eb4c8] text-xs font-bold tracking-widest mb-2">
                {area.engTitle}
              </h4>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-black transition-colors break-keep">
                {area.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 h-20 break-keep">
                {area.description}
              </p>
              <ul className="space-y-3 mb-8">
                {area.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center text-sm font-medium text-slate-600 break-keep"
                  >
                    <span className="w-1.5 h-1.5 bg-[#1eb4c8] mr-3 rounded-none flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="absolute bottom-6 right-8 text-slate-300 group-hover:text-[#1eb4c8] transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas;