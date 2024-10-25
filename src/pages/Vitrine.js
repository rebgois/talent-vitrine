import { useState, useEffect } from "react";
import MyChatBot from "../components/Chatbotify.js/Chatbotify";

const App = () => {
  const [showImages, setShowImages] = useState([false, false, false]);

  // Animação de entrada das imagens
  useEffect(() => {
    const timers = showImages.map(
      (_, index) =>
        setTimeout(() => {
          setShowImages((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 400) // Atraso progressivo
    );
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-200 p-6">
      {/* Imagem Principal */}
      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-xl mb-8 transform hover:scale-105 transition-all duration-300">
        <img
          src="https://via.placeholder.com/1200x600"
          alt="Imagem Principal"
          className="w-full object-cover"
        />
      </div>

      {/* Descrição */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4">
          Transforme Suas Ideias em Realidade
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore nossos serviços de excelência e leve seu negócio para o
          próximo nível. Estamos aqui para fazer suas ideias acontecerem.
        </p>
      </div>

      {/* Imagens com Animação */}
      <div className="flex space-x-6 mt-4">
        {[
          "https://via.placeholder.com/100",
          "https://via.placeholder.com/100",
          "https://via.placeholder.com/100",
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            className={`w-24 h-24 rounded-full border-4 border-white shadow-lg transform transition-all duration-500 ${
              showImages[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          />
        ))}
      </div>

      {/* Botão "Contrate Agora" */}
      <button
        className="mt-12 px-10 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white 
        text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 
        transition-all duration-300 ease-in-out focus:outline-none"
      >
        Contrate agora
      </button>
      <div className="fixed bottom-4 right-4">
        <MyChatBot />
      </div>
    </div>
  );
};

export default App;
