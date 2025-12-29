import React, { useEffect, useState } from "react";

function DiagnosticModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Solicitação de Diagnóstico - Assessoria Digital");
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nWhatsApp: ${phone}`);
    // Abre cliente de e-mail com mensagem pronta
    window.location.href = `mailto:contato@assessoriadigital.com.br?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setName("");
      setEmail("");
      setPhone("");
    }, 1200);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Formulário de Solicitação de Diagnóstico"
        className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 dark:text-gray-300"
          aria-label="Fechar"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Diagnóstico Gratuito de Presença Digital</h3>
        <p className="text-sm mb-4 text-gray-600 dark:text-gray-300 text-justify">Receba 3 recomendações práticas em até 48h — sem custo.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block">
            <span className="text-sm text-gray-700 dark:text-gray-200">Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700 dark:text-gray-200">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700 dark:text-gray-200">WhatsApp (com DDD)</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="5599XXXXXXXX"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2"
            />
          </label>

          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              type="submit"
              className="w-full sm:w-auto inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              Enviar por Email
            </button>
            <a
              href={`https://wa.me/5531971531429?text=${encodeURIComponent("Olá, gostaria de solicitar um diagnóstico gratuito de presença digital.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center inline-block bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors"
            >
              Enviar por WhatsApp
            </a>
          </div>
        </form>

        {submitted && <p className="mt-4 text-sm text-green-600">Obrigado! Abrindo seu cliente de email...</p>}
      </div>
    </div>
  );
}

export default DiagnosticModal;
