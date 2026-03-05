import React from 'react';

const BusinessEsco = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">KEPCO 연계 에너지 효율화 사업</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light">
            초기 투자비 <strong className="text-blue-600 font-bold">0원</strong>, 
            국가 지원으로 누리는 전력비 <strong className="text-blue-600 font-bold">최대 80% 절감</strong>
          </p>
        </div>

        {/* 1. Overview 섹션 */}
        <section className="bg-gray-50 rounded-3xl p-10 md:p-16 mb-20 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">예산 부담은 지우고, 조명은 더 스마트하게</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            플로림(FLOLIM)은 한국전력공사 출자 기업인 <strong>켑코이에스(KEPCO ES)</strong>와 공식 연계하여 혁신적인 스마트 조명 에너지 효율화 사업을 진행합니다. 
            노후 조명을 고효율 스마트 LED 및 지능형 제어 시스템으로 교체하는 비용 <strong>전액을 켑코이에스에서 선투자</strong>하므로, 
            단 1원의 추가 예산 편성 없이 최첨단 인프라를 구축할 수 있습니다.
          </p>
        </section>

        {/* 2. 3단계 도입 및 상환 프로세스 */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">3단계 도입 및 상환 프로세스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* 연결선 (데스크톱 전용) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
            
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 text-center relative">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black border-4 border-white shadow-sm">1</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">[도입] 초기 투자비 0원</h3>
              <p className="text-gray-600">모든 교체 비용을 <strong>켑코이에스에서 100% 선투자</strong>합니다.<br/>(귀사 부담 0원)</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 text-center relative">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black border-4 border-white shadow-sm">2</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">[상환] 절감액 분할 상환</h3>
              <p className="text-gray-600">매달 내던 <strong>전기료를 그대로 납부</strong>하여 절감된 금액만큼 시설비를 상환합니다.<br/>(평균 2~5년)</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 text-center relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black border-4 border-white shadow-sm">3</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">[수익] 고정 수익 발생</h3>
              <p className="text-gray-600">상환 완료 후, 시설물 소유권이 이전되며 <strong>전기료 70% 고정 수익</strong>(절감액)이 발생합니다.</p>
            </div>
          </div>
        </section>

        {/* 3. 시뮬레이션 및 EERS 결합 시너지 (그리드 레이아웃) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* 좌측: 에너지 절감 시뮬레이션 */}
          <section className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">에너지 절감 및 수익성 시뮬레이션</h2>
            <p className="text-gray-500 mb-8">(스마트 LED 1,000구 교체 기준 예시)</p>
            
            <div className="flex items-end justify-center gap-8 mb-8 h-48 border-b border-gray-200 pb-4">
              {/* 교체 전 막대 */}
              <div className="flex flex-col items-center">
                <span className="text-gray-600 font-bold mb-2">약 450만 원</span>
                <div className="w-24 bg-gray-400 rounded-t-lg h-40 flex items-end justify-center pb-2">
                  <span className="text-white text-xs">노후 설비(60W)</span>
                </div>
                <span className="mt-4 font-bold text-gray-800">교체 전</span>
              </div>
              
              {/* 화살표 및 절감액 */}
              <div className="flex flex-col items-center justify-center pb-10">
                <span className="text-orange-500 font-black text-xl mb-1">300만 원 절감!</span>
                <span className="text-orange-500 text-3xl">↘</span>
              </div>

              {/* 교체 후 막대 */}
              <div className="flex flex-col items-center">
                <span className="text-blue-600 font-bold mb-2">약 150만 원</span>
                <div className="w-24 bg-blue-600 rounded-t-lg h-16 flex items-end justify-center pb-2 shadow-inner">
                  <span className="text-white text-xs px-1 text-center">스마트 LED(25W)</span>
                </div>
                <span className="mt-4 font-bold text-gray-800">교체 후</span>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
              <p className="text-orange-600 font-bold text-lg">
                매월 300만 원 (연간 3,600만 원)의 확정 수익 발생
              </p>
            </div>
          </section>

          {/* 우측: 핵심 혜택 & ESCO + EERS */}
          <section className="flex flex-col gap-6">
            <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">ESCO + EERS 결합 시너지</h3>
              <h4 className="text-2xl font-bold mb-4">한전 지원금이 더해져 더 빨라지는 상환</h4>
              <p className="text-blue-100 leading-relaxed mb-6">
                초기 투자비 0원으로 구축하는 <strong>[ESCO 자금]</strong>에, 절감된 전력량에 비례하여 한국전력공사에서 현금 지원금을 직접 수령하는 <strong>[EERS 현금 보너스]</strong>를 결합합니다.
              </p>
              <div className="bg-blue-800 rounded-xl p-4 flex items-center justify-center border border-blue-700">
                <span className="font-bold text-lg">투자 회수율(ROI) 극대화 (상환 기간 평균 3년 단축)</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-6">플로림 ESCO 사업만의 강점</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4 text-xl">🏛️</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">국책 사업의 공신력과 전문성</h4>
                    <p className="text-gray-600 text-sm mt-1">한전 및 발전사가 설립한 켑코이에스와 함께하여 믿을 수 있습니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-4 text-xl">💡</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">절감 시너지 극대화</h4>
                    <p className="text-gray-600 text-sm mt-1">단순 조명 교체를 넘어, 초고효율 LED와 지능형 스마트 제어(디밍, 스케줄링)를 결합하여 추가적인 에너지를 20% 이상 더 절약합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default BusinessEsco;
