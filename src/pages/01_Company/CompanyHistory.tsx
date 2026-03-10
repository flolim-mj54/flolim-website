import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const CompanyHistory = () => {
  return (
    <div className="pb-10 relative overflow-hidden">
      
      <PageHeader 
        category="History"
        title="플로림이 걸어온 길"
        subtitle={
          <>
            끊임없는 혁신과 도전을 통해 새로운 가치를 창출하며,<br />
            <strong className="text-white font-bold">스마트 비즈니스의 시작</strong>을 열어가고 있습니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-5xl relative z-10 mb-10 mt-10">
        
        {/* 전체 연혁을 감싸는 메인 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* 메인 래퍼 중앙 글로우 */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative max-w-4xl mx-auto py-10 z-10">
            {/* 중앙 라인 */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 transform md:-translate-x-1/2"></div>

            {/* 2026년 */}
            <div className="mb-24 relative w-full flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="md:w-5/12 text-left md:text-right pr-0 md:pr-16 pl-16 md:pl-0 mb-6 md:mb-0">
                <h2 className="text-5xl md:text-6xl font-black text-slate-700 tracking-tighter drop-shadow-sm group-hover:text-flolim transition-colors duration-500 origin-right">
                  2026
                </h2>
              </div>
              
              <div className="absolute left-[16px] md:left-1/2 w-7 h-7 bg-slate-900 border-4 border-flolim rounded-full transform -translate-x-1/2 mt-1 md:mt-0 shadow-[0_0_15px_rgba(24,169,198,0.5)] group-hover:scale-125 transition-transform z-10"></div>
              
              <div className="md:w-5/12 pl-16 md:pl-16">
                <div className="bg-[#050b14] p-8 rounded-3xl shadow-inner border border-slate-700 group-hover:border-flolim/50 transition-all duration-500 relative overflow-hidden">
                  {/* 💡 공통 원형 데코 */}
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                  <ul className="space-y-6 relative z-10">
                    <li className="relative flex items-start gap-4">
                      <span className="text-flolim font-black text-lg w-10 shrink-0">03월</span>
                      <span className="text-slate-300 font-medium pt-0.5">스마트 IoT 제어시스템 통합 솔루션 론칭</span>
                    </li>
                    <li className="relative flex items-start gap-4">
                      <span className="text-flolim font-black text-lg w-10 shrink-0">02월</span>
                      <div className="pt-0.5">
                        <span className="text-slate-300 font-medium">키엘(KILT) 시험성적서 획득</span>
                        <span className="text-sm text-slate-500 block mt-1 font-light">스마트LED 조명제어시스템</span>
                      </div>
                    </li>
                    <li className="relative flex items-start gap-4">
                      <span className="text-flolim font-black text-lg w-10 shrink-0">02월</span>
                      <span className="text-slate-300 font-medium pt-0.5">여성기업 및 창업기업 확인서 취득</span>
                    </li>
                    <li className="relative flex items-start gap-4">
                      <span className="text-flolim font-black text-lg w-10 shrink-0">01월</span>
                      <span className="text-slate-300 font-medium pt-0.5">중소기업(소기업/소상공인) 확인서 취득</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2025년 */}
            <div className="mb-10 relative w-full flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="md:w-5/12 text-left pr-0 md:pl-16 pl-16 md:order-3 mb-6 md:mb-0">
                <h2 className="text-5xl md:text-6xl font-black text-slate-700 tracking-tighter group-hover:text-flolim transition-colors duration-500 origin-left">
                  2025
                </h2>
              </div>
              
              <div className="absolute left-[16px] md:left-1/2 w-7 h-7 bg-slate-900 border-4 border-slate-700 rounded-full transform -translate-x-1/2 mt-1 md:mt-0 shadow-sm group-hover:border-flolim group-hover:scale-125 transition-all z-10 md:order-2"></div>
              
              <div className="md:w-5/12 pl-16 md:pl-0 md:pr-16 md:text-right md:order-1">
                <div className="bg-[#050b14] p-8 rounded-3xl shadow-inner border border-slate-700 group-hover:border-flolim/30 transition-all duration-500 relative overflow-hidden">
                  {/* 💡 공통 원형 데코 */}
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                  <ul className="space-y-6 relative z-10">
                    <li className="relative flex md:justify-end items-start gap-4">
                      <span className="text-slate-300 font-medium pt-0.5 order-2 md:order-1 text-left md:text-right">주식회사 플로림 법인 설립</span>
                      <span className="text-slate-500 group-hover:text-flolim font-black text-lg w-10 shrink-0 order-1 md:order-2 text-left md:text-right transition-colors duration-500">12월</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative w-full flex justify-start md:justify-center mt-8">
              <div className="w-4 h-4 bg-slate-800 rounded-full absolute left-[24px] md:left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '인증 및 파트너', path: '/company/cert' }}
          next={{ label: '다음 페이지', title: '오시는 길', path: '/company/location' }}
        />
      </div>
    </div>
  );
};

export default CompanyHistory;