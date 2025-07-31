const Seguranca = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Segurança</h1>
      <p className="text-lg text-gray-600 mb-6">
        Nossas soluções de segurança oferecem proteção completa para sua empresa.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Monitoramento 24/7</h3>
          <p className="text-gray-600 text-sm">
            Vigilância contínua com alertas em tempo real para qualquer ameaça detectada.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-green-600 rounded"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Criptografia Avançada</h3>
          <p className="text-gray-600 text-sm">
            Proteção de dados com criptografia de ponta a ponta e protocolos seguros.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-red-600 rounded"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Resposta a Incidentes</h3>
          <p className="text-gray-600 text-sm">
            Equipe especializada pronta para responder rapidamente a qualquer incidente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seguranca; 