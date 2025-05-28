import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

// Importar os componentes de página
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects"; 
import Contact from "./pages/Contact"; 

// Importar os componentes de layout (Header e Footer)
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // Estado para gerenciar o tema: 'light' ou 'dark'
  // Inicializa o tema a partir do localStorage ou 'light' como padrão
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  // useEffect para aplicar a classe 'dark' ao elemento <html>
  // sempre que o estado 'theme' mudar
  useEffect(() => {
    const htmlElement = document.documentElement; 
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]); 

  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      {/* O Header geralmente fica fora das Routes para aparecer em todas as páginas */}
      <Header />

      {/* Conteúdo principal da aplicação, que muda com as rotas */}
      {/* As classes de fundo e texto aqui são para o corpo principal,
          mas as páginas individuais também ajustarão seus fundos */}
      <main className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
        <Routes>
          {/* Passa o tema e a função toggleTheme como props para as páginas */}
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/sobre" element={<Profile theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/projetos" element={<Projects theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/contato" element={<Contact theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </main>

      {/* O Footer também geralmente fica fora das Routes para aparecer em todas as páginas */}
      <Footer />

      {/* Botões Flutuantes (WhatsApp e Tema) */}
      <div className="fixed bottom-6 right-6 flex space-x-4 z-50">
        {/* Botão de alternância de tema */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
          aria-label="Alternar tema claro/escuro"
        >
          {theme === 'light' ? (
            // Ícone de lua para modo escuro
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            // Ícone de sol para modo claro
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h1M4 12H3m15.325 5.325l-.707.707M6.372 6.372l-.707-.707M18.364 6.364l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>

        {/* Botão Flutuante do WhatsApp */}
        <a
          href="https://wa.me/5531999999999?text=Olá! Gostaria de mais informações sobre os serviços da Assessoria Digital." // Substitua pelo seu número de telefone e mensagem padrão
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
          aria-label="Fale conosco pelo WhatsApp"
        >
          {/* Ícone do WhatsApp (SVG) */}
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.04 2c-5.45 0-9.91 4.46-9.91 9.91 0 1.75.46 3.45 1.34 4.96l-1.41 5.15 5.25-1.38c1.45.79 3.08 1.25 4.73 1.25 5.45 0 9.91-4.46 9.91-9.91s-4.46-9.91-9.91-9.91zm.04 1.5c4.61 0 8.41 3.79 8.41 8.41 0 4.61-3.79 8.41-8.41 8.41-.98 0-1.95-.21-2.82-.62l-.2-.09-2.06.54.55-2.02-.13-.21c-.45-.72-.7-1.54-.7-2.39 0-4.61 3.79-8.41 8.41-8.41zm-2.3 4.2c-.2.0-.4-.0-.5-.0-.2 0-.4.0-.6.1-.2.1-.4.2-.5.4-.1.1-.2.3-.2.5-.1.2-.1.4-.1.6s.0.4.1.6c.1.2.2.4.4.5.2.2.4.3.6.4.2.1.4.1.6.1.2.0.4-.0.6-.1.2-.1.4-.2.5-.4.1-.1.2-.3.2-.5.1-.2.1-.4.1-.6s-.0-.4-.1-.6c-.1-.2-.2-.4-.4-.5-.2-.2-.4-.3-.6-.4-.2-.1-.4-.1-.6-.1zm2.3 0c-.2.0-.4-.0-.5-.0-.2 0-.4.0-.6.1-.2.1-.4.2-.5.4-.1.1-.2.3-.2.5-.1.2-.1.4-.1.6s.0.4.1.6c.1.2.2.4.4.5.2.2.4.3.6.4.2.1.4.1.6.1.2.0.4-.0.6-.1.2-.1.4-.2.5-.4.1-.1.2-.3.2-.5.1-.2.1-.4.1-.6s-.0-.4-.1-.6c-.1-.2-.2-.4-.4-.5-.2-.2-.4-.3-.6-.4-.2-.1-.4-.1-.6-.1zm2.3 0c-.2.0-.4-.0-.5-.0-.2 0-.4.0-.6.1-.2.1-.4.2-.5.4-.1.1-.2.3-.2.5-.1.2-.1.4-.1.6s.0.4.1.6c.1.2.2.4.4.5.2.2.4.3.6.4.2.1.4.1.6.1.2.0.4-.0.6-.1.2-.1.4-.2.5-.4.1-.1.2-.3.2-.5.1-.2.1-.4.1-.6s-.0-.4-.1-.6c-.1-.2-.2-.4-.4-.5-.2-.2-.4-.3-.6-.4-.2-.1-.4-.1-.6-.1z" />
          </svg>
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
