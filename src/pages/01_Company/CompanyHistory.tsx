import { Link } from 'react-router-dom';

const CompanyHistory = () => {
  return (
    <div className="bg-white min-h-screen pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-40 left-0 w-96 h-96 bg-flolim rounded-full blur-[120px] opacity-10 -z-10 transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10 mt-10">
        
        <div className="text-center mb-24">
          <p className="text-flolim font-bold tracking-widest mb-4 uppercase text-sm">History</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">플로림이 걸어온 길</h1>
          <div className="w-24 h-1 bg-flolim mx-auto mb-8"></div>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            끊임없는 혁신과 도전을 통해 새로운 가치를 창출하며,<br />
            <strong className="text-slate-800 font-bold">스마트 비즈니스의 시작</strong>을 열어가고 있습니다.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 transform md:-translate-x-1/2"></div>

          {/* === 2026년 === */}
          <div className="mb-20 relative w-full flex flex-col md:flex-row items-start md:items-center justify-between group">
            <div className="md:w-5/12 text-left md:text-right pr-0 md:pr-16 pl-16 md:pl-0 mb-6 md:mb-0">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter drop-shadow-sm group-hover:text-flolim transition-colors duration-500 origin-right">
                2026
              </h2>
            </div>
            
            <div className="absolute left-[16px] md:left-1/2 w-7 h-7 bg-white border-4 border-flolim rounded-full transform -translate-x-1/2 mt-1 md:mt-0 shadow-sm group-hover:scale-125 transition-transform z-10"></div>
            
            <div className="md:w-5/12 pl-16 md:pl-16">
              {/* 내역 박스를 백색 기본 카드로 통일 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 group-hover:shadow-md group-hover:border-flolim/30 transition-all duration-500">
                <ul className="space-y-6">
                  <li className="relative flex items-start gap-4">
                    <span className="text-flolim font-black text-lg w-10 shrink-0">03월</span>
                    <span className="text-slate-700 font-medium pt-0.5">스마트 IoT 제어시스템 통합 솔루션 론칭</span>
                  </li>
                  <li className="relative flex items-start gap-4">
                    <span className="text-flolim font-black text-lg w-10 shrink-0">02월</span>
                    <div className="pt-0.5">
                      <span className="text-slate-700 font-medium">키엘(KILT) 시험성적서 획득</span>
                      <span className="text-sm text-slate-500 block mt-1 font-light">스마트LED 조명제어시스템</span>
                    </div>
                  </li>
                  <li className="relative flex items-start gap-4">
                    <span className="text-flolim font-black text-lg w-10 shrink-0">02월</span>
                    <span className="text-slate-700 font-medium pt-0.5">여성기업 및 창업기업 확인서 취득</span>
                  </li>
                  <li className="relative flex items-start gap-4">
                    <span className="text-flolim font-black text-lg w-10 shrink-0">01월</span>
                    <span className="text-slate-700 font-medium pt-0.5">중소기업(소기업/소상공인) 확인서 취득</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* === 2025년 === */}
          <div className="mb-20 relative w-full flex flex-col md:flex-row items-start md:items-center justify-between group">
            <div className="md:w-5/12 text-left pr-0 md:pl-16 pl-16 md:order-3 mb-6 md:mb-0">
              <h2 className="text-5xl md:text-6xl font-black text-slate-300 tracking-tighter group-hover:text-flolim transition-colors duration-500 origin-left">
                2025
              </h2>
            </div>
            
            <div className="absolute left-[16px] md:left-1/2 w-7 h-7 bg-white border-4 border-slate-300 rounded-full transform -translate-x-1/2 mt-1 md:mt-0 shadow-sm group-hover:border-flolim group-hover:scale-125 transition-all z-10 md:order-2"></div>
            
            <div className="md:w-5/12 pl-16 md:pl-0 md:pr-16 md:text-right md:order-1">
              {/* 내역 박스를 백색 기본 카드로 통일 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 group-hover:shadow-md group-hover:border-flolim/30 transition-all duration-500">
                <ul className="space-y-6">
                  <li className="relative flex md:justify-end items-start gap-4">
                    <span className="text-slate-700 font-medium pt-0.5 order-2 md:order-1 text-left md:text-right">주식회사 플로림 법인 설립</span>
                    <span className="text-slate-400 group-hover:text-flolim font-black text-lg w-10 shrink-0 order-1 md:order-2 text-left md:text-right transition-colors duration-500">12월</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative w-full flex justify-start md:justify-center mt-8">
            <div className="w-4 h-4 bg-slate-200 rounded-full absolute left-[24px] md:left-1/2 transform -translate-x-1/2"></div>
          </div>

        </div>

        {/* 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mt-32">
          <Link to="/company/cert" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">← 이전 페이지</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">인증 및 파트너</span>
          </Link>
          <Link to="/company/location" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-slate-400 group-hover:text-flolim transition-colors mb-1">다음 페이지 →</span>
            <span className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">오시는 길</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompanyHistory;