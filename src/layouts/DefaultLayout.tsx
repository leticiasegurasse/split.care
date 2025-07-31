// Layout padrão para as páginas
import type { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Sidebar />
      <main className="w-full mt-16 md:mt-20 mx-auto p-6 lg:p-0">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout; 