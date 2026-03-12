import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // 💡 '준비중' 팝업 뱃지 상태 관리
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    // 💡 [수정됨] 멘트 간결화 및 '서비스'로 명칭 변경
    setToastMessage('현재 준비 중인 서비스입니다.');
    
    // 3초 뒤에 팝업을 다시 숨깁니다.
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <footer className="bg-[#050b14] border-t border-slate-800 pt-12 md:pt-16 pb-8 text-slate-400 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flolim/30 to-transparent"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-4 md:gap-6 lg:gap-10 mb-10 md:mb-12 border-b border-slate-800 pb-10 md:pb-12">
          
          <div className="sm:col-span-5 lg:col-span-5">
            <div className="flex items-center mb-4 md:mb-6">
              <span className="text-xl md:text-2xl font-black tracking-tight">
                <span className="text-flolim drop-shadow-[0_0_10px_rgba(24,169,198,0.5)]">FLO</span>
                <span className="text-white">LIM</span>
              </span>
            </div>
            <p className="text-[11px] sm:text-xs md:text-sm font-light leading-relaxed mb-6 max-w-sm break-keep">
              세상을 밝히는 지능형 연결.<br />
              플로림은 지능형 데이터 분석과 첨단 IoT 센서 네트워크를 통해 도시와 빌딩의 에너지를 가장 스마트하게 통제합니다.
            </p>
            
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {/* X (Twitter) 로고 */}
              <button 
                onClick={handleComingSoon}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-flolim hover:text-slate-900 active:scale-95 transition-all cursor-pointer border border-slate-700 hover:border-flolim"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              
              {/* Instagram 로고 */}
              <button 
                onClick={handleComingSoon}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-flolim hover:text-slate-900 active:scale-95 transition-all cursor-pointer border border-slate-700 hover:border-flolim"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.045 3.242.085 4.805 1.649 4.89 4.89.033 1.266.045 1.646.045 4.85s-.012 3.584-.045 4.85c-.085 3.242-1.649 4.805-4.89 4.89-1.266.033-1.646.045-4.85.045s-3.584-.012-4.85-.045c-3.242-.085-4.805-1.649-4.89-4.89-.033-1.266-.045-1.646-.045-4.85s.012-3.584.045-4.85c.085-3.242 1.649-4.805 4.89-4.89 1.266-.033 1.646-.045 4.85-.045zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="sm:col-span-3 lg:col-span-3 pt-6 sm:pt-0">
            <h4 className="text-white font-bold mb-4 md:mb-5">Quick Links</h4>
            <ul className="space-y-2.5 md:space-y-3 text-[11px] sm:text-xs md:text-sm">
              <li><Link to="/company/intro" className="hover:text-flolim transition-colors break-keep">플로림 소개</Link></li>
              <li><Link to="/business/esco" className="hover:text-flolim transition-colors break-keep">KEPCO ES 연계 사업 (ESCO)</Link></li>
              <li><Link to="/smart-city/intro" className="hover:text-flolim transition-colors break-keep">스마트 시티 솔루션</Link></li>
              <li><Link to="/smart-building/intro" className="hover:text-flolim transition-colors break-keep">스마트 빌딩 솔루션</Link></li>
              <li><Link to="/support/references" className="hover:text-flolim transition-colors break-keep">도입(실증) 사례</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-4 lg:col-span-4 pt-6 sm:pt-0">
            <h4 className="text-white font-bold mb-4 md:mb-5">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4 text-[11px] sm:text-xs md:text-sm">
              <li className="flex items-start gap-2.5 md:gap-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="leading-relaxed break-keep">충청남도 천안시 서북구 2공단4로 40-11<br className="hidden sm:block" /> 천안G1비즈캠퍼스 1223호</span>
              </li>
              <li className="flex items-center gap-2.5 md:gap-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="font-bold text-white tracking-wider">1660-0687</span>
              </li>
              <li className="flex items-center gap-2.5 md:gap-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-flolim shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:sales@flolim.com" className="hover:text-white transition-colors">sales@flolim.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 text-[10px] md:text-xs font-light">
          <p>© 2026 FLOLIM Co., Ltd. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" onClick={handleComingSoon} className="hover:text-white transition-colors">이용약관</a>
            <a href="#" onClick={handleComingSoon} className="text-white font-medium hover:text-flolim transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>

      {/* '준비중' 토스트 팝업 UI */}
      <div 
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-500 ease-out ${
          toastMessage ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-slate-900/90 backdrop-blur-xl border border-flolim/50 text-white px-5 py-3 md:px-6 md:py-3.5 rounded-full shadow-[0_10px_40px_rgba(24,169,198,0.3)] flex items-center gap-3">
          <div className="w-6 h-6 md:w-7 md:h-7 bg-flolim/20 rounded-full flex items-center justify-center text-flolim shrink-0">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <span className="text-xs md:text-sm font-bold tracking-wide whitespace-nowrap pr-2">
            {toastMessage}
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;