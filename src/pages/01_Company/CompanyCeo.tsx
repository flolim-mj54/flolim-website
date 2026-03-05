import React from 'react';

export default function CompanyCeo() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* 페이지 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">CEO 인사말</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* 좌측: 대표이사 이미지 영역 (임시 플레이스홀더) */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center border border-gray-300">
               {/* 💡 대표님 사진이 있다면 아래 이미지 태그 주석을 풀고 경로를 맞추세요 */}
               {/* <img src="/images/ceo-profile.jpg" alt="CEO" className="w-full h-full object-cover rounded-lg" /> */}
               <span className="text-gray-500 text-sm">대표이사 사진 영역</span>
            </div>
          </div>

          {/* 우측: 인사말 텍스트 영역 */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 leading-tight">
              "보이지 않는 에너지를 통제하여<br />
              <span className="text-green-600">기업의 내일을 밝히는 혁신</span>을 약속합니다."
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                안녕하십니까, 주식회사 플로림 대표이사입니다.
              </p>
              <p>
                과거의 에너지는 단순히 '소비'하는 대상이었습니다. 하지만 기후 변화와 탄소 중립이 전 지구적 과제로 떠오른 지금, 에너지는 기업의 생존과 성장을 결정짓는 가장 중요한 '관리'의 영역이 되었습니다.
              </p>
              <p>
                저희 플로림은 단순한 기기 교체를 넘어, <strong>도시와 빌딩의 에너지를 가장 스마트하게 통제하는 지능형 IoT 제어 솔루션</strong>을 제공합니다. 
                노후화된 가로등과 실내 조명을 초고효율 LED로 전환하고, 자체 개발한 통합 관제 플랫폼을 통해 불필요한 전력 낭비를 원천적으로 차단합니다.
              </p>
              <p>
                특히, KEPCO 연계 ESCO 사업 모델을 통해 <strong>초기 투자비용 없이 압도적인 에너지 절감과 ESG 경영 성과를 동시에 달성</strong>할 수 있는 최적의 로드맵을 제시하고 있습니다.
              </p>
              <p>
                플로림의 기술력은 이미 여러 지자체와 기업의 실증 사례를 통해 그 가치를 증명해 왔습니다. 앞으로도 끊임없는 연구개발과 혁신을 통해, 고객의 자산을 보호하고 지속 가능한 미래를 앞당기는 든든한 파트너가 되겠습니다.
              </p>
              <p className="pt-4 font-bold text-gray-900">
                감사합니다.
              </p>
              <div className="pt-8">
                <p className="text-xl font-bold text-gray-800">주식회사 플로림 대표이사</p>
                {/* 💡 서명 이미지가 있다면 아래에 추가하세요 */}
                {/* <img src="/images/signature.png" alt="서명" className="h-12 mt-2" /> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}