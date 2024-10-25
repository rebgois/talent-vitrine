import { useState, useEffect } from "react";
import rebeca from "../assets/main-box-bg/rebeca.PNG";
import MyChatBot from "../components/MyChatBot/Chatbotify"; // Importando o chatbot

const Vitrine = () => {
  const [visible, setVisible] = useState([true, false, false]);

  // Alternar visibilidade das imagens em loop
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setVisible((prevVisible) =>
        prevVisible.map((_, index) => index === currentIndex)
      );
      currentIndex = (currentIndex + 1) % visible.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [visible.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-200 p-6">
      {/* Imagem Principal */}
      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-xl mb-8 transform hover:scale-105 transition-all duration-300">
        <img
          src={rebeca}
          alt="Background Vitrine de Talentos da Rebeca"
          className="w-full object-cover"
        />
      </div>

      {/* Descrição */}
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
          Transforme Suas Ideias em Realidade
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Explore nossos serviços de excelência e leve seu negócio para o
          próximo nível.
        </p>
      </div>

      {/* Imagens com Animação */}
      <div className="flex flex-wrap justify-center space-x-0 md:space-x-6 mt-4">
        {["https://via.placeholder.com/200", "https://via.placeholder.com/200", "https://via.placeholder.com/200"].map(
          (src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagem ${index + 1}`}
              className={`w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-lg border-4 border-white object-cover transform transition-all duration-1000 ${
                visible[index] ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            />
          )
        )}
      </div>

      {/* Botão "Contrate Agora" */}
      <button
        className="mt-12 px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white 
        text-base md:text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 
        transition-all duration-300 ease-in-out focus:outline-none"
      >
        Contrate agora
      </button>

      {/* Chatbot */}
      <MyChatBot />
    </div>
  );
};

export default Vitrine;
