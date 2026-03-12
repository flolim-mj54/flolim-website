import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
// 💡 [수정됨] 실제 존재하는 Header 파일로 변경
import Header from './components/Header'; 
import Footer from './components/Footer';
import Home from './pages/Home';

// Company
import CompanyIntro from './pages/01_Company/CompanyIntro';
import CompanyCeo from './pages/01_Company/CompanyCeo';
import CompanyCert from './pages/01_Company/CompanyCert';
import CompanyHistory from './pages/01_Company/CompanyHistory';
import CompanyLocation from './pages/01_Company/CompanyLocation';

// Business
import BusinessEsco from './pages/02_Business/BusinessEsco';
import BusinessSimulation from './pages/02_Business/BusinessSimulation';

// Smart City
import SmartCityIntro from './pages/03_SmartCity/SmartCityIntro';
import SmartCityLora from './pages/03_SmartCity/SmartCityLora';
import SmartCityNbIot from './pages/03_SmartCity/SmartCityNbIot';
import SmartCityDmx from './pages/03_SmartCity/SmartCityDmx';

// Smart Building
import SmartBuildingIntro from './pages/04_SmartBuilding/SmartBuildingIntro';
import SmartBuildingSensor from './pages/04_SmartBuilding/SmartBuildingSensor';

// Platform
import PlatformDashboard from './pages/05_Platform/PlatformDashboard';
import PlatformEsg from './pages/05_Platform/PlatformEsg';

// Support
import SupportReferences from './pages/06_Support/SupportReferences';
import SupportArchive from './pages/06_Support/SupportArchive';
import SupportContact from './pages/06_Support/SupportContact';

// Policy
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#020617] font-sans selection:bg-flolim selection:text-slate-900">
        {/* 💡 [수정됨] Header 컴포넌트 렌더링 */}
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/company/intro" element={<CompanyIntro />} />
            <Route path="/company/ceo" element={<CompanyCeo />} />
            <Route path="/company/cert" element={<CompanyCert />} />
            <Route path="/company/history" element={<CompanyHistory />} />
            <Route path="/company/location" element={<CompanyLocation />} />
            
            <Route path="/business/esco" element={<BusinessEsco />} />
            <Route path="/business/simulation" element={<BusinessSimulation />} />
            
            <Route path="/smart-city/intro" element={<SmartCityIntro />} />
            <Route path="/smart-city/lora" element={<SmartCityLora />} />
            <Route path="/smart-city/nb-iot" element={<SmartCityNbIot />} />
            <Route path="/smart-city/dmx" element={<SmartCityDmx />} />
            
            <Route path="/smart-building/intro" element={<SmartBuildingIntro />} />
            <Route path="/smart-building/sensor" element={<SmartBuildingSensor />} />
            
            <Route path="/platform/dashboard" element={<PlatformDashboard />} />
            <Route path="/platform/esg" element={<PlatformEsg />} />
            
            <Route path="/support/references" element={<SupportReferences />} />
            <Route path="/support/archive" element={<SupportArchive />} />
            <Route path="/support/contact" element={<SupportContact />} />
            
            {/* 개인정보처리방침 라우트 */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;