import { useState, useEffect } from "react";
import rebeca from "../assets/main-box-bg/rebeca.PNG";
import MyChatBot from "../components/MyChatBot/Chatbotify";
import addCarreira from '../assets/telas-feitas/addCarreira.jpg';
import appFacilitador from '../assets/telas-feitas/appFacilitador.jpg';
import praticas from '../assets/telas-feitas/praticas.jpg';
import login from '../assets/telas-feitas/login.jpg';
import minhasHab from '../assets/telas-feitas/minhasHab.jpg';

const Vitrine = () => {
  const images = [addCarreira, appFacilitador, praticas, login, minhasHab];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-200 p-6">
      
      {/* Menu Superior Fixo Centralizado */}
      <nav className="fixed top-0 left-0 w-full bg-[#0D5E9F] shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 items-center space-x-8">
            <a 
              href="https://api.whatsapp.com/send?phone=5541997373413&text=Parabens,%20Rebeca!%20Voc%C3%AA%20foi%20selecionada!" 
              className="text-white hover:text-gray-300 font-semibold transition"
            >
              Contato
            </a>
            <a 
              href="https://www.linkedin.com/in/rebecagoismachado" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-300 font-semibold transition"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/rebgois" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-300 font-semibold transition"
            >
              GitHub
            </a>
            <a 
              href="/curriculo.pdf" 
              download="Curriculo_Rebeca.pdf" 
              className="text-white hover:text-gray-300 font-semibold transition"
            >
              Currículo
            </a>
          </div>
        </div>
      </nav>

      {/* Título e Subtítulo */}
      <div className="text-center mt-28 mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Rebeca Gois
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 mt-2">
          Desenvolvedora Front-End
        </h2>
      </div>

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
          Vamos transformar juntos?
        </h1>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
          UX que faz a diferença.
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Algumas das telas já desenvolvidas:
        </p>
      </div>

      {/* Imagens com Efeito e Responsividade */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            className={`w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-lg shadow-lg border-4 border-white object-cover transform transition-all duration-1000 ${
              index === visibleIndex ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
        ))}
      </div>

      {/* Botão "Contrate Agora" */}
      <a
        href="https://api.whatsapp.com/send?phone=5541997373413&text=Parabens,%20Rebeca!%20Voc%C3%AA%20foi%20selecionada!"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white 
        text-base md:text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 
        transition-all duration-300 ease-in-out focus:outline-none"
      >
        Contrate agora
      </a>

      {/* Chatbot */}
      <MyChatBot />
    </div>
  );
};

export default Vitrine;
