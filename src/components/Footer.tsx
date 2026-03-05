import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16 border-t-4 border-flolim">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* 1. 기업 정보 영역 (넓은 영역 차지) */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-3">
              <h2 className="text-4xl font-black tracking-tight">
                <span className="text-flolim">Flo</span><span className="text-white">Lim</span>
              </h2>
            </Link>
            <p className="text-sm text-flolim font-bold mb-8 uppercase tracking-widest">
              The beginning of smart business
            </p>
            <ul className="space-y-4 text-sm font-light text-slate-400">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-slate-500">📍</span>
                <span className="leading-relaxed">
                  [본사] 충남 천안시 서북구 2공단4로 40-11<br />
                  천안G1비즈캠퍼스 1223호 주식회사 플로림
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-slate-500">📞</span>
                <span className="font-mono text-base text-slate-200 font-medium">1660-0687</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-slate-500">✉️</span>
                <a href="mailto:sales@flolim.com" className="hover:text-flolim transition-colors font-medium">
                  sales@flolim.com
                </a>
              </li>
            </ul>
          </div>

          {/* 2. 사이트맵 - 핵심 솔루션 */}
          <div>
            <h3 className="text-white font-bold mb-6 border-b border-slate-700 pb-3 inline-block">솔루션</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/smart-city/intro" className="hover:text-flolim transition-colors">스마트 시티 (가로등)</Link></li>
              <li><Link to="/smart-building/intro" className="hover:text-flolim transition-colors">스마트 빌딩 (실내 LED)</Link></li>
              <li><Link to="/smart-city/lora" className="hover:text-flolim transition-colors">LoRa-Mesh 자가망 통신</Link></li>
              <li><Link to="/smart-city/nb-iot" className="hover:text-flolim transition-colors">NB-IoT 상용망 통신</Link></li>
              <li><Link to="/smart-building/sensor" className="hover:text-flolim transition-colors">IoT 센서 자동 제어</Link></li>
            </ul>
          </div>

          {/* 3. 사이트맵 - 플랫폼 및 비즈니스 */}
          <div>
            <h3 className="text-white font-bold mb-6 border-b border-slate-700 pb-3 inline-block">플랫폼 & 비즈니스</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/platform/dashboard" className="hover:text-flolim transition-colors">통합 관제 대시보드</Link></li>
              <li><Link to="/platform/esg" className="hover:text-flolim transition-colors">ESG 경영 성과 리포트</Link></li>
              <li><Link to="/business/esco" className="hover:text-flolim transition-colors">KEPCO 연계 ESCO</Link></li>
              <li><Link to="/business/simulation" className="hover:text-flolim transition-colors">에너지 절감 시뮬레이션</Link></li>
            </ul>
          </div>

          {/* 4. 사이트맵 - 기업 및 지원 */}
          <div>
            <h3 className="text-white font-bold mb-6 border-b border-slate-700 pb-3 inline-block">플로림 & 지원</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/company/intro" className="hover:text-flolim transition-colors">회사 소개</Link></li>
              <li><Link to="/support/references" className="hover:text-flolim transition-colors">구축 사례 (레퍼런스)</Link></li>
              <li><Link to="/support/archive" className="hover:text-flolim transition-colors">자료실 (인증/성적서)</Link></li>
              <li><Link to="/support/contact" className="text-flolim font-bold hover:text-cyan-300 transition-colors">온라인 도입 문의 →</Link></li>
            </ul>
          </div>

        </div>

        {/* 하단 카피라이트 및 약관 */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light">
          <p>Copyright © {new Date().getFullYear()} FloLim Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link to="#" className="hover:text-white transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;