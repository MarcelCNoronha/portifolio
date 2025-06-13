import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); 
      return newTheme;
    });
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Home theme={theme} />{" "}
      </main>
      <Footer theme={theme} />
      <a
        href="https://wa.me/31971531429?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center text-xl md:text-2xl"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          fill="none"
        >
          <g>
            <path
              fill="#25D366"
              d="M128.1 0C57.3 0 0 57.3 0 128.1c0 22.6 5.9 44.6 17.1 63.9L0 256l66.6-17.4c18.6 10.2 39.5 15.6 61.5 15.6 70.8 0 128.1-57.3 128.1-128.1S198.9 0 128.1 0z"
            />
            <path
              fill="#FFF"
              d="M195.1 161.7c-2.5-1.2-14.6-7.2-16.9-8.1-2.3-.8-4-.1-5.5 1.7-1.6 1.8-6.3 7.6-7.7 9.1-1.4 1.6-2.9 1.8-5.3.6-2.4-1.2-10.2-3.7-19.5-11.9-7.2-6.5-12-14.5-13.4-16.9-1.4-2.4-.1-3.7 1.1-4.8 1.1-1.1 2.4-2.8 3.5-4.1 1.2-1.3 1.6-2.3 2.4-3.8.8-1.6.4-3-0.2-4.2-.6-1.2-5.5-13.2-7.5-18.1-2-4.8-4.1-4.1-5.6-4.2-1.4-.1-3.1-.1-4.8-.1s-4.4.6-6.7 3.1c-2.3 2.5-8.7 8.5-8.7 20.6s8.9 24 10.2 25.6c1.2 1.6 17.6 26.8 43 37.6 6 .2 10.6.9 14.3-.6 2.2-.9 13.6-6.2 15.6-12.3.8-2.4.8-4.4.6-6.1-.1-1.6-2.2-2.6-4.7-3.8z"
            />
          </g>
        </svg>
      </a>
    </div>
  );
}

export default App;
