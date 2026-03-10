import React from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  to?: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  linkText?: string;
}

export default function FeatureCard({ to, icon, title, description, linkText }: FeatureCardProps) {
  // 카드 내부의 내용 (완벽히 튜닝된 CSS 그대로 적용)
  const cardContent = (
    <>
      <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
      
      <div className="w-14 h-14 bg-slate-800 text-flolim rounded-xl flex items-center justify-center border border-slate-700 mb-8 group-hover:bg-flolim group-hover:text-slate-900 group-hover:border-flolim transition-colors relative z-10 shadow-sm">
        {icon}
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-flolim transition-colors relative z-10 break-keep">
        {title}
      </h3>
      
      <p className="text-slate-400 font-light text-sm leading-relaxed flex-grow relative z-10 mb-8 break-keep">
        {description}
      </p>
      
      {linkText && (
        <div className="text-flolim font-bold text-sm flex items-center gap-2 relative z-10 group-hover:text-cyan-400 transition-colors">
          {linkText} 
          <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </div>
      )}
    </>
  );

  // 공통 래퍼 클래스 (모바일 터치 쫀득함, 쉐도우 등 일괄 적용)
  const baseClasses = "bg-[#050b14] p-8 md:p-10 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim hover:bg-slate-800/30 hover:shadow-[0_10px_30px_rgba(24,169,198,0.15)] active:scale-[0.98] active:border-flolim active:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 cursor-pointer";

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={baseClasses}>
      {cardContent}
    </div>
  );
}