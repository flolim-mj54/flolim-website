import { useState } from 'react';
import { Link } from 'react-router-dom';

// 브로슈어의 실증 데이터 및 적용 사례 총망라
const references = [
  {
    id: 1,
    category: 'city',
    title: '경기도 안산시 (안산스마트허브)',
    desc: '산단 내 1,594개 노후 가로등 교체 및 IoT 조명제어 장치 적용 완료',
    highlight: '에너지 및 탄소 배출 70% 감축',
    img: '🌉'
  },
  {
    id: 2,
    category: 'city',
    title: '서울특별시 금천구 (G밸리)',
    desc: '도심지 도로변 보행자 및 교통량 감지 연동형 스마트 가로등 601개 구축',
    highlight: '연간 60,000 kWh 전력 요금 절감',
    img: '🏙️'
  },
  {
    id: 3,
    category: 'city',
    title: '미국 시카고 (Chicago, USA)',
    desc: '28만 개의 노후 조명을 스마트 LED로 교체하는 초대형 인프라 구축 완료',
    highlight: '글로벌 스마트 시티 구축 사례',
    img: '🇺🇸'
  },
  {
    id: 4,
    category: 'building',
    title: '네덜란드 암스테르담 The Edge 빌딩',
    desc: '6,500개의 스마트 LED와 IoT 센서가 결합된 세계 최고 수준의 친환경 스마트 오피스',
    highlight: '친환경 스마트 오피스 구축',
    img: '🏢'
  },
  {
    id: 5,
    category: 'building',
    title: '대한민국 서산 한일플라스틱 공장',
    desc: '스마트 조명 플랫폼 기반 개별/그룹 정밀 제어 도입',
    highlight: '공장 전력 74.1% 절감 달성',
    img: '🏭'
  },
  {
    id: 6,
    category: 'building',
    title: '중국 베이징 CABR 빌딩',
    desc: '재실 및 자연광 연동 IoT 스마트 조명 제어를 통해 제로 에너지 빌딩(ZEB) 실현',
    highlight: '제로 에너지 빌딩(ZEB) 환경 실현',
    img: '🇨🇳'
  },
  {
    id: 7,
    category: 'city',
    title: '세종특별자치시 스마트 가로등',
    desc: 'LED 교체 후 지능형 제어 시스템 적용 실증 사업 완료',
    highlight: '기존 대비 총 64% 에너지 절감',
    img: '🌳'
  },
  {
    id: 8,
    category: 'building',
    title: '연천 전곡중학교',
    desc: '학교 및 사무실 광센서 조광 제어 시스템 적용',
    highlight: '일반 LED 대비 43% 추가 절감',
    img: '🏫'
  }
];

const SupportReferences = () => {
  // 필터 상태 관리 (all: 전체, city: 스마트 시티, building: 스마트 빌딩)
  const [filter, setFilter] = useState<'all' | 'city' | 'building'>('all');

  const filteredRefs = references.filter(ref => filter === 'all' || ref.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen py-20 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold tracking-widest mb-3 uppercase text-sm">References</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">구축 사례</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            국내 주요 국가산업단지부터 글로벌 스마트 시티까지,<br />
            <strong className="text-blue-900 font-bold">압도적인 구축 레퍼런스</strong>로 플로림의 기술력을 증명합니다.
          </p>
        </div>

        {/* 카테고리 필터 버튼 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-bold transition-all shadow-sm ${filter === 'all' ? 'bg-blue-900 text-white' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
          >
            전체 보기
          </button>
          <button 
            onClick={() => setFilter('city')}
            className={`px-6 py-3 rounded-full font-bold transition-all shadow-sm ${filter === 'city' ? 'bg-blue-600 text-white shadow-blue-500/30' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
          >
            🌃 스마트 시티 (가로등)
          </button>
          <button 
            onClick={() => setFilter('building')}
            className={`px-6 py-3 rounded-full font-bold transition-all shadow-sm ${filter === 'building' ? 'bg-emerald-600 text-white shadow-emerald-500/30' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
          >
            🏢 스마트 빌딩 (실내 조명)
          </button>
        </div>

        {/* 레퍼런스 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredRefs.map((ref) => (
            <div key={ref.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group flex flex-col">
              {/* 이미지 영역 (아이콘 플레이스홀더) */}
              <div className="h-48 bg-slate-100 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/10 transition-colors"></div>
                <span className="transform group-hover:scale-110 transition-transform duration-500">{ref.img}</span>
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${ref.category === 'city' ? 'bg-blue-600' : 'bg-emerald-600'}`}>
                  {ref.category === 'city' ? '스마트 시티' : '스마트 빌딩'}
                </div>
              </div>
              
              {/* 콘텐츠 영역 */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {ref.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {ref.desc}
                </p>
                <div className="bg-blue-50 text-blue-800 text-sm font-bold p-3 rounded-lg text-center mt-auto border border-blue-100">
                  ✨ {ref.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <Link to="/platform/esg" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-gray-800 transition-colors mb-1">← 이전 카테고리</span>
            <span className="text-gray-700 font-bold group-hover:text-gray-900 transition-colors">ESG 성과 리포트</span>
          </Link>
          <Link to="/support/archive" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">다음 페이지 →</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">자료실 및 인증 현황</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SupportReferences;