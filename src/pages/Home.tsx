import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (메인 배너) */}
      <section className="relative bg-blue-900 text-white py-32 px-4 flex items-center min-h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          {/* 💡 배경 이미지가 있다면 아래 img 태그의 주석을 풀고 경로를 수정하세요 */}
          <div className="absolute inset-0 bg-slate-900 opacity-70"></div>
          {/* <img src="/images/main-bg.jpg" alt="Background" className="w-full h-full object-cover" /> */}
        </div>
        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            스마트 IoT 제어시스템 솔루션
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 font-light">
            에너지 소모는 줄이고 경영 효율은 더하는 <strong className="text-white">통합 관리 플랫폼</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/business/esco" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg text-lg">
              초기비용 0원 도입상담
            </Link>
            <Link to="/company/intro" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-10 rounded-full transition duration-300 text-lg">
              플로림 솔루션 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 핵심 비즈니스 모델 (3가지 카드) */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">플로림의 혁신적인 솔루션</h2>
            <p className="text-lg text-gray-600">도시와 빌딩의 에너지를 가장 스마트하게 관리하는 방법을 제시합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 카드 1: ESCO 사업 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="text-green-600 text-5xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition">초기비용 0원, ESCO 모델</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                켑코이에스 100% 지원으로 초기 투자비 부담 제로. 노후 설비를 초고효율 LED와 스마트 제어로 교체하여 매월 70%의 전기료를 절감합니다.
              </p>
              <Link to="/business/esco" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                자세히 보기 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* 카드 2: 스마트 시티 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="text-blue-600 text-5xl mb-6">🏙️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition">스마트 시티 제어망</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                LoRa-Mesh 및 NB-IoT 통신망을 활용하여 도시 전체의 실외 가로등을 중앙에서 실시간 관제하고 유지보수 예산을 혁신적으로 줄입니다.
              </p>
              <Link to="/smart-city/intro" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                자세히 보기 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* 카드 3: 스마트 빌딩 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="text-indigo-600 text-5xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition">스마트 빌딩 자동화</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                초고효율 조명과 재실/조도 감지 지능형 IoT 센서를 결합하여, 사람이 신경 쓰지 않아도 실내 에너지를 최대 74.1% 절감합니다.
              </p>
              <Link to="/smart-building/intro" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                자세히 보기 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ESG 리포트 및 플랫폼 어필 영역 */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              지속 가능한 ESG 경영의 완성,<br/>
              <span className="text-blue-600">통합 관제 플랫폼</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              단순한 기기 제어를 넘어, 데이터 기반의 최적화 시스템을 제공합니다. 
              월별 에너지 절감량과 탄소 배출 저감 수치를 한눈에 파악할 수 있는 대시보드 리포트로 기업의 ESG 경영 지표 관리를 완벽하게 지원합니다.
            </p>
            <ul className="space-y-4 mb-10 text-gray-700 font-medium text-lg">
              <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✔</span> PC & 모바일 웹 실시간 모니터링</li>
              <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✔</span> 고장 및 이상 발생 시 즉각 알림 시스템</li>
              <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✔</span> KISA IoT 최고 수준 보안 인증 규격 적용</li>
            </ul>
            <Link to="/platform/dashboard" className="bg-gray-800 hover:bg-black text-white font-bold py-4 px-10 rounded-lg transition duration-300 shadow-md">
              대시보드 기능 살펴보기
            </Link>
          </div>
          <div className="md:w-1/2 w-full">
             {/* 💡 플랫폼 대시보드 목업 이미지가 있다면 아래에 적용하세요 */}
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center shadow-inner border border-gray-200">
              <span className="text-gray-400 font-semibold">플랫폼 대시보드 이미지 삽입 영역</span>
              {/* <img src="/images/dashboard-mockup.png" alt="플로림 통합 대시보드" className="w-full h-full object-cover rounded-2xl" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}