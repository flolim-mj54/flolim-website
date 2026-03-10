import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050b14] border-t border-slate-800 pt-16 pb-8 text-slate-400 relative overflow-hidden">
      {/* 백그라운드 장식 */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flolim/30 to-transparent"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 border-b border-slate-800 pb-12">
          
          {/* 회사 로고 및 슬로건 (좌측 5칸) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-flolim rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(24,169,198,0.5)]">
                <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">FLOLIM</span>
            </div>
            <p className="text-sm font-light leading-relaxed mb-6 max-w-sm">
              세상을 밝히는 지능형 연결.<br />
              플로림은 딥러닝 기반의 데이터 분석과 첨단 IoT 센서 네트워크를 통해 도시와 빌딩의 에너지를 가장 스마트하게 통제합니다.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-flolim hover:text-slate-900 transition-colors cursor-pointer border border-slate-700 hover:border-flolim">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-flolim hover:text-slate-900 transition-colors cursor-pointer border border-slate-700 hover:border-flolim">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.045 3.242.085 4.805 1.649 4.89 4.89.033 1.266.045 1.646.045 4.85s-.012 3.584-.045 4.85c-.085 3.242-1.649 4.805-4.89 4.89-1.266.033-1.646.045-4.85.045s-3.584-.012-4.85-.045c-3.242-.085-4.805-1.649-4.89-4.89-.033-1.266-.045-1.646-.045-4.85s.012-3.584.045-4.85c.085-3.242 1.649-4.805 4.89-4.89 1.266-.033 1.646-.045 4.85-.045zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </div>
          </div>

          {/* Quick Links (중앙 3칸) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/company/intro" className="hover:text-flolim transition-colors">플로림 소개</Link></li>
              <li><Link to="/business/esco" className="hover:text-flolim transition-colors">KEPCO 연계 사업 (ESCO)</Link></li>
              <li><Link to="/smart-city/intro" className="hover:text-flolim transition-colors">스마트 시티 솔루션</Link></li>
              <li><Link to="/smart-building/intro" className="hover:text-flolim transition-colors">스마트 빌딩 솔루션</Link></li>
              <li><Link to="/support/references" className="hover:text-flolim transition-colors">도입(실증) 사례</Link></li>
            </ul>
          </div>

          {/* Contact Info (우측 4칸) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-flolim shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="leading-relaxed">충청남도 천안시 서북구 2공단4로 40-11<br />천안G1비즈캠퍼스 1223호</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-flolim shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="font-bold text-white tracking-wider">1660-0687</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-flolim shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:sales@flolim.com" className="hover:text-white transition-colors">sales@flolim.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 및 부가 링크 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>© 2026 FLOLIM Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">이용약관</Link>
            <Link to="#" className="text-white font-medium hover:text-flolim transition-colors">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;