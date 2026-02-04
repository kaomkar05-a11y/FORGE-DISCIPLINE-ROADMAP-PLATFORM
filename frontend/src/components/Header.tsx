const appName = import.meta.env.VITE_APP_NAME || 'Forge';

const Header = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">{appName}</p>
          <h1 className="text-2xl font-semibold">Discipline Execution Console</h1>
        </div>
        <div className="text-right text-sm text-slate-300">
          <p>Strict daily check-ins</p>
          <p>Backend enforced roadmap gates</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
