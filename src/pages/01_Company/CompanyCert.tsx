import { Link } from 'react-router-dom';

const CompanyCert = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 페이지 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">인증 및 파트너십</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            플로림은 공신력 있는 국가 기관의 인증을 통해<br />
            <strong className="text-blue-900 font-bold">최고 수준의 기술력과 네트워크 안전성</strong>을 증명합니다.
          </p>
        </div>

        {/* 1. 획득 완료 인증서 */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <span className="text-blue-600">🏅</span> 공식 인증 및 성적서
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 인증서 카드 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-full aspect-[3/4] bg-slate-100 rounded-lg mb-6 flex items-center justify-center border border-slate-200">
                <span className="text-slate-400 text-sm">[KILT 성적서 이미지]</span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">획득 완료</span>
              <h3 className="font-bold text-gray-800 mb-1">키엘(KILT) 시험성적서</h3>
              <p className="text-xs text-gray-500">스마트 LED 조명 제어 시스템</p>
            </div>

            {/* 인증서 카드 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-full aspect-[3/4] bg-slate-100 rounded-lg mb-6 flex items-center justify-center border border-slate-200">
                <span className="text-slate-400 text-sm">[여성기업 확인서]</span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">획득 완료</span>
              <h3 className="font-bold text-gray-800 mb-1">여성기업확인서</h3>
              <p className="text-xs text-gray-500">중소벤처기업청 인증</p>
            </div>

            {/* 인증서 카드 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-full aspect-[3/4] bg-slate-100 rounded-lg mb-6 flex items-center justify-center border border-slate-200">
                <span className="text-slate-400 text-sm">[중소기업 확인서]</span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">획득 완료</span>
              <h3 className="font-bold text-gray-800 mb-1">중소기업확인서</h3>
              <p className="text-xs text-gray-500">소기업(소상공인) 등록</p>
            </div>

            {/* 인증서 카드 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-full aspect-[3/4] bg-slate-100 rounded-lg mb-6 flex items-center justify-center border border-slate-200">
                <span className="text-slate-400 text-sm">[창업기업 확인서]</span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">획득 완료</span>
              <h3 className="font-bold text-gray-800 mb-1">창업기업확인서</h3>
              <p className="text-xs text-gray-500">공공기관 우선 구매 대상</p>
            </div>

          </div>
        </section>

        {/* 2. 진행 중인 등록 현황 & 보안 인증 */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 좌측: 진행 중인 인증 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                <span className="text-blue-600">🚀</span> 획득 진행 중
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">⚡</div>
                    <div>
                      <h4 className="font-bold text-gray-800">고효율기자재 인증</h4>
                      <p className="text-xs text-gray-500">에너지 효율 공식 마크</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">진행 중</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">🏛️</div>
                    <div>
                      <h4 className="font-bold text-gray-800">조달청 등록</h4>
                      <p className="text-xs text-gray-500">공공기관 나라장터 공급</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">진행 중</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">🤝</div>
                    <div>
                      <h4 className="font-bold text-gray-800">켑코이에스(ESCO)</h4>
                      <p className="text-xs text-gray-500">공식 파트너사 등록</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">진행 중</span>
                </div>
              </div>
            </div>

            {/* 우측: KISA IoT 보안 인증 */}
            <div className="bg-blue-900 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center shadow-md">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-800 rounded-full blur-3xl opacity-50 -z-0 translate-x-10 -translate-y-10"></div>
              <div className="relative z-10">
                <div className="inline-block bg-blue-800 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-blue-700">
                  7월 완료 목표
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  KISA IoT 보안인증 스마트 센서
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-6">
                  국가 공인 보안 기준을 충족하여<br/>
                  해킹과 데이터 유출로부터 완벽하게 보호합니다.
                </p>
                <ul className="space-y-2 text-sm text-blue-100 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span> 한국인터넷진흥원(KISA) 주관 국가 공인 제도
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span> 기기 인증, 암호화, 데이터 보호 등 엄격한 기준 통과
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span> 공공기관 및 주요 기업 스마트망 도입 시 필수
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 3. 파트너사 소개 */}
        <section className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-200 mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">파트너사 소개</h2>
          <p className="text-gray-600 mb-12">더 스마트하게, 더 효율적으로. 플로림과 파트너사가 함께 미래를 밝힙니다.</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 relative">
            {/* 연결 고리 배경 그래픽 (데스크톱 전용) */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1 border-t-2 border-dashed border-gray-300 -z-10"></div>

            {/* 플로림 */}
            <div className="flex flex-col items-center bg-white z-10 px-4">
              <div className="w-32 h-32 rounded-full bg-blue-50 border-4 border-blue-100 flex items-center justify-center mb-6 shadow-inner">
                <span className="text-blue-900 font-black text-2xl tracking-wider">FLOLIM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">주식회사 플로림</h3>
              <p className="text-sm text-gray-500">지능형 통합 제어 시스템 및<br/>스마트 하드웨어 솔루션 전문기업</p>
            </div>

            {/* 중앙 아이콘 */}
            <div className="bg-white z-10 p-4 rounded-full border border-gray-100 shadow-sm text-3xl">
              🤝
            </div>

            {/* 투반테크 */}
            <div className="flex flex-col items-center bg-white z-10 px-4">
              <div className="w-32 h-32 rounded-full bg-red-50 border-4 border-red-100 flex items-center justify-center mb-6 shadow-inner">
                <span className="text-red-700 font-black text-xl tracking-wider">TUVAN</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">(주)투반테크</h3>
              <p className="text-sm text-gray-500">초고효율 LED 및<br/>스마트 LED 전문기업</p>
            </div>
          </div>
        </section>

        {/* 하단 네비게이션 */}
        <div className="flex justify-between items-center bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <Link to="/company/intro" className="flex flex-col text-left group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">← 이전 페이지</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">플로림 소개</span>
          </Link>
          <Link to="/company/history" className="flex flex-col text-right group">
            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">다음 페이지 →</span>
            <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">연혁</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompanyCert;