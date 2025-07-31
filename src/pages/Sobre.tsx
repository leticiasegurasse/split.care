const Sobre = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sobre Nós</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h2>
        <p className="text-gray-600 mb-6">
          A SplitCare nasceu com o compromisso de revolucionar a segurança empresarial através 
          de tecnologia inovadora e soluções personalizadas. Nossa missão é proteger os ativos 
          digitais das empresas, garantindo tranquilidade e confiança em um mundo cada vez mais conectado.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">5+</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Anos de Experiência</h3>
            <p className="text-sm text-gray-600">Especialistas em segurança digital</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">500+</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Clientes Atendidos</h3>
            <p className="text-sm text-gray-600">Empresas de todos os portes</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">99.9%</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Uptime Garantido</h3>
            <p className="text-sm text-gray-600">Disponibilidade máxima</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossos Valores</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Inovação</h3>
            <p className="text-gray-600">
              Buscamos constantemente novas tecnologias e metodologias para oferecer 
              as melhores soluções do mercado.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Confiabilidade</h3>
            <p className="text-gray-600">
              Nossos clientes confiam em nós para proteger seus dados mais valiosos, 
              e não medimos esforços para manter essa confiança.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Transparência</h3>
            <p className="text-gray-600">
              Acreditamos na comunicação clara e honesta com nossos clientes, 
              parceiros e colaboradores.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Excelência</h3>
            <p className="text-gray-600">
              Comprometimento com a qualidade em todos os aspectos do nosso trabalho, 
              desde o desenvolvimento até o suporte.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Equipe</h2>
        <p className="text-gray-600 mb-6">
          Contamos com uma equipe multidisciplinar de especialistas em segurança, 
          desenvolvimento e infraestrutura, todos comprometidos em oferecer o melhor 
          serviço aos nossos clientes.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-800">João Silva</h3>
            <p className="text-sm text-gray-600">CEO & Fundador</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-800">Maria Santos</h3>
            <p className="text-sm text-gray-600">CTO</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-800">Pedro Costa</h3>
            <p className="text-sm text-gray-600">Head de Segurança</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre; 