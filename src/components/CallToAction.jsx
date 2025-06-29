import React from "react";

function CallToAction({ theme, title, description, buttonText, buttonLink }) {
  return (
    <div
      className={`p-8 my-4 rounded-xl shadow-md max-w-4xl mx-auto ${
        theme === "dark" ? "bg-blue-900" : "bg-blue-50"
      }`}
    >
      <h3
        className={`text-2xl font-bold mb-4 ${
          theme === "dark" ? "text-blue-300" : "text-blue-700"
        }`}
      >
        {title}
      </h3>
      <p className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        {description}
      </p>
      <a
        href={buttonLink}
        className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out transform"
      >
        {buttonText}
      </a>
    </div>
  );
}

export default CallToAction;
