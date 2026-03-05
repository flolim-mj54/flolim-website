import React from "react";

const CompanyHistory = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">연혁</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* 연혁 내용 */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-200">
          <div className="relative border-l-4 border-blue-600 pl-6 py-2 mb-8">
            <h2 className="text-3xl font-black text-blue-900 absolute -left-[18px] top-0 bg-gray-50 py-1">
              '25 <span className="text-xl text-gray-500 font-bold ml-2">2025</span>
            </h2>
          </div>
          
          <ul className="space-y-6 text-gray-700 text-lg mt-12 pl-4">
            <li className="flex items-start">
              <span className="font-bold w-20 text-blue-600">12월</span>
              <span className="font-medium text-gray-800">주식회사 플로림 법인 설립</span>
            </li>
            {/* 추후 연혁 추가 시 여기에 <li> 태그를 복사하여 사용하세요 */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;