import { Link } from "react-router-dom";

function Header() {
  return (
    // O elemento <nav> agora tem classes Tailwind para fundo, padding e sombra.
    // Você pode ajustar as cores (ex: bg-blue-600, bg-gray-900) para combinar com seu tema.
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nome da Empresa */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300">
          Assessoria Digital
        </Link>

        {/* Lista de Navegação */}
        <ul className="flex space-x-6"> {/* flex e space-x-6 para espaçamento */}
          <li>
            <Link 
              to="/" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              to="/sobre" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/projetos" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link 
              to="/contato" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
