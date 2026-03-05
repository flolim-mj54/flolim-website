import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 최신 브로슈어 데이터를 반영한 자료실 목업 데이터
const archiveData = [
  {
    id: 1,
    type: 'cert',
    title: '키엘(KILT) 시험성적서',
    desc: '고효율에너지기자재 인증 신청용 (스마트LED조명제어시스템)',
    date: '2026.02.25',
    ext: 'PDF',
    size: '1.2 MB'
  },
  {
    id: 2,
    type: 'cert',
    title: '여성기업확인서',
    desc: '중소벤처기업청 발급 공식 여성기업 인증서',
    date: '2026.02.20',
    ext: 'PDF',
    size: '0.8 MB'
  },
  {
    id: 3,
    type: 'cert',
    title: '창업기업확인서',
    desc: '중소벤처기업부 발급 창업기업 확인 증명서',
    date: '2026.02.03',
    ext: 'PDF',
    size: '0.7 MB'
  },
  {
    id: 4,
    type: 'cert',
    title: '중소기업확인서 (소기업)',
    desc: '중소벤처기업부 발급 중소기업(소상공인) 확인서',
    date: '2026.01.06',
    ext: 'PDF',
    size: '0.7 MB'
  },
  {
    id: 5,
    type: 'doc',
    title: '플로림 스마트 IoT 제어시스템 통합 브로슈어',
    desc: '2026년 최신 플로림 솔루션 및 비즈니스 모델 안내서',
    date: '2026.03.04',
    ext: 'PDF',
    size: '5.4 MB'
  },
  {
    id: 6,
    type: 'doc',
    title: 'LoRa-Mesh 무선 단말기 설치 및 세팅 매뉴얼',
    desc: '현장 시공 가이드 및 시스템 초기 세팅 매뉴얼',
    date: '2025.11.15',
    ext: 'PDF',
    size: '2.1 MB'
  }
];

const SupportArchive = () => {
  // 필터 상태 (all, cert: 인증서, doc: 브로슈어/매뉴얼)
  const [filter, setFilter] = useState<'all' | 'cert' | 'doc'>('all');

  const filteredData = archiveData.filter(item => filter === 'all' || item.type === filter);

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">자료실 및 인증 현황</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            플로림의 뛰어난 기술력과 신뢰도를 증명하는 <strong className="text-blue-600 font-bold">공식 인증서 및 기술 자료</strong>를 확인하세요.
          </p>
        </div>

        {/* 1. 진행 중인 핵심 인증 현황 (브로슈어 내용 강조) */}
        <section className="bg-white rounded-3xl p-10 shadow-md border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <span className="text-blue-600">🚀</span> 획득 진행 중인 주요 인증 및 파트너십
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* KISA IoT 보안인증 */}
            <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex flex-col items-center text-center relative overflow-hidden">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-3xl">🛡️</div>
              <h3 className="font-bold text-gray-800 mb-2">KISA IoT 보안인증</h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed break-keep">국가 공인 보안 기준 충족을 통한 최고 수준의 네트워크 안전성 확보</p>
              <div className="mt-auto bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full w-full">
                심사 진행 중 (7월 목표)
              </div>
            </div>

            {/* 고효율기자재 인증 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-3xl">⚡</div>
              <h3 className="font-bold text-gray-800 mb-2">고효율기자재 인증</h3>
              <p className="text-xs text-gray-500 mb-4">에너지 절감 효과를 국가로부터 공식 인정받는 고효율 기자재 등록</p>
              <div className="mt-auto bg-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full w-full">
                절차 진행 중
              </div>
            </div>

            {/* 조달청 등록 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-3xl">🏛️</div>
              <h3 className="font-bold text-gray-800 mb-2">조달청 나라장터 등록</h3>
              <p className="text-xs text-gray-500 mb-4">공공기관 및 지자체 대상 투명하고 신속한 제품 공급망 구축</p>
              <div className="mt-auto bg-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full w-full">
                절차 진행 중
              </div>
            </div>

            {/* ESCO 파트너사 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-3xl">🤝</div>
              <h3 className="font-bold text-gray-800 mb-2">켑코이에스(ESCO) 등록</h3>
              <p className="text-xs text-gray-500 mb-4">한국전력공사 출자 기업 파트너십을 통한 에너지 효율화 사업 연계</p>
              <div className="mt-auto bg-gray-200 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full w-full">
                절차 진행 중
              </div>
            </div>

          </div>
        </section>

        {/* 2. 다운로드 자료실 (필터 및 리스트) */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-800">문서 다운로드 센터</h2>
            
            {/* 카테고리 필터 */}
            <div className="flex bg-gray-100 p-1 rounded-xl">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'all' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                전체 보기
              </button>
              <button 
                onClick={() => setFilter('cert')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'cert' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                🏅 인증서 및 성적서
              </button>
              <button 
                onClick={() => setFilter('doc')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'doc' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                📑 브로슈어 및 매뉴얼
              </button>
            </div>
          </div>

          {/* 자료실 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredData.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all group flex items-start gap-5">
                {/* 아이콘 */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-2xl ${item.type === 'cert' ? 'bg-amber-50 text-amber-500' : 'bg-blue-50 text-blue-500'}`}>
                  {item.type === 'cert' ? '🏅' : '📑'}
                </div>
                
                {/* 정보 */}
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.type === 'cert' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                      {item.type === 'cert' ? 'Certificate' : 'Document'}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  
                  {/* 다운로드 버튼 */}
                  <button className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors border border-gray-100 w-fit">
                    <span className="text-lg">⤓</span> {item.ext} 다운로드 <span className="text-xs font-normal text-gray-400 ml-1">({item.size})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 온라인 문의로 넘어가는 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <Link to="/support/references" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">구축 사례 (레퍼런스)</span>
          </Link>
          <Link to="/support/contact" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">다음 페이지 →</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">온라인 문의 (Contact Us)</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SupportArchive;
