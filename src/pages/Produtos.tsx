const Produtos = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Nossos Produtos</h1>
      <p className="text-lg text-gray-600 mb-8">
        Conheça nossa linha completa de produtos e soluções para segurança empresarial.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">SplitCare Monitor</h3>
          <p className="text-gray-600 mb-4">
            Plataforma completa de monitoramento em tempo real com análise avançada de dados.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Monitoramento 24/7</li>
            <li>• Alertas inteligentes</li>
            <li>• Relatórios automáticos</li>
            <li>• Integração com sistemas existentes</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">SplitCare Protect</h3>
          <p className="text-gray-600 mb-4">
            Solução de proteção avançada com criptografia e controle de acesso.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Criptografia de ponta a ponta</li>
            <li>• Controle de acesso granular</li>
            <li>• Backup automático</li>
            <li>• Conformidade com LGPD</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">SplitCare Analytics</h3>
          <p className="text-gray-600 mb-4">
            Ferramentas de análise e inteligência para tomada de decisões estratégicas.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Dashboards personalizáveis</li>
            <li>• Análise preditiva</li>
            <li>• Métricas em tempo real</li>
            <li>• Exportação de relatórios</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-orange-600 rounded-lg"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">SplitCare Support</h3>
          <p className="text-gray-600 mb-4">
            Suporte técnico especializado e consultoria em segurança.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Suporte 24/7</li>
            <li>• Consultoria especializada</li>
            <li>• Treinamento da equipe</li>
            <li>• Implementação personalizada</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Produtos; 