import React from "react";

function CallToAction({ title, description, buttonText, buttonLink }) {
  return (
    <div className="p-8 my-4 rounded-xl shadow-md max-w-4xl mx-auto text-center bg-metallic-purple-dark">
      <h3 className="text-2xl font-bold mb-4 text-gray-100">{title}</h3>
      <p className="mb-6 text-gray-300">{description}</p>
      <a
        href={buttonLink}
        className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
      >
        {buttonText}
      </a>
    </div>
  );
}

export default CallToAction;
