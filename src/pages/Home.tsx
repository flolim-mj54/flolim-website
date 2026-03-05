import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (메인 배너 - 비디오 배경) */}
      <section className="relative text-white py-32 px-4 flex items-center min-h-[70vh] overflow-hidden">
        
        {/* 비디오 배경 및 오버레이 */}
        <div className="absolute inset-0 z-0">
          {/* 💡 주의: /video/ 폴더 안의 실제 파일명으로 'your-video-file.mp4'를 변경해 주세요! */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/hero-bg.mp4" type="video/mp4" />
            브라우저가 비디오 태그를 지원하지 않습니다.
          </video>
          
          {/* 비디오 위에 깔리는 반투명 다크 오버레이 */}
          <div className="absolute inset-0 bg-slate-900/70"></div>
          
          {/* 은은한 빛 번짐 효과 */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-flolim rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
        </div>
        
        <div className="relative container mx-auto max-w-6xl text-center z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
  <span className="text-amber-400">스마트 IoT</span> 제어시스템 솔루션
</h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-light drop-shadow-md">
            에너지 소모는 줄이고 경영 효율은 더하는 <strong className="text-white font-bold">통합 관제 플랫폼</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/business/esco" className="bg-flolim hover:opacity-90 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-flolim/30 text-lg w-full sm:w-auto">
              초기비용 0원 도입 상담
            </Link>
            <Link to="/company/intro" className="bg-transparent backdrop-blur-sm border-2 border-slate-400 hover:border-white text-white font-bold py-4 px-10 rounded-full transition-all text-lg w-full sm:w-auto">
              플로림 솔루션 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 핵심 비즈니스 모델 (3가지 카드 - 전체 클릭 가능하게 변경됨) */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">플로림의 혁신적인 솔루션</h2>
            <p className="text-lg text-slate-500">도시와 빌딩의 에너지를 가장 스마트하게 관리하는 방법을 제시합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 카드 1: ESCO 사업 (카드 전체가 Link) */}
            <Link to="/business/esco" className="block bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="text-flolim text-5xl mb-6 transform group-hover:scale-110 transition-transform origin-left">💰</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-flolim transition-colors">초기비용 0원, ESCO 모델</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                켑코이에스 100% 지원으로 초기 투자비 부담 제로. 노후 설비를 초고효율 LED와 스마트 제어로 교체하여 매월 최대 70%의 전기료를 절감합니다.
              </p>
              {/* 내부 Link 태그를 span으로 변경하여 HTML 중첩 오류 방지 */}
              <span className="inline-flex items-center text-flolim font-bold group-hover:opacity-80 transition-opacity">
                자세히 보기 <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </span>
            </Link>

            {/* 카드 2: 스마트 시티 (카드 전체가 Link) */}
            <Link to="/smart-city/intro" className="block bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="text-flolim text-5xl mb-6 transform group-hover:scale-110 transition-transform origin-left">🏙️</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-flolim transition-colors">스마트 시티 제어망</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                LoRa-Mesh 및 NB-IoT 통신망을 활용하여 도시 전체의 실외 가로등을 중앙에서 실시간 관제하고 유지보수 예산을 혁신적으로 줄입니다.
              </p>
              <span className="inline-flex items-center text-flolim font-bold group-hover:opacity-80 transition-opacity">
                자세히 보기 <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </span>
            </Link>

            {/* 카드 3: 스마트 빌딩 (카드 전체가 Link) */}
            <Link to="/smart-building/intro" className="block bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="text-flolim text-5xl mb-6 transform group-hover:scale-110 transition-transform origin-left">🏢</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-flolim transition-colors">스마트 빌딩 자동화</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                초고효율 조명과 재실/조도 감지 지능형 IoT 센서를 결합하여, 사람이 신경 쓰지 않아도 실내 에너지를 스스로 통제하고 절감합니다.
              </p>
              <span className="inline-flex items-center text-flolim font-bold group-hover:opacity-80 transition-opacity">
                자세히 보기 <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ESG 리포트 및 플랫폼 어필 영역 */}
      <section className="py-24 bg-white px-4 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <p className="text-flolim font-bold tracking-widest mb-3 uppercase text-sm">Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              지속 가능한 ESG 경영의 완성,<br/>
              <span className="text-flolim">통합 관제 플랫폼</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              단순한 기기 제어를 넘어, 데이터 기반의 최적화 시스템을 제공합니다. 
              월별 에너지 절감량과 탄소 배출 저감 수치를 한눈에 파악할 수 있는 대시보드 리포트로 기업의 ESG 경영 지표 관리를 완벽하게 지원합니다.
            </p>
            <ul className="space-y-4 mb-10 text-slate-700 font-medium">
              <li className="flex items-center"><span className="text-flolim mr-3 text-xl">✔</span> PC & 모바일 웹 실시간 모니터링</li>
              <li className="flex items-center"><span className="text-flolim mr-3 text-xl">✔</span> 고장 및 이상 발생 시 즉각 알림 시스템</li>
              <li className="flex items-center"><span className="text-flolim mr-3 text-xl">✔</span> KISA IoT 최고 수준 보안 인증 규격 적용</li>
            </ul>
            <Link to="/platform/dashboard" className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-md">
              대시보드 기능 살펴보기
            </Link>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="bg-slate-100 rounded-3xl h-96 flex flex-col items-center justify-center shadow-inner border border-slate-200 overflow-hidden">
              {/* 플랫폼 대시보드 이미지 삽입 시 아래 주석 해제 및 경로 수정 */}
              {/* <img src="/images/your-dashboard-image.png" alt="통합 관제 플랫폼" className="w-full h-full object-cover" /> */}
              <span className="text-4xl mb-4">📊</span>
              <span className="text-slate-500 font-semibold">플랫폼 대시보드 화면 영역</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}