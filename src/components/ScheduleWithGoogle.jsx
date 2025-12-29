// src/components/ScheduleWithGoogleEmbed.jsx
import React from "react";

function ScheduleWithGoogleEmbed() {
  return (
    <section id="schedule" className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-metallic-purple text-gray-100">
      <div className="container mx-auto px-4 text-center max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Agende uma reunião conosco</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Tem um projeto em mente, dúvida ou quer uma análise personalizada para
          o seu negócio em Viçosa? Escolha o melhor horário para conversar
          diretamente com a nossa equipe usando a agenda abaixo.
        </p>
      </div>

      {/* Container para o iframe sem fundo e cor do tema escuro */}
      <div className="max-w-4xl w-full rounded-xl shadow-2xl bg-metallic-purple-dark text-gray-100 p-6 flex flex-col items-center text-center">
        <p className="mb-4">Escolha um horário para conversar conosco. O agendamento será aberto no Google Calendar.</p>
        <a
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_MpfJrNnqcsadZ7t96SjV2FyVLASGBXabDBe5_ekdvNfmBJr88FOrgas0uVU56xp_pwikVUDx?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar no Google Calendar (abre em nova aba)"
          className="mt-2 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
        >
          Agendar no Google Calendar
        </a>
      </div>
    </section>
  );
}

export default ScheduleWithGoogleEmbed;
