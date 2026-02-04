import SectionCard from '../components/SectionCard';

const RoadmapPage = () => {
  return (
    <SectionCard
      title="Roadmap Control Center"
      description="Roadmap logic is fully data-driven from the backend."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Current Week Goals</p>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-200">
            <li>Complete assigned Java fundamentals topics.</li>
            <li>Log minimum daily DSA problems.</li>
            <li>Submit daily notes for accountability.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Phase Gate</p>
          <p className="mt-2 text-sm text-slate-200">
            Next phase unlocks only after project deployments and completion proofs.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default RoadmapPage;
