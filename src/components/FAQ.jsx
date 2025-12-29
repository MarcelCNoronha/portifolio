import React from "react";

const faqs = [
  {
    question: "O diagnóstico é realmente grátis?",
    answer: "Sim — sem compromisso. Enviamos 3 recomendações práticas por email em até 48h.",
  },
  {
    question: "Quanto tempo dura o diagnóstico?",
    answer: "Normalmente entregamos o relatório em até 48 horas após receber as informações necessárias.",
  },
  {
    question: "Com quais plataformas vocês trabalham?",
    answer: "Trabalhamos com Shopify, WooCommerce, Nuvemshop e com integrações de Google/Meta Ads e ferramentas de atendimento.",
  },
  {
    question: "Como recebo o checklist?",
    answer: "Você pode receber por email imediatamente ao solicitar ou abrir a versão para impressão/download.",
  },
];

function FAQ({ theme }) {
  return (
    <section id="faq" className={`py-12 ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}>
      <div className="container mx-auto px-4">
        <h3 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>Perguntas Frequentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f, idx) => (
            <div key={idx} className={`p-4 rounded-lg shadow-sm ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
              <p className="font-semibold mb-2">{f.question}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-justify">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { faqs };
export default FAQ;
