import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

const SupportReferences = () => {
  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="도입(실증) 사례"
        title="도입(실증) 사례"
        subtitle={
          <>
            수많은 지자체와 공공기관, 민간 기업이 스마트 제어 시스템을 통해<br />
            <strong className="text-white font-bold">압도적인 에너지 절감과 탄소 중립</strong>을 실현하고 있습니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        
        {/* 스마트 시티 구축 사례 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

          <div className="mb-10 relative z-10 flex items-center gap-3 border-b border-slate-800 pb-4">
            <svg className="w-8 h-8 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            <h2 className="text-2xl font-bold text-white">스마트 시티 (도로/경관 조명) 실증 사례</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {/* 사례 1 */}
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-lg mb-4 border border-slate-700">경기도 안산시</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors">안산스마트허브 (1,594개)</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">통행량 분석 IoT 조명제어 장치 적용</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-black text-flolim tracking-tight drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">70<span className="text-2xl font-medium">%</span></span>
                  <span className="text-slate-400 font-bold mb-1">에너지 감축</span>
                </div>
              </div>
            </div>

            {/* 사례 2 */}
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-lg mb-4 border border-slate-700">서울특별시</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors">강남 4구 도로 (1,500개)</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">유동 인구 밀집 지역 스마트 제어망 구축</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-black text-flolim tracking-tight drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">50<span className="text-2xl font-medium">%</span></span>
                  <span className="text-slate-400 font-bold mb-1">이상 절감 (912MW)</span>
                </div>
              </div>
            </div>

            {/* 사례 3 */}
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-lg mb-4 border border-slate-700">서울특별시</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors">금천구 G밸리 (601개)</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">심야 시간대 교통량 연동 자동 조도 조절</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-slate-400 font-bold mb-1 text-sm mr-1">연간</span>
                  <span className="text-4xl font-black text-flolim tracking-tight drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">6만<span className="text-xl font-medium ml-1">kWh</span></span>
                  <span className="text-slate-400 font-bold mb-1 ml-1">절감</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 스마트 빌딩 구축 사례 래퍼 박스 */}
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none translate-y-1/4 -translate-x-1/4"></div>

          <div className="mb-10 relative z-10 flex items-center gap-3 border-b border-slate-800 pb-4">
            <svg className="w-8 h-8 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            <h2 className="text-2xl font-bold text-white">스마트 빌딩 (실내 조명) 실증 사례</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {/* 사례 4 */}
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-lg mb-4 border border-slate-700">공장 및 상업시설</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors">대한민국 ETRI 실증</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">스마트조명 플랫폼 개별/그룹 제어 적용</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-slate-400 font-bold mb-1 text-sm mr-1">최대</span>
                  <span className="text-4xl font-black text-flolim tracking-tight drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">74.1<span className="text-2xl font-medium">%</span></span>
                  <span className="text-slate-400 font-bold mb-1">절감</span>
                </div>
              </div>
            </div>

            {/* 사례 5 */}
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-lg mb-4 border border-slate-700">공동주택 및 건물</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors">대한민국 LH공사 실증</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">IoT 기반 10단계 자동 조도 조절(디밍) 적용</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-slate-400 font-bold mb-1 text-sm mr-1">최대</span>
                  <span className="text-4xl font-black text-flolim tracking-tight drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">70<span className="text-2xl font-medium">%</span></span>
                  <span className="text-slate-400 font-bold mb-1">이상 절감</span>
                </div>
              </div>
            </div>

            {/* 사례 6 */}
            <div className="bg-[#050b14] p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-lg mb-4 border border-slate-700">학교 및 사무실</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-flolim transition-colors">한국광기술원 실증</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">자연광 연동 스마트 센서망 자동 제어</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-slate-400 font-bold mb-1 text-sm mr-1">일반 LED 대비</span>
                  <span className="text-4xl font-black text-flolim tracking-tight drop-shadow-[0_0_15px_rgba(24,169,198,0.3)]">43<span className="text-2xl font-medium">%</span></span>
                  <span className="text-slate-400 font-bold mb-1">추가 절감</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: 'ESG 경영 리포트', path: '/platform/esg' }}
          next={{ label: '다음 페이지', title: '자료실', path: '/support/archive' }} 
        />
      </div>
    </div>
  );
};

export default SupportReferences;