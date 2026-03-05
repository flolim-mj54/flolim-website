import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BusinessSimulation = () => {
  // 시뮬레이션 상태 관리 (기본값 1,000구)
  const [bulbCount, setBulbCount] = useState(1000);

  // 브로슈어 기준 (1,000구 당): 기존 450만원 -> 교체 후 150만원 (매월 300만원 절감)
  const beforeCost = bulbCount * 4500;
  const afterCost = bulbCount * 1500;
  const savingMonth = beforeCost - afterCost;
  const savingYear = savingMonth * 12;

  // 숫자 포맷팅 함수 (콤마 추가)
  const formatNum = (num) => new Intl.NumberFormat('ko-KR').format(num);

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">에너지 절감 시뮬레이션</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light">
            조명 교체만으로 얼마나 절약될까요? <strong className="text-blue-600 font-bold">직접 확인해 보세요.</strong>
          </p>
        </div>

        {/* 1. 인터랙티브 시뮬레이터 영역 */}
        <section className="bg-white rounded-3xl p-10 shadow-lg border border-gray-200 mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">우리 현장의 조명 개수를 입력해 보세요</h2>
            <div className="flex items-center justify-center gap-6 bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <span className="text-xl text-gray-700 font-bold">노후 조명 수량</span>
              <input 
                type="range" 
                min="100" 
                max="5000" 
                step="100" 
                value={bulbCount} 
                onChange={(e) => setBulbCount(Number(e.target.value))}
                className="w-1/2 h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="bg-white border-2 border-blue-500 text-blue-600 font-black text-2xl px-6 py-2 rounded-xl w-40 text-center shadow-sm">
                {formatNum(bulbCount)} <span className="text-lg">구</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">* 60W 노후 설비를 25W 스마트 LED로 교체하는 기준입니다.</p>
          </div>

          {/* 결과 그래프 뷰 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 border-b border-gray-100 pb-12 mb-8">
            {/* 교체 전 */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <span className="text-xl font-bold text-gray-500 mb-4">교체 전 (노후 설비)</span>
              <div className="w-full bg-gray-200 rounded-t-xl flex flex-col justify-end items-center relative transition-all duration-500" style={{ height: '240px' }}>
                <span className="absolute -top-8 text-gray-700 font-black text-2xl">{formatNum(beforeCost)}원</span>
              </div>
            </div>

            {/* 화살표 및 절감 하이라이트 */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-orange-500 text-white font-black text-2xl px-6 py-3 rounded-full shadow-md mb-2 flex flex-col items-center animate-bounce">
                <span>매월 {formatNum(savingMonth)}원</span>
                <span>절감!</span>
              </div>
              <span className="text-orange-400 text-4xl">↘</span>
            </div>

            {/* 교체 후 */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <span className="text-xl font-bold text-blue-600 mb-4">교체 후 (스마트 LED)</span>
              <div className="w-full bg-blue-600 rounded-t-xl flex flex-col justify-end items-center relative transition-all duration-500" style={{ height: '80px' }}>
                <span className="absolute -top-8 text-blue-700 font-black text-2xl">{formatNum(afterCost)}원</span>
              </div>
            </div>
          </div>

          {/* 연간 절감액 (수익) 결론 */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-xl text-gray-700 mb-2">초기 투자비 0원으로 구축하고, 상환 완료 후에는</h3>
            <p className="text-3xl font-black text-orange-600">
              연간 <span className="text-4xl">{formatNum(savingYear)}원</span>의 확정 수익이 발생합니다.
            </p>
          </div>
        </section>

        {/* 2. 효율화 전략 및 시너지 (브로슈어 내용 반영) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 2단계 효율화 전략 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">단순 교체를 넘은 2단계 효율화 전략</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-black text-xl shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">[LED 교체] 소비전력 60% 절감</h4>
                  <p className="text-gray-600">기존 60W 노후 조명을 25W 초고효율 스마트 LED로 교체하여 하드웨어적인 전력 소모를 대폭 줄입니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-black text-xl shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-bold text-green-700 mb-2">[지능형 제어] 20% 추가 절감</h4>
                  <p className="text-gray-600">스마트 디밍(밝기 조절) 및 스케줄링 제어를 통해 불필요한 낭비를 막고 추가 에너지를 아낍니다. (ESG 경영리포트 제공)</p>
                </div>
              </div>
            </div>
          </div>

          {/* ESCO + EERS 혜택 */}
          <div className="bg-blue-900 text-white p-10 rounded-3xl shadow-sm flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 text-[150px]">💰</div>
            <h3 className="text-2xl font-bold text-blue-200 mb-2">ESCO + EERS 결합 시너지</h3>
            <h4 className="text-3xl font-black text-yellow-400 mb-6 leading-tight">압도적인 1+1 혜택으로<br/>투자 회수(ROI) 가속화</h4>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 relative z-10">
              초기 예산이 전혀 들지 않는 <strong>ESCO 자금</strong>에, 절감된 전력량만큼 현금으로 돌려받는 한전 <strong>EERS 현금 보너스</strong>를 결합합니다.<br/><br/>
              이를 통해 시설비 상환 기간을 <span className="bg-blue-800 px-2 py-1 rounded text-white font-bold">평균 3년 대폭 단축</span>하고 순수익 조기 전환을 달성합니다.
            </p>
            <Link to="/business/esco" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-xl text-center hover:bg-blue-50 transition w-full md:w-auto relative z-10 shadow-lg">
              자세한 상환 프로세스 보기
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BusinessSimulation;