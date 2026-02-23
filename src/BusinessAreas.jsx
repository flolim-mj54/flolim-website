import React from "react";

const BusinessAreas = () => {
  const areas = [
    {
      title: "LoRa-Mesh 가로등 제어",
      engTitle: "LORA-MESH STREET LIGHTING",
      description:
        "자체 무선 통신망(LoRa)을 구축하여 별도의 통신비 부담 없이, 수많은 가로등을 안정적으로 통합 제어하는 솔루션입니다.",
      features: [
        "통신비 무료 (자가망 구축)",
        "Mesh 토폴로지 통신 안정성",
        "고신뢰성 무선 제어 단말기 적용",
      ],
    },
    {
      title: "NB-IoT 스마트 가로등 제어",
      engTitle: "NB-IOT STREET LIGHTING",
      description:
        "통신사 상용망을 활용하여 별도의 게이트웨이 없이, 광역 단위의 가로등을 개별적으로 정밀하게 원격 제어합니다.",
      features: [
        "게이트웨이 설치 불필요",
        "음영 지역 없는 전국망 통신",
        "초기 인프라 구축 비용 절감",
      ],
    },
    {
      title: "스마트 LED 전등 제어",
      engTitle: "SMART LED CONTROL",
      description:
        "국제 표준 Matter 프로토콜을 적용한 실내외 스마트 조명 제어로 켑코이에스 연계 사업 등 최적의 에너지 효율을 제공합니다.",
      features: [
        "국제 표준 Matter 프로토콜",
        "켑코이에스(ESCO) 연계",
        "자체 제작 맞춤형 컨트롤러",
      ],
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
            다양한 통신 환경과 현장에 맞춘 최적의 조명 제어 솔루션을 제공합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-l border-slate-200">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group border-r border-t border-slate-200 p-10 hover:bg-slate-50 transition-colors duration-300 relative overflow-hidden cursor-pointer"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BusinessAreas;
