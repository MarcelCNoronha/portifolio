import React from "react";

// O componente agora recebe 'theme' como prop
function Footer({ theme }) {
  return (
    // Usa classes dinâmicas para o background e a cor do texto baseadas no tema
    <footer
      className={`py-8 shadow-lg ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      <div className="container mx-auto px-4 text-center text-sm">
        <div className="mb-4 text-center">
          <p
            className={`text-xl mb-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            📞{" "}
            <a
              href="tel:+5531XXXX-XXXX"
              className="hover:underline text-blue-600"
            >
              (31) 97153-1429
            </a>
          </p>
          <p
            className={`text-xl mb-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            📧{" "}
            <a
              href="mailto:contato@assessoriadigital.com.br"
              className="hover:underline text-blue-600"
            >
              contato@assessoriadigital.com.br
            </a>
          </p>
        </div>
        {/* Informações de Copyright */}
        <p className="mb-4">
          &copy; {new Date().getFullYear()}{" "}
          <strong
            className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            [Assessoria Digital]
          </strong>{" "}
          - Todos os direitos reservados.
        </p>

        {/* Links de Políticas */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            className={`hover:text-white transition-colors duration-200 ${
              theme === "dark"
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Política de Privacidade
          </a>
          <a
            href="#"
            className={`hover:text-white transition-colors duration-200 ${
              theme === "dark"
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Termos de Uso
          </a>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex justify-center space-x-4">
          {/* Ícone do LinkedIn */}
          <a
            href="https://www.linkedin.com/in/marcel-cardoso-de-noronha-dev/"
            className={`${
              theme === "dark"
                ? "text-gray-400 hover:text-blue-400"
                : "text-gray-600 hover:text-blue-600"
            } transition-colors duration-200`}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Ícone do GitHub */}
          <a
            href="https://github.com/MarcelCNoronha"
            className={`${
              theme === "dark"
                ? "text-gray-400 hover:text-blue-400"
                : "text-gray-600 hover:text-blue-600"
            } transition-colors duration-200`}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.088-.745.083-.73.083-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.3-.535-1.52.117-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.652 1.656.242 2.875.117 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.213 0 1.597-.015 2.88-.015 3.26 0 .32.21.693.825.578C20.565 21.799 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
