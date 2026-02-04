import { PropsWithChildren } from 'react';
import Header from '../components/Header';

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
