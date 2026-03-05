import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SmartCityIntro = () => {
  // 간단한 시뮬레이션 상태 관리
  const [activeSensor, setActiveSensor] = useState<number>(0);

  const sensors = [
    {
      icon: "☀️",
      title: "1. 조도 센서",
      desc: "주변 밝기를 자동 감지하여 전력 낭비를 차단하는 최적의 디밍(Dimming)을 수행합니다.",
      color: "bg-orange-50 text-orange-600 border-orange-200"
    },
    {
      icon: "🍃",
      title: "2. 대기질 센서",
      desc: "별도 인프라 구축비 없이 미세먼지(PM) 및 유해가스를 실시간으로 측정하고 모니터링합니다.",
      color: "bg-green-50 text-green-600 border-green-200"
    },
    {
      icon: "🚶",
      title: "3. 차량/보행자 감지 센서",
      desc: "심야 통행량에 따라 밝기를 자동 조절하여 획기적인 에너지 절감과 범죄 예방을 동시 달성합니다.",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: "🌡️",
      title: "4. 소음/온습도 센서",
      desc: "기상 이변(폭염/결빙) 및 도심 소음을 감지하여 즉각적으로 대응하는 시민 안전망을 구축합니다.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    }
  ];

  const references = [
    {
      title: "경기도 안산시 (안산스마트허브)",
      desc: "산단 내 1,594개 노후 가로등 교체 및 IoT 조명제어 장치 적용 완료",
      highlight: "에너지 및 탄소 배출 70% 감축",
      imgPlaceholder: "안산시 가로등 야경 사진"
    },
    {
      title: "서울특별시 금천구 (G밸리)",
      desc: "도심지 도로변 보행자 및 교통량 감지 연동형 스마트 가로등 601개 구축",
      highlight: "연간 60,000 kWh 전력 요금 절감",
      imgPlaceholder: "G밸리 스마트 가로등 시공 사진"
    },
    {
      title: "미국 시카고 (Chicago, USA)",
      desc: "28만 개의 노후 조명을 스마트 LED로 교체하는 초대형 인프라 구축 완료",
      highlight: "글로벌 스마트 시티 구축 사례",
      imgPlaceholder: "시카고 도심 야경 및 교차로 사진"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 & Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">스마트 시티 제어 시스템</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            양방향 IoT 통신 기반의 지능형 도로조명 인프라.<br/>
            모든 인프라가 하나로 연결되어 <strong className="text-blue-600 font-bold">스스로 판단하고 에너지를 최적화</strong>합니다.
          </p>
        </div>

        {/* 1. 도입 효과 1: 다중 센서 자동제어 시뮬레이션 UI */}
        <section className="bg-white rounded-3xl p-10 md:p-12 shadow-md border border-gray-200 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              단일 가로등 하나로 에너지 절감부터 환경 감시까지
            </h2>
            <p className="text-gray-500">아래 센서 탭을 클릭하여 스마트 가로등의 핵심 기능들을 확인해 보세요.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* 좌측: 인터랙티브 센서 메뉴 */}
            <div className="w-full lg:w-1/2 space-y-4">
              {sensors.map((sensor, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveSensor(idx)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 flex items-start gap-4 ${
                    activeSensor === idx 
                    ? `${sensor.color} shadow-sm scale-[1.02]` 
                    : 'bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-3xl bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm shrink-0">
                    {sensor.icon}
                  </span>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${activeSensor === idx ? 'text-inherit' : 'text-gray-800'}`}>
                      {sensor.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${activeSensor === idx ? 'text-inherit opacity-90' : 'text-gray-500'}`}>
                      {sensor.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 우측: 스마트 가로등 시각화 영역 */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center border-4 border-slate-800">
                {/* 빔 라이트 효과 */}
                <div className={`absolute top-0 w-full h-full bg-gradient-to-b from-blue-300/30 to-transparent transition-opacity duration-500 ${activeSensor === 0 ? 'opacity-100' : 'opacity-40'}`}></div>
                
                {/* 가로등 그래픽 (간략화) */}
                <div className="absolute top-10 w-24 h-6 bg-gray-300 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] z-10"></div>
                <div className="absolute top-16 w-3 h-full bg-gradient-to-b from-gray-400 to-gray-700"></div>

                {/* 현재 활성화된 센서 상태 팝업 */}
                <div className="absolute bottom-10 bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 rounded-2xl w-4/5 transform transition-all duration-500 z-20 shadow-xl">
                  <div className="text-4xl mb-3 text-center animate-bounce">{sensors[activeSensor].icon}</div>
                  <h4 className="font-bold text-center text-lg mb-2 text-blue-200">{sensors[activeSensor].title} 작동 중</h4>
                  <p className="text-xs text-center text-gray-300 break-keep">플로림 지능형 서버와 실시간 통신 중입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 도입 효과 2 & 3: 에너지 절감 및 예산 절약 성과 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <section className="bg-green-600 text-white rounded-3xl p-10 shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-[150px] opacity-10">📉</div>
            <h2 className="text-2xl font-bold text-green-100 mb-2">에너지 및 탄소 배출 감축</h2>
            <h3 className="text-4xl font-black mb-8">최대 50~70% 절감</h3>
            <ul className="space-y-6 relative z-10">
              <li className="bg-green-700/50 p-5 rounded-xl border border-green-500">
                <strong className="block text-xl mb-1">안산시 스마트허브 사례</strong>
                <span className="text-green-100 text-sm">통행량 분석 IoT 조명제어 적용으로 에너지 및 탄소 배출 70% 감축</span>
              </li>
              <li className="bg-green-700/50 p-5 rounded-xl border border-green-500">
                <strong className="block text-xl mb-1">서울시 강남 4구 사례</strong>
                <span className="text-green-100 text-sm">유동 인구 밀집 도로 1,500개 설치로 최소 50% 이상 절감 (총 912MW)</span>
              </li>
            </ul>
          </section>

          <section className="bg-blue-900 text-white rounded-3xl p-10 shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-[150px] opacity-10">💰</div>
            <h2 className="text-2xl font-bold text-blue-200 mb-2">실제 전기요금 및 예산 절약</h2>
            <h3 className="text-3xl font-black mb-8 leading-tight">유지보수 예산을<br/>획기적으로 낮춥니다</h3>
            <ul className="space-y-6 relative z-10">
               <li className="bg-blue-800/50 p-5 rounded-xl border border-blue-700">
                <strong className="block text-xl mb-1 text-yellow-400">연간 60,000 kWh 절감</strong>
                <span className="text-blue-100 text-sm">서울시 금천구 G밸리: 심야 시간대 및 교통량 연동 자동조도 조절 도입</span>
              </li>
              <li className="bg-blue-800/50 p-5 rounded-xl border border-blue-700">
                <strong className="block text-xl mb-1 text-yellow-400">매년 약 7억 원 (42만 파운드) 절감</strong>
                <span className="text-blue-100 text-sm">영국 런던시: 1만 4천 개 스마트 가로등 제어망 구축 효과</span>
              </li>
            </ul>
          </section>
        </div>

        {/* 3. 국내/외 실제 적용 사진 (레퍼런스) */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">국내/외 실제 적용 사례</h2>
          <p className="text-center text-gray-600 mb-10">국내 주요 국가산업단지부터 글로벌 스마트 시티까지, 압도적인 구축 레퍼런스를 자랑합니다.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {references.map((ref, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden flex flex-col">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-gray-400 relative">
                  {/* 실제 이미지가 준비되면 여기에 <img> 태그 사용 */}
                  <span>[{ref.imgPlaceholder}]</span>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {ref.highlight}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{ref.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{ref.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 통신망별 상세 페이지 이동 링크 */}
        <section className="bg-gray-100 rounded-3xl p-10 text-center border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">현장에 최적화된 맞춤형 통신망을 선택하세요</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/smart-city/lora" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-blue-600 text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-sm">
              LoRa-Mesh 제어 시스템 보기
            </Link>
            <Link to="/smart-city/nb-iot" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
              NB-IoT 제어 시스템 보기
            </Link>
            <Link to="/smart-city/dmx" className="w-full sm:w-auto px-8 py-4 bg-indigo-900 text-white font-bold rounded-xl hover:bg-indigo-800 transition-colors shadow-sm">
              DMX 경관조명 제어 보기
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SmartCityIntro;