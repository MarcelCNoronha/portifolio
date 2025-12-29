import React from "react";
import projectsData from "../data/projectsData"; 
import CallToAction from "./CallToAction";

// A simple component to render icons based on the data
const ServiceIcon = ({ icon, theme }) => {
  const iconColor = theme === "dark" ? "text-blue-400" : "text-blue-600";
  const iconClass = `w-12 h-12 mb-4 ${iconColor}`;

  switch (icon) {
    case "website":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "ads":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      );
    case "seo":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        );
    case "local":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        );
    default:
      return null;
  }
};


function Projects({ theme }) {
  return (
    <section
      id="projects-page"
      className={`py-16 md:py-20 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-200"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          O Que Analisamos no Diagnóstico Gratuito?
        </h2>
        <p
          className={`text-lg leading-relaxed max-w-3xl mx-auto mb-12 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Nosso diagnóstico gratuito é um relatório prático que avalia os pilares da sua presença digital. Analisamos os seguintes pontos para fornecer recomendações claras e acionáveis:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {projectsData.map((service) => (
            <div
              key={service.id}
              className={`rounded-xl shadow-lg p-6 flex items-start ${
                theme === "dark" ? "bg-gray-700" : "bg-white"
              }`}
            >
              <div className="flex-shrink-0">
                <ServiceIcon icon={service.icon} theme={theme} />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
            <CallToAction
              theme={theme}
              title="Receba Seu Diagnóstico Gratuito"
              description="Solicite seu diagnóstico sem compromisso e descubra como podemos ajudar a alavancar seu negócio no ambiente digital."
              buttonText="Solicitar Diagnóstico Agora"
              buttonLink="#hero-section" 
            />
        </div>
      </div>
    </section>
  );
}

export default Projects;