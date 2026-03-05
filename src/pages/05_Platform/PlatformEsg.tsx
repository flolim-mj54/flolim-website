import React from 'react';
import { Link } from 'react-router-dom';

const PlatformEsg = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ESG 경영 성과 리포트</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            데이터 기반의 투명한 에너지 관리로 <strong className="text-green-700 font-bold">지속가능경영(ESG) 목표 달성을 증명</strong>합니다.
          </p>
        </div>

        {/* 1. ESG 리포트 대시보드 UI (브로슈어 목업 데이터 100% 반영) */}
        <section className="mb-20">
          <div className="bg-slate-900 rounded-[2rem] p-6 md:p-10 shadow-2xl border border-slate-700 overflow-hidden text-white font-sans">
            
            {/* 대시보드 헤더 */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-slate-700/50 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center text-xl shadow-[0_0_15px_rgba(52,211,153,0.4)]">
                  🌱
                </div>
                <h2 className="text-2xl font-bold tracking-wide text-white">ESG 성과 분석 보고서</h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-lg text-sm text-slate-300 flex items-center cursor-pointer hover:bg-slate-700 transition">
                  🗓️ 2026.05.01 - 2026.05.31 ⌵
                </div>
                <button className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition flex items-center gap-2">
                  📄 PDF 내보내기
                </button>
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-emerald-600/20">
                  📊 Excel 다운로드
                </button>
              </div>
            </div>

            {/* 핵심 ESG 지표 3단 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* E: Environment */}
              <div className="bg-gradient-to-br from-emerald-900/40 to-slate-800/80 rounded-2xl border border-emerald-500/30 p-6 relative overflow-hidden group hover:border-emerald-400/50 transition-all">
                <div className="absolute -right-4 -top-4 text-7xl opacity-10 group-hover:scale-110 transition-transform">🍃</div>
                <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                  <span className="bg-emerald-500/20 p-1.5 rounded-lg">🌱</span> Environment: 탄소 배출 저감량
                </h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-black text-white drop-shadow-md">608</span>
                  <span className="text-lg text-slate-300 font-medium mb-1">kg CO2eq</span>
                </div>
                <p className="text-sm text-emerald-300 mb-4 font-medium flex items-center gap-1">
                  <span className="text-lg">↘</span> 전월 대비 5% 추가 감소
                </p>
                <div className="bg-emerald-950/50 rounded-lg p-3 text-xs text-emerald-200 flex items-center justify-center border border-emerald-800">
                  🌲 소나무 92그루 식재 효과
                </div>
              </div>

              {/* S: Social */}
              <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/80 rounded-2xl border border-blue-500/30 p-6 relative overflow-hidden group hover:border-blue-400/50 transition-all">
                <div className="absolute -right-4 -top-4 text-7xl opacity-10 group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                  <span className="bg-blue-500/20 p-1.5 rounded-lg">💡</span> Social: 시민 안전 및 빛 공해 저감
                </h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-black text-white drop-shadow-md">120</span>
                  <span className="text-lg text-slate-300 font-medium mb-1">시간</span>
                </div>
                <p className="text-sm text-blue-300 mb-4 font-medium">심야 디밍 적용 시간</p>
                <div className="bg-blue-950/50 rounded-lg p-3 text-xs text-blue-200 flex items-center justify-center border border-blue-800">
                  🚨 가동률 100% / 보행자 안전 확보 1,240명
                </div>
              </div>

              {/* G & E: Governance & Economy */}
              <div className="bg-gradient-to-br from-amber-900/40 to-slate-800/80 rounded-2xl border border-amber-500/30 p-6 relative overflow-hidden group hover:border-amber-400/50 transition-all">
                <div className="absolute -right-4 -top-4 text-7xl opacity-10 group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                  <span className="bg-amber-500/20 p-1.5 rounded-lg">🏛️</span> Governance & Economy: 예산 절감
                </h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-black text-white drop-shadow-md">162,000</span>
                  <span className="text-lg text-slate-300 font-medium mb-1">원</span>
                </div>
                <p className="text-sm text-amber-300 mb-4 font-medium">월간 기준</p>
                <div className="bg-amber-950/50 rounded-lg p-3 text-xs text-amber-200 flex items-center justify-center border border-amber-800">
                  ⚡ 전력 45% (1,350 kWh) 감소
                </div>
              </div>
            </div>

            {/* 하단 상세 차트 영역 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* 좌측 차트: 에너지 및 탄소 저감 추이 */}
              <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700 rounded-2xl p-6 relative">
                <h3 className="text-sm font-bold text-slate-300 mb-6">에너지 및 탄소 저감 상세 분석</h3>
                
                {/* 차트 범례 */}
                <div className="absolute top-6 right-6 flex gap-4 text-[10px]">
                  <div className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-600 rounded-sm"></div>Baseline (예상)</div>
                  <div className="flex items-center gap-1"><div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>Smart (실제)</div>
                </div>

                {/* Mock 혼합 차트 (막대 + 꺾은선) */}
                <div className="h-48 w-full flex items-end gap-4 relative mt-8">
                  {/* 꺾은선 궤적 (가상 SVG) */}
                  <svg className="absolute inset-0 w-full h-full z-10" preserveAspectRatio="none">
                    <path d="M 5% 20% L 25% 30% L 45% 40% L 65% 55% L 85% 70%" fill="none" stroke="#34d399" strokeWidth="2" strokeDasharray="4 4" className="drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  </svg>
                  
                  {/* 월별 막대 데이터 */}
                  {[
                    { b: 80, s: 70, m: 'Jan' },
                    { b: 85, s: 72, m: 'Feb' },
                    { b: 75, s: 60, m: 'Mar' },
                    { b: 70, s: 50, m: 'Apr' },
                    { b: 90, s: 45, m: 'May', highlight: true },
                  ].map((data, idx) => (
                    <div key={idx} className="flex-1 flex justify-center items-end gap-1 h-full relative group">
                      {/* Baseline */}
                      <div className="w-1/3 bg-slate-600/50 rounded-t-sm transition-all" style={{ height: `${data.b}%` }}></div>
                      {/* Smart (실제) */}
                      <div className={`w-1/3 rounded-t-sm transition-all relative z-20 ${data.highlight ? 'bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)]' : 'bg-emerald-600'}`} style={{ height: `${data.s}%` }}>
                        {data.highlight && (
                          <div className="absolute -top-10 -left-10 w-28 bg-emerald-900 text-emerald-100 text-[10px] p-1.5 rounded border border-emerald-500 text-center shadow-lg">
                            5월 절감: 1,350 kWh
                          </div>
                        )}
                      </div>
                      <span className="absolute -bottom-6 text-xs text-slate-400">{data.m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 우측 패널: 기여도 & 로그 & AI 인사이트 */}
              <div className="flex flex-col gap-6">
                
                {/* 상단 2분할 (기여도 / 로그) */}
                <div className="grid grid-cols-2 gap-4">
                  {/* 시스템 기여도 도넛 차트 */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 flex flex-col items-center justify-center">
                    <h3 className="text-[11px] font-bold text-slate-300 mb-4 w-full text-left">시스템 에너지 기여도</h3>
                    <div className="w-20 h-20 rounded-full border-[6px] border-slate-700 relative mb-4">
                      {/* 도넛 차트 색상 구분 (가상) */}
                      <div className="absolute inset-0 rounded-full border-[6px] border-emerald-500" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 70%)' }}></div>
                      <div className="absolute inset-0 rounded-full border-[6px] border-blue-500" style={{ clipPath: 'polygon(50% 50%, 0 70%, 0 0, 40% 0)' }}></div>
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">100%</div>
                    </div>
                    <ul className="text-[9px] text-slate-400 space-y-1 w-full">
                      <li className="flex justify-between"><span className="text-emerald-400">● 55%</span>스케줄 디밍</li>
                      <li className="flex justify-between"><span className="text-blue-400">● 35%</span>센서 동적 제어</li>
                      <li className="flex justify-between"><span className="text-slate-500">● 10%</span>고효율 LED</li>
                    </ul>
                  </div>

                  {/* 운영 투명성 로그 */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4">
                    <h3 className="text-[11px] font-bold text-slate-300 mb-3">운영 투명성 로그 (30일)</h3>
                    <div className="space-y-2">
                      <div className="bg-slate-800 border border-slate-600 rounded p-2 flex items-center gap-2 text-[9px] text-slate-300">
                        <span className="text-emerald-400 text-sm">✓</span> 통신 오류: 0건 (안정)
                      </div>
                      <div className="bg-slate-800 border border-slate-600 rounded p-2 flex items-center gap-2 text-[9px] text-slate-300">
                        <span className="text-blue-400 text-sm">🛠️</span> 원격 제어 개입: 3회
                      </div>
                      <div className="bg-slate-800 border border-slate-600 rounded p-2 flex items-center gap-2 text-[9px] text-slate-300">
                        <span className="text-amber-400 text-sm">⚠️</span> 고장 예측 알림: 1건
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI 분석 인사이트 (브로슈어 내용 매핑) */}
                <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-indigo-500/30 rounded-2xl p-5 flex-grow">
                  <h3 className="text-sm font-bold text-indigo-300 mb-2 flex items-center gap-2">
                    🤖 AI 분석 인사이트 (5월 리포트)
                  </h3>
                  <p className="text-[11px] text-indigo-100/80 leading-relaxed break-keep">
                    "이번 달은 가정의 달 행사로 공원 주변 유동 인구가 15% 증가했으나, 심야 에너지 절약 모드 작동으로 목표 전력 절감률 45%를 초과 달성했습니다. 하절기 진입에 따라 일몰 시간이 늦어지므로, 전체 점등 시간을 20분 늦추는 자동 스케줄링을 제안합니다."
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 2. ESG 리포트의 비즈니스 가치 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">단순한 절감을 넘어, 기업의 가치를 높입니다</h2>
            <p className="text-gray-600">명확한 데이터는 지속가능경영(ESG) 평가의 핵심 지표로 활용됩니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform text-center">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">📈</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">투명한 탄소 중립 증빙</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                조명 교체 및 지능형 제어를 통해 실제로 감축된 온실가스(CO2eq) 배출량을 시스템이 자동으로 계산하여 객관적인 환경 지표를 제공합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">📑</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">보고서 자동화</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                복잡한 계산이나 데이터 취합 과정 없이, 경영진 보고 및 외부 제출용으로 최적화된 고품질의 PDF/Excel 리포트를 클릭 한 번으로 생성합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform text-center">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🏆</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">브랜드 가치 제고</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                시민의 안전을 지키고(Social), 예산을 절감하며(Governance), 환경을 보호하는(Environment) 기업의 사회적 책임을 구체적인 데이터로 입명합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 고객 지원(레퍼런스) 페이지로 넘어가는 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <Link to="/platform/dashboard" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-green-600 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-green-700 transition-colors">통합 모니터링 대시보드</span>
          </Link>
          <Link to="/support/references" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">다음 카테고리 →</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">고객 지원 (구축 사례)</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PlatformEsg;
