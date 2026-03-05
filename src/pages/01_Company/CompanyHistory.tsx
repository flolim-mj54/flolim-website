import { Link } from 'react-router-dom';

const CompanyHistory = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10 transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-20">
          <p className="text-blue-600 font-bold tracking-widest mb-3 uppercase text-sm">History</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">플로림이 걸어온 길</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            끊임없는 혁신과 도전을 통해 새로운 가치를 창출하며,<br />
            <strong className="text-gray-900 font-bold">스마트 비즈니스의 시작</strong>을 열어가고 있습니다.
          </p>
        </div>

        {/* 연혁 타임라인 UI */}
        <div className="relative max-w-4xl mx-auto">
          {/* 중앙 수직 기준선 */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          {/* === 2026년 === */}
          <div className="mb-16 relative w-full flex flex-col md:flex-row items-start md:items-center justify-between group">
            {/* 좌측 (연도) */}
            <div className="md:w-5/12 text-left md:text-right pr-0 md:pr-12 pl-16 md:pl-0 mb-4 md:mb-0">
              <h2 className="text-5xl font-black text-blue-600 tracking-tighter drop-shadow-sm group-hover:scale-105 transition-transform origin-right">
                2026
              </h2>
            </div>
            
            {/* 중앙 아이콘 */}
            <div className="absolute left-[16px] md:left-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full transform -translate-x-1/2 mt-1 md:mt-0 shadow-md group-hover:bg-blue-600 transition-colors z-10"></div>
            
            {/* 우측 (상세 내역) */}
            <div className="md:w-5/12 pl-16 md:pl-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <ul className="space-y-5">
                  <li className="relative">
                    <span className="text-blue-600 font-bold w-12 inline-block">03월</span>
                    <span className="text-gray-700">스마트 IoT 제어시스템 통합 솔루션 론칭</span>
                  </li>
                  <li className="relative">
                    <span className="text-blue-600 font-bold w-12 inline-block">02월</span>
                    <span className="text-gray-700">키엘(KILT) 시험성적서 획득 <span className="text-xs text-gray-400 block mt-0.5">(스마트LED 조명제어시스템)</span></span>
                  </li>
                  <li className="relative">
                    <span className="text-blue-600 font-bold w-12 inline-block">02월</span>
                    <span className="text-gray-700">여성기업 및 창업기업 확인서 취득</span>
                  </li>
                  <li className="relative">
                    <span className="text-blue-600 font-bold w-12 inline-block">01월</span>
                    <span className="text-gray-700">중소기업(소기업/소상공인) 확인서 취득</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* === 2025년 === */}
          <div className="mb-16 relative w-full flex flex-col md:flex-row items-start md:items-center justify-between group">
            {/* 좌측 (연도) - 짝수 번째는 레이아웃 반전 (데스크톱 기준) */}
            <div className="md:w-5/12 text-left pr-0 md:pl-12 pl-16 md:order-3 mb-4 md:mb-0">
              <h2 className="text-5xl font-black text-gray-300 tracking-tighter group-hover:text-blue-400 group-hover:scale-105 transition-all origin-left">
                2025
              </h2>
            </div>
            
            {/* 중앙 아이콘 */}
            <div className="absolute left-[16px] md:left-1/2 w-6 h-6 bg-white border-4 border-gray-300 rounded-full transform -translate-x-1/2 mt-1 md:mt-0 shadow-sm group-hover:border-blue-400 transition-colors z-10 md:order-2"></div>
            
            {/* 우측 (상세 내역) */}
            <div className="md:w-5/12 pl-16 md:pl-0 md:pr-12 md:text-right md:order-1">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <ul className="space-y-5">
                  <li className="relative">
                    <span className="text-gray-700">주식회사 플로림 법인 설립</span>
                    <span className="text-gray-400 font-bold w-12 inline-block ml-3 md:ml-4">12월</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 시작 지점 표시 */}
          <div className="relative w-full flex justify-start md:justify-center mt-8">
            <div className="w-4 h-4 bg-gray-200 rounded-full absolute left-[24px] md:left-1/2 transform -translate-x-1/2"></div>
          </div>

        </div>

        {/* 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mt-24">
          <Link to="/company/cert" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">인증 및 파트너</span>
          </Link>
          <Link to="/company/location" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">다음 페이지 →</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">오시는 길</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompanyHistory;
