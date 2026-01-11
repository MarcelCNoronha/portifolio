import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 inline-flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Transforme Seu Negócio Digital
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Impulsione sua
                <span className="block text-purple-600">Presença Digital</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Conectamos tecnologia e estratégia para criar soluções web de alto impacto — desde desenvolvimento até performance — gerando resultados reais para o seu negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg h-14 px-8"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('servicos')}
                className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg h-14 px-8"
              >
                Nossos Serviços
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY3OTY0Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Analytics Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Tecnologia</div>
                  <div className="text-sm text-gray-600">Resultados</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900">Soluções Completas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}