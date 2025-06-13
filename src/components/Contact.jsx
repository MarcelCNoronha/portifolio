import React from "react";

function Contact({ theme }) {
  return (
    <section
      id="contact-page"
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
          Fale Conosco
        </h2>
        <p
          className={`text-lg leading-relaxed max-w-3xl mx-auto mb-10 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Tem alguma dúvida, projeto em mente ou quer uma análise gratuita para o seu negócio em
          Viçosa? Preencha o formulário abaixo ou entre em contato pelos nossos canais.
        </p>

        <div
          className={`max-w-xl mx-auto p-8 rounded-xl shadow-2xl ${
            theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
          }`}
        >
          <form className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className={`block text-left text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome completo"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-left text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="telefone"
                className={`block text-left text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Telefone (WhatsApp):
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(XX) XXXXX-XXXX"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="empresa"
                className={`block text-left text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Nome da Empresa:
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                placeholder="Sua Empresa Ltda."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="servico"
                className={`block text-left text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Qual serviço você busca?
              </label>
              <select
                id="servico"
                name="servico"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Selecione um serviço</option>
                <option value="landing-page">Criação de Landing Page</option>
                <option value="email-institucional">Email Institucional</option>
                <option value="google-meu-negocio">Google Meu Negócio</option>
                <option value="anuncios">Anúncios Patrocinados</option>
                <option value="seo">SEO On-Page</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className={`block text-left text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Mensagem:
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="4"
                placeholder="Descreva suas necessidades..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out transform"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p
            className={`text-lg font-semibold mb-4 ${
              theme === "dark" ? "text-gray-200" : "text-gray-900"
            }`}
          >
            Ou entre em contato diretamente:
          </p>
          <p
            className={`text-xl mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            📞{" "}
            <a href="tel:+5531XXXX-XXXX" className="hover:underline text-blue-600">
              (31) 97153-1429
            </a>
          </p>
          <p
            className={`text-xl mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            📧{" "}
            <a href="mailto:contato@suaassessoria.com.br" className="hover:underline text-blue-600">
              contato@assessoriadigitalvicosa.com.br
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;