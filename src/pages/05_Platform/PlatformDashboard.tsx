import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const PlatformDashboard = () => {
  const [viewMode, setViewMode] = useState<'city' | 'building'>('city');

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="Control Platform"
        title="통합 관제 대시보드"
        subtitle={
          <>
            <strong className="text-flolim font-bold">직관적인 통합 대시보드</strong>로<br className="hidden md:block"/>
            수많은 조명을 한눈에 모니터링하고 제어합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        {/* 대시보드 시뮬레이터 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-8 md:mb-10 relative z-10">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3">실제 관제실 시뮬레이터</h2>
            <p className="text-slate-400 text-xs md:text-sm">현장의 관리자가 된 것처럼, 가로등과 실내 조명 대시보드를 전환해 보세요.</p>
          </div>

          {/* 💡 [수정] 모바일 줄바꿈 방지 (whitespace-nowrap, text-xs) 및 터치 효과(active) 적용 */}
          <div className="flex justify-center mb-8 md:mb-10 relative z-10 w-full overflow-x-auto pb-2">
            <div className="bg-[#050b14] p-1.5 rounded-2xl inline-flex border border-slate-700 shadow-inner min-w-max">
              <button 
                onClick={() => setViewMode('city')} 
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-all active:scale-95 whitespace-nowrap ${viewMode === 'city' ? 'bg-flolim text-slate-900 shadow-[0_0_15px_rgba(24,169,198,0.4)]' : 'text-slate-400 hover:text-white'}`}
              >
                스마트 가로등 (GIS 기반)
              </button>
              <button 
                onClick={() => setViewMode('building')} 
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-all active:scale-95 whitespace-nowrap ${viewMode === 'building' ? 'bg-flolim text-slate-900 shadow-[0_0_15px_rgba(24,169,198,0.4)]' : 'text-slate-400 hover:text-white'}`}
              >
                스마트 조명 (도면 기반)
              </button>
            </div>
          </div>

          {/* 모니터 프레임 */}
          <div className="relative z-10 max-w-5xl mx-auto mb-6">
            <div className="bg-slate-800 p-2 md:p-4 rounded-t-xl md:rounded-t-3xl border-t border-x border-slate-600 shadow-2xl relative">
              {/* 카메라/센서 홀 */}
              <div className="absolute top-1 md:top-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-950 rounded-full"></div>
              
              {/* 화면 영역 */}
              <div className="relative w-full aspect-video bg-[#0a1128] rounded-lg md:rounded-xl overflow-hidden border border-slate-900 group mt-1 md:mt-0">
                <img 
                  src="/images/dashboard-city.jpg" 
                  alt="스마트 가로등 대시보드" 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${viewMode === 'city' ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`} 
                />
                <img 
                  src="/images/dashboard-building.jpg" 
                  alt="스마트 빌딩 대시보드" 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${viewMode === 'building' ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`} 
                />
              </div>
            </div>
            {/* 모니터 하단 받침대 */}
            <div className="h-3 md:h-6 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-xl md:rounded-b-3xl w-full mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex justify-center">
              <div className="w-16 md:w-32 h-1 bg-slate-500 rounded-b-md"></div>
            </div>
          </div>
        </section>

        {/* 2. 시스템 주요 기능 요약 */}
        <section className="mb-20">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">시스템 주요 기능</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {/* 💡 [수정] 모바일 터치 피드백을 위한 active:border-flolim active:bg-slate-800/80 추가 */}
            <div className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:border-flolim active:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden cursor-pointer">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-flolim/10 transition-colors relative z-10 border border-slate-600">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors relative z-10">원격 제어</h3>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed relative z-10 break-keep">
                PC 및 스마트기기를 통한 실시간 개별/그룹 제어 기능을 지원합니다.
              </p>
            </div>
            
            <div className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:border-flolim active:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden cursor-pointer">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-flolim/10 transition-colors relative z-10 border border-slate-600">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors relative z-10">스마트 자동화</h3>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed relative z-10 break-keep">
                관리자 설정에 따른 스마트 자동 점/소등 및 스케줄링 기능을 제공합니다.
              </p>
            </div>
            
            <div className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:border-flolim active:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden cursor-pointer">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-flolim/10 transition-colors relative z-10 border border-slate-600">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors relative z-10">실시간 관제</h3>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed relative z-10 break-keep">
                전력 사용량 통계 제공 및 실시간 고장 알림 전송 기능을 통해 인프라를 안전하게 관리합니다.
              </p>
            </div>
            
            <div className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:border-flolim active:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden cursor-pointer">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-flolim/10 transition-colors relative z-10 border border-slate-600">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors relative z-10">분석/보고</h3>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed relative z-10 break-keep">
                데이터 기반 ESG 가치 증명 및 성과 분석 리포트를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 카테고리', title: 'IoT 센서 자동 제어', path: '/smart-building/sensor' }}
          next={{ label: '다음 페이지', title: 'ESG 경영 리포트', path: '/platform/esg' }}
        />
      </div>
    </div>
  );
};

export default PlatformDashboard;