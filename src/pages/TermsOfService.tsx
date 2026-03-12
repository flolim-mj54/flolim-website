import { useEffect } from 'react';

export default function TermsOfService() {
  // 페이지 진입 시 스크롤 최상단 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20 pt-32 bg-[#020617] min-h-screen font-sans text-slate-300">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="mb-12 border-b border-slate-700 pb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">이용약관</h1>
          <p className="text-slate-400 font-light text-sm md:text-base break-keep">
            주식회사 플로림 웹사이트에 방문해 주셔서 감사합니다. 본 약관은 이용자와 회사 간의 기본적인 권리와 의무를 규정하고 있습니다.
          </p>
        </div>

        <div className="bg-[#050b14] p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl space-y-10 text-sm md:text-base font-light leading-relaxed break-keep">
          
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">제1조 (목적)</h2>
            <p>본 약관은 주식회사 플로림(이하 "회사")이 제공하는 웹사이트(www.flolim.com) 및 관련 서비스의 이용과 관련하여, 회사와 이용자의 권리, 의무 및 책임 사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">제2조 (용어의 정의)</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong className="text-slate-300">웹사이트:</strong> 회사가 이용자에게 솔루션 정보, 실증 사례, 기업 정보 등을 제공하기 위하여 운영하는 가상의 영업장 또는 정보 제공 플랫폼을 의미합니다.</li>
              <li><strong className="text-slate-300">이용자:</strong> 웹사이트에 접속하여 본 약관에 따라 회사가 제공하는 정보 및 서비스를 이용하는 자를 의미합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">제3조 (약관의 효력 및 변경)</h2>
            <p className="mb-2">① 본 약관은 웹사이트 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</p>
            <p className="mb-2">② 회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 개정된 약관은 적용일자 및 개정 사유를 명시하여 현행 약관과 함께 웹사이트 초기 화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</p>
            <p>③ 이용자는 변경된 약관에 동의하지 않을 권리가 있으며, 변경된 약관의 효력 발생일 이후에도 웹사이트를 계속 이용할 경우 약관의 변경 사항에 동의한 것으로 간주합니다.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">제4조 (서비스의 제공 및 중단)</h2>
            <p className="mb-2">① 회사는 웹사이트를 통해 기업 및 솔루션 소개, 기술 자료 제공, 온라인 문의 접수 등의 서비스를 제공합니다. (본 웹사이트는 별도의 회원가입 및 전자결제 기능을 제공하지 않습니다.)</p>
            <p>② 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 합리적인 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">제5조 (저작권의 귀속 및 이용 제한)</h2>
            <p className="mb-2">① 회사가 작성한 웹사이트 내의 모든 저작물(텍스트, 이미지, 영상, 브로슈어, UI/UX 디자인 등)에 대한 저작권 및 기타 지적재산권은 "회사"에 귀속됩니다.</p>
            <p>② 이용자는 웹사이트를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 서면 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">제6조 (면책 조항)</h2>
            <p className="mb-2">① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
            <p className="mb-2">② 회사는 이용자가 웹사이트에 게재된 정보, 자료, 사실의 신뢰도 및 정확성 등을 맹신하여 입은 손해에 대하여 책임을 지지 않습니다. 실제 시스템 도입 및 계약에 관한 구체적인 사항은 회사와의 별도 오프라인 상담 및 계약서를 통해 확정됩니다.</p>
            <p>③ 다운로드 가능한 기술 문서 및 브로슈어는 참고용으로 제공되며, 현장 상황에 따라 실제 사양과 차이가 있을 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">제7조 (분쟁 해결 및 관할법원)</h2>
            <p className="mb-2">① 회사와 이용자는 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.</p>
            <p>② 전항의 노력에도 불구하고 동 분쟁에 관한 소송이 제기될 경우, 회사의 본점 소재지를 관할하는 법원을 전속 관할법원으로 합니다.</p>
          </section>

          <section className="pt-4">
            <h2 className="text-lg md:text-xl font-bold text-white mb-2">부칙</h2>
            <p>본 약관은 <strong className="text-white">2026년 3월 12일</strong>부터 시행됩니다.</p>
          </section>
        </div>

      </div>
    </div>
  );
}