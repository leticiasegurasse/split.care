import { MessageSquare, Phone, MapPin } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Seção Principal */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Badge */}
            <div className="inline-block border border-gray-400 text-gray-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Contato Splitcare
            </div>
            
            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Entre em contato conosco!
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Seu contato pode ser o primeiro passo para evoluir sua prática médica.
            </p>
          </div>

          {/* Cards de Contato */}
          <div className="grid md:grid-cols-3 gap-4">
            
            {/* Card 1 - Email */}
            <div className="bg-gray-100 rounded-2xl p-2 flex justify-center items-center">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col gap-2">
                  {/* Ícone */}
                  <MessageSquare className="w-8 h-8 text-gray-500" />
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Email
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Quer saber mais? Mande um e-mail e logo retornamos.
                  </p>
                  
                  {/* Linha Separadora */}
                  <hr className="border-gray-200" />
                  
                  {/* Contato */}
                  <a 
                    href="mailto:contato@splitcare.com.br"
                    className="font-semibold text-sm"
                  >
                    contato@splitcare.com.br
                  </a>
                </div>
              </div>
            </div>

                         {/* Card 2 - WhatsApp */}
             <div className="bg-gray-100 rounded-2xl p-2 flex justify-center items-center">
               <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                 <div className="flex flex-col gap-2">
                   {/* Ícone */}
                   <Phone className="w-8 h-8 text-gray-500" />
                   
                   {/* Título */}
                   <h3 className="text-xl font-bold text-gray-900 mb-4">
                     Whatsapp
                   </h3>
                   
                   {/* Descrição */}
                   <p className="text-gray-600 mb-6 leading-relaxed">
                     Precisa de ajuda agora? Chame a gente no WhatsApp!
                   </p>
                   
                   {/* Linha Separadora */}
                   <hr className="border-gray-200" />
                   
                   {/* Contato */}
                   <a 
                     href="https://wa.me/5511948440923"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="font-semibold text-sm"
                   >
                     +55 (11) 948 440 923
                   </a>
                 </div>
               </div>
             </div>

                         {/* Card 3 - Endereço */}
             <div className="bg-gray-100 rounded-2xl p-2 flex justify-center items-center">
               <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                 <div className="flex flex-col gap-2">
                   {/* Ícone */}
                   <MapPin className="w-8 h-8 text-gray-500" />
                   
                   {/* Título */}
                   <h3 className="text-xl font-bold text-gray-900 mb-4">
                     Endereço
                   </h3>
                   
                   {/* Descrição */}
                   <p className="text-gray-600 mb-6 leading-relaxed">
                     Nosso endereço está de portas abertas para você.
                   </p>
                   
                   {/* Linha Separadora */}
                   <hr className="border-gray-200" />
                   
                   {/* Contato */}
                   <p className="font-semibold text-sm">
                     São Paulo, Brasil - Rua Doutor Bacelar, 719
                   </p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato; 