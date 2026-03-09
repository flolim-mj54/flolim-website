import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // bg-slate-900을 bg-slate-950으로 변경
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800/50 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link to="/" className="inline-block mb-3">
              <h2 className="text-4xl font-black tracking-tight">
                <span className="text-flolim">FLO</span><span className="text-white">LIM</span>
              </h2>
            </Link>
            <p className="text-xs text-flolim font-bold mb-8 uppercase tracking-widest">
              The beginning of smart business
            </p>
            <ul className="space-y-5 text-sm font-light text-slate-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="leading-relaxed">
                  [본사] 충남 천안시 서북구 2공단4로 40-11<br />
                  천안G1비즈캠퍼스 1223호 주식회사 플로림
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="font-mono text-base text-slate-200 font-medium tracking-wide">1660-0687</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:sales@flolim.com" className="hover:text-flolim transition-colors font-medium">sales@flolim.com</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-6 text-sm">회사 소개</h3>
              <ul className="space-y-3 text-sm font-light text-slate-400">
                <li><Link to="/company/intro" className="hover:text-white transition-colors">플로림 소개</Link></li>
                <li><Link to="/company/ceo" className="hover:text-white transition-colors">CEO 인사말</Link></li>
                <li><Link to="/company/cert" className="hover:text-white transition-colors">인증 및 파트너</Link></li>
                <li><Link to="/company/history" className="hover:text-white transition-colors">연혁</Link></li>
                <li><Link to="/company/location" className="hover:text-white transition-colors">오시는 길</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 text-sm">스마트 솔루션</h3>
              <ul className="space-y-3 text-sm font-light text-slate-400">
                <li><Link to="/smart-city/intro" className="text-slate-300 hover:text-white transition-colors font-medium">스마트 시티 개요</Link></li>
                <li><Link to="/smart-city/lora" className="hover:text-white transition-colors">· LoRa-Mesh 제어</Link></li>
                <li><Link to="/smart-city/nb-iot" className="hover:text-white transition-colors">· NB-IoT 제어</Link></li>
                <li><Link to="/smart-city/dmx" className="hover:text-white transition-colors">· DMX 경관조명</Link></li>
                <li className="pt-2"><Link to="/smart-building/intro" className="text-slate-300 hover:text-white transition-colors font-medium">스마트 빌딩 개요</Link></li>
                <li><Link to="/smart-building/sensor" className="hover:text-white transition-colors">· IoT 센서 자동 제어</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 text-sm">비즈니스 & 플랫폼</h3>
              <ul className="space-y-3 text-sm font-light text-slate-400">
                <li><Link to="/business/esco" className="hover:text-white transition-colors">KEPCO 연계 ESCO</Link></li>
                <li><Link to="/business/simulation" className="hover:text-white transition-colors">절감 시뮬레이션</Link></li>
                <li className="pt-2"><Link to="/platform/dashboard" className="hover:text-white transition-colors">통합 관제 대시보드</Link></li>
                <li><Link to="/platform/esg" className="hover:text-white transition-colors">ESG 경영 리포트</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 text-sm">고객 지원</h3>
              <ul className="space-y-3 text-sm font-light text-slate-400">
                <li><Link to="/support/references" className="hover:text-white transition-colors">구축 사례</Link></li>
                <li><Link to="/support/archive" className="hover:text-white transition-colors">다운로드 자료실</Link></li>
                <li className="pt-2">
                  <Link to="/support/contact" className="text-flolim font-bold hover:text-white transition-colors flex items-center gap-1">온라인 문의 <span className="text-lg leading-none">→</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light">
          <p>Copyright © {new Date().getFullYear()} FloLim Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-slate-300 transition-colors">개인정보처리방침</Link>
            <Link to="#" className="hover:text-slate-300 transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;