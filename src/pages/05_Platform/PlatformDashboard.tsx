import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlatformDashboard = () => {
  // 대시보드 뷰 모드 상태 (street: 실외 가로등, building: 실내 LED)
  const [viewMode, setViewMode] = useState<'street' | 'building'>('street');

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">통합 모니터링 대시보드</h1>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            직관적인 통합 대시보드로 수많은 조명을 <strong className="text-gray-900 font-bold">한눈에 모니터링하고 제어</strong>합니다.
          </p>
        </div>

        {/* 1. 대시보드 시뮬레이터 (다크 모드 UI) - 브로슈어 목업 데이터 반영 */}
        <section className="mb-20">
          {/* 뷰 모드 전환 탭 */}
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setViewMode('street')}
              className={`px-8 py-3 rounded-full font-bold transition-all shadow-sm ${viewMode === 'street' ? 'bg-cyan-600 text-white shadow-cyan-500/30' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
            >
              🗺️ 실외 가로등 (지도 기반)
            </button>
            <button 
              onClick={() => setViewMode('building')}
              className={`px-8 py-3 rounded-full font-bold transition-all shadow-sm ${viewMode === 'building' ? 'bg-emerald-600 text-white shadow-emerald-500/30' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
            >
              🏢 실내 스마트 LED (도면 기반)
            </button>
          </div>

          {/* 대시보드 UI 프레임 */}
          <div className="bg-slate-900 rounded-[2rem] p-6 md:p-8 shadow-2xl border border-slate-700 overflow-hidden text-white font-sans transition-colors duration-500">
            {/* 대시보드 헤더 */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${viewMode === 'street' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                  {viewMode === 'street' ? '💡' : '🏢'}
                </div>
                <h2 className="text-lg font-bold tracking-wide">
                  플로림 스마트 {viewMode === 'street' ? '가로등' : '조명'} 제어시스템
                </h2>
              </div>
              <div className="text-sm text-slate-400 font-mono hidden md:block">
                🕒 2026.03.05 22:15:30 | 📍 서울 맑음 🌙 18°C
              </div>
            </div>

            {/* 메인 대시보드 그리드 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* 좌측: 지도/도면 뷰어 (큰 영역) */}
              <div className="lg:col-span-2 bg-slate-800/50 rounded-2xl border border-slate-700 relative overflow-hidden aspect-video lg:aspect-auto min-h-[400px] flex items-center justify-center">
                {/* 뷰 모드에 따른 배경 및 데이터 시각화 */}
                {viewMode === 'street' ? (
                  // 가로등: 지도 네온 라인 시각화
                  <div className="absolute inset-0 p-8">
                    <svg className="w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M10,90 Q30,10 50,50 T90,20" fill="none" stroke="#06b6d4" strokeWidth="0.5" className="drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                      <path d="M20,10 Q40,80 70,30 T100,90" fill="none" stroke="#0ea5e9" strokeWidth="0.5" />
                    </svg>
                    {/* 활성 노드 */}
                    <div className="absolute top-[45%] left-[45%] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)] animate-pulse"></div>
                    <div className="absolute top-[20%] left-[80%] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)] animate-pulse"></div>
                    <div className="absolute top-[80%] left-[20%] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)] animate-pulse"></div>
                    
                    {/* 정보 팝업 (툴팁) */}
                    <div className="absolute top-[30%] left-[50%] bg-slate-900/90 backdrop-blur border border-cyan-500/30 p-3 rounded-lg shadow-xl">
                      <p className="text-xs text-cyan-300 font-mono mb-1">가로등 ID: L-1024</p>
                      <p className="text-xs text-slate-300">상태: <span className="text-green-400">정상</span></p>
                      <p className="text-xs text-slate-300">밝기: 85%</p>
                      <p className="text-xs text-slate-300">현재 전력: 120W</p>
                    </div>
                  </div>
                ) : (
                  // 실내 빌딩: 평면도 시각화
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="w-4/5 h-4/5 border-2 border-slate-600 rounded-lg relative flex flex-wrap p-4 gap-4 justify-between">
                       {/* 구획 나누기 */}
                       <div className="w-[45%] h-[40%] border border-slate-600/50 rounded flex items-center justify-center relative">
                         <div className="absolute w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,1)]"></div>
                       </div>
                       <div className="w-[45%] h-[40%] border border-slate-600/50 rounded flex items-center justify-center relative bg-emerald-900/20">
                         <div className="absolute w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,1)] animate-pulse"></div>
                       </div>
                       <div className="w-full h-[45%] border border-slate-600/50 rounded flex items-center justify-around relative">
                         <div className="w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,1)]"></div>
                         <div className="w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,1)]"></div>
                         <div className="w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,1)]"></div>
                       </div>

                       {/* 정보 팝업 (툴팁) */}
                       <div className="absolute top-[10%] left-[55%] bg-slate-900/90 backdrop-blur border border-emerald-500/30 p-3 rounded-lg shadow-xl z-10">
                          <p className="text-xs text-emerald-300 font-mono mb-1">조명 ID: LED-B2</p>
                          <p className="text-xs text-slate-300">상태: <span className="text-green-400">정상</span></p>
                          <p className="text-xs text-slate-300">밝기: 85%</p>
                          <p className="text-xs text-slate-300">현재 전력: 25W</p>
                       </div>
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-xs text-slate-400 font-mono">
                  {viewMode === 'street' ? '지도 데이터 (GIS)' : '실내 평면도 (Floorplan)'}
                </div>
              </div>

              {/* 우측: 제어 패널 및 상태 위젯 */}
              <div className="flex flex-col gap-6">
                
                {/* 구역 제어 설정 (Zone Control) */}
                <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
                  <h3 className={`text-sm font-bold mb-4 ${viewMode === 'street' ? 'text-cyan-400' : 'text-emerald-400'}`}>구역 제어 설정</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${viewMode === 'street' ? 'bg-cyan-500' : 'bg-emerald-500'}`}></div>
                      <span className="text-xs text-slate-300">자동 디밍 활성화</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${viewMode === 'street' ? 'bg-cyan-500' : 'bg-emerald-500'}`}></div>
                      <span className="text-xs text-slate-300">에너지 절약 모드</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border border-slate-500"></div>
                      <span className="text-xs text-slate-400">센서 감지 우선</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border border-slate-500"></div>
                      <span className="text-xs text-slate-400">비상 모드 (100%)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-slate-300 mb-2">
                        <span>전체 밝기 조절 (0-100%)</span>
                        <span className={viewMode === 'street' ? 'text-cyan-400' : 'text-emerald-400'}>85%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full w-[85%] ${viewMode === 'street' ? 'bg-cyan-500' : 'bg-emerald-500'}`}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-300 mb-2">
                        <span>색온도 설정 (2700K-6500K)</span>
                        <span className="text-orange-300">4000K</span>
                      </div>
                      <div className="w-full h-2 rounded-full overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-200 to-blue-300">
                        <div className="h-full w-full relative">
                           <div className="absolute top-0 bottom-0 w-1 bg-white left-[40%] shadow-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 시스템 상태 모니터 */}
                <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 flex-grow flex flex-col justify-center">
                  <h3 className={`text-sm font-bold mb-4 ${viewMode === 'street' ? 'text-cyan-400' : 'text-emerald-400'}`}>시스템 상태 모니터</h3>
                  <div className="flex justify-between items-center px-2">
                     <div className="flex flex-col items-center">
                       <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center mb-2 ${viewMode === 'street' ? 'border-cyan-500 text-cyan-400' : 'border-emerald-500 text-emerald-400'}`}>
                         <span className="text-lg font-bold">45%</span>
                       </div>
                       <span className="text-[10px] text-slate-400">시스템 부하</span>
                     </div>
                     <div className="flex flex-col items-center">
                       <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center mb-2 ${viewMode === 'street' ? 'border-cyan-500 text-cyan-400' : 'border-emerald-500 text-emerald-400'}`}>
                         <span className="text-lg font-bold text-center leading-tight mt-1">ıll<br/><span className="text-[8px]">안정</span></span>
                       </div>
                       <span className="text-[10px] text-slate-400">네트워크 연결</span>
                     </div>
                     <div className="flex flex-col items-center">
                       <div className="w-14 h-14 rounded-full border-4 border-slate-600 text-slate-300 flex items-center justify-center mb-2">
                         <span className="text-lg font-bold">0건</span>
                       </div>
                       <span className="text-[10px] text-slate-400">오류 알림</span>
                     </div>
                  </div>
                </div>

              </div>

              {/* 하단 전체 영역: 에너지 사용량 차트 */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* 실시간 게이지 */}
                 <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                    <h3 className={`absolute top-6 left-6 text-sm font-bold ${viewMode === 'street' ? 'text-cyan-400' : 'text-emerald-400'}`}>실시간 사용 전력</h3>
                    
                    {/* 반원 게이지 디자인 */}
                    <div className="relative w-48 h-24 mt-8">
                       <div className="absolute inset-0 rounded-t-full border-[12px] border-slate-700"></div>
                       <div className={`absolute inset-0 rounded-t-full border-[12px] ${viewMode === 'street' ? 'border-cyan-500' : 'border-emerald-500'}`} style={{ clipPath: 'polygon(0 0, 70% 0, 70% 100%, 0 100%)' }}></div>
                       
                       <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center translate-y-4">
                         <span className="text-3xl font-black text-white drop-shadow-md">9.2 <span className="text-lg font-medium text-slate-300">kW</span></span>
                         <span className="text-[10px] text-slate-400 mt-1">현재 총 전력량</span>
                       </div>
                    </div>
                    <div className="w-full flex justify-between px-8 mt-2 text-[10px] text-slate-500 font-mono">
                      <span>0 kW</span><span>15 kW</span>
                    </div>
                 </div>

                 {/* 월별 차트 (2칸 차지) */}
                 <div className="md:col-span-2 bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
                    <h3 className={`text-sm font-bold mb-6 ${viewMode === 'street' ? 'text-cyan-400' : 'text-emerald-400'}`}>월별 실제 에너지 사용량 추이</h3>
                    <div className="flex items-end gap-2 h-32 w-full pt-4">
                      {/* Mock 막대 그래프 */}
                      {.map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center group">
                          <span className="text-[8px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity mb-1">{val}</span>
                          <div 
                            className={`w-full rounded-t-sm transition-all duration-1000 ${viewMode === 'street' ? 'bg-gradient-to-t from-cyan-900 to-cyan-400' : 'bg-gradient-to-t from-emerald-900 to-emerald-400'}`} 
                            style={{ height: `${(val / 1000) * 100}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between w-full mt-2 text-[9px] text-slate-500 uppercase">
                      <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. 핵심 제공 기능 (제어/자동화/관제/분석) */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">단순한 조명을 넘어 완벽한 통제를 제공합니다</h2>
            <p className="text-gray-600">누구나 다루기 쉬운 직관적인 환경에서 최적의 에너지 효율을 디자인하세요.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center">⚙️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">실시간 원격 제어</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                PC 및 스마트기기를 통해 현장에 가지 않고도 0~100%까지 개별 조명 또는 지정된 그룹 단위로 실시간 조도 제어가 가능합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center">🕒</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">지능형 스케줄 자동화</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                일출/일몰 시간, 요일별, 계절별, 휴일 등 관리자가 설정한 세밀한 스케줄에 따라 365일 알아서 점등과 소등을 수행합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center">🚨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">고장 알림 및 예측</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                램프 고장, 누전, 통신 오류 등 이상 징후를 실시간으로 감지하여 대시보드 팝업과 관리자 휴대폰으로 즉각 알림을 전송합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center">📊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">전력 사용량 분석</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                축적된 데이터를 바탕으로 구역별 전력 사용량 통계를 제공하며, 클릭 한 번으로 모든 데이터를 엑셀(Excel) 리포트로 추출합니다.
              </p>
            </div>
          </div>
        </section>

        {/* ESG 리포트 페이지로 넘어가는 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <Link to="/smart-building/sensor" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-gray-800 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-gray-900 transition-colors">IoT 센서 자동 제어</span>
          </Link>
          <Link to="/platform/esg" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">다음 페이지 →</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">ESG 경영 성과 리포트</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PlatformDashboard;
