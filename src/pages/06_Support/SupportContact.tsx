import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import BottomNav from '../../components/BottomNav';

export default function SupportContact() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    type: '제품 및 시스템 도입 문의',
    message: ''
  });

  // 💡 [추가됨] 필수 동의 상태 관리
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 💡 [추가됨] 동의 여부 검증
    if (!agreePrivacy) {
      alert("개인정보 수집 및 이용에 동의해 주셔야 문의 접수가 가능합니다.");
      return;
    }

    console.log('Form submitted:', formData);
    alert('문의가 성공적으로 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.');
    
    // 폼 초기화
    setFormData({
      company: '',
      name: '',
      phone: '',
      email: '',
      type: '제품 및 시스템 도입 문의',
      message: ''
    });
    setAgreePrivacy(false);
  };

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader 
        category="온라인 문의"
        title="무엇을 도와드릴까요?"
        subtitle={
          <>
            플로림의 솔루션 도입부터 파트너십 제안까지,<br className="hidden md:block"/>
            궁금하신 사항을 남겨주시면 <strong className="text-white font-bold">전문 컨설턴트가 신속하게 답변</strong>해 드립니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-4xl mt-10">
        
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-bold text-slate-300 ml-1">기관/기업명 <span className="text-flolim">*</span></label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="소속 기관 또는 기업명을 입력해주세요"
                  className="w-full bg-[#050b14] border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-300 ml-1">담당자 성함 및 직급 <span className="text-flolim">*</span></label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="예: 홍길동 책임연구원"
                  className="w-full bg-[#050b14] border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-slate-300 ml-1">연락처 <span className="text-flolim">*</span></label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="예: 010-1234-5678"
                  className="w-full bg-[#050b14] border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-300 ml-1">이메일 주소 <span className="text-flolim">*</span></label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="답변 받으실 이메일을 입력해주세요"
                  className="w-full bg-[#050b14] border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label htmlFor="type" className="text-sm font-bold text-slate-300 ml-1">문의 유형 <span className="text-flolim">*</span></label>
              <div className="relative">
                <select 
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-[#050b14] border border-slate-700 rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors"
                >
                  <option value="제품 및 시스템 도입 문의">제품 및 시스템 도입 문의</option>
                  <option value="KEPCO ES 연계 ESCO 사업 문의">KEPCO ES 연계 ESCO 사업 문의</option>
                  <option value="기술 지원 및 A/S 문의">기술 지원 및 A/S 문의</option>
                  <option value="제휴 및 파트너십 제안">제휴 및 파트너십 제안</option>
                  <option value="기타 문의">기타 문의</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="text-sm font-bold text-slate-300 ml-1">상세 문의 내용 <span className="text-flolim">*</span></label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="도입 예정 현장의 규모, 목적, 궁금하신 점을 자유롭게 남겨주세요."
                className="w-full bg-[#050b14] border border-slate-700 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-flolim focus:ring-1 focus:ring-flolim transition-colors resize-none"
              ></textarea>
            </div>

            {/* 💡 [추가됨] 개인정보 수집 동의 체크박스 */}
            <div className="mb-10 p-4 md:p-5 bg-slate-900/80 border border-slate-700 rounded-xl flex items-start gap-3 shadow-inner">
              <div className="flex items-center h-5 mt-0.5">
                <input 
                  type="checkbox" 
                  id="agree" 
                  checked={agreePrivacy}
                  onChange={(e) => setAgreePrivacy(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-flolim focus:ring-flolim focus:ring-offset-slate-900 cursor-pointer"
                />
              </div>
              <label htmlFor="agree" className="text-xs md:text-sm text-slate-400 cursor-pointer select-none leading-relaxed break-keep">
                <span className="text-flolim font-bold">[필수]</span> 온라인 문의 처리를 위한 <Link to="/privacy" target="_blank" className="text-white font-bold underline hover:text-flolim transition-colors">개인정보 수집 및 이용</Link>에 동의합니다.
              </label>
            </div>

            <div className="flex justify-center">
              <button 
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-flolim hover:bg-cyan-400 active:scale-95 text-slate-900 font-bold text-lg rounded-2xl shadow-[0_0_20px_rgba(24,169,198,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                문의 접수하기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </form>
        </section>

        <BottomNav 
          prev={{ label: '이전 페이지', title: '자료실', path: '/support/archive' }}
          next={{ label: '메인으로', title: '홈', path: '/' }} 
        />
      </div>
    </div>
  );
}