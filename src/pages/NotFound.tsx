import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { ROUTES } from '../config/routes';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Número 404 estilizado */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[var(--color-primary)] leading-none">
            4<span className="text-[var(--color-primary-300)]">0</span>4
          </h1>
        </div>

        {/* Mensagem principal */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
        </div>

        {/* Botões de ação */}
        <div className="space-y-4">
                     {/* Botão principal - Voltar ao início */}
           <Link
             to={ROUTES.home}
             className="inline-flex items-center justify-center w-full bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-primary-600)] transition-colors duration-200 group"
           >
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
            Voltar ao Início
          </Link>

          {/* Botão secundário - Voltar à página anterior */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Voltar à Página Anterior
          </button>
        </div>

        {/* Links úteis */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Ou navegue para uma das páginas principais:
          </p>
                     <div className="flex flex-wrap justify-center gap-3">
             <Link
               to={ROUTES.home}
               className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-600)] transition-colors"
             >
               Home
             </Link>
             <span className="text-gray-300">•</span>
             <Link
               to={ROUTES.produtos}
               className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-600)] transition-colors"
             >
               Produtos
             </Link>
             <span className="text-gray-300">•</span>
             <Link
               to={ROUTES.sobre}
               className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-600)] transition-colors"
             >
               Sobre nós
             </Link>
             <span className="text-gray-300">•</span>
             <Link
               to={ROUTES.contato}
               className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-600)] transition-colors"
             >
               Contato
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 