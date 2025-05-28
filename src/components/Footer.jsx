import React from 'react';

function Footer() {
  return (
    // O botão do WhatsApp foi movido para App.jsx
    <footer className="bg-gray-900 text-gray-300 py-8 shadow-lg">
      <div className="container mx-auto px-4 text-center text-sm">
        {/* Informações de Copyright */}
        <p className="mb-4">
          &copy; {new Date().getFullYear()} <strong className="text-white">[Nome da Sua Assessoria Digital]</strong> - Todos os direitos reservados.
        </p>

        {/* Links de Políticas */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-white transition-colors duration-200">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Termos de Uso
          </a>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex justify-center space-x-4">
          {/* Ícone do Facebook */}
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          {/* Ícone do Instagram */}
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 5C8.683 5 5.922 7.761 5.922 11.078v1.844c0 3.317 2.761 6.078 6.078 6.078h.001c3.317 0 6.078-2.761 6.078-6.078v-1.844C18.078 7.761 15.317 5 12 5zm0 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM12 9a3 3 0 100 6 3 3 0 000-6zm5.25-3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd" />
            </svg>
          </a>
          {/* Ícone do LinkedIn */}
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;