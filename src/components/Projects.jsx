import React from "react";
import ServicesCarousel from "./ServicesCarousel";

function Projects() {
  return (
    <section id="projects-page" className="py-16 md:py-20 bg-metallic-purple text-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Nossos Serviços</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12 text-justify text-gray-300">
          Oferecemos uma gama de serviços para ajudar sua empresa a crescer no ambiente digital.
        </p>

        <ServicesCarousel />

      </div>
    </section>
  );
}

export default Projects;