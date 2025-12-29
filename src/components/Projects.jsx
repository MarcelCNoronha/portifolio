import React from "react";
import ServicesCarousel from "./ServicesCarousel";

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
          Nossos Serviços
        </h2>
        <p
          className={`text-lg leading-relaxed max-w-3xl mx-auto mb-12 text-justify ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Oferecemos uma gama de serviços para ajudar sua empresa a crescer no ambiente digital.
        </p>

        <ServicesCarousel theme={theme} />

      </div>
    </section>
  );
}

export default Projects;