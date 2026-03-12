import { useEffect } from 'react';

export default function PrivacyPolicy() {
  // 페이지 진입 시 스크롤 최상단 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20 pt-32 bg-[#020617] min-h-screen font-sans text-slate-300">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="mb-12 border-b border-slate-700 pb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">개인정보 처리방침</h1>
          <p className="text-slate-400 font-light text-sm md:text-base break-keep">
            주식회사 플로림은 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
          </p>
        </div>

        <div className="bg-[#050b14] p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl space-y-10 text-sm md:text-base font-light leading-relaxed break-keep">
          
          <section>
            <p>이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보의 처리와 보호에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">1. 개인정보의 처리 목적</h2>
            <p className="mb-3">회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong className="text-slate-300">온라인 문의 접수 및 답변:</strong> 문의 내용 확인, 상담 결과 회신, 서비스 도입(KEPCO ES 연계 ESCO 등) 관련 안내 및 의사소통</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">2. 처리하는 개인정보의 항목</h2>
            <p className="mb-3">회사는 온라인 문의 처리를 위해 정보주체의 동의를 받아 아래와 같은 최소한의 개인정보 항목을 수집하고 있습니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong className="text-slate-300">수집 항목:</strong> [필수] 담당자 성함/직급, 연락처, 이메일, 기관/기업명<br/><span className="text-xs text-slate-500">(※ 기관/기업명, 문의 유형, 상세 문의 내용은 문의 처리를 위한 부가 정보로 함께 수집됩니다.)</span></li>
              <li><strong className="text-slate-300">수집 방법:</strong> 홈페이지 내 '온라인 문의 양식'을 통한 수집</li>
              <li><strong className="text-slate-300">법적 근거:</strong> 「개인정보 보호법」 제15조 제1항 제1호('동의')</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">3. 개인정보의 처리 및 보유 기간</h2>
            <p className="mb-2">① 회사는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.</p>
            <p className="mb-3">② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong className="text-slate-300">온라인 문의 관리:</strong> 문의 접수 및 상담 완료 후 3년 간 보관 후 파기</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">4. 개인정보의 파기 절차 및 방법에 관한 사항</h2>
            <p className="mb-2">① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
            <p className="mb-3">② 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong className="text-slate-300">파기 절차:</strong> 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
              <li><strong className="text-slate-300">파기 방법:</strong> 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">5. 정보주체의 권리·의무 및 그 행사방법</h2>
            <p className="mb-2">① 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 및 동의 철회 등의 권리를 행사할 수 있습니다.</p>
            <p className="mb-2">② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.</p>
            <p>③ 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도 있습니다. 이 경우 위임장을 제출하셔야 합니다.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">6. 개인정보의 안전성 확보조치에 관한 사항</h2>
            <p className="mb-3">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong className="text-slate-300">관리적 조치:</strong> 내부 관리계획 수립·시행, 정기적 직원 교육</li>
              <li><strong className="text-slate-300">기술적 조치:</strong> 개인정보처리시스템 등의 접근 권한 관리, 보안프로그램 설치 및 갱신</li>
              <li><strong className="text-slate-300">물리적 조치:</strong> 전산실, 자료보관실 등의 접근 통제</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">7. 개인정보 보호 업무 담당 부서 안내</h2>
            <p className="mb-4">① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 전담 부서를 지정하고 있습니다.</p>
            
            {/* 💡 [수정됨] 담당자 이름 및 이메일 제거, 직위/부서명/대표연락처로 공식화 */}
            <div className="bg-slate-800/50 p-5 rounded-2xl mb-4 border border-slate-700">
              <p className="font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-flolim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                개인정보 보호 업무 담당 부서
              </p>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex"><span className="w-20 text-slate-500 shrink-0">담당직위</span> 솔루션연구개발부 책임자</li>
                <li className="flex"><span className="w-20 text-slate-500 shrink-0">부서명</span> 솔루션연구개발부</li>
                <li className="flex"><span className="w-20 text-slate-500 shrink-0">연락처</span> 1660-0687</li>
              </ul>
            </div>

            <p>② 정보주체는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 담당 부서로 문의할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">8. 권익침해 구제방법</h2>
            <p className="mb-3">정보주체는 개인정보침해로 인한 구제를 받기 위하여 아래의 기관에 분쟁해결이나 상담 등을 신청할 수 있습니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong className="text-slate-300">개인정보 분쟁조정위원회:</strong> (국번없이) 1833-6972 (www.kopico.go.kr)</li>
              <li><strong className="text-slate-300">개인정보침해 신고센터:</strong> (국번없이) 118 (privacy.kisa.or.kr)</li>
              <li><strong className="text-slate-300">경찰청:</strong> (국번없이) 182 (ecrm.police.go.kr)</li>
            </ul>
          </section>

          <section className="pt-4">
            <h2 className="text-lg md:text-xl font-bold text-white mb-2">9. 개인정보 처리방침의 변경</h2>
            <p>이 개인정보 처리방침은 <strong className="text-white">2026년 3월 12일</strong>부터 적용됩니다.</p>
          </section>
        </div>

      </div>
    </div>
  );
}