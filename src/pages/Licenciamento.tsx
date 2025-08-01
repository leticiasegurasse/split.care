import { Calendar } from 'lucide-react';

const Licenciamento = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Seção Principal */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Badge */}
            <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Licenciamento
            </div>
            
            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Acordo de Licenciamento de Software
            </h1>
            
            {/* Data */}
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">February 27, 2025</span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="prose prose-lg max-w-none text-justify">
            <p className="text-gray-700 leading-relaxed mb-8">
              Este Acordo de Licenciamento de Software ("Acordo") é firmado entre Splitcare (doravante "Licenciante") e a pessoa física ou jurídica que aceita os termos deste Acordo (doravante "Licenciado").
            </p>

            {/* Seção 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Concessão de Licença</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Sujeito aos termos e condições deste Acordo, a Licenciante concede ao Licenciado uma licença não exclusiva, intransferível e revogável para usar o software ("Software") fornecido pela Licenciante. Essa licença permite que o Licenciado instale e utilize o Software em um único computador ou dispositivo.
            </p>

            {/* Seção 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Restrições de Licença</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-8 space-y-4">
              <li>O Licenciado não poderá sublicenciar, vender, ceder ou de qualquer forma transferir o Software a terceiros.</li>
              <li>O Licenciado não poderá modificar, praticar engenharia reversa, descompilar ou desmontar o Software.</li>
              <li>O Licenciado não poderá distribuir, compartilhar ou disponibilizar o Software em uma rede, seja em parte ou em sua totalidade.</li>
            </ul>

            {/* Seção 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Propriedade Intelectual</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              O Software é propriedade intelectual da Licenciante e está protegido por leis de direitos autorais e outras leis de propriedade intelectual. O Licenciado reconhece que este Acordo não lhe confere quaisquer direitos de propriedade ou titularidade sobre o Software.
            </p>

            {/* Seção 4 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Rescisão</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              A Licenciante reserva-se o direito de rescindir este Acordo a qualquer momento caso o Licenciado deixe de cumprir seus termos. Em caso de rescisão, o Licenciado deve interromper o uso do Software e destruir todas as cópias em seu poder.
            </p>

            {/* Seção 5 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Isenção de Garantia</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              O Software é fornecido "no estado em que se encontra" ("as is"), sem garantia de qualquer tipo. A Licenciante se isenta de todas as garantias, incluindo, mas não se limitando a, garantias implícitas de comerciabilidade e adequação a um fim específico.
            </p>

            {/* Seção 6 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Limitação de Responsabilidade</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              A Licenciante não será responsável por quaisquer danos, incluindo, mas não se limitando a danos diretos, indiretos, especiais ou consequenciais decorrentes do uso ou da impossibilidade de uso do Software.
            </p>

            {/* Seção 7 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Acordo Integral</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Este Acordo constitui o entendimento completo entre as partes e substitui todos os acordos, entendimentos e representações anteriores.
            </p>

            {/* Aviso Final */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Ao aceitar os termos deste Acordo, o Licenciado reconhece que leu, entendeu e concorda em cumprir todas as suas disposições.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Licenciamento; 