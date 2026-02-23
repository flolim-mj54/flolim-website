// @ts-nocheck
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import BusinessAreas from "./BusinessAreas";
import StreetLightIntro from "./StreetLightIntro";
import LoraMeshSolution from "./LoraMeshSolution";
import NbIotSolution from "./NbIotSolution";
import SmartLedIntro from "./SmartLedIntro";
import KepcoEsco from "./KepcoEsco";
import SmartLedSolution from "./SmartLedSolution";
import PlatformIntro from "./PlatformIntro";
import Dashboard from "./Dashboard";
import Archive from "./Archive";
// 👇 딱 여기만 수정되었습니다! (Contact -> ContactUs)
import ContactUs from "./ContactUs"; 

import Greeting from "./Greeting";
import History from "./History";
import Location from "./Location";

export default function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const renderPage = () => {
    switch (currentPage) {
      case "main":
        return (
          <>
            <Hero />
            <BusinessAreas />
          </>
        );

      case "greeting":
        return <Greeting />;
      case "history":
        return <History />;
      case "location":
        return <Location />;

      case "intro":
        return <StreetLightIntro />;
      case "lora":
        return <LoraMeshSolution />;
      case "nbiot":
        return <NbIotSolution />;

      case "ledIntro":
        return <SmartLedIntro />;
      case "esco":
        return <KepcoEsco />;
      case "ledSol":
        return <SmartLedSolution />;

      case "platform":
        return <PlatformIntro />;
      case "dashboard":
        return <Dashboard />;
      case "archive":
        return <Archive />;
      
      // 👇 여기도 수정되었습니다! (Contact -> ContactUs)
      case "contact":
        return <ContactUs />;

      default:
        return <Hero />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans">
      {/* 🚀 개발자용 임시 네비게이션 (모든 페이지 총집합) */}
      <div className="bg-slate-50 border-b border-slate-200 text-slate-700 py-3 px-4 z-[100] relative text-[13px]">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[#1eb4c8] font-black w-24">
              🏢 홈 / 소개:
            </span>
            <button
              onClick={() => setCurrentPage("main")}
              className={`px-2 py-1 border transition-colors ${
                currentPage === "main"
                  ? "bg-[#1eb4c8] text-white border-[#1eb4c8]"
                  : "bg-white border-slate-300 hover:bg-slate-100"
              }`}
            >
              메인 화면
            </button>
            <button
              onClick={() => setCurrentPage("greeting")}
              className={`px-2 py-1 border transition-colors ${
                currentPage === "greeting"
                  ? "bg-[#1eb4c8] text-white border-[#1eb4c8]"
                  : "bg-white border-slate-300 hover:bg-slate-100"
              }`}
            >
              인사말
            </button>
            <button
              onClick={() => setCurrentPage("history")}
              className={`px-2 py-1 border transition-colors ${
                currentPage === "history"
                  ? "bg-[#1eb4c8] text-white border-[#1eb4c8]"
                  : "bg-white border-slate-300 hover:bg-slate-100"
              }`}
            >
              연혁
            </button>
            <button
              onClick={() => setCurrentPage("location")}
              className={`px-2 py-1 border transition-colors ${
                currentPage === "location"
                  ? "bg-[#1eb4c8] text-white border-[#1eb4c8]"
                  : "bg-white border-slate-300 hover:bg-slate-100"
              }`}
            >
              오시는 길
            </button>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[#1eb4c8] font-black w-24">💡 가로등:</span>
            {[
              { id: "intro", title: "시스템 개요" },
              { id: "lora", title: "LoRa 솔루션" },
              { id: "nbiot", title: "NB-IoT 솔루션" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setCurrentPage(btn.id)}
                className={`px-2 py-1 border transition-colors ${
                  currentPage === btn.id
                    ? "bg-[#1eb4c8] text-white border-[#1eb4c8]"
                    : "bg-white border-slate-300 hover:bg-slate-100"
                }`}
              >
                {btn.title}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[#1eb4c8] font-black w-24">🏢 LED:</span>
            {[
              { id: "ledIntro", title: "시스템 개요" },
              { id: "esco", title: "ESCO 연계" },
              { id: "ledSol", title: "LED 제어 솔루션" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setCurrentPage(btn.id)}
                className={`px-2 py-1 border transition-colors ${
                  currentPage === btn.id
                    ? "bg-[#1eb4c8] text-white border-[#1eb4c8]"
                    : "bg-white border-slate-300 hover:bg-slate-100"
                }`}
              >
                {btn.title}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[#1eb4c8] font-black w-24">
              📊 지원/플랫폼:
            </span>
            <button
              onClick={() => setCurrentPage("platform")}
              className={`px-2 py-1 border transition-colors ${
                currentPage === "platform"
                  ? "bg-[#1eb4c8] text-white border-[#1eb4c8]"
                  : "bg-white border-slate-300 hover:bg-slate-100"
              }`}
            >
              관제 플랫폼
            </button>
            <button
              onClick={() => setCurrentPage("dashboard")}
              className={`px-2 py-1 border transition-colors ${
                currentPage === "dashboard"
                  ? "bg-[#1eb4c8] text-white border-[#1eb4c8]"
                  : "bg-white border-slate-300 hover:bg-slate-100"
              }`}
            >
              대시보드
            </button>
            <button
              onClick={() => setCurrentPage("archive")}
              className={`px-2 py-1 border transition-colors ${
                currentPage === "archive"
                  ? "bg-[#1eb4c8] text-white border-[#1eb4c8]"
                  : "bg-white border-slate-300 hover:bg-slate-100"
              }`}
            >
              자료실
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className={`px-2 py-1 border transition-colors ${
                currentPage === "contact"
                  ? "bg-[#1eb4c8] text-white border-[#1eb4c8]"
                  : "bg-white border-slate-300 hover:bg-slate-100"
              }`}
            >
              온라인 문의
            </button>
          </div>
        </div>
      </div>

      <Header />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}