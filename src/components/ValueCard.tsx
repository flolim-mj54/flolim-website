import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-[#050b14] p-6 md:p-8 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] active:border-flolim active:bg-slate-800/50 transition-all duration-300 text-center group relative overflow-hidden flex flex-col h-full cursor-default">
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
      
      <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 border border-slate-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:border-flolim/50 transition-colors relative z-10 text-flolim shadow-sm shrink-0">
        {icon}
      </div>
      
      <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 group-hover:text-flolim transition-colors relative z-10 break-keep">
        {title}
      </h3>
      
      <p className="text-slate-400 leading-relaxed text-xs md:text-sm font-light relative z-10 break-keep flex-grow">
        {description}
      </p>
    </div>
  );
}