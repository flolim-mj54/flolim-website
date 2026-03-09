import React from 'react';

interface PageHeaderProps {
  category: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

export default function PageHeader({ category, title, subtitle }: PageHeaderProps) {
  return (
    <div className="text-center mb-16 mt-10 animate-fade-in">
      <p className="text-flolim font-bold tracking-widest mb-4 uppercase text-sm">{category}</p>
      <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-md">
        {title}
      </h1>
      <div className="w-24 h-1 bg-flolim mx-auto mb-8 shadow-[0_0_15px_rgba(24,169,198,0.8)]"></div>
      {/* 💡 md:whitespace-nowrap 속성을 제거하여 자연스럽게 글이 감싸지도록(Wrap) 수정했습니다 */}
      <p className="text-lg md:text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed break-keep">
        {subtitle}
      </p>
    </div>
  );
}