import MetricCard from '../components/MetricCard';
import SectionCard from '../components/SectionCard';

const DashboardPage = () => {
  return (
    <SectionCard
      title="Execution Dashboard"
      description="Track progress, discipline, and project gating in real time."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Overall Progress" value="0%" trend="Locked" />
        <MetricCard label="Current Phase" value="Phase 1" />
        <MetricCard label="Discipline Streak" value="0 days" />
        <MetricCard label="Discipline Score" value="100" />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Status</p>
          <p className="text-lg font-semibold text-emerald-400">ON_TRACK</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Missed Days</p>
          <p className="text-lg font-semibold text-white">0</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Project Gating</p>
          <p className="text-lg font-semibold text-white">Pending Deployments</p>
        </div>
      </div>
    </SectionCard>
  );
};

export default DashboardPage;
