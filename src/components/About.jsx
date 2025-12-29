import React from "react";
import CallToAction from "./CallToAction";

function About({ theme }) {
  return (
    <section
      id="profile-page"
      className={`min-h-screen flex items-center justify-center ${
        theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Sobre Nós
        </h2>
        <p
          className={`text-lg leading-relaxed max-w-3xl mx-auto text-center md:text-justify mb-12 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Na{" "}
          <strong className="text-blue-600">Assessoria Digital</strong>, somos apaixonados por
          transformar negócios através do poder da tecnologia. Acreditamos que cada empresa,
          independentemente do tamanho, merece uma presença online forte e estratégica para alcançar
          seu verdadeiro potencial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-justify mb-16">
          <div className="text-center md:text-left">
            <p
              className={`leading-relaxed mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Somos uma **assessoria digital** que trabalha junto com você — entregamos soluções
              práticas, iterativas e com acompanhamento contínuo. Nosso foco é transformar sua
              presença online por meio de ações que gerem impacto real e mensurável.
            </p>
           
            <ul
              className={`list-disc list-inside leading-relaxed space-y-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>
                <strong>Inovação:</strong> Estamos sempre atentos às tendências e tecnologias mais
                atuais para entregar soluções criativas e eficazes.
              </li>
              <li>
                <strong>Assessoria contínua:</strong> Atuação próxima ao cliente, com acompanhamento
                e otimizações conforme o projeto evolui.
              </li>
              <li>
                <strong>Transparência:</strong> Valorizamos uma comunicação direta, honesta e
                alinhada em todas as etapas do projeto.
              </li>
              <li>
                <strong>Parceria:</strong> Trabalhamos lado a lado com sua equipe, combinando
                conhecimento técnico com o contexto do seu negócio.
              </li>
              <li>
                <strong>Excelência:</strong> Buscamos sempre o mais alto nível de qualidade, com
                atenção aos detalhes e foco na experiência do cliente.
              </li>
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://placehold.co/600x400/0ea5e9/ffffff?text=Nossa+Equipe"
              alt="Nossa Equipe"
              loading="lazy"
              decoding="async"
              className="w-64 h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        <CallToAction
          theme={theme}
          title="Pronto para Alavancar Seu Negócio?"
          description="Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a brilhar no ambiente digital de Viçosa!"
          buttonText="Fale Conosco"
          buttonLink="#contact-page"
        />
      </div>
    </section>
  );
}

export default About;
