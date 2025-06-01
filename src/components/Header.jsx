import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do menu móvel

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nome da Empresa */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300">
          Assessoria Digital
        </Link>

        {/* Botão do Menu Hambúrguer (aparece apenas em telas pequenas) */}
        <div className="md:hidden"> {/* md:hidden oculta em telas maiores que 'md' */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {/* Ícone de hambúrguer ou 'X' */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                // Ícone 'X' quando o menu está aberto
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Ícone de hambúrguer quando o menu está fechado
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Lista de Navegação (oculta em telas pequenas, visível em md: e acima) */}
        <ul className="hidden md:flex space-x-6"> {/* hidden por padrão, md:flex exibe em telas maiores */}
          <li>
            <Link 
              to="/" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              to="/sobre" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/projetos" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link 
              to="/contato" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu Móvel (aparece quando isOpen é true e em telas pequenas) */}
      {isOpen && (
        <div className="md:hidden"> {/* Visível apenas em telas pequenas quando 'isOpen' é true */}
          <ul className="flex flex-col items-end mt-4 space-y-4 pr-4"> {/* Menu empilhado verticalmente */}
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                to="/sobre" 
                className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link 
                to="/projetos" 
                className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link 
                to="/contato" 
                className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;