import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SmartBuildingIntro = () => {
  // 인터랙티브 시뮬레이션 상태 관리
  const [isOccupied, setIsOccupied] = useState<boolean>(true); // 재실 여부
  const [isSunny, setIsSunny] = useState<boolean>(false); // 자연광 유입 여부 (맑음/흐림)

  // 상태에 따른 조명 밝기(디밍) 계산 로직
  let lightIntensity = 100;
  if (!isOccupied) lightIntensity = 10; // 사람이 없으면 최소 밝기(또는 소등)
  else if (isSunny) lightIntensity = 40; // 사람이 있지만 자연광이 충분하면 40%로 디밍

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">스마트 빌딩(LED) 제어 시스템</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            실내 공간을 위한 지능형 IoT 조명 솔루션.<br/>
            <strong className="text-green-600 font-bold">사람과 공간을 인식하여 스스로 최적의 빛과 에너지를 디자인</strong>합니다.
          </p>
        </div>

        {/* 1. 도입 효과 1: 센서 자동제어 시뮬레이션 (재실/조도) */}
        <section className="bg-white rounded-3xl p-10 md:p-12 shadow-lg border border-gray-200 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">빛이 필요한 순간과 공간을 스스로 판단합니다</h2>
            <p className="text-gray-500">아래 버튼을 눌러 센서가 환경 변화에 어떻게 반응하여 에너지를 절약하는지 확인해 보세요.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center bg-gray-50 p-8 rounded-2xl border border-gray-100">
            {/* 좌측: 제어 패널 */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-700 mb-4 flex items-center"><span className="text-xl mr-2">🚶</span> 재실 감지 센서 (모션)</h3>
                <div className="flex gap-2">
                  <button onClick={() => setIsOccupied(true)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${isOccupied ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>사람 있음</button>
                  <button onClick={() => setIsOccupied(false)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${!isOccupied ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>빈 공간</button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-700 mb-4 flex items-center"><span className="text-xl mr-2">☀️</span> 조도 센서 (자연광)</h3>
                <div className="flex gap-2">
                  <button onClick={() => setIsSunny(false)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${!isSunny ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`} disabled={!isOccupied}>야간/흐림</button>
                  <button onClick={() => setIsSunny(true)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${isSunny ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`} disabled={!isOccupied}>햇빛 유입</button>
                </div>
              </div>
            </div>

            {/* 우측: 시각화 (스마트 오피스 룸) */}
            <div className="w-full lg:w-2/3 relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center border-4 border-gray-700 transition-all duration-1000">
              {/* 창문 (자연광 표시) */}
              <div className="absolute right-0 top-0 w-1/3 h-full flex flex-col justify-center pr-4">
                <div className={`w-full h-3/4 rounded-l-xl transition-colors duration-1000 border-4 border-r-0 border-gray-600 ${isSunny ? 'bg-blue-200/80 shadow-[0_0_50px_rgba(191,219,254,0.6)]' : 'bg-gray-900'}`}>
                  {isSunny && <div className="absolute top-10 right-10 text-5xl animate-spin-slow">☀️</div>}
                </div>
              </div>
              
              {/* 사람 아이콘 */}
              <div className={`absolute bottom-10 left-1/3 text-6xl transition-all duration-700 ${isOccupied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                👨‍💼
              </div>

              {/* 천장 스마트 LED */}
              <div className="absolute top-10 w-2/3 flex justify-around">
                <div className="relative">
                  <div className="w-24 h-4 bg-white rounded-md z-10 relative"></div>
                  {/* 빛(디밍) 효과 */}
                  <div className="absolute top-2 -left-12 w-48 h-64 bg-yellow-100/40 rounded-b-full blur-2xl transition-opacity duration-1000" style={{ opacity: lightIntensity / 100 }}></div>
                </div>
                <div className="relative">
                  <div className="w-24 h-4 bg-white rounded-md z-10 relative"></div>
                  {/* 빛(디밍) 효과 */}
                  <div className="absolute top-2 -left-12 w-48 h-64 bg-yellow-100/40 rounded-b-full blur-2xl transition-opacity duration-1000" style={{ opacity: lightIntensity / 100 }}></div>
                </div>
              </div>

              {/* 상태 표시 UI */}
              <div className="absolute bottom-6 bg-white/90 backdrop-blur px-6 py-3 rounded-full text-center shadow-lg font-bold text-gray-800">
                현재 조명 밝기: <span className="text-green-600 text-2xl">{lightIntensity}%</span>
                <p className="text-xs text-gray-500 mt-1">
                  {!isOccupied ? '빈 공간 감지: 대기 전력 최소화' : isSunny ? '자연광 감지: 자동 조도 하향 (에너지 절감)' : '재실 감지: 최적 조도 제공'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 도입 효과 2: 획기적인 에너지 절감률 (ETRI, LH공사 등 브로슈어 데이터 매핑) */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">단순한 교체를 넘은 획기적 절감</h2>
            <p className="text-gray-600 text-lg">단순한 LED 교체를 넘어, IoT 센서 연동 제어로 <strong className="text-green-600 font-bold">최대 70% 이상의 획기적인 에너지 절감률</strong>을 실현합니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* ETRI 실증 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-green-50 rounded-full z-0"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 relative z-10">대한민국 ETRI 실증</h3>
              <p className="text-green-600 font-bold mb-4 relative z-10">공장 및 상업시설</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-black text-gray-800">74.1<span className="text-2xl">%</span></span>
                <span className="text-gray-500 font-bold mb-1">절감</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl relative z-10">
                스마트조명 플랫폼 개별/그룹 제어 적용으로 기존 대비 최대 74.1%의 압도적인 에너지 절감을 달성했습니다.
              </p>
            </div>

            {/* LH공사 실증 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-50 rounded-full z-0"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 relative z-10">대한민국 LH공사 실증</h3>
              <p className="text-blue-600 font-bold mb-4 relative z-10">공동주택 및 건물</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-gray-800 font-black text-2xl mb-1">최대</span>
                <span className="text-4xl font-black text-gray-800">70<span className="text-2xl">%</span></span>
                <span className="text-gray-500 font-bold mb-1">이상 절감</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl relative z-10">
                IoT 기반 10단계 자동 조도 조절(디밍)을 적용하여 기존 조명 대비 전력량을 70% 이상 대폭 낮췄습니다.
              </p>
            </div>

            {/* 한국광기술원 실증 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-orange-50 rounded-full z-0"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 relative z-10">한국광기술원 실증</h3>
              <p className="text-orange-500 font-bold mb-4 relative z-10">학교 및 사무실</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-gray-800 font-black text-2xl mb-1">일반 LED 대비</span>
                <span className="text-4xl font-black text-gray-800">43<span className="text-2xl">%</span></span>
                <span className="text-gray-500 font-bold mb-1">추가 절감</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl relative z-10">
                자연광 연동 자동 제어 시스템을 통해, 이미 고효율인 일반 LED 조명에서 약 43%의 에너지를 추가로 절약했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. 국내/외 실제 적용 사진 (레퍼런스) */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">글로벌 수준의 실내 구축 레퍼런스</h2>
            <p className="text-gray-600">세계 최고 수준의 스마트 빌딩부터 국내 대형 산업 현장까지, 공간의 가치를 높입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 레퍼런스 1 */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col group cursor-pointer">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">[네덜란드 The Edge 빌딩 사진]</div>
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">해외 구축 사례</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">네덜란드 암스테르담 The Edge 빌딩</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  6,500개의 스마트 LED와 IoT 센서가 결합된 세계 최고 수준의 친환경 스마트 오피스 구축
                </p>
              </div>
            </div>

            {/* 레퍼런스 2 */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col group cursor-pointer">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">[중국 CABR 빌딩 사진]</div>
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">해외 구축 사례</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">중국 베이징 CABR 빌딩</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  재실 및 자연광 연동 IoT 스마트 조명 제어를 통해 제로 에너지 빌딩(ZEB) 환경 실현
                </p>
              </div>
            </div>

            {/* 레퍼런스 3 */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col group cursor-pointer">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">[서산 한일플라스틱 공장 사진]</div>
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">국내 구축 사례</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">대한민국 서산 한일플라스틱 공장</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  스마트 조명 플랫폼 기반 개별/그룹 정밀 제어 도입으로 공장 전력 74.1% 절감 달성
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 시스템 도입 가치 요약 */}
        <section className="bg-green-900 text-white rounded-3xl p-10 md:p-16 mb-16 flex flex-col md:flex-row gap-12 items-center shadow-xl">
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">스마트 빌딩의 완성을 위한 필수 인프라</h2>
            <ul className="space-y-4 text-green-100 text-lg font-light">
              <li className="flex items-start"><span className="text-green-400 mr-3">✔</span> 빌딩, 지하주차장, 사무실 등 실내 환경에 최적화된 스마트 조명 제어망</li>
              <li className="flex items-start"><span className="text-green-400 mr-3">✔</span> 관리자 대시보드를 통해 구역별 정밀한 스케줄링 및 원격 그룹 제어 지원</li>
              <li className="flex items-start"><span className="text-green-400 mr-3">✔</span> 쾌적한 실내 환경을 조성하고 획기적인 건물 유지비용(OPEX) 절감 달성</li>
              <li className="flex items-start"><span className="text-green-400 mr-3">✔</span> 매월 ESG 리포트를 발행하여 탄소 배출 저감 성과 증빙 및 기업 가치 제고</li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center">
             <div className="w-48 h-48 bg-gradient-to-tr from-green-500 to-emerald-300 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)]">
                <div className="text-center">
                  <div className="text-white font-black text-4xl mb-1">ESG</div>
                  <div className="text-green-900 font-bold text-sm bg-white px-3 py-1 rounded-full">경영 리포트 제공</div>
                </div>
             </div>
          </div>
        </section>

        {/* 상세 솔루션으로 이동하는 하단 네비게이션 */}
        <div className="flex justify-end items-center bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <Link to="/smart-building/sensor" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-green-600 transition-colors mb-1">다음 페이지 →</span>
            <span className="text-gray-700 font-bold group-hover:text-green-700 transition-colors">IoT 센서 자동 제어 (현장 전용 서버)</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SmartBuildingIntro;
