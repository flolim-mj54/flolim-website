import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const menuItems = [
    {
      title: '회사 소개',
      path: '/company/intro',
      subItems: [
        { name: '플로림 소개', path: '/company/intro' },
        { name: 'CEO 인사말', path: '/company/ceo' },
        { name: '인증 및 파트너', path: '/company/cert' },
        { name: '연혁', path: '/company/history' },
        { name: '오시는 길', path: '/company/location' },
      ]
    },
    {
      title: '비즈니스 모델',
      path: '/business/esco',
      subItems: [
        { name: 'KEPCO ES 연계 ESCO', path: '/business/esco' }, // 💡 수정됨
        { name: '에너지 절감 시뮬레이션', path: '/business/simulation' },
      ]
    },
    {
      title: '스마트 시티 솔루션',
      path: '/smart-city/intro',
      subItems: [
        { name: '스마트 시티 개요', path: '/smart-city/intro' },
        { name: 'LoRa-Mesh 제어', path: '/smart-city/lora' },
        { name: 'NB-IoT 제어', path: '/smart-city/nb-iot' },
        { name: 'DMX 경관조명', path: '/smart-city/dmx' },
      ]
    },
    {
      title: '스마트 빌딩 솔루션',
      path: '/smart-building/intro',
      subItems: [
        { name: '스마트 빌딩 개요', path: '/smart-building/intro' },
        { name: 'IoT 센서 자동 제어', path: '/smart-building/sensor' },
      ]
    },
    {
      title: '통합 관제 플랫폼',
      path: '/platform/dashboard',
      subItems: [
        { name: '통합 관제 대시보드', path: '/platform/dashboard' },
        { name: 'ESG 경영 리포트', path: '/platform/esg' },
      ]
    },
    {
      title: '고객 지원',
      path: '/support/references',
      subItems: [
        { name: '도입(실증) 사례', path: '/support/references' },
        { name: '자료실', path: '/support/archive' },
        { name: '온라인 문의', path: '/support/contact' },
      ]
    }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#020617]/80 backdrop-blur-md border-b border-slate-800 shadow-lg py-3' 
            : 'bg-transparent py-4 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            
            <Link to="/" className="flex items-center group z-50 active:scale-95 transition-transform">
              <span className="text-xl md:text-2xl font-black tracking-tight">
                <span className="text-flolim drop-shadow-[0_0_10px_rgba(24,169,198,0.5)] group-hover:text-cyan-400 transition-colors">FLO</span>
                <span className="text-white">LIM</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={item.path} 
                    className={`text-sm font-bold transition-colors py-2 flex items-center gap-1 break-keep ${
                      location.pathname.includes(item.path.split('/')[1]) ? 'text-flolim' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.title}
                  </Link>

                  <div 
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-4 transition-all duration-300 ${
                      activeDropdown === item.title ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                    }`}
                  >
                    <div className="bg-[#050b14]/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-xl w-48 overflow-hidden py-2 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-flolim to-transparent opacity-50"></div>
                      {item.subItems.map((sub, subIdx) => (
                        <Link 
                          key={subIdx} 
                          to={sub.path} 
                          className={`block px-5 py-2.5 text-xs font-medium transition-colors hover:bg-slate-800 break-keep ${
                            location.pathname === sub.path ? 'text-flolim bg-slate-800/50' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link 
                to="/support/contact" 
                className="px-5 py-2.5 bg-flolim hover:bg-cyan-400 active:scale-95 text-slate-900 text-sm font-bold rounded-xl shadow-[0_0_15px_rgba(24,169,198,0.4)] transition-all duration-300 flex items-center gap-1.5 hover:-translate-y-0.5"
              >
                문의하기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>

            <button 
              className="lg:hidden text-white p-2 z-50 active:scale-90 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen 
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                }
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 bg-[#020617]/95 backdrop-blur-lg z-40 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="h-full overflow-y-auto pt-20 pb-10 px-6">
          <div className="flex flex-col gap-5">
            {menuItems.map((item, idx) => (
              <div key={idx} className="border-b border-slate-800 pb-3">
                <h3 className="text-flolim font-bold text-base mb-3 break-keep">{item.title}</h3>
                <div className="flex flex-col gap-2.5 pl-3 border-l border-slate-800 ml-1">
                  {item.subItems.map((sub, subIdx) => (
                    <Link 
                      key={subIdx} 
                      to={sub.path} 
                      className={`text-sm break-keep ${location.pathname === sub.path ? 'text-white font-bold' : 'text-slate-400'}`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <Link 
              to="/support/contact" 
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-flolim hover:bg-cyan-400 active:scale-95 text-slate-900 font-bold rounded-xl mt-4 shadow-[0_0_15px_rgba(24,169,198,0.4)] transition-all"
            >
              온라인 문의하기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;