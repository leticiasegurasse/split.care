// Layout padrão para as páginas
import type { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  // Força scroll para o topo quando a rota muda
  useScrollToTop();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Sidebar />
      <main className="w-full mt-16 md:mt-20 mx-auto p-6 lg:p-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout; 