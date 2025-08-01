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
import lampadaCerebroImg from '../assets/images/lampada-cerebro.avif';
import { Rocket, Shield, Users, ArrowRight } from 'lucide-react';
import FAQ from '../components/FAQ';

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
                  A IA médica que trabalha por você.
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

      {/* Sexta Seção - Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sua consulta muda. Sua rotina muda.
          </h2>
          
          {/* Subtítulo */}
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-12">
            Sua vida agradece.
          </h3>

          {/* Formulário de contato */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Digite aqui seu email..."
              className="flex-1 px-4 py-3 rounded-lg bg-[var(--color-secondary-100)] text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-opacity-50"
            />
            <button className="px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-600)] transition-colors duration-200 whitespace-nowrap">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

      {/* Sétima Seção - Problemas e Soluções */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Título principal */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Está vivendo isso?
            </h2>
          </div>

          {/* Caixa azul com problemas */}
          <div className="bg-[var(--color-primary)] rounded-2xl p-8 mb-12">
            <div className="space-y-6">
              {/* Problema 1 */}
              <details className="group">
                <summary className="flex items-center text-white text-lg font-semibold cursor-pointer list-none">
                  <span className="mr-3 text-2xl">+</span>
                  A medicina te deu uma carreira... mas tem roubado sua presença.
                </summary>
                <div className="mt-4 text-white/90 space-y-2">
                  <p>Você sai do consultório... mas o consultório não sai de você.</p>
                  <p>Chega em casa e ainda está trabalhando.</p>
                  <p>Com um laptop aberto e um olhar fechado.</p>
                  <p>Sua família janta sozinha.</p>
                  <p>Você digita sozinho.</p>
                  <p>O problema não é falta de tempo.</p>
                  <p>É excesso de burocracia.</p>
                </div>
              </details>

              <hr className="border-white/20" />

              {/* Problema 2 */}
              <details className="group">
                <summary className="flex items-center text-white text-lg font-semibold cursor-pointer list-none">
                  <span className="mr-3 text-2xl">+</span>
                  O cansaço que você leva pra casa não é da medicina. É da burocracia.
                </summary>
                <div className="mt-4 text-white/90 space-y-2">
                  <p>O dia termina, mas sua jornada não.</p>
                  <p>Paciente sai do consultório... e você entra no prontuário.</p>
                  <p>Horas extras que ninguém vê.</p>
                  <p>Tempo roubado da sua família, da sua saúde, de você.</p>
                </div>
              </details>

              <hr className="border-white/20" />

              {/* Problema 3 */}
              <details className="group">
                <summary className="flex items-center text-white text-lg font-semibold cursor-pointer list-none">
                  <span className="mr-3 text-2xl">+</span>
                  Você está olhando mais pra tela do que pro paciente.
                </summary>
                <div className="mt-4 text-white/90 space-y-2">
                  <p>Você já teve essa sensação... Ele já teve essa sensação.</p>
                  <p>Porque ela é real.</p>
                  <p>Você virou escrivão da própria consulta.</p>
                  <p>O prontuário virou o protagonista.</p>
                  <p>E o paciente, coadjuvante.</p>
                </div>
              </details>
            </div>
          </div>

          {/* Solução */}
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Existe um novo jeito.
            </h3>
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              E ele muda tudo.
            </h4>
          </div>

          {/* Explicação da solução */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Você não precisa mais escolher entre cuidar e documentar.<br />
              Agora, dá pra fazer os dois. Ao mesmo tempo.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Digite aqui seu email..."
              className="flex-1 px-4 py-3 rounded-lg bg-[var(--color-secondary-100)] text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-opacity-50"
            />
            <button className="px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-600)] transition-colors duration-200 whitespace-nowrap">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

      {/* Oitava Seção - Perguntas e Respostas */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Título principal */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Com o Splitcare, você conversa.
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              A IA escuta.
            </h3>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              E, em segundos, está pronto.
            </h4>
            <p className="text-xl text-gray-600">
              Evolução estruturada, clara, com linguagem clínica.
            </p>
          </div>

          {/* Caixa azul com perguntas e respostas */}
          <div className="bg-[var(--color-primary)] rounded-2xl p-8">
            <div className="space-y-6">
              {/* Pergunta 1 */}
              <details className="group">
                <summary className="flex items-center text-white text-lg font-semibold cursor-pointer list-none">
                  <span className="mr-3 text-2xl">×</span>
                  É só mais uma ferramenta?
                </summary>
                <div className="mt-4 text-white/90 space-y-2">
                  <p>Não é. É o fim do trabalho invisível. É a sua volta pra casa mais cedo. É você retomando o controle do seu tempo e da sua presença.</p>
                </div>
              </details>

              <hr className="border-white/20" />

              {/* Pergunta 2 */}
              <details className="group">
                <summary className="flex items-center text-white text-lg font-semibold cursor-pointer list-none">
                  <span className="mr-3 text-2xl">×</span>
                  Mas será que não é mais um app que promete e não entrega?
                </summary>
                <div className="mt-4 text-white/90 space-y-2">
                  <p>Prometer é fácil. Mostrar, melhor. Experimente. Em segundos, você vai entender. Splitcare é o reencontro com o que te fez escolher a medicina: O olhar no paciente. A escuta de verdade.</p>
                </div>
              </details>

              <hr className="border-white/20" />

              {/* Pergunta 3 */}
              <details className="group">
                <summary className="flex items-center text-white text-lg font-semibold cursor-pointer list-none">
                  <span className="mr-3 text-2xl">×</span>
                  Mas no fim eu não vou ter que copiar e colar no prontuário?
                </summary>
                <div className="mt-4 text-white/90 space-y-2">
                  <p>Vai. Mas é só isso. Sem escrever do zero. Sem formatar. Sem perder tempo. Você clica, copia, cola... e pronto. O que antes levava minutos (ou horas), agora leva segundos. Você fala. A IA estrutura. Você revisa. E segue. Simples. E leve.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Nona Seção - Segurança e Privacidade */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Título principal */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mito da Insegurança: como nossa IA protege você e seus pacientes
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Muitos médicos ainda acreditam que ao usar uma IA para transcrição de consultas, seus dados e os de seus pacientes podem ser usados para treinar modelos, comprometendo a privacidade. Isso não poderia estar mais longe da verdade!
            </p>
          </div>

          {/* Cards de segurança */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 - OPT-OUT */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  OPT-OUT: Seus dados, sua decisão.
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Se você assim decidir, nossa IA não usa seus dados para "aprender". Ela processa a consulta e o seu diálogo em tempo real e entrega os dados dos seus pacientes exclusivamente para você.
                </p>
              </div>
            </div>

            {/* Card 2 - Privacidade Garantida */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Privacidade Garantida
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Seguimos rigorosos padrões de compliance, como LGPD e HIPAA, Criptografia e Anonimização garantindo que cada consulta seja protegida com tecnologia de ponta.
                </p>
              </div>
            </div>

            {/* Card 3 - Ainda não está convencido? */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ainda não está convencido?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Precisa dos dados? Eles ficam seguros. Quer excluir? O Splitcare pode fazer isso para você automaticamente. A cada 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Décima Seção - Estatísticas e Call-to-Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Seção de Estatísticas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* Estatística 1 */}
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-gray-400 mb-2">
                +700
              </div>
              <div className="text-lg text-gray-900">
                Médicos Ativos
              </div>
            </div>

            {/* Estatística 2 */}
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-gray-400 mb-2">
                +250.000
              </div>
              <div className="text-lg text-gray-900">
                Evoluções Médicas Auditáveis
              </div>
            </div>

            {/* Estatística 3 */}
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-gray-400 mb-2">
                &lt;10s
              </div>
              <div className="text-lg text-gray-900">
                Geração de Evolução
              </div>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              Liberte seu tempo agora!
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="nome@email.com"
                className="flex-1 px-6 py-4 bg-orange-100 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
              />
              <button className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap">
                Teste Grátis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Décima Primeira Seção - Missão desde 2021 */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            
            {/* Ícone de Lâmpada */}
            <div className="flex-shrink-0">
                <img 
                  src={lampadaCerebroImg} 
                  alt="Lâmpada Cerebro" 
                  className="w-28 h-28 object-contain"
                />
            </div>

            {/* Texto da Missão */}
            <div className="flex-1 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Desde 2021, estamos redefinindo como
                <br />
                médicos registram, atendem, protegem e
                <br />
                evoluem sua prática Médica.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Décima Segunda Seção - Planos de Preços */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Label e Título */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[var(--color-accent)] text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Asistente de IA
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              Liberte seu tempo agora!
            </h2>
          </div>

          {/* Cards de Planos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            
            {/* Card Azul - Prontuário + Split-assist */}
            <div className="bg-[var(--color-primary)] rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Prontuário + Split-assist
              </h3>
              
              <hr className="border-white/30 mb-6" />
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Split-assist (IA)
                </li>
                <li className="flex items-center text-white">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Prontuário
                </li>
                <li className="flex items-center text-white">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Agenda
                </li>
                <li className="flex items-center text-white">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Financeiro
                </li>
                <li className="flex items-center text-white">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Telemedicina
                </li>
              </ul>

              <div>
                <div className="text-3xl font-bold text-white mb-4">
                  Consulte
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Digite aqui seu email..."
                    className="flex-1 px-4 py-3 bg-amber-100 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <button className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap">
                    Fale Conosco
                  </button>
                </div>
              </div>
            </div>

            {/* Card Branco - Split-assist */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Split-assist
              </h3>
              
              <hr className="border-gray-300 mb-6" />
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-900">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Trancrição Ilimitada
                </li>
                <li className="flex items-center text-gray-900">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Compartilhamento ilimitado de caso clínico
                </li>
                <li className="flex items-center text-gray-900">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Modelo de Anamnese com Respaldo Jurídico
                </li>
                <li className="flex items-center text-gray-900">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  7 dias grátis
                </li>
                <li className="flex items-center text-gray-900">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Sem compromisso
                </li>
              </ul>

              <div>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">R$249,90</span>
                  <span className="text-gray-500 ml-2">/mês</span>
                </div>
                <button className="w-full px-6 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-600)] transition-colors">
                  Use Splitcare
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componente FAQ */}
      <FAQ />
    </div>
  );
};

export default Home; 