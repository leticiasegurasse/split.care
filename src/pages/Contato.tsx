const Contato = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contato</h1>
      <p className="text-lg text-gray-600 mb-8">
        Entre em contato conosco para saber mais sobre nossas soluções ou solicitar um orçamento.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulário de Contato */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Envie uma Mensagem</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Seu nome completo"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nome da sua empresa"
              />
            </div>
            
            <div>
              <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                Assunto
              </label>
              <select
                id="assunto"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecione um assunto</option>
                <option value="orcamento">Solicitar Orçamento</option>
                <option value="demo">Agendar Demonstração</option>
                <option value="suporte">Suporte Técnico</option>
                <option value="parceria">Proposta de Parceria</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Descreva sua necessidade..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
        
        {/* Informações de Contato */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações de Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Endereço</p>
                  <p className="text-gray-600">Rua das Tecnologias, 123<br />São Paulo - SP, 01234-567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Telefone</p>
                  <p className="text-gray-600">(11) 9999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">E-mail</p>
                  <p className="text-gray-600">contato@splitcare.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Horário de Atendimento</p>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h<br />Sábado: 9h às 14h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Suporte 24/7</h3>
            <p className="text-gray-600 mb-4">
              Para emergências técnicas, nossa equipe está disponível 24 horas por dia, 7 dias por semana.
            </p>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-800 font-medium">Emergências: (11) 8888-8888</p>
              <p className="text-red-600 text-sm">Atendimento prioritário para clientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato; 