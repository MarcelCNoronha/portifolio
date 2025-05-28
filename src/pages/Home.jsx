import React from 'react';

// O componente agora recebe 'theme' e 'toggleTheme' como props
function Home({ theme, toggleTheme }) { // 'toggleTheme' é recebido mas não usado aqui, apenas para consistência
  return (
    // Adiciona classes de fundo e texto dinâmicas baseadas no tema recebido via prop
    <section id="home-page" className={`py-16 md:py-20 min-h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4 text-center mb-16"> {/* Adicionei mb-16 para espaçamento */}
        <h2 className={`text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
          Bem-vindo à Assessoria Digital Viçosa
        </h2>
        <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          Impulsione sua presença digital e alcance novos clientes em Viçosa, MG, com soluções personalizadas.
        </p>
        <a href="/contato" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out transform">
          Solicite uma Análise Gratuita!
        </a>
      </div>

      {/* Resumo da Seção "Sobre Nós" */}
      <div className={`w-full py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 text-center">
          <h3 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Quem Somos</h3>
          <p className={`text-lg leading-relaxed max-w-3xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Somos a <strong className="text-blue-600">[Nome da Sua Assessoria Digital]</strong>, sua parceira estratégica em Viçosa para o crescimento online. Com expertise em marketing digital, ajudamos negócios locais a se destacarem e fortalecerem sua presença na internet.
          </p>
          <a href="/sobre" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Saiba Mais Sobre Nós
          </a>
        </div>
      </div>

      {/* Resumo da Seção "Projetos" */}
      <div className={`w-full py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 text-center">
          <h3 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Nossos Projetos de Sucesso</h3>
          <p className={`text-lg leading-relaxed max-w-3xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Explore nosso portfólio e veja como transformamos a presença digital de diversos negócios em Viçosa e região com soluções personalizadas e resultados comprovados.
          </p>
          <a href="/projetos" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Ver Portfólio
          </a>
        </div>
      </div>

      {/* Resumo da Seção "Contato" */}
      <div className={`w-full py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 text-center">
          <h3 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Entre em Contato</h3>
          <p className={`text-lg leading-relaxed max-w-3xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Tem um projeto em mente ou gostaria de uma análise gratuita para o seu negócio? Fale conosco e vamos construir o seu sucesso online!
          </p>
          <a href="/contato" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Fale Conosco Agora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
