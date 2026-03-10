import { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const PlatformEsg = () => {
  const [isUnpacked, setIsUnpacked] = useState(false);

  // 컴포넌트 로드 후 약간의 딜레이를 두고 3D 애니메이션 실행
  useEffect(() => {
    const timer = setTimeout(() => setIsUnpacked(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="ESG & Sustainability"
        title="월말 ESG 경영리포트"
        subtitle={
          <>
            데이터 기반의 <strong className="text-flolim font-bold">지속가능경영 인사이트 및 개선안을 제공</strong>합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        {/* 메인 래퍼 박스 (3D 시네마틱 효과 적용) */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden min-h-[700px] flex flex-col">
          <div className="text-center mb-16 relative z-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">자동화된 ESG 성과 리포트</h2>
            <p className="text-slate-400 text-sm">데이터가 증명하는 객관적인 탄소 감축 및 예산 절감 성과를 확인하세요.</p>
          </div>

          {/* 3D 회전하는 이미지 컨테이너 */}
          <div className="perspective-[1200px] flex-1 flex items-center justify-center relative z-10 w-full pb-10">
            <div 
              className="relative w-full max-w-5xl mx-auto transition-all duration-[1500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: isUnpacked ? 'rotateX(0deg) translateY(0) scale(1)' : 'rotateX(30deg) translateY(60px) scale(0.85)' 
              }}
            >
              {/* 웅장한 후광 효과 */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-flolim/20 blur-[100px] rounded-full transition-all duration-[2000ms] z-0 pointer-events-none ${isUnpacked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>

              {/* 모니터 프레임 적용 */}
              <div className="relative z-10 w-full shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                <div className="bg-slate-800 p-3 md:p-4 rounded-t-3xl border-t border-x border-slate-600 relative">
                  {/* 카메라/센서 홀 */}
                  <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-950 rounded-full"></div>
                  
                  {/* 화면 영역 */}
                  <div className="relative w-full aspect-video bg-[#0a1128] rounded-xl overflow-hidden border border-slate-900 flex items-center justify-center">
                    <img 
                      src="/images/dashboard-esg.jpg" 
                      alt="ESG 성과 분석 보고서" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* 모니터 하단 받침대 느낌 */}
                <div className="h-4 md:h-6 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-3xl w-full mx-auto flex justify-center">
                  <div className="w-32 h-1 bg-slate-500 rounded-b-md"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. ESG 리포트 핵심 지표 (브로슈어 8p, 27p 반영) */}
        <section className="mb-20">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-bold text-white">데이터 기반 ESG 가치 증명</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-emerald-500/50 transition-colors group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <div className="w-12 h-12 bg-slate-800 text-emerald-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/10 transition-colors relative z-10 border border-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors relative z-10">Environment (환경)</h3>
              <p className="text-emerald-400 font-bold text-sm mb-2 relative z-10">탄소 배출량 저감</p>
              <p className="text-slate-400 font-light text-xs leading-relaxed relative z-10">
                에너지 사용량 감축에 따른 온실가스 배출량의 직접적인 감소 효과를 수치화하여 제공합니다.
              </p>
            </div>
            
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 transition-colors group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center mb-5 group-hover:bg-flolim/10 transition-colors relative z-10 border border-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors relative z-10">Social (사회)</h3>
              <p className="text-flolim font-bold text-sm mb-2 relative z-10">시민 안전 및 빛 공해 저감</p>
              <p className="text-slate-400 font-light text-xs leading-relaxed relative z-10">
                심야 디밍 적용 시간과 가동률을 분석하여 보행자 안전 확보 및 빛 공해 저감 데이터를 산출합니다.
              </p>
            </div>
            
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-blue-500/50 transition-colors group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <div className="w-12 h-12 bg-slate-800 text-blue-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-500/10 transition-colors relative z-10 border border-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors relative z-10">Governance & Economy</h3>
              <p className="text-blue-400 font-bold text-sm mb-2 relative z-10">운영 투명성 및 비용 혁신</p>
              <p className="text-slate-400 font-light text-xs leading-relaxed relative z-10">
                통신 오류, 제어 개입 등의 투명성 로그와 전력/유지보수 비용 최소화를 통한 예산 절감액을 리포팅합니다.
              </p>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '통합 관제 대시보드', path: '/platform/dashboard' }}
          next={{ label: '다음 카테고리', title: '도입(실증) 사례', path: '/support/references' }}
        />
      </div>
    </div>
  );
};

export default PlatformEsg;