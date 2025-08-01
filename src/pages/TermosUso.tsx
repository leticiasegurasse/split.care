import { Calendar } from 'lucide-react';

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Seção Principal */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Badge */}
            <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Termos de Uso
            </div>
            
            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Termos de Uso
            </h1>
            
            {/* Data */}
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">February 27, 2025</span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Antes de utilizar nossa plataforma, leia atentamente estes Termos de Uso. Ao acessar e utilizar o software, declara ter lido, compreendido e aceitado integralmente as condições aqui estabelecidas, bem como os termos descritos em nossa Política de Privacidade.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Caso não concorde com qualquer disposição destes Termos, não utilize o software. O uso da plataforma está condicionado à aceitação plena e irrestrita das regras e obrigações previstas neste documento.
            </p>

            {/* Seção 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Sobre o software</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A <strong>SPLITCARE LTDA</strong>, empresa privada registrada sob o CNPJ nº 57.316.959/0001-58, com sede localizada na Rua Luiza Villaca, 277, Bairro Canadá, Cascavel-PR (doravante denominado "Splitcare" ou "Nós"), disponibiliza um software destinado a otimizar o tempo de trabalho de profissionais médicos por meio de ferramentas tecnológicas ("software"). Por meio destes Termos de Uso ("Termos"), em conformidade com a Lei 12.965/2014 (Marco Civil da Internet), detalhamos os direitos e responsabilidades de ambas as partes relacionadas ao uso do nosso software.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Recomendamos que o usuário registrado, assinante de plano pago e/ou gratuito, (doravante denominado "Usuário" ou "Você") leia atentamente estes Termos de Uso antes de utilizar nosso software. Ao acessá-lo e utilizá-lo, o Usuário declara expressa e integralmente sua concordância com os termos aqui dispostos, bem como com as condições estabelecidas em nossa Política de Privacidade.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Você deve realizar o cadastro e seguir as diretrizes fornecidas nos manuais de uso para aproveitar todos os recursos oferecidos.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Esclarecemos que a Splitcare não possui parcerias ou qualquer tipo de relacionamento com fornecedores de prontuário eletrônico. Todos os dados processados pelo software devem ser inseridos no prontuário eletrônico diretamente pelo Usuário.
            </p>

            {/* Seção 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Do Cadastro</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Requisitos para Cadastro:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para acessar e utilizar o software Splitcare, o Usuário deve obrigatoriamente atender aos seguintes requisitos:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Ter idade igual ou superior a 18 (dezoito) anos;</li>
              <li>Possuir registro ativo no conselho profissional correspondente à sua área de atuação, quando aplicável;</li>
              <li>Fornecer informações verídicas, completas e atualizadas no momento do cadastro.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Do Processo de Cadastro:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O cadastro no Splitcare deve ser realizado exclusivamente através do site oficial, mediante o fornecimento dos seguintes dados:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Nome completo;</li>
              <li>Registro de Classe Profissional (ex.: CRM, CRO, COREN, conforme aplicável);</li>
              <li>Telefone para contato;</li>
              <li>Endereço de e-mail válido.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Após a conclusão do cadastro e a aceitação expressa destes Termos de Uso e da Política de Privacidade, o Usuário receberá um e-mail de confirmação, cuja validação é necessária para a ativação da conta. O não cumprimento dessa etapa poderá resultar na impossibilidade de acesso ao software.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Da Responsabilidades do Usuário:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A conta registrada no Splitcare é pessoal, intransferível e de uso exclusivo do Usuário cadastrado, sendo vedado o compartilhamento de credenciais de acesso com terceiros.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              O Usuário declara e garante que todas as informações fornecidas durante o cadastro são precisas, verdadeiras e atualizadas, sendo o único responsável por eventuais danos, prejuízos ou consequências decorrentes da falsidade, inexatidão ou desatualização dos dados informados. O Splitcare se reserva o direito de suspender ou excluir contas em caso de indícios de irregularidade, fraudes ou uso indevido da plataforma, sem prejuízo das medidas legais cabíveis.
            </p>

            {/* Seção 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Da Conexão e do Uso do Software</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Requisitos para Utilização:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para acessar e utilizar o Splitcare, é imprescindível que o equipamento utilizado pelo Usuário esteja conectado à internet. O desempenho e a disponibilidade do software podem ser afetados por fatores externos, incluindo, mas não se limitando a:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Problemas de conexão ou instabilidade na rede do Usuário;</li>
              <li>Falhas técnicas, manutenções programadas ou incidentes alheios ao controle do Splitcare.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Embora o Splitcare adote medidas para garantir a estabilidade e funcionamento contínuo do serviço, não se responsabiliza por interrupções, atrasos, perdas de informações ou quaisquer danos decorrentes de falhas na conexão ou indisponibilidade temporária da plataforma.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Uso Permitido e Restrições:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Usuário concorda em utilizar o Splitcare exclusivamente dentro dos limites estabelecidos nestes Termos de Uso e em conformidade com a legislação aplicável. É expressamente proibido:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Modificar, reproduzir, distribuir, sublicenciar, revender ou explorar comercialmente o software sem autorização prévia e expressa do Splitcare;</li>
              <li>Tentar contornar, desativar ou interferir em quaisquer medidas de segurança implementadas na plataforma;</li>
              <li>Inserir, propagar ou utilizar qualquer código malicioso (incluindo vírus, worms, trojans, scripts automatizados ou quaisquer outros elementos prejudiciais) que possam comprometer o funcionamento do software, a integridade dos dados ou a experiência de outros usuários;</li>
              <li>Realizar qualquer atividade que comprometa a disponibilidade, estabilidade ou desempenho da plataforma, incluindo ataques de negação de serviço (DDoS), exploração de vulnerabilidades ou sobrecarga do sistema;</li>
              <li>Compartilhar, transferir, ceder ou permitir o uso da conta e/ou credenciais de acesso a terceiros, sendo a conta de uso pessoal e intransferível.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Penalidades e Medidas Aplicáveis:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare se reserva o direito de suspender, restringir ou desativar, temporária ou permanentemente, a conta de qualquer Usuário que viole estas disposições, sem prejuízo de outras medidas legais cabíveis, incluindo ações de responsabilização civil e criminal nos termos da legislação vigente.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Ao utilizar o Splitcare, o Usuário declara estar plenamente ciente e de acordo com estas disposições, assumindo integral responsabilidade por qualquer uso indevido da plataforma.
            </p>

            {/* Seção 4 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Dos Planos e Do Pagamento</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Modalidade de Pagamento:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Os planos pagos do Splitcare são processados exclusivamente via cartão de crédito, não sendo aceitas outras formas de pagamento no momento.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Planos Gratuitos:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Os planos gratuitos oferecidos pelo Splitcare não exigem qualquer pagamento ou vinculação de meio de pagamento para sua utilização, estando sujeitos às limitações e condições estabelecidas nos Termos de Uso.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Confirmação de Pagamento:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Após a realização da transação, a confirmação do pagamento será processada em até 7 (sete) dias úteis, a depender da operadora do cartão de crédito. Assim que confirmado, o usuário será notificado por e-mail, podendo acessar as funcionalidades correspondentes ao plano contratado.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Disposições Gerais:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare se reserva o direito de modificar os planos, valores e condições de pagamento a qualquer momento, garantindo a comunicação prévia aos usuários, conforme previsto nos Termos de Uso.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ao contratar um plano pago, o usuário declara estar ciente e de acordo com as condições estabelecidas nesta seção.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Política de Cancelamento:</h3>
            
            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Solicitação de Cancelamento:</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              O usuário poderá solicitar o cancelamento de sua assinatura a qualquer momento. No entanto, para evitar cobranças indesejadas, a solicitação de cancelamento deve ser realizada antes da data da próxima cobrança recorrente. Caso o cancelamento seja solicitado após essa data, a cobrança já efetuada não será reembolsável, e o serviço permanecerá ativo até o final do período vigente.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Ao efetivar o cancelamento, o usuário perderá automaticamente o acesso aos benefícios do plano e aos dados armazenados na plataforma após o prazo de 5 (cinco) dias, contados a partir da data de confirmação do cancelamento. Após esse período, o Splitcare não será responsável por qualquer perda de informações, interrupção de serviços ou quaisquer danos decorrentes da exclusão dos dados armazenados, sendo responsabilidade exclusiva do usuário realizar o backup das informações que considerar necessárias antes do cancelamento.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              O cancelamento da assinatura não extingue eventuais obrigações pendentes assumidas pelo usuário antes da solicitação de cancelamento. Assim, todas as obrigações financeiras, contratuais ou legais que estiverem vigentes no momento do cancelamento permanecerão em pleno vigor e deverão ser devidamente cumpridas por ambas as partes.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              O Splitcare se reserva o direito de alterar esta Política de Cancelamento a qualquer momento, garantindo a comunicação prévia aos usuários, nos termos previstos nos Termos de Uso. Ao solicitar o cancelamento, o usuário declara estar ciente e de acordo com as disposições desta política.
            </p>

            {/* Seção 5 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Das Responsabilidades do Usuário</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ao utilizar o Splitcare, o usuário declara estar plenamente ciente de que qualquer decisão clínica deve ser fundamentada exclusivamente em sua avaliação profissional, independente das informações registradas na plataforma. O software não substitui exames, protocolos clínicos, diretrizes médicas ou quaisquer outros instrumentos formais de decisão profissional, sendo sua utilização de inteira responsabilidade do profissional de saúde.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare não deve ser utilizado como base única ou determinante para condutas médicas, tampouco para fins de diagnóstico, tratamento, monitoramento clínico ou qualquer outra atividade que exija julgamento clínico direto. A utilização inadequada do software para tais finalidades é de responsabilidade exclusiva do usuário, isentando a plataforma e seus desenvolvedores de qualquer consequência ou ônus decorrente de seu uso indevido.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dessa forma, ao utilizar o Splitcare, o usuário se compromete a:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Garantir a veracidade, integridade e atualização das informações inseridas na plataforma, sendo o único responsável por qualquer dado impreciso, desatualizado ou inserido de forma inadequada;</li>
              <li>Manter a confidencialidade de sua conta, login e senha, sendo proibido compartilhá-los com terceiros ou permitir o acesso não autorizado à sua conta;</li>
              <li>Utilizar o software apenas para fins lícitos e em conformidade com estes Termos de Uso, abstendo-se de qualquer prática que possa comprometer a segurança, integridade ou funcionamento adequado da plataforma;</li>
              <li>Não utilizar o Splitcare para finalidades diagnósticas, terapêuticas, prescritivas ou qualquer outra aplicação médica direta, respeitando os limites e funcionalidades da plataforma.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              O usuário assume total responsabilidade por quaisquer danos, prejuízos ou impactos negativos causados ao Splitcare, seus desenvolvedores ou terceiros, resultantes do uso inadequado, indevido ou contrário às disposições estabelecidas nestes Termos de Uso. Em caso de descumprimento, o Splitcare se reserva o direito de suspender ou encerrar o acesso do usuário à plataforma, sem prejuízo das medidas legais cabíveis.
            </p>

            {/* Seção 6 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Da Limitação de Responsabilidade</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare é um sistema de suporte à documentação e registro de informações médicas, projetado exclusivamente para transcrição e organização de dados clínicos coletados pelo profissional de saúde. Sua finalidade é administrativa e documental, não configurando um instrumento de apoio à decisão clínica, diagnóstico, prognóstico, prescrição terapêutica ou qualquer intervenção médica.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare não realiza análise, processamento, interpretação ou sugestão de condutas médicas com base nos dados coletados. O software não interfere na tomada de decisão clínica do profissional de saúde e não substitui seu julgamento técnico.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare não impacta diretamente na saúde do paciente e não realiza processamento de dados para fins de tomada de decisão médica, ou equivalentes.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Atenção:</strong> O Splitcare não deve ser utilizado como critério para a tomada de decisões médicas. A plataforma não realiza análises clínicas, não sugere diagnósticos, tratamentos ou intervenções terapêuticas e não substitui exames, protocolos clínicos, diretrizes médicas ou demais instrumentos formais de decisão profissional. Toda e qualquer conduta médica deve ser validada exclusivamente pelo profissional de saúde responsável, sendo sua utilização para fins clínicos indevida e de inteira responsabilidade do usuário.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Ao utilizar o Splitcare, o usuário expressamente reconhece que qualquer decisão, conduta ou resultado baseado no uso da plataforma é de sua exclusiva responsabilidade, isentando a empresa desenvolvedora de qualquer obrigação ou ônus decorrente do uso indevido ou fora das finalidades previstas nos Termos de Uso, isentando a plataforma e seus desenvolvedores de qualquer responsabilidade relacionada ao uso indevido do software para fins clínicos ou terapêuticos.
            </p>

            {/* Seção 7 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Da Proteção de Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare trata os dados pessoais de seus usuários com responsabilidade, segurança e em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e demais legislações aplicáveis. O tratamento de dados segue princípios de finalidade, necessidade, transparência e segurança, garantindo que as informações sejam utilizadas estritamente para as finalidades previstas.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Os detalhes sobre quais dados coletamos, como os utilizamos, armazenamos e protegemos estão disponíveis em nossa Política de Privacidade, a qual recomendamos a leitura atenta antes da utilização da plataforma.
            </p>

            {/* Seção 8 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Propriedade Intelectual</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Todos os elementos que compõem o Splitcare, incluindo, mas não se limitando a, marca, logotipo, design, interface, código-fonte, funcionalidades e conteúdos disponibilizados na plataforma, são protegidos por leis de propriedade intelectual, direitos autorais e de marcas registradas, nos termos da legislação brasileira e tratados internacionais aplicáveis.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              É expressamente proibido ao Usuário:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Copiar, modificar, reproduzir, distribuir, transmitir, exibir, vender ou explorar comercialmente qualquer parte do software Splitcare sem autorização expressa e por escrito;</li>
              <li>Utilizar engenharia reversa, descompilar, desmontar ou tentar acessar o código-fonte do software;</li>
              <li>Criar produtos derivados, replicações ou adaptações baseadas na plataforma Splitcare.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              O uso do Splitcare não concede ao Usuário qualquer direito de propriedade sobre a tecnologia ou os conteúdos da plataforma, sendo concedida apenas uma licença limitada, revogável, não exclusiva e intransferível para uso conforme os termos aqui estabelecidos.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              O Splitcare se reserva o direito de adotar as medidas legais cabíveis em caso de violação de seus direitos de propriedade intelectual.
            </p>

            {/* Disposições Gerais */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Disposições Gerais</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Comunicações:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Usuário concorda que todas as comunicações, notificações e informações relacionadas ao uso do Splitcare poderão ser enviadas eletronicamente, por e-mail, notificações no software ou outros meios digitais.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Legislação:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Quaisquer disputas oriundas destes Termos ou do uso do Splitcare serão dirimidas no foro da comarca de São Paulo – SP, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Dúvidas:</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Caso tenha dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail oficial: <a href="mailto:contato@splitcare.com.br" className="text-blue-600 hover:text-blue-800 underline">contato@splitcare.com.br</a>
              </p>
            </div>

            {/* Aviso Final */}
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed font-semibold">
                ATENÇÃO: O USO DO SOFTWARE ESTÁ CONDICIONADO À ACEITAÇÃO DESTES TERMOS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermosUso; 