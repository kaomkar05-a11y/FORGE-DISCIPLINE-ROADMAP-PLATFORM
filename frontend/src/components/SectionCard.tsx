import { PropsWithChildren } from 'react';

interface SectionCardProps extends PropsWithChildren {
  title: string;
  description?: string;
}

const SectionCard = ({ title, description, children }: SectionCardProps) => {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {description ? <p className="mt-1 text-sm text-slate-400">{description}</p> : null}
      </div>
      {children}
    </section>
  );
};

export default SectionCard;
