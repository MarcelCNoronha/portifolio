import React from 'react'; // Removidos useState e useEffect

// O componente agora recebe 'theme' e 'toggleTheme' como props
function Projects({ theme, toggleTheme }) { // 'toggleTheme' é recebido mas não usado aqui, apenas para consistência
  // Array de exemplo para os projetos. Você pode substituir isso por dados reais
  // ou buscar de uma API no futuro.
  const projectsData = [
    {
      id: 1,
      title: "Landing Page para Restaurante Local",
      service: "Criação de Landing Page e Otimização Google Meu Negócio",
      description: "Desenvolvimento de uma landing page moderna e responsiva para um restaurante em Viçosa, focada em atrair clientes locais e aumentar as reservas. Incluiu otimização completa do perfil no Google Meu Negócio.",
      results: "Aumento de 30% nas reservas online e 25% mais visualizações no Google Maps em 3 meses.",
      imageUrl: "https://placehold.co/600x400/e0e7ff/3f51b5?text=Projeto+Restaurante",
      link: "#" // Link para o projeto real, se houver
    },
    {
      id: 2,
      title: "Campanha de Anúncios para Loja de Roupas",
      service: "Google Ads e Meta Ads (Facebook/Instagram)",
      description: "Criação e gerenciamento de campanhas de anúncios digitais para uma loja de roupas, visando aumentar o tráfego para o e-commerce e as vendas. Segmentação detalhada de público-alvo em Viçosa e região.",
      results: "Redução de 15% no custo por clique e aumento de 40% nas vendas online durante a campanha.",
      imageUrl: "https://placehold.co/600x400/e0e7ff/3f51b5?text=Projeto+Loja",
      link: "#"
    },
    {
      id: 3,
      title: "Otimização SEO para Clínica Odontológica",
      service: "SEO On-Page e Conteúdo Estratégico",
      description: "Otimização completa do site de uma clínica odontológica para melhorar seu ranqueamento nos motores de busca. Foco em palavras-chave relevantes para serviços odontológicos em Viçosa.",
      results: "Clínica alcançou a primeira página do Google para 5 termos-chave importantes em 6 meses, aumentando o tráfego orgânico em 50%.",
      imageUrl: "https://placehold.co/600x400/e0e7ff/3f51b5?text=Projeto+Clinica",
      link: "#"
    },
    {
      id: 4,
      title: "Criação de Email Institucional para Startup",
      service: "Configuração de Email Institucional e Treinamento",
      description: "Implementação de um sistema de email institucional profissional para uma startup local, garantindo comunicação segura e credibilidade. Incluiu treinamento para a equipe sobre boas práticas de email.",
      results: "Melhora na percepção de profissionalismo da marca e comunicação interna mais eficiente.",
      imageUrl: "https://placehold.co/600x400/e0e7ff/3f51b5?text=Projeto+Email",
      link: "#"
    }
  ];

  return (
    // Adiciona classes de fundo e texto dinâmicas baseadas no tema recebido via prop
    <section id="projects-page" className={`py-16 md:py-20 min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4 text-center">
        {/* O botão de alternância de tema foi movido para App.jsx, então ele não está mais aqui. */}

        <h2 className="text-3xl md:text-4xl font-bold mb-8">Nossos Projetos de Sucesso</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Confira alguns dos trabalhos que realizamos e como ajudamos nossos clientes em Viçosa e região a alcançar seus objetivos digitais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <div key={project.id} className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
              <img
                src={project.imageUrl}
                alt={`Imagem do projeto ${project.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`font-medium mb-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{project.service}</p> {/* Ajuste de cor para modo escuro */}
                <p className="text-sm mb-4">{project.description}</p>
                <p className="text-sm font-semibold">Resultados:</p>
                <p className="text-sm mb-4">{project.results}</p>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  >
                    Ver Projeto
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action no final da página de projetos */}
        <div className={`p-8 rounded-xl shadow-md max-w-4xl mx-auto mt-16 ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-50'}`}>
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Seu Projeto Pode Ser o Próximo!</h3>
          <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Gostou do que viu? Entre em contato e vamos conversar sobre como podemos transformar a presença digital da sua empresa.
          </p>
          <a href="/contato" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out transform">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
