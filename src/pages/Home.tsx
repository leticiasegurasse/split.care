import coracaoImg from '../assets/images/coracao.avif';
import relogioImg from '../assets/images/relogio.avif';
import videoInicial from '../assets/videos/video-inicial.mp4';
import passo1Img from '../assets/images/passo1.gif';
import passo2Img from '../assets/images/passo2.jpg';
import passo3Img from '../assets/images/passo3.gif';
import drVitorImg from '../assets/images/Dr. Vitor Daniel Bortoluzzi.avif';
import drLeandroImg from '../assets/images/Dr. Leandro Lucena.avif';
import drRuanImg from '../assets/images/Dr. Ruan Rodigheri.avif';
import draMilenaImg from '../assets/images/Dra. Milena Salvadori.avif';
import drGuilhermeImg from '../assets/images/Dr. Guilherme Olinto.avif';
import logoGoogleGemini from '../assets/images/logos/Google_Gemini_logo.svg.png';
import logoGoogleMeet from '../assets/images/logos/Google_Meet_text_logo_(2020).svg.png';
import logoSus from '../assets/images/logos/sus.avif';
import logoLgpd from '../assets/images/logos/lgpd.avif';
import logoMeta from '../assets/images/logos/meta.avif';
import logoOpenai from '../assets/images/logos/openai.avif';
import logoHc from '../assets/images/logos/hc.avif';

const Home = () => {
  return (
    <div>
      {/* Primeira Seção - Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto">
          {/* Seção azul arredondada */}
          <div className="bg-[var(--color-primary)] rounded-3xl p-6 sm:p-8 lg:p-12 relative">
            
            {/* Conteúdo principal */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              
              {/* Lado esquerdo - Texto e formulário */}
              <div className="space-y-6 sm:space-y-8 p-4 sm:p-6 flex-2">
                {/* Logo e nome */}
                <img 
                  src="/logo.png" 
                  alt="Logo SplitCare" 
                  className="w-48 sm:w-64 lg:w-72"
                />

                {/* Título principal */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  O Prontuário que trabalha por você.
                </h1>

                {/* Descrição */}
                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                  O <strong>Split</strong> escuta suas consultas, <strong>entende</strong> o que importa e <strong>organiza</strong> tudo por você. 
                  Seu foco de volta no paciente. 
                  <strong> Porque seu tempo é clínico. </strong> 
                  Não burocrático. 
                  <strong> E merece voltar a ser seu.</strong>
                </p>

                {/* Formulário de contato */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <input
                    type="email"
                    placeholder="Digite aqui seu email..."
                    className="flex-1 px-4 py-3 rounded-lg bg-[var(--color-secondary)] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <button className="px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-600)] transition-colors duration-200 whitespace-nowrap">
                    Fale Conosco
                  </button>
                </div>
              </div>

              {/* Lado direito - Elementos visuais (apenas em telas grandes) */}
              <div className="relative hidden lg:block flex-1">
                {/* Smartwatch - posicionado no canto superior direito */}
                <div className="absolute top-0 right-0 w-32 h-32 md:w-80 md:h-80 transform rotate-12">
                  <img 
                    src={relogioImg} 
                    alt="Smartwatch" 
                    className="w-full h-full"
                  />
                </div>

                {/* Coração com ECG - posicionado abaixo e à esquerda do smartwatch */}
                <div className="absolute -bottom-0 -left-10 w-48 h-48 md:w-56 md:h-56">
                  <img 
                    src={coracaoImg} 
                    alt="Coração com ECG" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda Seção - Como Funciona */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Veja como funciona:
            </h2>
          </div>

          {/* Container do vídeo */}
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <video 
                className="w-full h-auto"
                controls
                autoPlay
                muted
                loop
                poster="/video-poster.jpg"
              >
                <source src={videoInicial} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Terceira Seção - Split-assist em 3 passos */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[var(--color-accent)]">
        <div className="max-w-7xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Split-assist em 3 passos
            </h2>
          </div>

          {/* Cards dos 3 passos */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Passo 1 */}
            <div className="bg-white text-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={passo1Img} 
                alt="Acesso seguro com autenticação" 
                className="w-full h-auto rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  1) Acesse com segurança
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Acesse sua conta com autenticação de dois fatores para garantir a máxima segurança dos seus dados clínicos.
                </p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="bg-white text-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={passo2Img} 
                alt="Interface de nova consulta" 
                className="w-full h-auto rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  2) Comece a consulta normalmente
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Inicie sua consulta normalmente. O Splitcare escuta a conversa e começa a transformá-la em documento clínico.
                </p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="bg-white text-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={passo3Img} 
                alt="Evolução Médica" 
                className="w-full h-auto rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  3) Gere sua evolução com apenas 1 clique
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Ao final da consulta, clique em "Gerar Evolução" e em até 10 segundos seu documento estruturado estará pronto para revisão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quarta Seção - Depoimentos */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Label superior */}
          <div className="text-center mb-4">
            <span className="inline-block bg-[var(--color-accent)] px-4 py-2 rounded-full text-sm">
              Avaliações
            </span>
          </div>

          {/* Título principal */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que dizem os médicos que <br />
              voltaram a ter tempo
            </h2>
          </div>

          {/* Grid de depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            
            {/* Depoimento 1 */}
            <div className="bg-[var(--color-accent)] rounded-2xl p-6 shadow-lg lg:col-span-3">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={drVitorImg} 
                  alt="Dr. Vitor Daniel Bortoluzzi" 
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Dr. Vitor Daniel Bortoluzzi</h4>
                  <p className="text-gray-600 text-base">Cirurgia Plástica</p>
                </div>
              </div>
              <p className="text-gray-700 text-xl font-semibold leading-relaxed">
                "Antes, terminava o dia exausto com cirurgias, registros e burocracias. Hoje, com o Split cuidando dos registros, pode parecer que não, mas chego ao fim do dia bem menos cansado."
              </p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-[var(--color-accent)] rounded-2xl p-6 shadow-lg lg:col-span-3">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={drLeandroImg} 
                  alt="Dr. Leandro Lucena" 
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Dr. Leandro Lucena</h4>
                  <p className="text-gray-600 text-base">Transplante Capilar</p>
                </div>
              </div>
              <p className="text-gray-700 text-xl font-semibold leading-relaxed">
                "Achava que o Splitcare não era para mim. Bastaram algumas consultas para perceber o quanto me ajuda. É muito fácil de usar. Hoje eu não consigo mais atender meus pacientes sem ele."
              </p>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-[var(--color-accent)] rounded-2xl p-6 shadow-lg lg:col-span-2">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={drRuanImg} 
                  alt="Dr. Ruan Rodigheri" 
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Dr. Ruan Rodigheri</h4>
                  <p className="text-gray-600 text-base">Médico Generalista</p>
                </div>
              </div>
              <p className="text-gray-700 text-xl font-semibold leading-relaxed">
                "Pensei que não economizaria tanto tempo com o Splitcare. Mesmo no plantão, eu ganho alguns minutos preciosos entre um paciente e outro e ainda manter a média de atendimentos."
              </p>
            </div>

            {/* Depoimento 4 */}
            <div className="bg-[var(--color-accent)] rounded-2xl p-6 shadow-lg lg:col-span-2">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={draMilenaImg} 
                  alt="Dra. Milena Salvadori" 
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Dra. Milena Salvadori</h4>
                  <p className="text-gray-600 text-base">Dermatologia</p>
                </div>
              </div>
              <p className="text-gray-700 text-xl font-semibold leading-relaxed">
                "Como a minha prática tem bastante exame clínico, eu consigo conversar com as pacientes enquanto tudo é registrado pelo Splitcare. E depois, ao invés de registrar, eu tiro as dúvidas."
              </p>
            </div>

            {/* Depoimento 5 */}
            <div className="bg-[var(--color-accent)] rounded-2xl p-6 shadow-lg lg:col-span-2">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={drGuilhermeImg} 
                  alt="Dr. Guilherme Olinto" 
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Dr. Guilherme Olinto</h4>
                  <p className="text-gray-600 text-base">Psiquiatria</p>
                </div>
              </div>
              <p className="text-gray-700 text-xl font-semibold leading-relaxed">
                "A minha área requer bastante atenção à historia clínica. Meus pacientes com certeza perceberam a melhora nas consultas desde que adotei o Splitcare. Consigo olhar mais pra eles."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quinta Seção - Logos em Movimento */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
  <div className="relative w-full overflow-hidden">
    <ul className="logo-track flex gap-12 lg:gap-16">
      <li><img src={logoGoogleGemini} alt="Google Gemini" className="logo-item" /></li>
      <li><img src={logoGoogleMeet} alt="Google Meet" className="logo-item" /></li>
      <li><img src={logoSus} alt="SUS" className="logo-item" /></li>
      <li><img src={logoLgpd} alt="LGPD" className="logo-item" /></li>
      <li><img src={logoMeta} alt="Meta" className="logo-item" /></li>
      <li><img src={logoOpenai} alt="OpenAI" className="logo-item" /></li>
      <li><img src={logoHc} alt="Hc" className="logo-item" /></li>
      <li><img src={logoGoogleGemini} alt="Google Gemini" className="logo-item" /></li>
      <li><img src={logoGoogleMeet} alt="Google Meet" className="logo-item" /></li>
      <li><img src={logoSus} alt="SUS" className="logo-item" /></li>
      <li><img src={logoLgpd} alt="LGPD" className="logo-item" /></li>
      <li><img src={logoMeta} alt="Meta" className="logo-item" /></li>
      <li><img src={logoOpenai} alt="OpenAI" className="logo-item" /></li>
      <li><img src={logoHc} alt="Hc" className="logo-item" /></li>
      <li><img src={logoGoogleGemini} alt="Google Gemini" className="logo-item" /></li>
      <li><img src={logoGoogleMeet} alt="Google Meet" className="logo-item" /></li>
      <li><img src={logoSus} alt="SUS" className="logo-item" /></li>
      <li><img src={logoLgpd} alt="LGPD" className="logo-item" /></li>
      <li><img src={logoMeta} alt="Meta" className="logo-item" /></li>
      <li><img src={logoOpenai} alt="OpenAI" className="logo-item" /></li>
      <li><img src={logoHc} alt="Hc" className="logo-item" /></li>
    </ul>
  </div>
</section>

    </div>
  );
};

export default Home; 