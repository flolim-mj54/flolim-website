import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          
          {/* 1. 로고 영역 (브랜드 컬러 적용) */}
          <Link to="/" className="text-3xl font-black tracking-tight flex items-center">
            <span className="text-flolim">FLO</span>
            <span className="text-slate-700">LIM</span>
          </Link>

          {/* 2. 데스크톱 메뉴 영역 */}
          <nav className="hidden md:flex space-x-10">
            
            {/* 회사 소개 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-flolim transition-colors font-bold text-slate-700 py-4">회사 소개</span>
              <div className="absolute hidden group-hover:block bg-white shadow-xl py-3 mt-2 w-44 rounded-xl border border-gray-100">
                <Link to="/company/ceo" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">CEO 인사말</Link>
                <Link to="/company/intro" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">플로림 소개</Link>
                <Link to="/company/cert" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">인증 및 파트너</Link>
                <Link to="/company/history" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">연혁</Link>
                <Link to="/company/location" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">오시는 길</Link>
              </div>
            </div>

            {/* 핵심 사업 모델 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-flolim transition-colors font-bold text-slate-700 py-4">핵심 사업 모델</span>
              <div className="absolute hidden group-hover:block bg-white shadow-xl py-3 mt-2 w-52 rounded-xl border border-gray-100">
                <Link to="/business/esco" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">KEPCO 연계 ESCO</Link>
                <Link to="/business/simulation" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">에너지 절감 시뮬레이션</Link>
              </div>
            </div>

            {/* 스마트 시티 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-flolim transition-colors font-bold text-slate-700 py-4">스마트 시티</span>
              <div className="absolute hidden group-hover:block bg-white shadow-xl py-3 mt-2 w-48 rounded-xl border border-gray-100">
                <Link to="/smart-city/intro" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">솔루션 개요</Link>
                <Link to="/smart-city/lora" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">LoRa-Mesh 제어</Link>
                <Link to="/smart-city/nb-iot" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">NB-IoT 제어</Link>
                <Link to="/smart-city/dmx" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">DMX 경관조명</Link>
              </div>
            </div>

            {/* 스마트 빌딩 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-flolim transition-colors font-bold text-slate-700 py-4">스마트 빌딩</span>
              <div className="absolute hidden group-hover:block bg-white shadow-xl py-3 mt-2 w-48 rounded-xl border border-gray-100">
                <Link to="/smart-building/intro" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">솔루션 개요</Link>
                <Link to="/smart-building/sensor" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">IoT 센서 자동 제어</Link>
              </div>
            </div>

            {/* 관제 플랫폼 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-flolim transition-colors font-bold text-slate-700 py-4">관제 플랫폼</span>
              <div className="absolute hidden group-hover:block bg-white shadow-xl py-3 mt-2 w-48 rounded-xl border border-gray-100">
                <Link to="/platform/dashboard" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">통합 대시보드</Link>
                <Link to="/platform/esg" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">ESG 경영 리포트</Link>
              </div>
            </div>

            {/* 고객 지원 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-flolim transition-colors font-bold text-slate-700 py-4">고객 지원</span>
              <div className="absolute hidden group-hover:block bg-white shadow-xl py-3 mt-2 w-44 rounded-xl border border-gray-100">
                <Link to="/support/references" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">구축 사례</Link>
                <Link to="/support/archive" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">자료실</Link>
                <Link to="/support/contact" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-slate-50 hover:text-flolim transition-colors font-medium">온라인 문의</Link>
              </div>
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;