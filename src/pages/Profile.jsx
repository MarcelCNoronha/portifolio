import React from 'react';

// O componente agora recebe 'theme' e 'toggleTheme' como props
function Profile({ theme, toggleTheme }) { // 'toggleTheme' é recebido mas não usado aqui, apenas para consistência
  return (
    // Adiciona classes de fundo e texto dinâmicas baseadas no tema recebido via prop
    <section id="profile-page" className={`py-16 md:py-20 min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Sobre Nós</h2>
        <p className={`text-lg leading-relaxed max-w-3xl mx-auto mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          Na <strong className="text-blue-600">[Nome da Sua Assessoria Digital]</strong>, somos apaixonados por transformar negócios em Viçosa e região através do poder do marketing digital. Acreditamos que cada empresa, independentemente do tamanho, merece uma presença online forte e estratégica para alcançar seu verdadeiro potencial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="text-left">
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Nossa Missão</h3>
            <p className={`leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Nossa missão é capacitar empresas locais com as ferramentas e estratégias digitais necessárias para crescer, inovar e se conectar de forma significativa com seu público-alvo. Fazemos isso com transparência, dedicação e foco em resultados mensuráveis.
            </p>
            {/* Adicionado link para o LinkedIn */}
            <p className={`leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Conheça mais sobre nossa expertise e trajetória profissional em nosso perfil do LinkedIn: <a href="https://www.linkedin.com/in/marcel-cardoso-de-noronha-dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Marcel Cardoso de Noronha</a>.
            </p>
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Nossos Valores</h3>
            <ul className={`list-disc list-inside leading-relaxed space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>**Inovação:** Buscamos constantemente as melhores e mais recentes tendências do mercado.</li>
              <li>**Resultados:** Nosso compromisso é com o crescimento e sucesso dos nossos clientes.</li>
              <li>**Transparência:** Mantemos uma comunicação clara e honesta em todas as etapas.</li>
              <li>**Parceria:** Construímos relacionamentos sólidos e duradouros com nossos clientes.</li>
              <li>**Excelência:** Entregamos serviços de alta qualidade e com atenção aos detalhes.</li>
            </ul>
          </div>
          <div>
            <img
              src="https://placehold.co/600x400/a78bfa/ffffff?text=Nossa+Equipe"
              alt="Imagem da equipe da assessoria digital"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Adiciona classes de fundo e texto dinâmicas para o CTA */}
        <div className={`p-8 rounded-xl shadow-md max-w-4xl mx-auto ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-50'}`}>
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Pronto para Alavancar Seu Negócio?</h3>
          <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a brilhar no ambiente digital de Viçosa!
          </p>
          <a href="/contato" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out transform">
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
