// src/components/ScheduleWithGoogleEmbed.jsx
import React from "react";

function ScheduleWithGoogleEmbed({ theme }) {
  return (
    <section
      id="schedule"
      className={`min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 text-center max-w-3xl mb-12">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Agende uma reunião conosco
        </h2>
        <p
          className={`text-lg leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Tem um projeto em mente, dúvida ou quer uma análise personalizada para
          o seu negócio em Viçosa? Escolha o melhor horário para conversar
          diretamente com a nossa equipe usando a agenda abaixo.
        </p>
      </div>

      {/* Container para o iframe sem fundo e cor do tema escuro */}
      <div className="max-w-4xl w-full rounded-xl shadow-2xl overflow-hidden bg-white text-black">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_MpfJrNnqcsadZ7t96SjV2FyVLASGBXabDBe5_ekdvNfmBJr88FOrgas0uVU56xp_pwikVUDx?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          title="Agendamento Google Calendar"
          scrolling="no"
        />
      </div>
    </section>
  );
}

export default ScheduleWithGoogleEmbed;
