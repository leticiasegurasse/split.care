import cadeadoImage from '../assets/images/cadeado.svg';
import optOutImage from '../assets/images/OPT-OUT.svg';
import lgpdImage from '../assets/images/LGPD.svg';
import criptografiaImage from '../assets/images/anonimizacao_e_criptografia.svg';
import autenticacaoImage from '../assets/images/Autenticacao_multifator.svg';
import documentacaoImage from '../assets/images/Documentacao_clara.svg';
import convencidoImage from '../assets/images/ainda_nao_esta_convencido.svg';
import { Calendar, Home } from 'lucide-react';
import FAQ from '../components/FAQ';

const Seguranca = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Primeira Seção - Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="">
            
            {/* Lado Esquerdo - Texto */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Sua consulta protegida <br />
                como nunca antes.
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Splitcare garante registros inteligentes e seguros para você focar no que faz melhor: cuidar dos seus pacientes.
              </p>
            </div>

            {/* Lado Direito - Ícone do Cadeado */}
            {/* Cadeado com sombra */}
            <div className="hidden lg:block absolute top-0 right-52 w-48 h-48 ">
              <img 
                src={cadeadoImage} 
                alt="Cadeado de Segurança" 
                className="lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              />
              {/* Sombra suave */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-300/20 rounded-full blur-xl transform scale-90"></div>
            </div>
          </div>
                 </div>
       </section>

       {/* Segunda Seção - Cards de Políticas */}
       <section className="bg-gray-50 py-20 lg:py-32">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-8">
             
             {/* Card 1 - Política de Privacidade */}
             <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
               {/* Cabeçalho com ícone e data */}
               <div className="flex items-center gap-2 mb-4">
                 <Calendar className="w-5 h-5 text-gray-400" />
                 <span className="text-sm text-gray-600">Feb 27, 2025</span>
               </div>
               
               {/* Título */}
               <h3 className="text-xl font-bold text-gray-900 mb-3">
                 Política de Privacidade
               </h3>
               
               {/* Descrição */}
               <p className="text-gray-500 mb-6 leading-relaxed">
                 Protegemos seus dados com os mais altos padrões de segurança.
               </p>
               
               {/* Botão */}
               <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                 <Home className="w-4 h-4" />
                 <span>View more</span>
               </button>
             </div>

             {/* Card 2 - Licenciamento */}
             <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
               {/* Cabeçalho com ícone e data */}
               <div className="flex items-center gap-2 mb-4">
                 <Calendar className="w-5 h-5 text-gray-400" />
                 <span className="text-sm text-gray-600">Feb 27, 2025</span>
               </div>
               
               {/* Título */}
               <h3 className="text-xl font-bold text-gray-900 mb-3">
                 Licenciamento
               </h3>
               
               {/* Descrição */}
               <p className="text-gray-500 mb-6 leading-relaxed">
                 Nossos acordos de licenciamento oferecem clareza para o uso do produto.
               </p>
               
               {/* Botão */}
               <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                 <Home className="w-4 h-4" />
                 <span>View more</span>
               </button>
             </div>

             {/* Card 3 - Termos de Uso */}
             <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
               {/* Cabeçalho com ícone e data */}
               <div className="flex items-center gap-2 mb-4">
                 <Calendar className="w-5 h-5 text-gray-400" />
                 <span className="text-sm text-gray-600">Feb 27, 2025</span>
               </div>
               
               {/* Título */}
               <h3 className="text-xl font-bold text-gray-900 mb-3">
                 Termos de Uso
               </h3>
               
               {/* Descrição */}
               <p className="text-gray-500 mb-6 leading-relaxed">
                 Revisite nossos termos de uso para entender claramente seus direitos e obrigações.
               </p>
               
               {/* Botão */}
               <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                 <Home className="w-4 h-4" />
                 <span>View more</span>
               </button>
             </div>
           </div>
                   </div>
        </section>

        {/* Terceira Seção - Recursos de Proteção de Dados */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1 - OPT-OUT */}
              <div className="w-80 p-6">
                {/* Ícone */}
                <div className="w-full h-80 mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={optOutImage} 
                    alt="OPT-OUT - Sua decisão" 
                    className="w-full object-contain"
                  />
                </div>
                
                {/* Título */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  OPT-OUT: Seus dados, sua decisão.
                </h3>
                
                {/* Descrição */}
                <p className="text-gray-600 leading-relaxed text-justify">
                  O Splitcare respeita totalmente sua autonomia. Com a opção de OPT-OUT, você tem o poder de impedir que os dados dos seus pacientes sejam utilizados para treinar qualquer modelo de inteligência artificial. A escolha sobre o uso dos dados será sempre sua.
                </p>
              </div>

                             {/* Card 2 - LGPD */}
               <div className="w-80 p-6">
                 {/* Ícone */}
                 <div className="w-full h-80 mb-6 overflow-hidden rounded-xl">
                   <img 
                     src={lgpdImage} 
                     alt="LGPD - Conformidade" 
                     className="w-full object-contain"
                   />
                 </div>
                 
                 {/* Título */}
                 <h3 className="text-xl font-bold text-gray-900 mb-4">
                   LGPD: Armazenamento em total conformidade
                 </h3>
                 
                 {/* Descrição */}
                 <p className="text-gray-600 leading-relaxed text-justify">
                   Não corra riscos legais. O Splitcare armazena todos os dados em servidores no Brasil, garantindo total conformidade com a Lei Geral de Proteção de Dados (LGPD). Assim, você mantém sua prática médica segura e dentro da lei.
                 </p>
               </div>

                               {/* Card 3 - Anonimização e Criptografia */}
                <div className="w-80 p-6">
                  {/* Ícone */}
                  <div className="w-full h-80 mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={criptografiaImage} 
                      alt="Anonimização e Criptografia" 
                      className="w-full object-contain"
                    />
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Anonimização e criptografia: proteção robusta
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Os dados são sempre anonimizados e protegidos com criptografia avançada. Isso significa que, mesmo no improvável caso de um vazamento, as informações são inúteis para terceiros, protegendo você e seus pacientes.
                  </p>
                </div>

                {/* Card 4 - Autenticação Multifator */}
                <div className="w-80 p-6">
                  {/* Ícone */}
                  <div className="w-full h-80 mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={autenticacaoImage} 
                      alt="Autenticação Multifator" 
                      className="w-full object-contain"
                    />
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Autenticação multifator e senhas fortes: acesso restrito ao máximo
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed text-justify">
                    No Splitcare, a segurança começa no login. Usamos autenticação multifator combinada com a exigência de senhas robustas para garantir que apenas você tenha acesso às informações sensíveis das suas consultas.
                  </p>
                </div>

                {/* Card 5 - Documentação Clara */}
                <div className="w-80 p-6">
                  {/* Ícone */}
                  <div className="w-full h-80 mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={documentacaoImage} 
                      alt="Documentação Clara" 
                      className="w-full object-contain"
                    />
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Documentação clara e auditoria simplificada
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Nunca mais fique inseguro diante de auditorias ou demandas judiciais. O Splitcare gera registros claros, detalhados e consistentes, proporcionando proteção jurídica confiável e facilitando sua defesa sempre que necessário.
                  </p>
                </div>

                {/* Card 6 - Ainda não está convencido */}
                <div className="w-80 p-6">
                  {/* Ícone */}
                  <div className="w-full h-80 mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={convencidoImage} 
                      alt="Controle de Dados" 
                      className="w-full object-contain"
                    />
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Ainda não está convencido?
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed text-justify">
                    No Splitcare, você pode optar por excluir completamente os dados dos seus pacientes a cada 24 horas. Isso significa liberdade absoluta para controlar o que acontece com suas informações. Nenhum dado seu ou do paciente permanece no sistema sem seu consentimento explícito.
                  </p>
                </div>
            </div>
          </div>
                 </section>

         {/* Quarta Seção - Tabela de Preços */}
         <section className="bg-gray-50 py-20 lg:py-32">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             {/* Cabeçalho da Seção */}
             <div className="text-center mb-16">
                               <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm font-medium mb-4">
                  Assistente de IA
                </div>
               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                 Aperfeiçoe sua Evolução Médica
               </h2>
             </div>

             {/* Cards de Preços */}
             <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               
               {/* Plano 1 - Split-assist (Standard) */}
               <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                 {/* Cabeçalho do Plano */}
                 <div className="flex items-center justify-between mb-6">
                   <h3 className="text-2xl font-bold text-gray-900">Split-assist</h3>
                   <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Mensal</span>
                 </div>
                 
                 {/* Preço */}
                 <div className="mb-8">
                   <span className="text-4xl font-bold text-gray-900">R$369,00</span>
                   <span className="text-gray-600">/mês</span>
                 </div>
                 
                 {/* Lista de Recursos */}
                 <ul className="space-y-4 mb-8">
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Consultas Ilimitadas</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Análise de Sentimento com Limite</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Chat com GPT 4o com Limite</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Compartilhamento de caso clínico com Limite</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Feedback do Paciente com Limite</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Pagamento sem desconto</span>
                   </li>
                 </ul>
                 
                                   {/* Botão */}
                  <button className="w-full bg-[var(--color-primary)] text-white py-3 px-6 rounded-lg font-medium hover:bg-[var(--color-primary-600)] transition-colors duration-200">
                    Use Splitcare
                  </button>
                </div>

                {/* Plano 2 - Split-assist (Destaque) */}
                               <div className="bg-[var(--color-primary)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform scale-105">
                 {/* Cabeçalho do Plano */}
                 <div className="mb-6">
                   <h3 className="text-2xl font-bold text-white">Split-assist</h3>
                 </div>
                 
                 {/* Preço */}
                 <div className="mb-8">
                   <span className="text-4xl font-bold text-white">R$248,00</span>
                 </div>
                 
                 {/* Lista de Recursos */}
                 <ul className="space-y-4 mb-8">
                   <li className="flex items-start">
                     <span className="text-white mr-3">•</span>
                     <span className="text-white">Consultas Ilimitadas</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-white mr-3">•</span>
                     <span className="text-white">Análise de Sentimento Ilimitada</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-white mr-3">•</span>
                     <span className="text-white">Chat com GPT 4o Ilimitado</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-white mr-3">•</span>
                     <span className="text-white">Compartilhamento ilimitado de caso clínico</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-white mr-3">•</span>
                     <span className="text-white">Telemedicina</span>
                   </li>
                 </ul>
                 
                 {/* Botões */}
                 <div className="space-y-3">
                                       <input 
                      type="email" 
                      placeholder="Digite aqui seu email" 
                      className="w-full bg-[var(--color-secondary-100)] text-gray-800 py-3 px-4 rounded-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-300)]"
                    />
                    <button className="w-full bg-[var(--color-secondary)] text-white py-3 px-6 rounded-lg font-medium hover:bg-[var(--color-secondary-600)] transition-colors duration-200">
                      Fale Conosco
                    </button>
                 </div>
               </div>

               {/* Plano 3 - Split-assist+Prontuário (Premium) */}
               <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                 {/* Cabeçalho do Plano */}
                 <div className="mb-6">
                   <h3 className="text-2xl font-bold text-gray-900">Split-assist+Prontuário</h3>
                 </div>
                 
                 {/* Preço */}
                 <div className="mb-8">
                   <span className="text-4xl font-bold text-gray-900">R$809,00</span>
                   <span className="text-gray-600">/mês</span>
                 </div>
                 
                 {/* Lista de Recursos */}
                 <ul className="space-y-4 mb-8">
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Consultas Ilimitadas</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Análise de Sentimento Ilimitada</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Chat com GPT 4o Ilimitado</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Compartilhamento ilimitado de caso clínico</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-900 mr-3">•</span>
                     <span className="text-gray-700">Prontuário Médico Integrado</span>
                   </li>
                 </ul>
                 
                                   {/* Botão */}
                  <button className="w-full bg-[var(--color-primary)] text-white py-3 px-6 rounded-lg font-medium hover:bg-[var(--color-primary-600)] transition-colors duration-200">
                    Use Splitcare
                  </button>
               </div>
             </div>
           </div>
                   </section>

          {/* Componente FAQ */}
          <FAQ />
        </div>
      );
    };

export default Seguranca; 