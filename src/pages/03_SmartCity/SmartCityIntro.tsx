import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';
import FeatureCard from '../../components/FeatureCard';

const SmartCityIntro = () => {
  const sensors = [
    { id: 1, color: 'amber', title: '조도 센서', desc: '주변 밝기를 자동 감지하여 전력 낭비를 차단하는 최적의 <strong class="text-slate-300">디밍(Dimming)</strong>을 수행합니다.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-2.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /> },
    { id: 2, color: 'teal', title: '대기질 센서', desc: '별도 인프라 구축비 없이 <strong class="text-slate-300">미세먼지(PM) 및 유해가스</strong>를 실시간으로 측정하고 모니터링합니다.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 9.666a2.25 2.25 0 112.64 3.63H3m12-9.666a2.25 2.25 0 10-2.64 3.63H3m15.75 11.25a2.25 2.25 0 11-2.64-3.63H3" /> },
    { id: 3, color: 'cyan', title: '차량/보행자 감지 센서', desc: '심야 통행량에 따라 밝기를 자동 조절하여 <strong class="text-slate-300">획기적인 에너지 절감과 범죄 예방</strong>을 동시 달성합니다.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /> },
    { id: 4, color: 'sky', title: '소음/온습도 센서', desc: '기상 이변(폭염/결빙) 및 도심 소음을 감지하여 즉각적으로 대응하는 <strong class="text-slate-300">시민 안전망</strong>을 구축합니다.', icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a5.25 5.25 0 01-5.25-5.25v-8.5a5.25 5.25 0 0110.5 0v8.5A5.25 5.25 0 0112 21z" /></> },
  ];

  const cases = [
    { id: 1, region: '경기도 안산시 실증', location: '안산스마트허브 (1,594개 교체)', percent: '70', label: '감축', desc: '통행량 분석 IoT 조명제어 장치 적용으로 에너지 및 탄소 배출을 70% 감축했습니다.' },
    { id: 2, region: '서울시 강남 4구 실증', location: '유동 인구 밀집 도로 (1,500개)', prefix: '최소', percent: '50', label: '이상 절감', desc: '유동 인구가 많은 지역에서도 스마트 제어를 통해 총 912MW의 에너지를 절약했습니다.' },
    { id: 3, region: '서울시 금천구 G밸리', location: '도심지 도로변 (601개 구축)', prefix: '연간', percent: '60,000', unit: 'kWh', desc: '심야 시간대 및 교통량 연동 자동 조도 조절을 통해 막대한 전력 요금과 예산을 절감했습니다.' },
  ];

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="Smart City System"
        title="스마트 시티 제어 시스템"
        subtitle={
          <>
            양방향 IoT 통신 기반의 <strong className="text-flolim font-bold">지능형 도로조명 인프라</strong>입니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center relative z-10">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                모든 인프라가 하나로 연결되어<br />
                <span className="text-flolim">스스로 판단하고 에너지를 최적화합니다</span>
              </h2>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <p className="text-slate-400 leading-relaxed font-light text-xs md:text-sm lg:text-base break-keep">
                  플로림의 스마트 시티 솔루션은 단순한 조명 점소등을 넘어, 도로의 가로등과 보안등을 원격으로 제어하고 감시하는 완벽한 양방향 지능형 시스템입니다.
                </p>
                <p className="text-slate-400 leading-relaxed font-light text-xs md:text-sm lg:text-base break-keep">
                  각 스마트 가로등에 탑재된 IoT 기반 센서로 주변 환경을 감지하여 밝기를 자동으로 조절하고, 수집된 데이터를 분석하여 도시의 에너지를 가장 효율적으로 관리하는 인프라를 구축합니다.
                </p>
              </div>
              
              <div className="pt-6 md:pt-8 border-t border-slate-700/50">
                <ul className="space-y-3 md:space-y-4 text-slate-300 text-xs md:text-sm font-light bg-[#050b14] p-5 md:p-7 rounded-2xl md:rounded-3xl border border-slate-700 shadow-inner">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="flex-1 leading-relaxed break-keep">관제 서버와의 양방향 통신 및 현장 센싱 데이터 실시간 수집·송신</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="flex-1 leading-relaxed break-keep">차량/보행자 통행량 및 환경 센서 기반의 지능형 자동 조도 조절</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="flex-1 leading-relaxed break-keep">수집된 빅데이터 분석을 통한 도시 에너지 최적화 시나리오 구현</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#050b14] rounded-2xl md:rounded-3xl border border-slate-700 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                <img 
                  src="/images/city.jpg" 
                  alt="스마트 시티 야경" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000&auto=format&fit=crop"; }}
                />
                <div className="absolute inset-0 border border-slate-600/30 rounded-2xl md:rounded-3xl pointer-events-none"></div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-slate-700 shadow-lg">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-flolim rounded-full animate-pulse shadow-[0_0_10px_rgba(24,169,198,1)]"></span>
                  <span className="text-[10px] md:text-[11px] font-bold text-white tracking-widest">스마트 시티 인프라</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-24 relative z-10">
          <div className="text-center mb-10 md:mb-12 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 break-keep">
              단일 가로등 하나로 <br className="lg:hidden" />에너지 절감부터 환경 감시까지 완성합니다
            </h2>
            <p className="text-slate-400 font-light text-xs md:text-base break-keep">
              스마트 가로등에 탑재된 4가지 핵심 센서가 시스템에 실시간 데이터를 전달합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10">
            {sensors.map((s) => (
              <div key={s.id} className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden flex flex-col sm:flex-row gap-5 md:gap-6 items-center cursor-default">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 shrink-0 bg-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                  <div className={`absolute w-10 h-10 md:w-12 md:h-12 bg-${s.color}-400/10 rounded-full blur-xl group-hover:bg-${s.color}-400/20 transition-colors`}></div>
                  <svg className={`w-7 h-7 md:w-8 md:h-8 text-${s.color}-400 relative z-10`} fill="none" stroke="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                </div>
                <div className="relative z-10 text-center sm:text-left">
                  <h3 className={`text-base md:text-lg font-bold text-white mb-2 group-hover:text-${s.color}-400 transition-colors`}>{s.title}</h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light break-keep" dangerouslySetInnerHTML={{ __html: s.desc }}></p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none translate-y-1/4 translate-x-1/4"></div>

          <div className="text-center mb-10 md:mb-12 relative z-10 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 break-keep">기존 조명 대비 50~70%<br className="md:hidden"/> 에너지 절감 및 탄소 배출 감축을 실현합니다</h2>
            <p className="text-slate-400 text-xs md:text-lg font-light break-keep">
              눈에 보이는 수치로 증명합니다. 매월 청구되는 에너지 비용과 유지보수 예산을 획기적으로 낮춥니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {cases.map((c) => (
              <div key={c.id} className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/40 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden flex flex-col h-full cursor-default">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors break-keep">{c.region}</h3>
                  <p className="text-[11px] md:text-sm text-slate-500 font-medium mb-6 break-keep flex-grow">{c.location}</p>
                  
                  {/* 💡 [수정] 모바일/태블릿 레이아웃 보호를 위한 flex-wrap 적용 */}
                  <div className="flex flex-wrap items-end gap-x-2 gap-y-1 mt-auto mb-4">
                    {c.prefix && <span className="text-slate-400 font-bold mb-1 text-xs md:text-sm">{c.prefix}</span>}
                    <span className="text-3xl md:text-4xl font-black text-flolim tracking-tight drop-shadow-[0_0_15px_rgba(24,169,198,0.3)] whitespace-nowrap">
                      {c.percent}{c.unit ? <span className="text-lg md:text-xl font-medium ml-1">{c.unit}</span> : <span className="text-xl md:text-2xl font-medium">%</span>}
                    </span>
                    {c.label && <span className="text-slate-400 font-bold mb-1 text-xs md:text-base whitespace-nowrap">{c.label}</span>}
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light break-keep">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="text-center mb-10 md:mb-12 relative z-10 px-2">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 break-keep">시스템 구축을 위한 맞춤형 통신 솔루션</h2>
            <p className="text-slate-400 font-light text-xs md:text-base leading-relaxed break-keep">
              플로림 제어 시스템은 센서 데이터를 관제 센터로 끊김 없이 전달하기 위해,<br className="hidden md:block"/>
              현장의 지형과 시스템 규모에 맞춘 세 가지 하이브리드 통신 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full relative z-10">
            <FeatureCard 
              to="/smart-city/lora"
              icon={<svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>}
              title="LoRa-Mesh 솔루션"
              description="매월 통신비 부담 없이, 수만 개의 조명을 촘촘하게 잇는 고신뢰성 무선 그물망 자가망 시스템"
              linkText="자세히 보기"
            />
            <FeatureCard 
              to="/smart-city/nb-iot"
              icon={<svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>}
              title="NB-IoT 솔루션"
              description="중계기 설치 없이 SKT/KT 상용망 기지국과 직접 연결되어 거리 제한이 극복된 광역 통신망"
              linkText="자세히 보기"
            />
            <FeatureCard 
              to="/smart-city/dmx"
              icon={<svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
              title="DMX512 경관 솔루션"
              description="초저지연 데이터 전송으로 1,600만 풀컬러 교량 및 랜드마크 애니메이션을 연출하는 특수 제어망"
              linkText="자세히 보기"
            />
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 카테고리', title: '에너지 절감 시뮬레이션', path: '/business/simulation' }}
          next={{ label: '다음 페이지', title: 'LoRa-Mesh 제어', path: '/smart-city/lora' }}
        />
      </div>
    </div>
  );
};

export default SmartCityIntro;