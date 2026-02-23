import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 선임연구원님이 만드신 페이지들 불러오기
import Location from './Location';
import Greeting from './Greeting';
import History from './History';
import ContactUs from './ContactUs'; // 방금 복구한 파일!

const App = () => {
  return (
    <BrowserRouter>
      {/* 만약 상단 메뉴바(Navbar)나 헤더 컴포넌트가 있다면 이 줄에 둡니다 */}
      
      <Routes>
        {/* 임시 메인 홈 화면 */}
        <Route path="/" element={<div className="p-10 text-2xl font-bold">플로림 홈페이지 (메인 화면 준비 중)</div>} />
        
        {/* 회사소개 */}
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/history" element={<History />} />
        <Route path="/location" element={<Location />} />
        
        {/* 고객지원 - 완벽하게 복구된 온라인 문의 */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      {/* 만약 하단 정보(Footer) 컴포넌트가 있다면 이 줄에 둡니다 */}
    </BrowserRouter>
  );
};

export default App;