import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* 1. 로고 영역 */}
          <Link to="/" className="text-2xl font-bold text-blue-900">
            FLOLIM
          </Link>

          {/* 2. 데스크톱 메뉴 영역 */}
          <nav className="hidden md:flex space-x-8">
            
            {/* 회사 소개 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-blue-600 font-semibold text-gray-800 py-4">회사 소개</span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-2 w-40 rounded border border-gray-100">
                <Link to="/company/ceo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">CEO 인사말</Link>
                <Link to="/company/intro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">플로림 소개</Link>
                <Link to="/company/cert" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">인증 및 파트너</Link>
                <Link to="/company/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">연혁</Link>
                <Link to="/company/location" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">오시는 길</Link>
              </div>
            </div>

            {/* 핵심 사업 모델 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-blue-600 font-semibold text-gray-800 py-4">핵심 사업 모델</span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-2 w-48 rounded border border-gray-100">
                <Link to="/business/esco" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">KEPCO 연계 ESCO</Link>
                <Link to="/business/simulation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">에너지 절감 시뮬레이션</Link>
              </div>
            </div>

            {/* 스마트 시티 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-blue-600 font-semibold text-gray-800 py-4">스마트 시티</span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-2 w-48 rounded border border-gray-100">
                <Link to="/smart-city/intro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">솔루션 개요</Link>
                <Link to="/smart-city/lora" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">LoRa-Mesh 제어</Link>
                <Link to="/smart-city/nb-iot" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">NB-IoT 제어</Link>
                <Link to="/smart-city/dmx" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">DMX 경관조명</Link>
              </div>
            </div>

            {/* 스마트 빌딩 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-blue-600 font-semibold text-gray-800 py-4">스마트 빌딩</span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-2 w-48 rounded border border-gray-100">
                <Link to="/smart-building/intro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">솔루션 개요</Link>
                <Link to="/smart-building/sensor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">IoT 센서 자동 제어</Link>
              </div>
            </div>

            {/* 관제 플랫폼 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-blue-600 font-semibold text-gray-800 py-4">관제 플랫폼</span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-2 w-48 rounded border border-gray-100">
                <Link to="/platform/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">통합 대시보드</Link>
                <Link to="/platform/esg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">ESG 경영 리포트</Link>
              </div>
            </div>

            {/* 고객 지원 */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-blue-600 font-semibold text-gray-800 py-4">고객 지원</span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-2 w-40 rounded border border-gray-100">
                <Link to="/support/references" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">구축 사례</Link>
                <Link to="/support/archive" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">자료실</Link>
                <Link to="/support/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">온라인 문의</Link>
              </div>
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;