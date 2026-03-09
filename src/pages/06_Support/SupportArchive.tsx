import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const archiveData = [
  { id: 1, type: 'cert', title: '키엘(KILT) 시험성적서', desc: '고효율에너지기자재 인증 신청용 (스마트LED조명제어시스템)', date: '2026.02.25', ext: 'PDF', size: '1.2 MB' },
  { id: 2, type: 'cert', title: '여성기업확인서', desc: '중소벤처기업청 발급 공식 여성기업 인증서', date: '2026.02.20', ext: 'PDF', size: '0.8 MB' },
  { id: 3, type: 'cert', title: '창업기업확인서', desc: '중소벤처기업부 발급 창업기업 확인 증명서', date: '2026.02.03', ext: 'PDF', size: '0.7 MB' },
  { id: 4, type: 'cert', title: '중소기업확인서 (소기업)', desc: '중소벤처기업부 발급 중소기업(소상공인) 확인서', date: '2026.01.06', ext: 'PDF', size: '0.7 MB' },
  { id: 5, type: 'doc', title: '플로림 스마트 IoT 제어시스템 통합 브로슈어', desc: '2026년 최신 플로림 솔루션 및 비즈니스 모델 안내서', date: '2026.03.04', ext: 'PDF', size: '5.4 MB' },
  { id: 6, type: 'doc', title: 'LoRa-Mesh 무선 단말기 설치 및 세팅 매뉴얼', desc: '현장 시공 가이드 및 시스템 초기 세팅 매뉴얼', date: '2025.11.15', ext: 'PDF', size: '2.1 MB' }
];

const SupportArchive = () => {
  const [filter, setFilter] = useState<'all' | 'cert' | 'doc'>('all');
  const filteredData = archiveData.filter(item => filter === 'all' || item.type === filter);

  return (
    <div className="pb-10">
      <PageHeader 
        category="Download Center"
        title="자료실 및 인증 현황"
        subtitle={
          <>
            <span className="text-white font-bold">플로림</span>의 뛰어난 기술력과 신뢰도를 증명하는<br className="hidden md:block" />
            <strong className="text-flolim font-bold">공식 인증서 및 기술 자료</strong>를 확인하세요.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-slate-800 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <svg className="w-6 h-6 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            획득 진행 중인 주요 인증 및 파트너십
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#0a1128] rounded-2xl p-6 border border-flolim/30 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_15px_rgba(24,169,198,0.1)] group hover:border-flolim/60 transition-colors">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-flolim/10 blur-2xl rounded-full"></div>
              <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mb-4 relative z-10 group-hover:border-flolim/50 transition-colors">
                <svg className="w-6 h-6 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="font-bold text-white mb-2 relative z-10">KISA IoT 보안인증</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed break-keep relative z-10">국가 공인 보안 기준 충족을 통한 네트워크 안전성 확보</p>
              <div className="mt-auto bg-flolim/10 text-flolim border border-flolim/30 text-xs font-bold px-4 py-1.5 rounded-full w-full relative z-10">
                심사 진행 중 (7월 목표)
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 flex flex-col items-center text-center group hover:border-flolim/50 transition-colors">
              <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:border-flolim/50 transition-colors">
                <svg className="w-6 h-6 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="font-bold text-white mb-2">고효율기자재 인증</h3>
              <p className="text-xs text-slate-400 mb-4">에너지 절감 효과를 국가로부터 공식 인정받는 규격</p>
              <div className="mt-auto bg-slate-900 text-slate-300 border border-slate-600 text-xs font-bold px-4 py-1.5 rounded-full w-full">절차 진행 중</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 flex flex-col items-center text-center group hover:border-flolim/50 transition-colors">
              <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:border-flolim/50 transition-colors">
                <svg className="w-6 h-6 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="font-bold text-white mb-2">조달청 나라장터 등록</h3>
              <p className="text-xs text-slate-400 mb-4">공공기관 및 지자체 대상 투명하고 신속한 제품 공급망</p>
              <div className="mt-auto bg-slate-900 text-slate-300 border border-slate-600 text-xs font-bold px-4 py-1.5 rounded-full w-full">절차 진행 중</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 flex flex-col items-center text-center group hover:border-flolim/50 transition-colors">
              <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:border-flolim/50 transition-colors">
                <svg className="w-6 h-6 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="font-bold text-white mb-2">켑코이에스(ESCO)</h3>
              <p className="text-xs text-slate-400 mb-4">한국전력공사 출자 기업 파트너십을 통한 효율화 사업</p>
              <div className="mt-auto bg-slate-900 text-slate-300 border border-slate-600 text-xs font-bold px-4 py-1.5 rounded-full w-full">절차 진행 중</div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white">문서 다운로드 센터</h2>
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'all' ? 'bg-slate-800 text-flolim shadow-sm border border-slate-700' : 'text-slate-500 hover:text-slate-300'}`}>
                전체 보기
              </button>
              <button onClick={() => setFilter('cert')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-1 ${filter === 'cert' ? 'bg-slate-800 text-flolim shadow-sm border border-slate-700' : 'text-slate-500 hover:text-slate-300'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                인증/성적서
              </button>
              <button onClick={() => setFilter('doc')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-1 ${filter === 'doc' ? 'bg-slate-800 text-flolim shadow-sm border border-slate-700' : 'text-slate-500 hover:text-slate-300'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                브로슈어/매뉴얼
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredData.map((item) => (
              <div key={item.id} className="bg-slate-900/50 p-6 rounded-2xl shadow-sm border border-slate-800 hover:border-flolim/50 hover:shadow-[0_0_20px_rgba(24,169,198,0.1)] transition-all group flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border bg-flolim/10 border-flolim/30 text-flolim`}>
                  {item.type === 'cert' ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                  )}
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border bg-flolim/10 border-flolim/30 text-flolim`}>
                      {item.type === 'cert' ? 'Certificate' : 'Document'}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-flolim transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-300 bg-slate-800 hover:bg-flolim/10 hover:text-flolim hover:border-flolim/50 px-4 py-2 rounded-lg transition-colors border border-slate-700 w-fit">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    {item.ext} 다운로드 <span className="text-xs font-normal text-slate-500 ml-1">({item.size})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 카테고리', title: 'ESG 성과 리포트', path: '/platform/esg' }}
          next={{ label: '다음 페이지', title: '구축 사례', path: '/support/references' }}
        />
      </div>
    </div>
  );
};

export default SupportArchive;