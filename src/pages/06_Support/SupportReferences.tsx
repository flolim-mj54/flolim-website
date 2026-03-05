import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 레퍼런스 데이터 모델 (브로슈어 100% 반영)
const referencesData = [
  {
    id: 1,
    category: 'city',
    title: '경기도 안산시 (안산스마트허브)',
    desc: '산단 내 1,594개 노후 가로등 교체 및 IoT 조명제어 장치 적용 완료',
    highlight: '에너지 및 탄소 배출 70% 감축',
    imgPlaceholder: '안산시 가로등 야경'
  },
  {
    id: 2,
    category: 'city',
    title: '서울특별시 금천구 (G밸리)',
    desc: '도심지 도로변 보행자 및 교통량 감지 연동형 스마트 가로등 601개 구축',
    highlight: '연간 60,000 kWh 전력 요금 절감',
    imgPlaceholder: 'G밸리 스마트 가로등'
  },
  {
    id: 3,
    category: 'city',
    title: '미국 시카고 (Chicago, USA)',
    desc: '28만 개의 노후 조명을 스마트 LED로 교체하는 초대형 인프라 구축 완료',
    highlight: '글로벌 스마트 시티 구축 사례',
    imgPlaceholder: '시카고 도심 야경'
  },
  {
    id: 4,
    category: 'building',
    title: '네덜란드 암스테르담 The Edge 빌딩',
    desc: '6,500개의 스마트 LED와 IoT 센서가 결합된 세계 최고 수준의 친환경 스마트 오피스 구축',
    highlight: '세계 최고 수준 친환경 오피스',
    imgPlaceholder: 'The Edge 빌딩 내부'
  },
  {
    id: 5,
    category: 'building',
    title: '중국 베이징 CABR 빌딩',
    desc: '재실 및 자연광 연동 IoT 스마트 조명 제어를 통해 제로 에너지 빌딩(ZEB) 환경 실현',
    highlight: '제로 에너지 빌딩(ZEB) 실현',
    imgPlaceholder: 'CABR 빌딩 스마트 오피스'
  },
  {
    id: 6,
    category: 'building',
    title: '대한민국 서산 한일플라스틱 공장',
    desc: '스마트 조명 플랫폼 기반 개별/그룹 정밀 제어 도입으로 공장 전력 74.1% 절감 달성',
    highlight: '공장 전력 74.1% 절감',
    imgPlaceholder: '서산 공장 고소작업 시공'
  },
  {
    id: 7,
    category: 'city',
    title: '세종시 스마트 가로등 실증',
    desc: '기존 가로등을 LED로 교체 후 지능형 제어 시스템을 적용하여 에너지를 최적화',
    highlight: '기존 대비 총 64% 절감',
    imgPlaceholder: '세종시 스마트 가로등'
  },
  {
    id: 8,
    category: 'building',
    title: '연천 전곡중학교 실증',
    desc: '학교 및 사무실 환경에 자연광 연동 광센서 조광 제어 시스템 적용',
    highlight: '일반 LED 대비 43% 추가 절감',
    imgPlaceholder: '전곡중학교 교실'
  },
  {
    id: 9,
    category: 'city',
    title: '영국 런던시 스마트 가로등',
    desc: '1만 4천 개 스마트 가로등 제어망 구축으로 막대한 예산 및 유지보수 비용 혁신',
    highlight: '매년 예산 약 7억 원 절감',
    imgPlaceholder: '런던 템즈강 야경'
  }
];

const SupportReferences = () => {
  // 필터 상태 관리 ('all', 'city', 'building')
  const [filter, setFilter] = useState<'all' | 'city' | 'building'>('all');

  // 선택된 필터에 따라 데이터 렌더링
  const filteredReferences = referencesData.filter(ref => filter === 'all' || ref.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">국내/외 구축 사례</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            국내 주요 국가산업단지부터 글로벌 스마트 시티까지.<br/>
            눈에 보이는 수치로 <strong className="text-blue-600 font-bold">압도적인 절감 효과를 증명</strong>합니다.
          </p>
        </div>

        {/* 1. 카테고리 필터 버튼 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-full font-bold transition-all ${filter === 'all' ? 'bg-gray-800 text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100'}`}
          >
            전체 보기
          </button>
          <button 
            onClick={() => setFilter('city')}
            className={`px-6 py-2.5 rounded-full font-bold transition-all ${filter === 'city' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100'}`}
          >
            🏙️ 스마트 시티 (실외)
          </button>
          <button 
            onClick={() => setFilter('building')}
            className={`px-6 py-2.5 rounded-full font-bold transition-all ${filter === 'building' ? 'bg-green-600 text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100'}`}
          >
            🏢 스마트 빌딩 (실내)
          </button>
        </div>

        {/* 2. 레퍼런스 카드 갤러리 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredReferences.map((ref) => (
            <div key={ref.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              {/* 썸네일 이미지 영역 (Placeholder) */}
              <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden flex items-center justify-center">
                 <div className="text-slate-400 font-medium group-hover:scale-110 transition-transform duration-500">
                   [{ref.imgPlaceholder} 사진]
                 </div>
                 
                 {/* 카테고리 뱃지 */}
                 <div className="absolute top-4 left-4">
                   <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${ref.category === 'city' ? 'bg-blue-600' : 'bg-green-600'}`}>
                     {ref.category === 'city' ? '스마트 시티' : '스마트 빌딩'}
                   </span>
                 </div>
                 
                 {/* 하단 그라데이션 및 핵심 하이라이트 문구 */}
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5 pt-12">
                   <span className="text-yellow-400 font-black text-sm drop-shadow-md flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> {ref.highlight}
                   </span>
                 </div>
              </div>

              {/* 텍스트 정보 영역 */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {ref.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {ref.desc}
                </p>
                <div className="mt-auto">
                  <button className="text-sm font-bold text-gray-400 group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                    자세히 보기 <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 자료실로 넘어가는 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <Link to="/platform/esg" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">ESG 경영 성과 리포트</span>
          </Link>
          <Link to="/support/archive" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">다음 페이지 →</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">자료실 (인증서/브로슈어)</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SupportReferences;
