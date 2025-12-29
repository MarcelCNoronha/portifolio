import React, { useEffect, useState } from "react";

function LeadForm({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
    // envia um email para você com os dados e abre a página do lead magnet
    const subject = encodeURIComponent("Download: Checklist - Lead Magnet");
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:contato@assessoriadigital.com.br?subject=${subject}&body=${body}`;
    setSubmitted(true);
    // abre a página do lead magnet
    setTimeout(() => {
      window.open("/lead-magnet.html", "_blank");
      setSubmitted(false);
      onClose();
      setName("");
      setEmail("");
    }, 700);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div role="dialog" aria-modal="true" aria-label="Formulário para baixar checklist" className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 z-10">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 dark:text-gray-300" aria-label="Fechar">✕</button>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Baixe o Checklist: 10 passos para vender online</h3>
        <p className="text-sm mb-4 text-gray-600 dark:text-gray-300 text-justify">Deixe seu email e enviarei o checklist por email, além de abrir a versão para download imediatamente.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block">
            <span className="text-sm text-gray-700 dark:text-gray-200">Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700 dark:text-gray-200">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2" />
          </label>

          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-3">
            <button type="submit" className="w-full sm:w-auto inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">Enviar e Baixar</button>
            <a href="/lead-magnet.html" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center inline-block bg-gray-200 text-gray-800 font-semibold py-2 px-3 rounded-full hover:bg-gray-300">Abrir versão para impressão</a>
          </div>
        </form>

        {submitted && <p className="mt-4 text-sm text-green-600">Obrigado! Enviando por email e abrindo o checklist...</p>}
      </div>
    </div>
  );
}

export default LeadForm;
