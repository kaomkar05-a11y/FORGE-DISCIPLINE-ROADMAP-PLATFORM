import SectionCard from '../components/SectionCard';

const MentorPage = () => {
  return (
    <SectionCard
      title="AI Mentor"
      description="Structured, action-oriented guidance tied to your roadmap and progress."
    >
      <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
        <p className="text-sm text-slate-400">Mentor Focus Areas</p>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-200">
          <li>Java, DSA, Spring Boot doubt resolution.</li>
          <li>Project readiness reviews and deployment checks.</li>
          <li>Daily discipline diagnostics and recovery plans.</li>
        </ul>
      </div>
    </SectionCard>
  );
};

export default MentorPage;
