import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const SmartBuildingIntro = () => {
  // 💡 [Map 데이터] 실증 사례 3종
  const cases = [
    { id: 1, region: '대한민국 ETRI 실증', location: '공장 및 상업시설', percent: '74.1', label: '절감', desc: '스마트조명 플랫폼 개별/그룹 제어 적용으로 전통 조명 대비 최대 74.1%의 압도적인 에너지를 절감했습니다.' },
    { id: 2, region: '대한민국 LH공사 실증', location: '공동주택 및 건물', prefix: '최대', percent: '70', label: '이상 절감', desc: 'IoT 기반 10단계 자동 조도 조절(디밍)을 적용하여 전통 조명 대비 전력량을 70% 이상 대폭 낮췄습니다.' },
    { id: 3, region: '한국광기술원 실증', location: '학교 및 사무실', prefix: '일반 LED 대비', percent: '43', label: '추가 절감', desc: '자연광 연동 자동 제어 시스템을 통해, 고효율 일반 LED 조명에서 약 43%의 에너지를 추가로 절약했습니다.' },
  ];

  return (
    <div className="pb-10 bg-[#020617] min-h-screen font-sans overflow-hidden">
      
      <PageHeader 
        category="Smart Building System"
        title="스마트 빌딩 제어 시스템"
        subtitle={
          <>
            빌딩 내 모든 조명과 센서를 하나로 연결하여, 에너지를 낭비 없이 완벽하게 통제하는 <strong className="text-flolim font-bold">지능형 통합 인프라</strong>입니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        {/* 1. 시스템 개요 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center relative z-10">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                공간을 이해하는 똑똑한 빌딩,<br />
                <span className="text-flolim drop-shadow-[0_0_15px_rgba(24,169,198,0.4)]">에너지 효율의 극대화를 실현합니다</span>
              </h2>
              
              <div className="space-y-4 mb-6 md:mb-8">
                <p className="text-slate-400 leading-relaxed font-light text-xs md:text-sm lg:text-base break-keep">
                  플로림의 스마트 빌딩 제어 시스템은 빌딩, 지하주차장, 사무실 등 실내 환경에 최적화된 스마트 조명 제어망입니다. 단순한 점소등을 넘어, <strong className="text-white font-medium">공간의 활용도와 주변 환경 데이터를 실시간으로 수집</strong>하여 능동적으로 반응합니다.
                </p>
              </div>
              
              <div className="pt-6 md:pt-8 border-t border-slate-700/50">
                <ul className="space-y-3 md:space-y-4 text-slate-300 text-xs md:text-sm font-light bg-[#050b14] p-5 md:p-7 rounded-2xl md:rounded-3xl border border-slate-700 shadow-inner">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="flex-1 leading-relaxed break-keep">관리자 대시보드를 통해 구역별 정밀한 스케줄링 및 원격 그룹 제어 지원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="flex-1 leading-relaxed break-keep">쾌적한 실내 환경을 조성하고 획기적인 건물 유지비용(OPEX) 절감 달성</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="flex-1 leading-relaxed break-keep">매월 ESG 리포트를 발행하여 탄소 배출 저감 성과 증빙 및 기업 가치 제고</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#050b14] rounded-2xl md:rounded-3xl border border-slate-700 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                <img 
                  src="/images/building.jpg" 
                  alt="스마트 빌딩 단면도" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"; }}
                />
                <div className="absolute inset-0 border border-slate-600/30 rounded-2xl md:rounded-3xl pointer-events-none"></div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-slate-700 shadow-lg">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-flolim rounded-full animate-pulse shadow-[0_0_10px_rgba(24,169,198,1)]"></span>
                  <span className="text-[10px] md:text-[11px] font-bold text-white tracking-widest">스마트 빌딩 인프라</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 압도적 절감 효과 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none translate-y-1/4 translate-x-1/4"></div>

          <div className="text-center mb-10 md:mb-12 relative z-10 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 break-keep">단순한 교체를 넘은 획기적 절감</h2>
            <p className="text-slate-400 font-light text-xs md:text-base break-keep">
              단순한 LED 교체를 넘어, IoT 센서 연동 제어로 <strong className="text-flolim font-bold">최대 70% 이상의 압도적인 에너지 절감률</strong>을 실현합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* 💡 [Map 렌더링] */}
            {cases.map((c) => (
              <div key={c.id} className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden cursor-default">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors break-keep">{c.region}</h3>
                  <p className="text-[11px] md:text-xs text-slate-500 font-medium mb-6 break-keep">{c.location}</p>
                  <div className="flex items-end gap-2 mb-4">
                    {c.prefix && <span className="text-slate-400 font-bold mb-1 text-xs md:text-sm mr-1">{c.prefix}</span>}
                    <span className="text-3xl md:text-4xl font-black text-flolim tracking-tight drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">{c.percent}<span className="text-lg md:text-2xl font-medium ml-0.5">%</span></span>
                    {c.label && <span className="text-slate-400 font-bold mb-1 text-xs md:text-sm break-keep">{c.label}</span>}
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light break-keep">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 하위 솔루션(IoT 센서) 라우팅 안내 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="text-center mb-8 md:mb-10 relative z-10 px-2">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 break-keep">빌딩 에너지를 지휘하는 스마트 두뇌</h2>
            <p className="text-slate-400 font-light text-xs md:text-base leading-relaxed break-keep">
              플로림 스마트 빌딩은 폐쇄망 형태의 현장 전용 서버(On-Premise)와 첨단 IoT 센서망을 결합하여, <br className="hidden md:block"/>
              외부 통신 장애 시에도 100% 끊김 없는 무중단 제어를 보장합니다.
            </p>
          </div>

          <div className="flex justify-center relative z-10">
            <Link to="/smart-building/sensor" className="bg-[#050b14] border border-slate-700 shadow-inner rounded-3xl p-6 md:p-8 hover:border-flolim hover:bg-slate-800/80 active:scale-[0.98] active:border-flolim transition-all duration-300 group flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full max-w-4xl cursor-pointer relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-900 rounded-2xl flex items-center justify-center text-flolim border border-slate-700 group-hover:bg-flolim group-hover:text-white transition-colors shrink-0 shadow-sm relative z-10">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
              </div>
              <div className="flex-grow text-center md:text-left relative z-10">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors break-keep">IoT 센서 자동 제어</h4>
                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed break-keep">
                  재실 감지, 조도 연동 디밍 등 공간을 스스로 제어하는 스마트 센서망 시뮬레이터와 무중단 로컬 제어망(On-Premise)의 기술 상세 사양을 확인해 보세요.
                </p>
              </div>
              <div className="text-flolim opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 hidden md:block relative z-10">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </Link>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 카테고리', title: 'DMX 경관조명', path: '/smart-city/dmx' }}
          next={{ label: '다음 페이지', title: 'IoT 센서 자동 제어', path: '/smart-building/sensor' }}
        />

      </div>
    </div>
  );
};

export default SmartBuildingIntro;