import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';

const FAQ = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        {/* Container FAQ */}
        <div className="bg-white border border-blue-200 rounded-2xl p-8 mb-8">
          <div className="space-y-6">
            
            {/* Pergunta 1 - Expandida */}
            <details className="group" open>
              <summary className="flex items-center justify-between text-gray-900 text-lg font-semibold cursor-pointer list-none">
                Como o Split-assist funciona?
                <span className="text-2xl group-open:hidden">+</span>
                <span className="text-2xl hidden group-open:block">×</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-4">
                <p>O Splitcare é um assistente de inteligência artificial projetado para otimizar a rotina médica, permitindo que os profissionais foquem no que realmente importa: o cuidado com o paciente.</p>
                <p>Ele ouve, processa e transcreve a consulta em tempo real, estruturando automaticamente anamneses, prontuários e outros documentos clínicos, reduzindo o tempo gasto com burocracia e aprimorando a precisão dos registros médicos.</p>
                <p>Prezamos pela agilidade e este processo demora, em média, apenas 10 segundos.</p>
              </div>
            </details>

            <hr className="border-gray-200" />

            {/* Pergunta 2 */}
            <details className="group">
              <summary className="flex items-center justify-between text-gray-900 text-lg font-semibold cursor-pointer list-none">
                O Splitcare pode ser usado em consultas de telemedicina?
                <span className="text-2xl group-open:hidden">+</span>
                <span className="text-2xl hidden group-open:block">×</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-4">
                <p>Sim! O Splitcare pode ser utilizado em consultas por telemedicina de forma simples e eficiente.</p>
                <p><strong>Como usar na telemedicina?</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Abra sua plataforma de telemedicina ou videochamada no navegador.</li>
                  <li>Acesse o Splitcare, clique em "Telemedicina" e selecione a aba da videochamada para iniciar a gravação de áudio.</li>
                  <li>Você verá dois mostradores de microfone: um para sua voz e outro para a do paciente.</li>
                  <li>Conduza a consulta normalmente e verbalize todas as informações importantes.</li>
                  <li>Finalize o atendimento, e o Splitcare gerará um resumo clínico estruturado automaticamente.</li>
                </ol>
              </div>
            </details>

            <hr className="border-gray-200" />

            {/* Pergunta 3 */}
            <details className="group">
              <summary className="flex items-center justify-between text-gray-900 text-lg font-semibold cursor-pointer list-none">
                Por que o Split-assist só tem um tipo de anamnese?
                <span className="text-2xl group-open:hidden">+</span>
                <span className="text-2xl hidden group-open:block">×</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-4">
                <p>O Splitcare foi desenvolvido para otimizar a vida do médico, mas, mais do que isso, para registrar e respaldar sua atuação. A plataforma tem um compromisso com segurança jurídica, auditoria e conformidade, garantindo que a documentação médica seja sempre precisa, completa e protegida.</p>
                <p>Por isso, o Splitcare utiliza uma anamnese padrão e completa, estruturada para ser segura, repetível e juridicamente respaldável. O objetivo não é apenas facilitar o registro, mas também garantir que as informações sejam consistentes, auditáveis e protegidas contra interpretações ambíguas.</p>
              </div>
            </details>

            <hr className="border-gray-200" />

            {/* Pergunta 4 */}
            <details className="group">
              <summary className="flex items-center justify-between text-gray-900 text-lg font-semibold cursor-pointer list-none">
                Por que o Split-assist não sugere CIDs, Diagnósticos ou Condutas?
                <span className="text-2xl group-open:hidden">+</span>
                <span className="text-2xl hidden group-open:block">×</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-4">
                <p>O Splitcare é um software de suporte à documentação, Ele não realiza análises clínicas, diagnósticos, prescrições ou recomendações terapêuticas, pois seu objetivo é apenas organizar e transcrever informações médicas de forma estruturada.</p>
                <p>Além disso, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), o Splitcare respeita o princípio da tutela da saúde (art. 11 da LGPD), garantindo que os dados sejam tratados exclusivamente para melhoria da assistência médica, através do suporte à documentação clínica, sem interferir na tomada de decisão do profissional.</p>
              </div>
            </details>

            <hr className="border-gray-200" />

            {/* Pergunta 5 */}
            <details className="group">
              <summary className="flex items-center justify-between text-gray-900 text-lg font-semibold cursor-pointer list-none">
                O Split-assist é seguro?
                <span className="text-2xl group-open:hidden">+</span>
                <span className="text-2xl hidden group-open:block">×</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-4">
                <p>Sim. O Splitcare adota padrões rigorosos de segurança e privacidade para garantir a proteção dos dados médicos.</p>
                <p><strong>Conformidade com a LGPD:</strong> Todos os dados são tratados de acordo com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), respeitando o princípio da tutela da saúde (art. 11 da LGPD).</p>
                <p><strong>Anonimização e Proteção de Dados:</strong> Nenhuma informação identificável do paciente é armazenada ou retida nos sistemas da Splitcare, garantindo total sigilo e segurança.</p>
                <p><strong>Criptografia e Segurança Avançada:</strong> Utilizamos criptografia de ponta a ponta, firewalls robustos e controle rigoroso de acessos, protegendo as informações contra acessos não autorizados.</p>
              </div>
            </details>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <Link 
            to={ROUTES.register} 
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-600)] transition-colors shadow-lg"
          >
            Use Splitcare
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 