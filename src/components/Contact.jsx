import React from "react";

function Contact() {
  return (
    <section id="contact-page" className="min-h-screen flex items-center justify-center bg-metallic-purple text-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100">Fale Conosco</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center md:text-justify mb-10 text-gray-300">
          Tem alguma dúvida, projeto em mente ou quer uma análise gratuita para
          o seu negócio em Viçosa? Preencha o formulário abaixo ou entre em
          contato pelos nossos canais.
        </p>

        <div className="max-w-xl mx-auto p-6 rounded-xl shadow-2xl bg-metallic-purple-dark text-gray-100">
          <p className="mb-4 text-center text-gray-300">Nosso formulário de contato está disponível externamente. Clique no botão abaixo para abrir e preencher com segurança.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdRDx_Zzb1n_U6IMZVq5WoQeK_Lg17vM9w14vpoRQwk_l00aA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors"
            >
              Abrir Formulário
            </a>
            <a
              href="https://wa.me/5531971531429?text=Olá,%20gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-colors"
            >
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
