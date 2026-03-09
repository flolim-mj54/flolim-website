import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const SmartBuildingSensor = () => {
  const [isInternetConnected, setIsInternetConnected] = useState(true);

  return (
    <div className="pb-10">
      <PageHeader 
        category="On-Premise Control"
        title="IoT 센서 자동 제어 솔루션"
        subtitle={
          <>
            복잡한 통신선 없이 간편하게, 딜레이 없이 즉각적으로.<br/>
            <strong className="text-flolim font-bold">어떤 상황에서도 끊기지 않는 100% 무중단 제어망</strong>을 구축합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-xl border border-slate-800 mb-16 flex flex-col lg:flex-row gap-12 items-center hover:border-flolim/30 transition-colors">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              외부 인터넷이 끊겨도<br/><span className="text-flolim">조명은 멈추지 않습니다</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 font-light">
              플로림의 스마트 LED 제어 솔루션은 외부 클라우드에 의존하지 않고, 건물 내부에 직접 설치하는 <strong className="font-bold text-white">현장 전용 서버(On-Premise)</strong>를 중심으로 작동합니다. 
              외부망 장애가 발생하더라도, 로컬 서버와 조명 간의 내부 무선망은 독립적으로 유지되어 365일 완벽하게 제어됩니다.
            </p>
            <div className="bg-slate-800/80 border-l-4 border-flolim p-5 rounded-r-xl">
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                천장을 뜯고 통신선을 깔아야 하는 복잡한 배선 공사 없이 무선으로 구축되므로, 기존 건물에도 <strong className="text-flolim">영업 방해 없이 빠르게 설치</strong>할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex flex-col items-center bg-[#0a1128] p-8 rounded-2xl border border-slate-700 relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>

             <div className="flex justify-between w-full mb-8 relative z-10">
                <div className={`flex flex-col items-center transition-opacity duration-500 ${isInternetConnected ? 'opacity-100' : 'opacity-30'}`}>
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-colors ${isInternetConnected ? 'bg-slate-800 text-flolim border border-flolim/50 shadow-[0_0_15px_rgba(24,169,198,0.3)]' : 'bg-slate-800 text-slate-600 border border-slate-700'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider">EXTERNAL CLOUD</span>
                </div>

                <div className="flex-1 flex items-center justify-center px-4 relative">
                   <div className={`w-full h-1 border-t-2 border-dashed transition-colors duration-500 ${isInternetConnected ? 'border-flolim/50' : 'border-red-500'}`}></div>
                   {isInternetConnected && <div className="absolute w-2 h-2 bg-flolim rounded-full animate-ping shadow-[0_0_10px_rgba(24,169,198,1)]"></div>}
                   {!isInternetConnected && <span className="absolute text-red-500 text-2xl font-black bg-[#0a1128] px-1">✕</span>}
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-flolim mb-2 border border-flolim/50 shadow-[0_0_15px_rgba(24,169,198,0.3)] relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-flolim rounded-full border border-[#0a1128] animate-pulse"></div>
                  </div>
                  <span className="text-[10px] font-bold text-flolim tracking-wider">LOCAL SERVER</span>
                </div>
             </div>

             <div className="w-full flex justify-end pr-7 pb-4 relative z-10">
               <div className="w-1/2 border-r-2 border-b-2 border-flolim/30 border-dashed h-8 rounded-br-xl"></div>
             </div>

             <div className="w-full flex justify-around bg-slate-900 p-5 rounded-xl border border-slate-700 relative z-10">
               <div className="flex flex-col items-center">
                 <svg className="w-6 h-6 text-flolim mb-2 shadow-[0_0_15px_rgba(24,169,198,0.2)] rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a5 5 0 116 0 3 3 0 00-6 0zM10 20h4M12 22v-2"></path></svg>
                 <span className="text-[9px] text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded">오피스 A구역</span>
               </div>
               <div className="flex flex-col items-center">
                 <svg className="w-6 h-6 text-flolim mb-2 shadow-[0_0_15px_rgba(24,169,198,0.2)] rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a5 5 0 116 0 3 3 0 00-6 0zM10 20h4M12 22v-2"></path></svg>
                 <span className="text-[9px] text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded">지하 주차장</span>
               </div>
               <div className="flex flex-col items-center">
                 <svg className="w-6 h-6 text-flolim mb-2 shadow-[0_0_15px_rgba(24,169,198,0.2)] rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a5 5 0 116 0 3 3 0 00-6 0zM10 20h4M12 22v-2"></path></svg>
                 <span className="text-[9px] text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded">복도/화장실</span>
               </div>
             </div>

             <button 
               onClick={() => setIsInternetConnected(!isInternetConnected)}
               className={`mt-8 px-6 py-2.5 rounded-full font-bold text-xs transition-all shadow-md relative z-20 ${isInternetConnected ? 'bg-slate-800 text-red-400 border border-red-500/50 hover:bg-slate-700' : 'bg-flolim text-slate-900 hover:bg-cyan-400 animate-pulse'}`}
             >
               {isInternetConnected ? '🚨 인터넷 연결 강제 종료 (장애 시뮬레이션)' : '🔄 외부 인터넷 복구하기'}
             </button>
             
             <p className={`mt-4 text-[11px] font-bold relative z-10 ${isInternetConnected ? 'text-slate-500' : 'text-flolim'}`}>
               {isInternetConnected ? '외부 클라우드 통신 원활' : '경고: 망 장애 발생! 내부 무선망으로 100% 정상 제어 중'}
             </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">스마트 실내 조명 핵심 구성 요소</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-flolim/10 rounded-bl-full z-0 group-hover:bg-flolim/20 transition-colors"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center text-xl font-black border border-slate-700">01</div>
                <h3 className="text-2xl font-bold text-white">독립형 현장 전용 서버<br/><span className="text-flolim text-sm tracking-wider uppercase font-medium">Local On-Premise Server</span></h3>
              </div>
              <p className="text-slate-400 mb-6 font-light leading-relaxed relative z-10">
                건물의 방재실이나 통신실에 설치되어, 클라우드 연결 없이 독립적으로 조명 네트워크 전체를 통제하는 핵심 두뇌입니다.
              </p>
              <ul className="space-y-3 text-sm text-slate-300 relative z-10">
                <li className="flex items-start bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <svg className="w-4 h-4 text-flolim mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  <div><strong className="block text-white mb-0.5">안전한 데이터 보관</strong>외부로 데이터를 보내지 않고 스케줄과 전력을 완벽히 보호합니다.</div>
                </li>
                <li className="flex items-start bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <svg className="w-4 h-4 text-flolim mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  <div><strong className="block text-white mb-0.5">강력한 폐쇄망 보안</strong>외부망과 단절된 폐쇄망으로 운영되어 해킹을 원천 차단합니다.</div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 hover:border-flolim/50 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-flolim/10 rounded-bl-full z-0 group-hover:bg-flolim/20 transition-colors"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-slate-800 text-flolim rounded-xl flex items-center justify-center text-xl font-black border border-slate-700">02</div>
                <h3 className="text-2xl font-bold text-white">무선 스마트 컨트롤러<br/><span className="text-flolim text-sm tracking-wider uppercase font-medium">Smart Sensor & Node</span></h3>
              </div>
              <p className="text-slate-400 mb-6 font-light leading-relaxed relative z-10">
                개별 조명 기구에 장착되어 로컬 서버의 명령을 즉각 실행하고, 공간의 주변 환경을 스스로 감지하는 똑똑한 단말기입니다.
              </p>
              <ul className="space-y-3 text-sm text-slate-300 relative z-10">
                <li className="flex items-start bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <svg className="w-4 h-4 text-flolim mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  <div><strong className="block text-white mb-0.5">기기 확장성 (Matter)</strong>국제 표준 매터(Matter) 인증 모듈을 탑재하여 호환성이 높습니다.</div>
                </li>
                <li className="flex items-start bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <svg className="w-4 h-4 text-flolim mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  <div><strong className="block text-white mb-0.5">정밀 밝기 제어</strong>0-10V, PWM, DALI 등 규격에 맞춰 세밀한 디밍을 제공합니다.</div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-800/30 text-white rounded-3xl p-10 md:p-16 mb-10 shadow-xl border border-slate-700/50 text-center">
          <h2 className="text-xl font-bold text-slate-400 mb-12 tracking-widest uppercase">System Architecture</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 font-bold text-sm md:text-base">
             <div className="bg-slate-900 py-5 px-6 rounded-2xl border border-slate-700 shadow-inner flex flex-col items-center">
               <svg className="w-6 h-6 text-slate-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
               <span>독립형 현장 서버</span>
               <span className="text-[10px] text-flolim font-normal mt-1 uppercase">On-Premise</span>
             </div>
             <div className="text-flolim rotate-90 md:rotate-0 text-2xl animate-pulse">⇌</div>
             <div className="bg-slate-900 py-5 px-6 rounded-2xl border border-slate-700 shadow-inner flex flex-col items-center">
               <svg className="w-6 h-6 text-slate-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
               <span>내부 무선망</span>
               <span className="text-[10px] text-flolim font-normal mt-1 uppercase">Matter / Thread</span>
             </div>
             <div className="text-flolim rotate-90 md:rotate-0 text-2xl animate-pulse">⇌</div>
             <div className="bg-slate-900 py-5 px-6 rounded-2xl border border-flolim/50 shadow-[0_0_15px_rgba(24,169,198,0.15)] flex flex-col items-center text-flolim">
               <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a5 5 0 116 0 3 3 0 00-6 0zM10 20h4M12 22v-2"></path></svg>
               <span>스마트 센서 및 조명</span>
               <span className="text-[10px] font-normal mt-1 uppercase">Dimming & Sensing</span>
             </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '스마트 빌딩 개요', path: '/smart-building/intro' }}
          next={{ label: '다음 카테고리', title: '통합 관제 대시보드', path: '/platform/dashboard' }}
        />
      </div>
    </div>
  );
};

export default SmartBuildingSensor;