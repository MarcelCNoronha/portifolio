import { ExternalLink, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';

export function Portfolio() {
  const projects = [
    {
      title: 'E-commerce de Moda',
      description: 'Aumento de 250% nas vendas online em 6 meses através de campanhas de tráfego pago e otimização de conversão.',
      image: 'https://images.unsplash.com/photo-1691073121676-1ab3a6d3d743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbGFwdG9wfGVufDF8fHx8MTc2ODA0Mjc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Tráfego Pago', 'SEO'],
      metric: '+250%',
      metricLabel: 'Vendas',
    },
    {
      title: 'Restaurante Local',
      description: 'Crescimento de 180% no engajamento social e aumento significativo no número de reservas online.',
      image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3Njc5ODg3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Social Media', 'Conteúdo'],
      metric: '+180%',
      metricLabel: 'Engajamento',
    },
    {
      title: 'Consultoria B2B',
      description: 'ROI de 450% em campanhas de tráfego pago e geração de mais de 500 leads qualificados.',
      image: 'https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2Nzk0OTc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Google Ads', 'E-mail'],
      metric: '+450%',
      metricLabel: 'ROI',
    },
  ];

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Casos de Sucesso
          </h2>
          <p className="text-lg text-gray-600">
            Veja alguns dos projetos que transformaram negócios e geraram resultados extraordinários
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Metric Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="text-lg font-bold text-gray-900">{project.metric}</div>
                      <div className="text-xs text-gray-600">{project.metricLabel}</div>
                    </div>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Quer resultados como esses para o seu negócio?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            Entre em contato conosco
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}