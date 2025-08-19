import React, { useState, useEffect } from 'react';
// Não precisamos mais do Link do react-router-dom para navegação interna de âncora
// import { Link } from "react-router-dom"; 

function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do menu móvel
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // rolando para baixo
      } else {
        setShowHeader(true);  // rolando para cima
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Função para fechar o menu móvel
  const closeMobileMenu = () => setIsOpen(false);

  // Função para rolar suavemente
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Ajuste para compensar o header fixo
      const headerOffset = document.querySelector('nav').offsetHeight; // Pega a altura do seu nav (header)
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset - 20; // -20px para um pequeno respiro extra

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    closeMobileMenu(); 
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 shadow-lg z-50 transition-transform duration-300
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
        ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#hero-section" 
          className={`text-2xl font-bold transition-colors duration-300
            ${theme === 'dark' ? 'text-white hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}
          `}
          onClick={() => scrollToSection('hero-section')}
        >
          Assessoria Digital
        </a>

        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300
              ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}
            `}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className={`w-8 h-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a
              href="#hero-section"
              className={`transition-colors duration-300 font-medium text-lg
                ${theme === 'dark' ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'}
              `}
              onClick={() => scrollToSection('hero-section')}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#profile-page"
              className={`transition-colors duration-300 font-medium text-lg
                ${theme === 'dark' ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'}
              `}
              onClick={() => scrollToSection('profile-page')}
            >
              Sobre
            </a>
          </li>
          {/* <li>
            <a
              href="#projects-page" 
              className={`transition-colors duration-300 font-medium text-lg
                ${theme === 'dark' ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'}
              `}
              onClick={() => scrollToSection('projects-page')}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact-page" 
              className={`transition-colors duration-300 font-medium text-lg
                ${theme === 'dark' ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'}
              `}
              onClick={() => scrollToSection('contact-page')}
            >
              Contato
            </a>
          </li> */}
          <li>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300
                ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}
              `}
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full shadow-md
            ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}
          `}
        >
          <ul className="flex flex-col items-end py-4 pr-4 space-y-4">
            <li>
              <a
                href="#hero-section"
                className={`font-medium text-lg transition-colors duration-300
                  ${theme === 'dark' ? 'text-gray-200 hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'}
                `}
                onClick={() => scrollToSection('hero-section')}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#profile-page"
                className={`font-medium text-lg transition-colors duration-300
                  ${theme === 'dark' ? 'text-gray-200 hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'}
                `}
                onClick={() => scrollToSection('profile-page')}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#projects-page"
                className={`font-medium text-lg transition-colors duration-300
                  ${theme === 'dark' ? 'text-gray-200 hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'}
                `}
                onClick={() => scrollToSection('projects-page')}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact-page"
                className={`font-medium text-lg transition-colors duration-300
                  ${theme === 'dark' ? 'text-gray-200 hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'}
                `}
                onClick={() => scrollToSection('contact-page')}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;