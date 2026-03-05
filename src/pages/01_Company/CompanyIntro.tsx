import React from 'react';

export default function CompanyIntro() {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      
      {/* 1. 페이지 헤더 영역 */}
      <div className="container mx-auto px-4 max-w-6xl mb-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">플로림 소개</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light">
          에너지의 낭비를 막고 가치를 더하는 <strong className="text-blue-900 font-bold">지능형 IoT 솔루션 파트너</strong>
        </p>
      </div>

      {/* 2. 비전 & 미션 섹션 (Full Width) */}
      <div className="bg-blue-900 text-white py-24 mb-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            "최적의 에너지 효율을 디자인합니다"
          </h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto font-light">
            (주)플로림은 4차 산업혁명의 핵심인 사물인터넷(IoT) 기술을 기반으로, 
            도시와 빌딩의 조명 및 전력 인프라를 가장 스마트하게 제어하는 플랫폼 전문 기업입니다. 
            단순한 설비 교체를 넘어, 데이터 기반의 관제 시스템을 통해 고객의 ESG 경영 실현과 
            획기적인 비용 절감을 이끌어냅니다.
          </p>
        </div>
      </div>

      {/* 3. 플로림의 3대 핵심 가치 (카드 레이아웃) */}
      <div className="container mx-auto px-4 max-w-6xl mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">플로림이 제공하는 <span className="text-blue-600">핵심 가치</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 가치 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-blue-600 text-3xl">💡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">지능형 제어 (AIoT)</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              유무선 통신망(LoRa, NB-IoT)과 각종 스마트 센서를 결합하여, 환경 변화에 따라 기기들이 스스로 판단하고 동작하는 능동형 제어 인프라를 구축합니다.
            </p>
          </div>

          {/* 가치 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center relative overflow-hidden">
             {/* 뱃지 효과 */}
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">핵심 강점</div>
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-green-600 text-3xl">📉</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">극대화된 비용 절감</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              KEPCO 연계 ESCO 사업 모델을 통해 초기 투자비 0원으로 시스템을 도입하며, 초고효율 LED와 스마트 제어의 시너지로 매월 최대 70% 이상의 전력을 절감합니다.
            </p>
          </div>

          {/* 가치 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-indigo-600 text-3xl">🌍</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">지속가능성 (ESG)</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              에너지 사용량 감축에 따른 직접적인 온실가스 배출 감소 효과를 제공하며, 통합 관제 플랫폼을 통해 객관적인 ESG 경영 성과 리포팅을 지원합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 4. 사업 영역 요약 (가로형 배너) */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-gray-800 text-white p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">스마트 시티 솔루션</h3>
            <p className="text-gray-300 mb-6">도시 전체의 실외 가로등 및 경관 조명을 중앙에서 통합 관제하는 광역 네트워크 시스템</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• LoRa-Mesh 무선 제어망 구축</li>
              <li>• NB-IoT 기반 개별 관제</li>
              <li>• DMX512 경관 조명 연동</li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-blue-50 p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">스마트 빌딩 솔루션</h3>
            <p className="text-gray-600 mb-6">공장, 학교, 오피스 등 실내 공간의 에너지를 낭비 없이 완벽하게 통제하는 자동화 시스템</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 초고효율 25W LED 디밍 제어</li>
              <li>• 재실/조도 감지 IoT 센서 연동</li>
              <li>• KEPCO 연계 무상 구축 (ESCO)</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}