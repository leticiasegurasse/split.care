import porQueSplit from '../assets/images/por_que_split.svg';
import gustavoProfile from '../assets/images/Dr. Gustavo Caetano Giavarini.svg';
import joaoProfile from '../assets/images/Dr. João Victor Buttini.svg';
import { Smile } from 'lucide-react';
import { ROUTES } from '../config/routes';
import CallToActionButton from '../components/CallToActionButton';
import FAQ from '../components/FAQ';

const Sobre = () => {
  return (
    <div className="min-h-screen space-y-10">
      {/* Primeira Seção - Por que Splitcare? */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-2 shadow-lg overflow-hidden">
            {/* Conteúdo Superior */}
            <div className="p-8">
                             <div className="grid lg:grid-cols-2 gap-8 items-center">
                 {/* Título à esquerda */}
                 <div className="text-center lg:text-left">
                   <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 lg:mb-6">
                     Por que Splitcare?
                   </h1>
                 </div>
                 
                 {/* Texto descritivo à direita */}
                 <div className="text-center lg:text-left">
                   <p className="text-lg text-gray-700 leading-relaxed">
                     Conheça nossa jornada: entenda como nós transformamos a rotina médica e porque isso pode ser decisivo para você.
                   </p>
                 </div>
               </div>
            </div>
            
            {/* Imagem na parte inferior */}
            <div className="">
              <img 
                src={porQueSplit} 
                alt="Por que Splitcare - Figuras representando médico e estátua clássica" 
                className="w-full h-96 rounded-3xl object-cover"
              />
            </div>
          </div>
                 </div>
       </section>

       {/* Segunda Seção - Carta Aberta do Fundador */}
       <section className="">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
             
             {/* Ícone e Título */}
             <div className="text-center mb-8">
               <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                 <Smile className="w-6 h-6 text-gray-600" />
               </div>
               <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                 Carta Aberta do Fundador
               </h2>
             </div>

             {/* Conteúdo da Carta */}
             <div className="prose prose-lg max-w-none text-justify text-gray-500 leading-relaxed space-y-6">
               <p>
                 Por muito tempo, eu fui responsável nacional pela auditoria assistencial em uma das maiores operadoras de saúde da America Latina. A minha especialidade era análise de Eventos Adversos Graves. Era um trabalho de "médico do dia seguinte".
               </p>

               <p>
                 Nesse tempo, contatei centenas de médicos, analisei de milhares de casos clínicos e centenas de milhares de documentos. Aprendi absolutamente tudo sobre processos hospitalares e ambulatoriais. De Norte a Sul do Pais.
               </p>

               <p>
                 Cansei de ver excelentes colegas médicos perdendo noites de sono após uma ligação minha. Cada um tem o seu trabalho. O boleto tá aí pra todo mundo.
               </p>

               <p>As explicações eram diversas:</p>

               <ul className="list-disc list-inside space-y-2 ml-4">
                 <li>"Eu fiz mas não escrevi."</li>
                 <li>"Mas eu orientei os sinais de alarme."</li>
                 <li>"O paciente não entendeu o tratamento."</li>
                 <li>"Aquele dia tava um caos!"</li>
                 <li>"Eu tava cansado e realmente esqueci de registrar."</li>
               </ul>

               <p>Quem estava cansado era eu.</p>

               <p>
                 Por sorte, inda lá dentro, tive total suporte dos melhores gestores de saúde do Brasil pra tentar algo diferente.
               </p>

               <p>
                 Testamos e retestamos o Assistente de IA do Splitcare nos mais diversos cenários.
               </p>

               <p>
                 Funcionou com o recém formado, com o ortop avesso a anamnese e com o senhorzinho mais amado do Centro Clínico que só atendia no papel.
               </p>

               <p>
                 Se você já passou por isso e quer ter tempo para explicar melhor, se certificar que o paciente entendeu e se respaldar juridicamente com menos esforço; eu te convido a conhecer o Split-assist.
               </p>

               {/* Assinatura */}
               <div className="text-center mt-12 pt-8 border-t border-gray-200">
                 <p className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: '"Great Vibes", cursive' }}>
                   Gustavo Caetano Giavarini
                 </p>
                 <p className="text-sm text-gray-500">
                   Médico. Empreendedor. Gestor. Auditor.
                 </p>
               </div>
             </div>
           </div>
                  </div>
       </section>

       {/* Terceira Seção - Estatísticas */}
       <section className="">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               
               {/* Primeira Coluna - Médicos Ativos */}
               <div className="text-center">
                 <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                   700+
                 </div>
                 <div className="text-sm lg:text-base text-gray-500">
                   Médicos Ativos
                 </div>
               </div>

               {/* Segunda Coluna - Hospitais e Clínicas */}
               <div className="text-center">
                 <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                   20+
                 </div>
                 <div className="text-sm lg:text-base text-gray-500">
                   Hospitais e Clínicas
                 </div>
               </div>

               {/* Terceira Coluna - Consultas Médicas */}
               <div className="text-center">
                 <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                   250K+
                 </div>
                 <div className="text-sm lg:text-base text-gray-500">
                   Consultas Médicas
                 </div>
               </div>

               {/* Quarta Coluna - Satisfação Médica */}
               <div className="text-center">
                 <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                   96%
                 </div>
                 <div className="text-sm lg:text-base text-gray-500">
                   Satisfação Médica
                 </div>
               </div>
             </div>
           </div>
                  </div>
       </section>

       {/* Quarta Seção - Call to Action */}
       <section className="">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
             <div className="text-center">
               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                 Use Splitcare
               </h2>
               <CallToActionButton 
                 to={ROUTES.register}
                 text="Otimizar a minha Evolução Médica"
               />
             </div>
           </div>
                  </div>
       </section>

       {/* Quinta Seção - Perfil do Fundador */}
       <section className="">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                           <div className="grid lg:grid-cols-2">
                
                {/* Coluna Esquerda - Texto */}
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                    Dr. Gustavo Caetano Giavarini
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Gustavo é medico pela Univ. Evangélica Mackenzie. 
                      Optou por largar a residência médica de ORL para se dedicar a Gestão em Saude.
                    </p>
                    
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Em 2020, foi Coordenador Médico do então presidente da Sociedade Brasileira de Infectologia nos Clinical Trials que validaram as vacinas de covid-19 (Janssen, Astrazeneca e Pfizer) no Brasil e no mundo.</li>
                      <li>Foi consultor médico em 2 healthtechs (pós M&A)</li>
                      <li>Tem MBA em Gestão e Inovação na Saude pela PUC-RS</li>
                      <li>É medico auditor pelo Hosp. Albert Einstein.</li>
                      <li>Foi Diretor Médico Executivo na maior operadora de saúde da América Latina, onde foi responsável pela auditoria assistencial de mais de 90 hospitais.</li>
                    </ul>
                    
                    <p>
                      Hoje, pelo Splitcare, dedica-se a otimizar e melhorar tudo aquilo que é além do raciocínio ou da intervenção médica.
                    </p>
                  </div>
                </div>
                
                {/* Coluna Direita - Imagem */}
                <div className="order-1 lg:order-2 bg-gray-800 flex items-center justify-center p-8 lg:p-12">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={gustavoProfile} 
                      alt="Dr. Gustavo Caetano Giavarini" 
                      className="w-full max-w-md h-auto object-contain"
                    />
                    
                  </div>
                </div>
              </div>
           </div>
                  </div>
       </section>

       {/* Sexta Seção - Perfil do Dr. João Victor */}
       <section className="">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
             <div className="grid lg:grid-cols-2">
               
               {/* Coluna Esquerda - Imagem */}
               <div className="bg-gray-800 flex items-center justify-center p-8 lg:p-12">
                 <div className="relative w-full h-full flex items-center justify-center">
                   <img 
                     src={joaoProfile} 
                     alt="Dr. João Victor Buttini" 
                     className="w-full max-w-md h-auto object-contain"
                   />
                  
                 </div>
               </div>
               
               {/* Coluna Direita - Texto */}
               <div className="p-8 lg:p-12 flex flex-col justify-center">
                 <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                   Dr. João Victor Buttini
                 </h2>
                 
                 <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                   <p>
                     João Victor Buttini é médico formado pela Faculdades Pequeno Príncipe e possui MBA em Gestão, Inovação e Sistemas de Saúde pela PUC-RS. Desde o início da sua carreira, focou na gestão de sistemas e equipes de saúde.
                   </p>
                   
                   <div>
                     <h3 className="text-lg font-semibold text-gray-800 mb-3">
                       Experiência profissional:
                     </h3>
                     <ul className="list-disc list-inside space-y-2 ml-4">
                       <li>Coordenador médico em instituições públicas de saúde.</li>
                       <li>Gerente Médico Executivo na maior operadora de saúde da América Latina.</li>
                       <li>Consultor Médico pelo Hospital Moinhos de Vento, atuando no projeto Lean nas Emergências, que tem como objetivo reduzir a superlotação de hospitais em todo o Brasil.</li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
           </div>
                  </div>
       </section>

       {/* FAQ */}
       <FAQ />
    </div>
  );
};

export default Sobre; 