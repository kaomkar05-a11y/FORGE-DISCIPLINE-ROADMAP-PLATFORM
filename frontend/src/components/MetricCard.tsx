import { ReactNode } from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  trend?: string;
  icon?: ReactNode;
}

const MetricCard = ({ label, value, trend, icon }: MetricCardProps) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-widest text-slate-400">{label}</p>
        {icon}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <p className="text-2xl font-semibold text-white">{value}</p>
        {trend ? <span className="text-xs text-emerald-400">{trend}</span> : null}
      </div>
    </div>
  );
};

export default MetricCard;
