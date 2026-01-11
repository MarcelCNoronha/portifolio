import { TrendingUp, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold">Assessoria Digital</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transformando negócios através de estratégias digitais inovadoras e resultados mensuráveis.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/marcel-cardoso-de-noronha-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-white transition-colors">
                  Tráfego Pago
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-white transition-colors">
                  SEO & Conteúdo
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-white transition-colors">
                  Social Media
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-white transition-colors">
                  E-mail Marketing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-white transition-colors">
                  Desenvolvimento Web
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors">
                  Contato
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contato@assessoriadigitalvicosa.com.br" className="hover:text-white transition-colors">
                  contato@assessoriadigitalvicosa.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5531971531429" className="hover:text-white transition-colors">
                  (31) 97153-1429
                </a>
              </li>
              <li>Viçosa - MG, Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Assessoria Digital. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}