import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

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
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // useEffect para aplicar a classe 'dark' ao elemento <html>
  // sempre que o estado 'theme' mudar
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      {/* O Header geralmente fica fora das Routes para aparecer em todas as páginas */}
      <Header />

      {/* Conteúdo principal da aplicação, que muda com as rotas */}
      {/* As classes de fundo e texto aqui são para o corpo principal,
          mas as páginas individuais também ajustarão seus fundos */}
      <main
        className={`min-h-screen ${
          theme === "dark"
            ? "bg-gray-900 text-gray-200"
            : "bg-gray-50 text-gray-800"
        }`}
      >
        <Routes>
          {/* Passa o tema e a função toggleTheme como props para as páginas */}
          <Route
            path="/"
            element={<Home theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/sobre"
            element={<Profile theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/projetos"
            element={<Projects theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/contato"
            element={<Contact theme={theme} toggleTheme={toggleTheme} />}
          />
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
          {theme === "light" ? (
            // Ícone de lua para modo escuro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            // Ícone de sol para modo claro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h1M4 12H3m15.325 5.325l-.707.707M6.372 6.372l-.707-.707M18.364 6.364l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>

        {/* Botão Flutuante do WhatsApp */}
        <a
          href="https://wa.me/5531999999999?text=Olá! Gostaria de mais informações sobre os serviços da Assessoria Digital."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full text-white bg-blue-600 shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
          aria-label="Fale conosco pelo WhatsApp"
        >
          {/* Ícone do WhatsApp (SVG) */}
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="#25D366"
              d="M20.52 3.48A11.949 11.949 0 0012 0C5.372 0 0 5.373 0 12a11.953 11.953 0 002.24 6.542L0 24l5.59-2.266A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.195-1.247-6.195-3.48-8.52z"
            />
            <path
              fill="#fff"
              d="M17.475 14.362c-.297-.149-1.758-.867-2.031-.967-.273-.1-.472-.148-.672.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.059-.173-.298-.018-.459.13-.607.134-.133.297-.348.446-.52.149-.173.198-.297.298-.495.1-.198.05-.37-.025-.52-.075-.148-.672-1.612-.92-2.204-.242-.579-.487-.5-.672-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"
            />
          </svg>
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
