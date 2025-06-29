import React from "react";

function Contact({ theme }) {
  return (
    <section
      id="contact-page"
      className={`min-h-screen flex items-center justify-center ${
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
          Fale Conosco
        </h2>
        <p
          className={`text-lg leading-relaxed max-w-3xl mx-auto mb-10 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Tem alguma dúvida, projeto em mente ou quer uma análise gratuita para
          o seu negócio em Viçosa? Preencha o formulário abaixo ou entre em
          contato pelos nossos canais.
        </p>

        <div className="max-w-xl mx-auto p-0 rounded-xl shadow-2xl overflow-hidden bg-white text-black">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdRDx_Zzb1n_U6IMZVq5WoQeK_Lg17vM9w14vpoRQwk_l00aA/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="w-full"
            title="Formulário de Contato"
          >
            Carregando…
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
