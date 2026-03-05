import React from 'react';

export default function CompanyCert() {
  const completedCerts = [
    { title: '키엘(KILT) 시험성적서', imgPath: '/images/cert-kilt.jpg' },
    { title: '여성기업확인서', imgPath: '/images/cert-woman.jpg' },
    { title: '중소기업확인서', imgPath: '/images/cert-sme.jpg' },
    { title: '창업기업확인서', imgPath: '/images/cert-startup.jpg' },
  ];

  const pendingCerts = [
    { title: '고효율기자재 인증', subtitle: '진행 중' },
    { title: '조달청 등록', subtitle: '진행 중' },
    { title: '켑코이에스 ESCO 파트너사', subtitle: '진행 중' },
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">인증 및 파트너</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* 1. 인증 및 등록 현황 */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">인증 및 등록 현황 <span className="text-blue-600 text-2xl">(Certifications & Status)</span></h2>
          
          {/* 완료된 인증서 4종 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {completedCerts.map((cert, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3/4] bg-white border border-gray-300 rounded mb-4 flex items-center justify-center text-gray-400 overflow-hidden">
                  {/* 추후 /public/images/ 폴더에 이미지 넣고 아래 주석 해제 */}
                  {/* <img src={cert.imgPath} alt={cert.title} className="w-full h-full object-cover" /> */}
                  <span className="text-sm font-medium">[인증서 이미지]</span>
                </div>
                <p className="font-bold text-gray-800 text-[15px]">{idx + 1}. {cert.title} <span className="text-green-500 ml-1">✔</span></p>
              </div>
            ))}
          </div>

          {/* 진행 중인 인증 3종 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pendingCerts.map((cert, idx) => (
              <div key={idx} className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-8 text-center flex flex-col items-center justify-center">
                 <div className="h-24 w-24 bg-gray-50 rounded-full mb-4 flex items-center justify-center text-gray-400">
                   <span className="text-xs">[로고]</span>
                 </div>
                 <p className="font-bold text-gray-800 mb-3">{idx + 1}. {cert.title}</p>
                 <span className="inline-block bg-blue-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                   {cert.subtitle}
                 </span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 보안 인증 및 파트너십 */}
        <section className="bg-blue-900 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white shadow-xl">
          <div className="md:w-3/5">
            <h2 className="text-xl font-bold text-blue-300 mb-3">보안 인증 및 파트너십</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
              국가 공인 보안 기준을 충족하여<br />
              해킹과 데이터 유출로부터 완벽하게 보호합니다
            </h3>
            <ul className="space-y-4 text-blue-100 mb-8 font-light">
              <li className="flex items-start">
                <span className="mr-3 mt-1">✓</span>
                한국인터넷진흥원(KISA)이 주관하는 국가 공인 사물인터넷(IoT) 보안 시험 및 인증
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">✓</span>
                통신 기기의 인증, 암호화, 데이터 및 플랫폼 보호 등 엄격한 5대 보안 기준 통과
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">✓</span>
                공공기관 및 주요 기업의 스마트망 도입 시 필수적인 최고 수준의 네트워크 안전성 보장
              </li>
            </ul>
            <div className="inline-block bg-blue-800/50 border border-blue-500 rounded-lg px-4 py-3 text-sm font-bold text-yellow-400">
              ※ 현재 플로림 스마트 센서 KISA IoT 보안인증 획득 진행 중 (7월 완료 목표)
            </div>
          </div>
          
          <div className="md:w-2/5 w-full flex flex-col space-y-6">
             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <h4 className="font-bold text-gray-800 mb-2">파트너사 소개</h4>
                <p className="text-gray-600 text-sm mb-6 font-medium">더 스마트하게, 더 효율적으로.<br/>플로림과 투반테크가 함께 미래를 밝힙니다.</p>
                
                <div className="flex justify-center items-center gap-4 bg-gray-50 py-6 rounded-xl border border-gray-100">
                   <div className="font-black text-blue-900 text-lg">FloLim</div>
                   <div className="text-gray-300 text-2xl">∞</div>
                   <div className="font-black text-red-700 text-lg">TUVAN</div>
                </div>
                
                <p className="text-xs text-gray-500 mt-5">(주)투반테크: 초고효율 LED 및 스마트 LED 전문기업</p>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
}