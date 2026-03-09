import { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const PlatformDashboard = () => {
  const [viewMode, setViewMode] = useState<'city' | 'building'>('city');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-10 overflow-x-hidden">
      <PageHeader 
        category="Control Platform"
        title="통합 관제 대시보드"
        subtitle={
          <>
            도시와 빌딩의 수만 개 조명을 한곳에서.<br className="hidden md:block"/>
            <strong className="text-flolim font-bold">브로슈어 속 실제 관제 화면을 체험</strong>해 보세요.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* 뷰 모드 전환 탭 */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900/50 backdrop-blur-sm p-1.5 rounded-xl inline-flex border border-slate-800 shadow-lg">
            <button 
              onClick={() => setViewMode('city')}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${viewMode === 'city' ? 'bg-flolim text-slate-900 shadow-[0_0_15px_rgba(24,169,198,0.3)]' : 'text-slate-400 hover:text-flolim'}`}
            >
              스마트 가로등 제어 (GIS)
            </button>
            <button 
              onClick={() => setViewMode('building')}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${viewMode === 'building' ? 'bg-flolim text-slate-900 shadow-[0_0_15px_rgba(24,169,198,0.3)]' : 'text-slate-400 hover:text-flolim'}`}
            >
              스마트 조명 제어 (도면)
            </button>
          </div>
        </div>

        {/* 1. 실제 플로림 대시보드 UI 시뮬레이터 */}
        <section className="mb-24 w-full relative">
          <div className="w-full bg-[#0a1128] rounded-3xl shadow-2xl border border-[#1c2e5a] overflow-hidden flex flex-col min-h-[800px] text-slate-200">
            
            {/* Top Header */}
            <div className="h-14 flex items-center justify-between px-6 border-b border-[#1c2e5a] bg-[#0d1633]">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                <span className="text-white font-bold tracking-wide">
                  플로림 스마트 {viewMode === 'city' ? '가로등' : '조명'} 제어시스템
                </span>
              </div>
              <div className="flex items-center gap-6 text-xs text-slate-400 font-mono hidden md:flex">
                <span>2026.03.06 22:15:30</span>
                <div className="flex items-center gap-2 text-slate-300">
                  <span>서울</span>
                  {/* 날씨는 유일하게 포인트로 남겨둠 */}
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  <span>15°C</span>
                </div>
              </div>
            </div>

            {/* Dashboard Grid Content */}
            <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-10 gap-6">
              {/* 좌측 컬럼 (맵 60% + 실시간 전력 40%) */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                {/* 맵 관제 영역 */}
                <div className="flex-1 bg-[#101a3c] border border-[#1c2e5a] rounded-2xl relative overflow-hidden shadow-inner min-h-[400px]">
                  {viewMode === 'city' ? (
                    <div className="absolute inset-0">
                      <svg className="absolute w-full h-full opacity-20 text-flolim" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M10 50 Q 30 20 60 40 T 90 20 M 20 80 Q 50 90 70 60 T 100 80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        <path d="M10 20 L 90 80 M 20 10 L 80 90" fill="none" stroke="currentColor" strokeWidth="0.2"/>
                      </svg>
                      <svg className="absolute w-full h-full opacity-30 text-flolim">
                        <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                        <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                        <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                        <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                      </svg>
                      <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-flolim rounded-full shadow-[0_0_15px_rgba(24,169,198,1)]"></div>
                      <div className="absolute top-[50%] left-[50%] w-4 h-4 bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(24,169,198,1)] animate-pulse"></div>
                      <div className="absolute top-[40%] left-[80%] w-3 h-3 bg-flolim rounded-full shadow-[0_0_15px_rgba(24,169,198,1)]"></div>
                      <div className="absolute top-[70%] left-[70%] w-3 h-3 bg-flolim rounded-full shadow-[0_0_15px_rgba(24,169,198,1)]"></div>
                      
                      <div className="absolute top-[40%] left-[52%] bg-[#0a1128]/90 border border-flolim/50 p-3 rounded-lg text-[10px] font-mono leading-relaxed shadow-lg">
                        <span className="text-flolim font-bold">지도 기반 직관적 실외 관제</span><br/>
                        <span className="text-slate-400">광명로(구) L-324</span><br/>
                        램프 전압: 220V<br/>
                        램프 전류: 0.41A<br/>
                        소비 전력: 90W
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0">
                      <div className="absolute inset-4 border border-[#1c2e5a] bg-[#0d1633] opacity-50 flex rounded-xl">
                        <div className="flex-1 border-r border-[#1c2e5a]"></div>
                        <div className="flex-1 border-r border-[#1c2e5a]"></div>
                        <div className="flex-1"></div>
                      </div>
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="absolute w-3 h-3 bg-flolim rounded-full shadow-[0_0_15px_rgba(24,169,198,1)] animate-pulse" style={{ top: `${20 + (i%3)*30}%`, left: `${20 + Math.floor(i/3)*25}%` }}></div>
                      ))}
                      <div className="absolute top-[40%] left-[45%] bg-[#0a1128]/90 border border-flolim/50 p-3 rounded-lg text-[10px] font-mono leading-relaxed shadow-lg">
                        <span className="text-flolim font-bold">도면 기반 실내 상태 파악</span><br/>
                        <span className="text-slate-400">A구역 - 3번 회의실</span><br/>
                        동작 상태: 자동(센서 연동)<br/>
                        현재 밝기: 45%
                      </div>
                    </div>
                  )}
                </div>

                {/* 실시간 사용 전력 */}
                <div className="bg-[#101a3c] border border-[#1c2e5a] p-6 rounded-2xl flex flex-col justify-between h-64">
                  <h3 className="text-sm font-bold text-slate-300 mb-2">실시간 사용 전력</h3>
                  <div className="relative w-full max-w-[280px] mx-auto flex items-center justify-center flex-grow">
                    <svg viewBox="0 0 200 100" className="w-full drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">
                      <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#1c2e5a" strokeWidth="15" strokeLinecap="round" />
                      <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#18A9C6" strokeWidth="15" strokeLinecap="round" 
                            strokeDasharray="251" strokeDashoffset={isLoaded ? "100" : "251"} 
                            className="transition-all duration-[2000ms] ease-out" />
                    </svg>
                    <div className="absolute bottom-0 flex flex-col items-center pb-2">
                      <span className="text-4xl font-black text-white tracking-tight">9.2<span className="text-xl text-slate-400 font-normal ml-1">kW</span></span>
                      <span className="text-[10px] text-flolim mt-1 uppercase tracking-wider">Total Power</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono px-4">
                    <span>0 kW</span>
                    <span>25 kW</span>
                  </div>
                </div>
              </div>

              {/* 우측 컬럼 */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* 구역 제어 설정 */}
                <div className="bg-[#101a3c] border border-[#1c2e5a] p-6 rounded-2xl">
                  <h3 className="text-sm font-bold text-slate-300 mb-5">구역 제어 설정</h3>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="flex items-center justify-between bg-[#0a1128] p-3 rounded-xl border border-[#1c2e5a]">
                      <span className="text-xs text-slate-300">자동 점/소등</span>
                      <div className="w-8 h-4 bg-flolim rounded-full relative shadow-[0_0_10px_rgba(24,169,198,0.3)]">
                        <div className="absolute right-1 top-0.5 w-3 h-3 bg-slate-900 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-[#0a1128] p-3 rounded-xl border border-[#1c2e5a]">
                      <span className="text-xs text-slate-300">센서 연동</span>
                      <div className="w-8 h-4 bg-flolim rounded-full relative shadow-[0_0_10px_rgba(24,169,198,0.3)]">
                        <div className="absolute right-1 top-0.5 w-3 h-3 bg-slate-900 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-[#0a1128] p-3 rounded-xl border border-[#1c2e5a]">
                      <span className="text-xs text-slate-400">절약 모드</span>
                      <div className="w-8 h-4 bg-[#1c2e5a] rounded-full relative">
                        <div className="absolute left-1 top-0.5 w-3 h-3 bg-slate-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-[#0a1128] p-3 rounded-xl border border-[#1c2e5a]">
                      <span className="text-xs text-slate-400">비상 모드</span>
                      <div className="w-8 h-4 bg-[#1c2e5a] rounded-full relative">
                        <div className="absolute left-1 top-0.5 w-3 h-3 bg-slate-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-[10px] text-flolim mb-1.5 uppercase tracking-wider">
                        <span>Dimming (0~100%)</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#1c2e5a] rounded-full relative">
                        <div className="absolute top-0 left-0 h-full bg-flolim rounded-full w-[85%] shadow-[0_0_10px_rgba(24,169,198,0.8)]"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-[85%] w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 시스템 상태 모니터링 */}
                <div className="bg-[#101a3c] border border-[#1c2e5a] p-6 rounded-2xl">
                  <h3 className="text-sm font-bold text-slate-300 mb-4">시스템 상태 모니터링</h3>
                  <div className="flex justify-between items-center px-2">
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-14 h-14 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="16" fill="none" className="stroke-[#1c2e5a]" strokeWidth="3" />
                          <circle cx="18" cy="18" r="16" fill="none" className="stroke-[#18A9C6] transition-all duration-1000" strokeWidth="3" strokeDasharray="100" strokeDashoffset={isLoaded ? "55" : "100"} />
                        </svg>
                        <span className="text-sm font-bold text-flolim">45<span className="text-[10px]">%</span></span>
                      </div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-wider">절감률</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-14 h-14 flex items-center justify-center rounded-full border-[3px] border-flolim shadow-[0_0_15px_rgba(24,169,198,0.2)]">
                        <svg className="w-5 h-5 text-flolim animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                      </div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-wider">네트워크</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-14 h-14 flex items-center justify-center rounded-full border-[3px] border-slate-600">
                        <span className="text-lg font-bold text-slate-400">0</span>
                      </div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-wider">에러</span>
                    </div>
                  </div>
                </div>

                {/* 월별 차트 */}
                <div className="bg-[#101a3c] border border-[#1c2e5a] p-6 rounded-2xl flex-1 flex flex-col justify-between">
                  <h3 className="text-sm font-bold text-slate-300 mb-4">월별 소비 전력 (kWh)</h3>
                  <div className="flex items-end justify-between h-24 gap-1.5 mt-auto pb-3">
                    {[40, 45, 60, 30, 75, 85, 90, 70, 80, 50, 65, 95].map((h, i) => (
                      <div key={i} className="w-full bg-[#1c2e5a] rounded-t-sm relative group flex-1 flex items-end">
                        <div 
                          className="w-full bg-flolim rounded-t-sm transition-all duration-[1500ms] ease-out shadow-[0_0_10px_rgba(24,169,198,0.3)]" 
                          style={{ height: isLoaded ? `${h}%` : '0%' }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono pt-1 border-t border-[#1c2e5a]">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 시스템 주요 기능 상세 설명 */}
        <section className="mb-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">단순한 조명을 넘어, 완벽한 통제와 최적의 에너지 효율을 제공합니다</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-all group">
              <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-5 group-hover:bg-flolim/10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors">실시간 원격 제어</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                PC 및 스마트기기를 통해 언제 어디서나 조명을 실시간으로 개별 혹은 다중 그룹 단위로 정밀하게 제어합니다.
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-all group">
              <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-5 group-hover:bg-flolim/10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors">스마트 스케줄링</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                일출·일몰 시간, 요일, 계절 등 관리자가 설정한 세밀한 조건에 따라 스스로 판단하여 조명을 작동합니다.
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-all group">
              <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-5 group-hover:bg-flolim/10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors">고장 및 통계 관제</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                전력 사용량 통계를 제공하며, 누전이나 통신 불량 등 이상 징후 발생 시 실시간 경고 알림을 전송합니다.
              </p>
            </div>
            <div className="bg-slate-900/80 p-8 rounded-3xl border border-flolim/30 hover:border-flolim transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-flolim/10 rounded-bl-full z-0"></div>
              <div className="w-12 h-12 bg-flolim/20 text-flolim rounded-xl flex items-center justify-center mb-5 relative z-10 border border-flolim/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-flolim mb-2 relative z-10">ESG 성과 보고서</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed relative z-10">
                수집된 빅데이터를 기반으로 기업의 탄소 감축량과 비용 절감액을 증명하는 공식 리포트를 자동 생성합니다.
              </p>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 카테고리', title: 'IoT 센서 자동 제어', path: '/smart-building/sensor' }}
          next={{ label: '다음 페이지', title: 'ESG 리포트 솔루션', path: '/platform/esg' }}
        />
      </div>
    </div>
  );
};

export default PlatformDashboard;