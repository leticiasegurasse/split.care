import { Calendar } from 'lucide-react';

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Seção Principal */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Badge */}
            <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Política de Privacidade
            </div>
            
            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Política de Privacidade
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
              A <strong>SPLITCARE LTDA</strong>, inscrita no CNPJ nº 57.316.959/0001-58, com sede na Rua Luiza Villaca, 277, Bairro Canadá, Cascavel-PR (doravante denominada "Splitcare" ou "Nós"), preza pela segurança e privacidade de seus dados. Por meio desta Política de Privacidade, o Splitcare se compromete com a segurança, privacidade e proteção dos dados pessoais de seus usuários. Esta Política de Privacidade tem como objetivo fornecer informações claras e detalhadas sobre como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e demais normativas aplicáveis.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              O tratamento dos dados pessoais sensíveis, quando aplicável, segue os princípios da LGPD, sendo realizado exclusivamente para aprimorar a assistência médica (por meio do suporte ao registro administrativo) e garantir a qualidade dos serviços prestados.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>IMPORTANTE:</strong> O Splitcare não deve ser utilizado como critério para a tomada de decisões médicas. A plataforma não realiza análises clínicas, não sugere diagnósticos, tratamentos ou intervenções terapêuticas e não substitui exames, protocolos clínicos, diretrizes médicas ou demais instrumentos formais de decisão profissional. Toda e qualquer conduta médica deve ser validada exclusivamente pelo profissional de saúde responsável, sendo sua utilização para fins clínicos indevida e de inteira responsabilidade do usuário.
              </p>
            </div>

            {/* Seção 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Quais Dados Pessoais Coletamos e Por Que Coletamos?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para personalizar sua experiência, garantir a segurança e o funcionamento adequado do software, a Splitcare poderá coletar e tratar as seguintes categorias de dados pessoais:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Dados de Identificação:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Informações coletadas:</strong> Nome completo, telefone e e-mail.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Finalidade:</strong> Cadastro na plataforma, envio de comunicações operacionais, materiais informativos e promocionais, quando autorizados.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Dados Profissionais:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Informações coletadas:</strong> Profissão, número de registro no respectivo conselho de classe (ex.: CRM, CRO, COREN) e especialidade.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Finalidade:</strong> Verificação da regularidade profissional para uso do software, garantindo que o serviço seja utilizado por profissionais autorizados.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Dados Financeiros:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Informações coletadas:</strong> Informações de pagamento, incluindo dados do cartão de crédito (processados por terceiros de pagamento, sem armazenamento pela Splitcare).
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Finalidade:</strong> Processamento de transações financeiras relacionadas aos planos contratados.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Dados de Acesso:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Informações coletadas:</strong> Horários de login/logout, endereço de IP, localização aproximada e tipo de dispositivo utilizado.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Finalidade:</strong> Garantia de segurança da conta, prevenção de fraudes e acessos não autorizados.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cookies e Tecnologias de Rastreamento:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Informações coletadas:</strong> Arquivos que armazenam preferências de navegação, interações com o software e padrões de uso.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Finalidade:</strong> Personalização da experiência do usuário, análise de comportamentos de navegação e aprimoramento dos serviços oferecidos.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="text-gray-700">
                <strong>Gerenciamento:</strong> O usuário pode gerenciar suas preferências de cookies em: <a href="https://allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">All About Cookies</a>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Princípios do Tratamento de Dados</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O tratamento dos dados pessoais e sensíveis pela Splitcare segue os princípios da finalidade, adequação, necessidade, transparência, segurança e responsabilização, garantindo que:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>O uso dos dados seja estritamente necessário para a execução dos serviços contratados;</li>
              <li>Os dados sejam tratados de forma confidencial e segura;</li>
              <li>Não utilizamos dados pessoais para finalidades distintas das informadas nesta Política, salvo mediante nova autorização do usuário ou por exigência legal.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              Todos os dados coletados serão utilizados exclusivamente para os fins informados nesta Política ou autorizados expressamente pelo usuário.
            </p>

            {/* Seção 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Quem Trata Seus Dados Pessoais?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Os dados pessoais coletados pela Splitcare são tratados em conformidade com as disposições da Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), sob a responsabilidade das seguintes partes:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Controladora:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare, na qualidade de controladora dos dados pessoais, é responsável por definir as finalidades e os meios de tratamento dos dados coletados, garantindo a conformidade com os princípios da LGPD e demais normativas aplicáveis.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Operador:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              O tratamento operacional dos dados é realizado por equipes técnicas especializadas, que atuam sob instruções diretas da controladora, assegurando o cumprimento de protocolos de segurança, confidencialidade e integridade da informação.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Encarregado de Dados (DPO – Data Protection Officer):</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Encarregado de Proteção de Dados é o responsável por atuar como canal de comunicação entre os titulares dos dados, a Splitcare e a Autoridade Nacional de Proteção de Dados (ANPD), garantindo o atendimento a solicitações relacionadas ao tratamento de dados pessoais e ao exercício dos direitos dos titulares.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare adota medidas técnicas e organizacionais adequadas para assegurar que todas as atividades de tratamento de dados sejam realizadas de acordo com as diretrizes legais e boas práticas de segurança da informação.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Caso tenha dúvidas ou queira exercer seus direitos como titular de dados, entre em contato com o Encarregado de Dados através do e-mail: <a href="mailto:privacidade@splitcare.com.br" className="text-blue-600 hover:text-blue-800 underline">privacidade@splitcare.com.br</a>
              </p>
            </div>

            {/* Seção 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Com Quem Compartilhamos Seus Dados?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A Splitcare poderá compartilhar seus dados pessoais estritamente quando necessário e em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018). O compartilhamento ocorre somente para fins legítimos, alinhados às finalidades informadas nesta Política e em observância aos princípios da necessidade, transparência e segurança.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os dados podem ser compartilhados com as seguintes categorias de terceiros:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Autoridades Competentes:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Caso haja obrigação legal, regulatória ou determinação judicial, poderemos compartilhar dados com órgãos governamentais, reguladores e autoridades de fiscalização, sempre respeitando os princípios da minimização de dados e da necessidade.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Plataformas de Segurança e Prevenção a Fraudes:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Empresas especializadas em proteção de dados, detecção de fraudes e segurança da informação, que auxiliam na prevenção de acessos não autorizados, violações de segurança e outras ameaças cibernéticas.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Prestadores de Serviço para Marketing e Personalização:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Empresas que atuam na otimização da experiência do usuário, análise de dados e personalização de conteúdos e campanhas de marketing, garantindo que as comunicações sejam relevantes e adequadas ao perfil do usuário.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Proteção dos Dados Sensíveis</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Os dados pessoais sensíveis, quando coletados, são tratados com o mais alto nível de segurança e, sempre que possível, anonimizados antes de qualquer compartilhamento, garantindo que não seja possível identificar individualmente o titular dos dados.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare não comercializa, vende ou compartilha dados pessoais para terceiros sem finalidade legítima e autorização expressa, salvo em hipóteses previstas na legislação aplicável.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Caso tenha dúvidas sobre o compartilhamento de seus dados ou deseje exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:privacidade@splitcare.com.br" className="text-blue-600 hover:text-blue-800 underline">privacidade@splitcare.com.br</a>
              </p>
            </div>

            {/* Seção 4 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Por Quanto Tempo Armazenamos Seus Dados?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare armazena os dados pessoais coletados apenas pelo período necessário para cumprir as finalidades para as quais foram coletados, garantindo a conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e demais normas aplicáveis.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os dados serão mantidos por um prazo de até <strong>2 (dois) anos</strong> após a última interação do usuário com a plataforma, salvo se houver:
            </p>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Obrigação legal ou regulatória que exija um período de retenção maior;</li>
              <li>Necessidade de resguardo de direitos do Splitcare, incluindo a preservação de informações para fins de auditoria, cumprimento de obrigações contratuais ou defesa em processos administrativos e judiciais;</li>
              <li>Demonstração de cumprimento da tutela da saúde (art. 11 da LGPD), caso aplicável, garantindo a continuidade da assistência médica e a segurança das informações necessárias ao atendimento do paciente.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Exclusão de Dados</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os dados serão excluídos, anonimizados ou bloqueados quando:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Não forem mais necessários para a prestação dos serviços e para o cumprimento das finalidades estabelecidas nesta Política;</li>
              <li>O titular dos dados solicitar a exclusão, exceto nos casos em que houver necessidade de retenção para cumprimento de obrigações legais, regulatórias ou para resguardo de direitos.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Solicitação de Exclusão</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              O usuário poderá solicitar a exclusão de seus dados pessoais a qualquer momento, desde que não haja fundamento legal ou necessidade operacional que justifique a retenção. Para realizar a solicitação, o titular dos dados deve entrar em contato com a Splitcare por meio do e-mail: <a href="mailto:privacidade@splitcare.com.br" className="text-blue-600 hover:text-blue-800 underline">privacidade@splitcare.com.br</a>
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              A exclusão dos dados poderá impactar a experiência do usuário e a prestação dos serviços, uma vez que informações essenciais para o funcionamento da plataforma podem ser removidas.
            </p>

            {/* Seção 5 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Da Não Transferência Internacional de Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare opera exclusivamente no Brasil e realiza o tratamento de dados pessoais dentro do território nacional, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              O armazenamento dos dados em servidores localizados no Brasil garantem que a informação esteja sujeita exclusivamente às leis e regulamentações brasileiras, assegurando maior proteção jurídica e conformidade com as diretrizes da Autoridade Nacional de Proteção de Dados (ANPD).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Por que a Manutenção dos Dados no Brasil é Importante?</h3>

            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Segurança Jurídica:</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              A manutenção dos dados em território nacional assegura que o tratamento e a proteção das informações estejam sob a regulação exclusiva da LGPD, evitando a aplicação de legislações estrangeiras que possam ser incompatíveis com os direitos e garantias dos titulares de dados no Brasil.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Respeito à da LGPD:</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Em casos de dados sensíveis relacionados à saúde, manter essas informações em servidores nacionais fortalece a segurança e o sigilo médico, garantindo que o acesso e tratamento dos dados sejam realizados apenas por entidades que respeitem os princípios da finalidade, necessidade e proporcionalidade, conforme previsto na LGPD.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Evita Transferências Não Autorizadas:</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              A LGPD estabelece que a transferência internacional de dados só pode ocorrer quando houver garantias adequadas de proteção e quando o país de destino possuir nível equivalente de proteção de dados. Ao manter os dados no Brasil, evita-se a necessidade de compartilhamento com países que possam não oferecer o mesmo nível de segurança e privacidade exigido pela legislação brasileira.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Atendimento Mais Rápido às Demandas da ANPD e dos Usuários:</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Com os dados armazenados em território nacional, eventuais solicitações de acesso, retificação ou exclusão de dados podem ser tratadas com maior agilidade, garantindo que os direitos dos titulares sejam respeitados sem a necessidade de processos burocráticos de transferência internacional.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Se houver dúvidas sobre a política de armazenamento e proteção de dados da Splitcare, entre em contato pelo e-mail: <a href="mailto:privacidade@splitcare.com.br" className="text-blue-600 hover:text-blue-800 underline">privacidade@splitcare.com.br</a>
              </p>
            </div>

            {/* Seção 6 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Como Protegemos Seus Dados?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Splitcare adota um conjunto de medidas técnicas, organizacionais e de segurança da informação para garantir a proteção, confidencialidade e integridade dos dados pessoais tratados na plataforma. Implementamos padrões rigorosos de segurança para minimizar riscos e impedir acessos não autorizados, vazamentos ou qualquer forma de uso indevido das informações armazenadas.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Medidas de Segurança Aplicadas:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para proteger seus dados pessoais, utilizamos as seguintes tecnologias e protocolos de segurança de mercado:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li><strong>Criptografia avançada:</strong> Todos os dados transmitidos são protegidos por criptografia de ponta a ponta, garantindo que as informações permaneçam seguras durante o tráfego na internet.</li>
              <li><strong>Firewalls e sistemas de detecção de intrusão:</strong> Implementamos firewalls robustos e softwares de monitoramento contínuo para bloquear tentativas de acesso indevido aos nossos sistemas.</li>
              <li><strong>Controle rigoroso de acessos:</strong> O acesso a dados pessoais é restrito exclusivamente a pessoas autorizadas, seguindo critérios rígidos de autenticação, registro de acessos e revisão periódica de permissões.</li>
              <li><strong>Anonimização e pseudonimização de dados sensíveis:</strong> Sempre que possível, os dados são anonimizados ou pseudonimizados para impedir que possam ser diretamente vinculados a um indivíduo sem autorização legal.</li>
              <li><strong>Monitoramento contínuo e auditorias periódicas:</strong> Mantemos processos de auditoria e testes de segurança regulares para identificar e corrigir possíveis vulnerabilidades, garantindo que os dados estejam protegidos contra falhas ou ataques cibernéticos.</li>
              <li><strong>Conformidade com regulamentações:</strong> Cumprimos rigorosamente as normas da Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e boas práticas de governança da informação, assegurando o uso responsável e seguro dos dados.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Segurança Compartilhada: A Responsabilidade do Usuário:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Embora adotemos os mais altos padrões de segurança, é importante ressaltar que nenhum sistema é totalmente impenetrável. Falhas de hardware, vulnerabilidades de software ou ações criminosas podem comprometer a segurança dos dados.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dessa forma, recomendamos fortemente que o Usuário adote boas práticas de segurança digital, incluindo:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Utilizar senhas fortes e exclusivas para sua conta, alterando-as regularmente;</li>
              <li>Evitar o compartilhamento de credenciais de acesso com terceiros;</li>
              <li>Manter seus dispositivos protegidos com antivírus e atualizações de segurança;</li>
              <li>Desconfiar de e-mails ou mensagens suspeitas que solicitem informações pessoais ou redirecionem para páginas desconhecidas.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Se o Usuário identificar qualquer atividade suspeita ou indício de comprometimento da segurança de seus dados, deve entrar em contato imediatamente com o Encarregado de Proteção de Dados (DPO) através do e-mail: <a href="mailto:privacidade@splitcare.com.br" className="text-blue-600 hover:text-blue-800 underline">privacidade@splitcare.com.br</a>
              </p>
            </div>

            {/* Seção 7 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Direitos do Titular de Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), o Splitcare garante ao Usuário, na qualidade de titular dos dados pessoais, o exercício dos seguintes direitos:
            </p>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li><strong>Confirmação da existência de tratamento:</strong> O titular tem o direito de solicitar a confirmação sobre a existência de tratamento de seus dados pessoais pelo Splitcare.</li>
              <li><strong>Acesso aos dados pessoais:</strong> O titular pode requisitar o acesso aos dados coletados e armazenados, bem como informações sobre sua finalidade e forma de processamento.</li>
              <li><strong>Correção de dados incompletos, inexatos ou desatualizados:</strong> Caso identifique alguma inconsistência, erro ou desatualização em seus dados, o titular pode solicitar sua retificação.</li>
              <li><strong>Anonimização, pseudononimização, bloqueio ou eliminação de dados desnecessários:</strong> O titular tem o direito de solicitar a anonimização, bloqueio ou exclusão de dados que forem considerados excessivos, desnecessários ou tratados em desconformidade com a LGPD.</li>
              <li><strong>Portabilidade dos dados pessoais:</strong> O titular pode requisitar a transferência de seus dados a outro fornecedor de serviço ou produto, mediante solicitação expressa e respeitados os requisitos regulamentares.</li>
              <li><strong>Eliminação de dados tratados com consentimento:</strong> O titular pode solicitar a exclusão de seus dados pessoais que tenham sido tratados com base em seu consentimento, exceto nos casos em que a retenção for necessária para cumprimento de obrigações legais ou regulatórias.</li>
              <li><strong>Informações sobre compartilhamento de dados:</strong> O titular tem o direito de obter informações detalhadas sobre entidades públicas e privadas com as quais seus dados foram compartilhados.</li>
              <li><strong>Revogação do consentimento:</strong> Caso o tratamento de dados tenha como base legal o consentimento, o titular pode, a qualquer momento, revogar essa autorização, hipótese em que os dados serão eliminados, salvo em situações que exijam sua retenção por obrigação legal.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Como Exercer Seus Direitos?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para exercer qualquer um dos direitos acima mencionados, o titular dos dados pode enviar uma solicitação ao Encarregado de Proteção de Dados (DPO) da Splitcare, por meio do e-mail: <a href="mailto:privacidade@splitcare.com.br" className="text-blue-600 hover:text-blue-800 underline">privacidade@splitcare.com.br</a>
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              O Splitcare analisará e responderá a todas as solicitações em conformidade com os prazos estabelecidos na legislação vigente, podendo requerer informações adicionais para validar a identidade do solicitante e garantir a segurança do processo.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Caso o titular não esteja satisfeito com a resposta fornecida, ele pode recorrer à Autoridade Nacional de Proteção de Dados (ANPD) ou aos órgãos de defesa do consumidor.
            </p>

            {/* Seção 8 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Links Para Terceiros</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A fim de proporcionar uma experiência mais completa e enriquecedora, o Splitcare pode disponibilizar links para websites de terceiros. No entanto, é importante ressaltar que não temos qualquer controle sobre o conteúdo, funcionamento, políticas de privacidade ou práticas de segurança dessas plataformas externas.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dessa forma, o Splitcare não se responsabiliza por quaisquer informações, serviços, produtos, práticas de coleta, processamento e transferência de dados pessoais realizadas por terceiros.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Recomendamos fortemente que, antes de fornecer qualquer dado pessoal em websites externos, Você leia atentamente suas respectivas Políticas de Privacidade, garantindo que compreende e concorda com a forma como seus dados serão tratados.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Caso identifique qualquer irregularidade em links disponibilizados na plataforma, entre em contato conosco para que possamos tomar as medidas cabíveis.
            </p>

            {/* Seção 9 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Como Entrar em Contato?</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Para dúvidas ou solicitações sobre seus dados pessoais, entre em contato pelo e-mail: <a href="mailto:privacidade@splitcare.com.br" className="text-blue-600 hover:text-blue-800 underline">privacidade@splitcare.com.br</a>
              </p>
            </div>

            {/* Seção 10 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Atualizações Desta Política</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A Splitcare se compromete com a transparência, segurança e conformidade legal no tratamento dos dados pessoais de seus usuários. Para garantir a adequação contínua às normativas aplicáveis, incluindo a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), esta Política de Privacidade poderá ser atualizada periodicamente.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Caso sejam realizadas alterações relevantes que impactem a forma como seus dados são tratados, a Splitcare notificará os usuários por meio dos canais oficiais de comunicação e, se necessário, solicitará um novo consentimento.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Aceitação e Conformidade:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ao aceitar esta Política de Privacidade, o Usuário declara estar ciente e concordar integralmente com seus termos, reconhecendo que:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Seus dados pessoais serão tratados de forma segura, transparente e conforme a legislação vigente;</li>
              <li>O tratamento dos dados seguirá os princípios da LGPD, quando aplicável, garantindo que a tecnologia seja utilizada para aprimorar a assistência médica;</li>
              <li>A Splitcare adota medidas rigorosas de segurança para proteger as informações armazenadas, mas o usuário também deve adotar boas práticas de proteção digital;</li>
              <li>O uso da plataforma está condicionado à aceitação desta Política e ao respeito às regras estabelecidas nos Termos de Uso.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              O uso do software Splitcare está condicionado à aceitação desta Política de Privacidade. Se Você não concorda com os termos aqui estabelecidos, recomendamos que não utilize a plataforma.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              O Splitcare reafirma seu compromisso com a privacidade, a segurança dos dados e a conformidade com a LGPD, garantindo que a tecnologia seja uma aliada na proteção e aprimoramento da assistência médica.
            </p>

            {/* Aviso Final */}
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed font-semibold">
                ATENÇÃO: Ao aceitar esta Política de Privacidade, você concorda com seus termos e com o uso do software, conforme descrito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaPrivacidade; 