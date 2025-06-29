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
          className={`text-lg leading-relaxed max-w-3xl mx-auto mb-12 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Na{" "}
          <strong className="text-blue-600">Assessoria Digital</strong>, somos apaixonados por
          transformar negócios através do poder da tecnologia. Acreditamos que cada empresa,
          independentemente do tamanho, merece uma presença online forte e estratégica para alcançar
          seu verdadeiro potencial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="text-left">
            <h3
              className={`text-2xl font-semibold mb-4 ${
                theme === "dark" ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Nossa Missão
            </h3>
            <p
              className={`leading-relaxed mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Nossa missão é capacitar empresas locais com as ferramentas e estratégias digitais
              necessárias para crescer, inovar e se conectar de forma significativa com seu
              público-alvo. Fazemos isso com transparência, dedicação e foco em resultados
              mensuráveis.
            </p>
            <p
              className={`leading-relaxed mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Conheça mais sobre nossa expertise e trajetória profissional em nosso perfil do
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/marcel-cardoso-de-noronha-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                Marcel Cardoso de Noronha
              </a>
              .
            </p>
            <h3
              className={`text-2xl font-semibold mb-4 ${
                theme === "dark" ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Nossos Valores
            </h3>
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
                <strong>Resultados:</strong> Focamos em gerar impacto real para o crescimento dos
                nossos clientes, com metas e entregas claras.
              </li>
              <li>
                <strong>Transparência:</strong> Valorizamos uma comunicação direta, honesta e
                alinhada em todas as etapas do projeto.
              </li>
              <li>
                <strong>Parceria:</strong> Atuamos lado a lado com nossos clientes, construindo
                relações de confiança e colaboração a longo prazo.
              </li>
              <li>
                <strong>Excelência:</strong> Buscamos sempre o mais alto nível de qualidade, com
                atenção aos detalhes e foco na experiência do cliente.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://placehold.co/600x400/a78bfa/ffffff?text=Nossa+Equipe"
              alt="Imagem da equipe da assessoria digital"
              className="w-full h-auto rounded-xl shadow-lg"
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
