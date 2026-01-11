import { 
  Megaphone, 
  Search, 
  Share2, 
  Mail, 
  Code, 
  BarChart3,
  CheckCircle2 
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Megaphone,
      title: 'Tráfego Pago',
      description: 'Gestão completa de campanhas no Google Ads, Meta Ads e outras plataformas para maximizar seus resultados.',
      features: [
        'Google Ads',
        'Facebook & Instagram Ads',
        'TikTok Ads',
      ],
      color: 'blue',
    },
    {
      icon: Search,
      title: 'SEO & Conteúdo',
      description: 'Otimização para mecanismos de busca e produção de conteúdo estratégico para atrair seu público-alvo.',
      features: [
        'Auditoria SEO',
        'Marketing de Conteúdo',
        'Link Building',
      ],
      color: 'purple',
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Gestão completa de redes sociais com planejamento estratégico e criação de conteúdo envolvente.',
      features: [
        'Planejamento Editorial',
        'Design de Posts',
        'Gestão de Comunidade',
      ],
      color: 'cyan',
    },
    {
      icon: Mail,
      title: 'E-mail Marketing',
      description: 'Campanhas de e-mail marketing personalizadas para nutrir leads e aumentar conversões.',
      features: [
        'Automação de E-mails',
        'Segmentação de Lista',
        'Design Responsivo',
      ],
      color: 'green',
    },
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites modernos, responsivos e otimizados para conversão e experiência do usuário.',
      features: [
        'Landing Pages',
        'E-commerce',
        'Sites Institucionais',
      ],
      color: 'orange',
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Análise de dados e inteligência de negócios para decisões estratégicas baseadas em dados reais.',
      features: [
        'Google Analytics',
        'Dashboards Personalizados',
        'Relatórios Estratégicos',
      ],
      color: 'pink',
    },
  ];

  const colorVariants: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-100' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-100' },
    cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-600', border: 'border-cyan-100' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-100' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-100' },
    pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-100' },
  };

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluções Completas em Marketing Digital
          </h2>
          <p className="text-lg text-gray-600">
            Oferecemos estratégias personalizadas para impulsionar seu negócio no ambiente digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = colorVariants[service.color];
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${colors.icon} flex-shrink-0`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}