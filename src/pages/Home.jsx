import React, { useState } from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScheduleWithGoogle from "../components/ScheduleWithGoogle";
import LeadForm from "../components/LeadForm";

function Home() {
  // The LeadForm is no longer triggered from the hero, but we can keep the logic
  // in case it's used elsewhere in the future.
  const [isLeadOpen, setIsLeadOpen] = useState(false);

  return (
    <>
      <section
        id="hero-section"
        className="py-4 md:py-6 min-h-screen flex items-center justify-center bg-metallic-purple text-gray-200"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-12 mb-6 drop-shadow-lg text-gray-100">
            Implementação de Tecnologia
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 text-gray-300">
              Analisamos suas necessidades e implementamos as melhores ferramentas para otimizar seus processos e aumentar suas vendas.
            </p>
            {/* The user will add a 'banner.png' file to the 'public/images' directory. */}
            <img src="/images/banner.png" alt="Assessoria Digital - Banner Principal" loading="lazy" decoding="async" className="w-full h-auto rounded-md shadow-lg" />
          </div>

          <div className="flex items-center justify-center mt-8 md:mt-10">
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
      
      {/* --- Section Order Changed --- */}
      <Projects />
      <About />
      <Contact />
      {/* <ScheduleWithGoogle /> */}

      <LeadForm open={isLeadOpen} onClose={() => setIsLeadOpen(false)} />
    </>
  );
}

export default Home;