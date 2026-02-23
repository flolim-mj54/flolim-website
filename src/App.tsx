// @ts-nocheck
import React from "react";
// 🚀 진짜 라우팅을 위한 도구들을 가져옵니다.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 공통 컴포넌트
import Header from "./Header";
import Footer from "./Footer";

// 페이지 컴포넌트 모음
import Hero from "./Hero";
import BusinessAreas from "./BusinessAreas";
import Greeting from "./Greeting";
import History from "./History";
import Location from "./Location";
import StreetLightIntro from "./StreetLightIntro";
import LoraMeshSolution from "./LoraMeshSolution";
import NbIotSolution from "./NbIotSolution";
import SmartLedIntro from "./SmartLedIntro";
import KepcoEsco from "./KepcoEsco";
import SmartLedSolution from "./SmartLedSolution";
import PlatformIntro from "./PlatformIntro";
import Dashboard from "./Dashboard";
import Archive from "./Archive";
import ContactUs from "./ContactUs";

export default function App() {
  return (
    // 🚀 Router가 전체 앱을 감싸면서 라우팅 기능을 활성화합니다.
    <Router>
      <div className="w-full min-h-screen bg-white flex flex-col font-sans">
        
        {/* 상단 메뉴바는 모든 페이지에 고정으로 보여줍니다. */}
        <Header />

        <main className="flex-1">
          {/* 🚀 주소(URL)에 따라 알맞은 화면(element)을 보여주는 영역입니다. */}
          <Routes>
            {/* 메인 화면 (주소가 '/' 일 때) */}
            <Route path="/" element={
              <>
                <Hero />
                <BusinessAreas />
              </>
            } />

            {/* 회사소개 */}
            <Route path="/greeting" element={<Greeting />} />
            <Route path="/history" element={<History />} />
            <Route path="/location" element={<Location />} />

            {/* 가로등 제어 시스템 */}
            <Route path="/streetlight-intro" element={<StreetLightIntro />} />
            <Route path="/lora" element={<LoraMeshSolution />} />
            <Route path="/nbiot" element={<NbIotSolution />} />

            {/* 스마트 LED 제어 시스템 */}
            <Route path="/led-intro" element={<SmartLedIntro />} />
            <Route path="/esco" element={<KepcoEsco />} />
            <Route path="/led-solution" element={<SmartLedSolution />} />

            {/* 통합 관제 플랫폼 */}
            <Route path="/platform" element={<PlatformIntro />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* 고객지원 */}
            <Route path="/archive" element={<Archive />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        {/* 하단 정보도 모든 페이지에 고정으로 보여줍니다. */}
        <Footer />
        
      </div>
    </Router>
  );
}