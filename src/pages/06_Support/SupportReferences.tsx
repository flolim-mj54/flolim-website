import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const references = [
  { id: 1, category: 'city', title: '경기도 안산시 (안산스마트허브)', desc: '산단 내 1,594개 노후 가로등 교체 및 IoT 조명제어 장치 적용 완료', highlight: '에너지 및 탄소 배출 70% 감축' },
  { id: 2, category: 'city', title: '서울특별시 금천구 (G밸리)', desc: '도심지 도로변 보행자 및 교통량 감지 연동형 스마트 가로등 601개 구축', highlight: '연간 60,000 kWh 전력 요금 절감' },
  { id: 3, category: 'city', title: '미국 시카고 (Chicago, USA)', desc: '28만 개의 노후 조명을 스마트 LED로 교체하는 초대형 인프라 구축 완료', highlight: '글로벌 스마트 시티 구축 사례' },
  { id: 4, category: 'building', title: '네덜란드 암스테르담 The Edge 빌딩', desc: '6,500개의 스마트 LED와 IoT 센서가 결합된 세계 최고 수준의 친환경 스마트 오피스', highlight: '친환경 스마트 오피스 구축' },
  { id: 5, category: 'building', title: '대한민국 서산 한일플라스틱 공장', desc: '스마트 조명 플랫폼 기반 개별/그룹 정밀 제어 도입', highlight: '공장 전력 74.1% 절감 달성' },
  { id: 6, category: 'building', title: '중국 베이징 CABR 빌딩', desc: '재실 및 자연광 연동 IoT 스마트 조명 제어를 통해 제로 에너지 빌딩(ZEB) 실현', highlight: '제로 에너지 빌딩(ZEB) 환경 실현' }
];

const SupportReferences = () => {
  const [filter, setFilter] = useState<'all' | 'city' | 'building'>('all');
  const filteredRefs = references.filter(ref => filter === 'all' || ref.category === filter);

  return (
    <div className="pb-10">
      <PageHeader 
        category="Global References"
        title="구축 사례"
        subtitle={
          <>
            국내 주요 국가산업단지부터 글로벌 스마트 시티까지,<br />
            <strong className="text-flolim font-bold">압도적인 구축 레퍼런스</strong>로 <span className="text-white font-bold">플로림</span>의 기술력을 증명합니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button onClick={() => setFilter('all')} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border ${filter === 'all' ? 'bg-flolim text-slate-900 border-flolim shadow-[0_0_15px_rgba(24,169,198,0.3)]' : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-flolim'}`}>
            전체 보기
          </button>
          <button onClick={() => setFilter('city')} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border flex items-center gap-2 ${filter === 'city' ? 'bg-flolim text-slate-900 border-flolim shadow-[0_0_15px_rgba(24,169,198,0.3)]' : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-flolim'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            스마트 시티
          </button>
          <button onClick={() => setFilter('building')} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border flex items-center gap-2 ${filter === 'building' ? 'bg-flolim text-slate-900 border-flolim shadow-[0_0_15px_rgba(24,169,198,0.3)]' : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-flolim'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            스마트 빌딩
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 min-h-[400px]">
          {filteredRefs.map((ref) => (
            <div key={ref.id} className="bg-slate-900/50 rounded-3xl overflow-hidden shadow-lg border border-slate-800 hover:border-flolim/50 hover:shadow-[0_0_20px_rgba(24,169,198,0.1)] transition-all duration-300 group flex flex-col">
              <div className="h-48 bg-[#0a1128] flex items-center justify-center relative overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 bg-flolim/5 group-hover:bg-flolim/10 transition-colors"></div>
                <svg className="w-16 h-16 text-slate-700 group-hover:text-flolim/50 transition-colors duration-500 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {ref.category === 'city' 
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> 
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  }
                </svg>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border bg-flolim/10 text-flolim border-flolim/30">
                  {ref.category === 'city' ? 'SMART CITY' : 'SMART BUILDING'}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-flolim transition-colors">
                  {ref.title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 flex-1">
                  {ref.desc}
                </p>
                <div className="bg-flolim/10 border border-flolim/30 text-flolim text-sm font-bold p-3 rounded-xl text-center mt-auto flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {ref.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '자료실', path: '/support/archive' }}
          next={{ label: '다음 페이지', title: '도입 문의', path: '/support/contact' }}
        />
      </div>
    </div>
  );
};

export default SupportReferences;