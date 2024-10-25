// src/components/MyChatBot/Options.js
import React from "react";

const Options = ({ flow }) => {
  const handleOptionClick = (option) => {
    let message = "";
    switch (option) {
      case "softSkills":
        message = "Soft Skills:\n- Comunicação\n- Trabalho em equipe\n- Adaptabilidade\n- Liderança";
        break;
      case "hardSkills":
        message = "Hard Skills:\n- JavaScript\n- HTML/CSS\n- Node.js\n- PostgreSQL";
        break;
      case "projetos":
        message = "Projetos:\n- Gerenciamento de Usuários\n- Mobile com Expo\n- API REST\n- Chatbots";
        break;
      default:
        message = "Opção inválida.";
    }
    flow.addMessage({ type: "message", content: message });
    flow.addMessage({
      type: "widget",
      widgetName: "options",
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <button onClick={() => handleOptionClick("softSkills")}>
        Ver Soft Skills
      </button>
      <button onClick={() => handleOptionClick("hardSkills")}>
        Ver Hard Skills
      </button>
      <button onClick={() => handleOptionClick("projetos")}>
        Ver Projetos
      </button>
    </div>
  );
};

export default Options;
