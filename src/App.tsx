import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- 공통 컴포넌트 ---
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 💡 새로 추가된 부분!

// --- 메인 페이지 ---
import Home from './pages/Home';

// --- 1. 회사 소개 (01_Company) ---
import CompanyCeo from './pages/01_Company/CompanyCeo';
import CompanyIntro from './pages/01_Company/CompanyIntro';
import CompanyCert from './pages/01_Company/CompanyCert';
import CompanyHistory from './pages/01_Company/CompanyHistory';
import CompanyLocation from './pages/01_Company/CompanyLocation';

// --- 2. 핵심 사업 모델 (02_Business) ---
import BusinessEsco from './pages/02_Business/BusinessEsco';
import BusinessSimulation from './pages/02_Business/BusinessSimulation';

// --- 3. 스마트 시티 솔루션 (03_SmartCity) ---
import SmartCityIntro from './pages/03_SmartCity/SmartCityIntro';
import SmartCityLora from './pages/03_SmartCity/SmartCityLora';
import SmartCityNbIot from './pages/03_SmartCity/SmartCityNbIot';
import SmartCityDmx from './pages/03_SmartCity/SmartCityDmx';

// --- 4. 스마트 빌딩 솔루션 (04_SmartBuilding) ---
import SmartBuildingIntro from './pages/04_SmartBuilding/SmartBuildingIntro';
import SmartBuildingSensor from './pages/04_SmartBuilding/SmartBuildingSensor';

// --- 5. 통합 관제 플랫폼 (05_Platform) ---
import PlatformDashboard from './pages/05_Platform/PlatformDashboard';
import PlatformEsg from './pages/05_Platform/PlatformEsg';

// --- 6. 고객 지원 (06_Support) ---
import SupportReferences from './pages/06_Support/SupportReferences';
import SupportArchive from './pages/06_Support/SupportArchive';
import SupportContact from './pages/06_Support/SupportContact';

function App() {
  return (
    <Router>
      {/* 💡 라우터 내부에 ScrollToTop을 배치하여 페이지 이동 시 스크롤을 맨 위로 올립니다. */}
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen">
        {/* 상단 네비게이션 */}
        <Header />
        
        {/* 본문 영역 */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* 회사 소개 라우팅 */}
            <Route path="/company/ceo" element={<CompanyCeo />} />
            <Route path="/company/intro" element={<CompanyIntro />} />
            <Route path="/company/cert" element={<CompanyCert />} />
            <Route path="/company/history" element={<CompanyHistory />} />
            <Route path="/company/location" element={<CompanyLocation />} />

            {/* 핵심 사업 모델 라우팅 */}
            <Route path="/business/esco" element={<BusinessEsco />} />
            <Route path="/business/simulation" element={<BusinessSimulation />} />

            {/* 스마트 시티 솔루션 라우팅 */}
            <Route path="/smart-city/intro" element={<SmartCityIntro />} />
            <Route path="/smart-city/lora" element={<SmartCityLora />} />
            <Route path="/smart-city/nb-iot" element={<SmartCityNbIot />} />
            <Route path="/smart-city/dmx" element={<SmartCityDmx />} />

            {/* 스마트 빌딩 솔루션 라우팅 */}
            <Route path="/smart-building/intro" element={<SmartBuildingIntro />} />
            <Route path="/smart-building/sensor" element={<SmartBuildingSensor />} />

            {/* 통합 관제 플랫폼 라우팅 */}
            <Route path="/platform/dashboard" element={<PlatformDashboard />} />
            <Route path="/platform/esg" element={<PlatformEsg />} />

            {/* 고객 지원 라우팅 */}
            <Route path="/support/references" element={<SupportReferences />} />
            <Route path="/support/archive" element={<SupportArchive />} />
            <Route path="/support/contact" element={<SupportContact />} />
          </Routes>
        </main>
        
        {/* 하단 정보 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;