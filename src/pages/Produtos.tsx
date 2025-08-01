import relogioProdutos from '../assets/images/relogio-produtos.webp';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import FAQ from '../components/FAQ';

const Produtos = () => {
  return (
    <div className="min-h-screen">
             {/* Primeira Seção - Hero */}
       <section className="relative bg-blue-50 py-20 lg:py-32">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-3 gap-8 items-center">
             {/* Título à esquerda */}
             <div className="text-gray-800 text-center lg:text-left">
               <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                 Produtos
               </h1>
             </div>
             
             {/* Imagem no centro */}
             <div className="hidden lg:flex justify-center">
               <img 
                 src={relogioProdutos} 
                 alt="Relógio Produtos" 
                 className="w-full max-w-sm lg:max-w-md h-auto object-contain"
               />
             </div>
             
             {/* Texto descritivo à direita */}
             <div className="text-gray-800 text-center lg:text-left">
               <p className="text-lg lg:text-xl leading-relaxed">
                 Descubra as soluções inovadoras que diferenciam o Splitcare, potencializando a prática médica no cenário digital.
               </p>
             </div>
           </div>
         </div>
       </section>

        {/* Segunda Seção - Split-assist */}
        <section className="">
         <div className="">
           <div className="grid lg:grid-cols-2">
             {/* Coluna Esquerda - Conteúdo */}
             <div className="order-2 lg:order-1 bg-white p-12 lg:p-16 flex flex-col justify-center">
               <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                 Split-assist
               </h2>
               <p className="text-lg text-gray-600 leading-relaxed">
                 Transcrição inteligente que transforma áudio em prontuários completos. Rapidez, segurança e mais tempo para o que realmente importa.
               </p>
             </div>
             
             {/* Coluna Direita - Logo e Background Azul */}
             <div className="order-1 lg:order-2 flex items-center justify-center p-12 lg:p-16" style={{ backgroundColor: 'var(--color-primary)' }}>
               <div className="text-center">
                 <img 
                   src="/splitcare-branca.png" 
                   alt="Splitcare Logo" 
                   className="mx-auto mb-4"
                 />
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Terceira Seção - Split-teams */}
       <section className="">
         <div className="">
           <div className="grid lg:grid-cols-2">
             {/* Coluna Esquerda - Imagem e Background Azul */}
             <div className="flex items-center justify-center">
               <div className="text-center">
                 <img 
                   src="/splitteams.svg" 
                   alt="Split-teams Logo" 
                   className=""
                 />
               </div>
             </div>
             
             {/* Coluna Direita - Conteúdo */}
             <div className="bg-white p-12 lg:p-16 flex flex-col justify-center">
               <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                 Split-teams
               </h2>
               <p className="text-lg text-gray-600 leading-relaxed">
                 Para instituições que valorizam trabalho em equipe: o Split-Teams amplia a colaboração e traz resultados mais consistentes no ambiente de saúde.
               </p>
             </div>
           </div>
         </div>
        </section>

                 {/* Quarta Seção - Journey-care */}
         <section className="">
           <div className="">
             <div className="grid lg:grid-cols-2">
               {/* Coluna Esquerda - Conteúdo */}
               <div className="order-2 lg:order-1 bg-white p-12 lg:p-16 flex flex-col justify-center">
                 <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                   Journey-care
                 </h2>
                 <p className="text-lg text-gray-600 leading-relaxed">
                   Comunicação humanizada, apoiada por ferramentas inteligentes. Com Journey-Care, o marketing médico se torna mais próximo e eficaz.
                 </p>
               </div>
               
               {/* Coluna Direita - Imagem */}
               <div className="order-1 lg:order-2 flex items-center justify-center">
                 <div className="text-center">
                   <img 
                     src="/journeycare.svg" 
                     alt="Journey-care Logo" 
                     className=""
                   />
                 </div>
               </div>
             </div>
           </div>
                  </section>

          {/* Quinta Seção - Call to Action */}
          <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Use Splitcare
              </h2>
              <Link 
                to={ROUTES.register} 
                target="_blank"
                className="inline-flex items-center gap-3 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-600)] text-white pr-2 pl-7 py-2 rounded-lg text-lg font-semibold transition-colors duration-200 group"
              >
                <span>Liberte seu tempo agora!</span>
                <div className="bg-[var(--color-secondary-600)] p-2 rounded-md group-hover:bg-[var(--color-secondary-700)] transition-colors duration-200">
                  <ArrowRight className="w-7 h-7" />
                </div>
              </Link>
            </div>
                     </section>

           {/* Sexta Seção - FAQ */}
           <FAQ />
    </div>
  );
};

export default Produtos; 