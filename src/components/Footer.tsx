import { Mail, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
                 {/* Seção Principal */}
         <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
           
           {/* Seção Esquerda - Logo e Tagline */}
           <div className="space-y-4">
             <img src="/logo.png" alt="Splitcare" className="w-40 object-contain mx-auto md:mx-0" />
             <div className="space-y-1">
               <p className="text-white text-lg">Valorizamos seu Tempo.</p>
               <p className="text-white text-lg">Aperfeiçoamos sua Evolução Médica.</p>
             </div>
           </div>

           {/* Seção Central - Links da Empresa */}
           <div className="space-y-4">
             <h3 className="text-white/70 text-sm font-medium uppercase tracking-wider">
               Company
             </h3>
             <ul className="space-y-2">
               <li>
                 <a href="/" className="text-white hover:text-white/80 transition-colors">
                   Home
                 </a>
               </li>
               <li>
                 <a href="/sobre" className="text-white hover:text-white/80 transition-colors">
                   Sobre nós
                 </a>
               </li>
               <li>
                 <a href="/contato" className="text-white hover:text-white/80 transition-colors">
                   Contato
                 </a>
               </li>
               <li>
                 <a href="/produtos" className="text-white hover:text-white/80 transition-colors">
                   Produtos
                 </a>
               </li>
               <li>
                 <a href="/blog" className="text-white hover:text-white/80 transition-colors">
                   Blog
                 </a>
               </li>
             </ul>
           </div>

           {/* Seção Direita - Links Legais */}
           <div className="space-y-4">
             <h3 className="text-white/70 text-sm font-medium uppercase tracking-wider">
               Legal
             </h3>
             <ul className="space-y-2">
               <li>
                 <a href="/privacidade" className="text-white hover:text-white/80 transition-colors">
                   Política de Privacidade
                 </a>
               </li>
               <li>
                 <a href="/licenciamento" className="text-white hover:text-white/80 transition-colors">
                   Licenciamento
                 </a>
               </li>
               <li>
                 <a href="/termos" className="text-white hover:text-white/80 transition-colors">
                   Termos de Uso
                 </a>
               </li>
             </ul>
           </div>
         </div>

        {/* Linha Separadora */}
        <hr className="border-white/20 mb-8" />

        {/* Seção Inferior - Copyright e Redes Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-white text-sm">
            Splitcare LTDA - 57.316.959/0001-58
          </div>

          {/* Ícones de Redes Sociais */}
          <div className="flex space-x-4">
            <a href="mailto:contato@splitcare.com" className="text-white hover:text-white/80 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/splitcare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/splitcare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 