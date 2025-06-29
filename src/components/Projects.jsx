// src/components/Projects.jsx
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import projectsData from "../data/projectsData"; // Import your project data
import CallToAction from "./CallToAction"; // Import the reusable CTA

function Projects({ theme }) {
  return (
    <section
      id="projects-page"
      className={`py-16 md:py-20 min-h-screen ${
        theme === "dark"
          ? "bg-gray-800 text-gray-200"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Nossos Projetos de Sucesso
        </h2>
        <p
          className={`text-lg leading-relaxed max-w-3xl mx-auto mb-12 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Confira alguns dos trabalhos que realizamos e como ajudamos nossos
          clientes em Viçosa e região a alcançar seus objetivos digitais.
        </p>

        {/* Carousel for Projects */}
        <div className="max-w-4xl mx-auto">
          <Carousel
            swipeable={true} // deixar true para permitir swipe horizontal
            emulateTouch={true}
            dynamicHeight={false}
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            stopOnHover={true}
            className="carousel-container"
          >
            {projectsData.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-6 ${
                  theme === "dark" ? "bg-gray-700" : "bg-white"
                }`}
              >
                <img
                  src={project.imageUrl}
                  alt={`Imagem do projeto ${project.title}`}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <div className="text-left w-full">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p
                    className={`font-medium mb-3 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {project.service}
                  </p>
                  <p className="text-base mb-4">{project.description}</p>
                  <p className="text-base font-semibold">Resultados:</p>
                  <p className="text-base mb-4">{project.results}</p>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                      Ver Projeto
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <CallToAction
          theme={theme}
          title="Seu Projeto Pode Ser o Próximo!"
          description="Gostou do que viu? Entre em contato e vamos conversar sobre como podemos transformar a presença digital da sua empresa."
          buttonText="Solicitar Orçamento"
          buttonLink="#contact-page"
        />
      </div>
    </section>
  );
}

export default Projects;
