import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  title: string;
  path: string;
}

interface BottomNavProps {
  prev?: NavItem;
  next?: NavItem;
}

export default function BottomNav({ prev, next }: BottomNavProps) {
  return (
    <div className="flex justify-between items-center bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-xl mt-24 relative overflow-hidden">
      {/* 💡 양쪽 장식광 모두 플로림 색상으로 통일 */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-flolim/5 rounded-full blur-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-flolim/5 rounded-full blur-2xl pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      {prev ? (
        <Link to={prev.path} className="flex flex-col text-left group z-10">
          <span className="text-xs font-bold text-slate-500 group-hover:text-flolim transition-colors mb-1">← {prev.label}</span>
          <span className="text-slate-300 font-bold group-hover:text-white transition-colors">{prev.title}</span>
        </Link>
      ) : <div />}

      {next ? (
        <Link to={next.path} className="flex flex-col text-right group z-10">
          <span className="text-xs font-bold text-slate-500 group-hover:text-flolim transition-colors mb-1">{next.label} →</span>
          <span className="text-slate-300 font-bold group-hover:text-white transition-colors">{next.title}</span>
        </Link>
      ) : <div />}
    </div>
  );
}