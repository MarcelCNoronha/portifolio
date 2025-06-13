// src/components/Home.jsx
import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home({ theme }) {
  return (
    <>
      <section
        id="hero-section"
        className={`py-4 md:py-6 min-h-screen flex items-center justify-center ${
          theme === "dark"
            ? "bg-gray-800 text-gray-200"
            : "bg-gray-50 text-gray-800"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg ${
              theme === "dark" ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Bem-vindo à Assessoria Digital Viçosa
          </h2>
          <p
            className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Impulsione sua presença digital e alcance novos clientes em Viçosa,
            MG, com soluções personalizadas.
          </p>
          <a
            href="#contact-page"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out transform"
          >
            Solicite uma Análise!
          </a>
        </div>
      </section>
      <About theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
    </>
  );
}

export default Home;
