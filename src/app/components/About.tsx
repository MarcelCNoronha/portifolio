import { Target, Users, Award, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Target,
      title: 'Estratégias Personalizadas',
      description: 'Cada negócio é único. Criamos estratégias sob medida para alcançar seus objetivos específicos.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados com experiência em marketing digital e performance.',
    },
    {
      icon: Award,
      title: 'Foco em Resultados',
      description: 'Comprometidos em entregar resultados mensuráveis e contribuir para o crescimento do seu negócio.',
    },
    {
      icon: Zap,
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos as melhores ferramentas e práticas do mercado para maximizar seus resultados.',
    },
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3Njc5NDU4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Nossa Equipe"
                className="w-full h-auto"
              />
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-600">Tecnologia</div>
                <div className="text-sm text-gray-600">Aplicada</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Análise de Dados</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Sobre Nós
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Especialistas em Transformação Digital
              </h2>
              <p className="text-lg text-gray-600">
                Somos uma assessoria especializada em implementação digital com foco em resultados. Nossa missão é ajudar empresas a crescerem no ambiente digital através de estratégias personalizadas e inovadoras.
              </p>
              <p className="text-gray-600">
                Com anos de experiência no mercado, combinamos criatividade, tecnologia e análise de dados para entregar soluções que realmente fazem a diferença para nossos clientes.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}