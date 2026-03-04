import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- 공통 컴포넌트 ---
import Header from './components/Header';
import Footer from './components/Footer';

// --- 메인 페이지 ---
import Home from './pages/Home';

// --- 1. 회사 소개 (Company) ---
import CompanyCeo from './pages/Company/CompanyCeo';
import CompanyIntro from './pages/Company/CompanyIntro';
import CompanyCert from './pages/Company/CompanyCert';
import CompanyHistory from './pages/Company/CompanyHistory';
import CompanyLocation from './pages/Company/CompanyLocation';

// --- 2. 핵심 사업 모델 (Business) ---
import BusinessEsco from './pages/Business/BusinessEsco';
import BusinessSimulation from './pages/Business/BusinessSimulation';

// --- 3. 스마트 시티 솔루션 (SmartCity) ---
import SmartCityIntro from './pages/SmartCity/SmartCityIntro';
import SmartCityLora from './pages/SmartCity/SmartCityLora';
import SmartCityNbIot from './pages/SmartCity/SmartCityNbIot';
import SmartCityDmx from './pages/SmartCity/SmartCityDmx';

// --- 4. 스마트 빌딩 솔루션 (SmartBuilding) ---
import SmartBuildingIntro from './pages/SmartBuilding/SmartBuildingIntro';
import SmartBuildingSensor from './pages/SmartBuilding/SmartBuildingSensor';

// --- 5. 통합 관제 플랫폼 (Platform) ---
import PlatformDashboard from './pages/Platform/PlatformDashboard';
import PlatformEsg from './pages/Platform/PlatformEsg';

// --- 6. 고객 지원 (Support) ---
import SupportReferences from './pages/Support/SupportReferences';
import SupportArchive from './pages/Support/SupportArchive';
import SupportContact from './pages/Support/SupportContact';

function App() {
  return (
    <Router>
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