import React, { useState } from "react";
import Chatbot from "react-chatbotify";
import avatarBot from "../../assets/bot/bot-rebeca-bg-green.jpg";

const MyChatBot = () => {
  const flow = {
    start: {
      message: "Que bom que chegou até aqui! <3 Sobre o que você quer saber mais de mim?",
      options: [
        "Minhas Soft Skills",
        "Hard Skills",
        "Projetos",
        "O que me motiva",
        "Me conhecer fora dos códigos",
      ],
      path: (params) => {
        switch (params.userInput) {
          case "Minhas Soft Skills":
            return "soft_skills";
          case "Hard Skills":
            return "hard_skills";
          case "Projetos":
            return "projetos";
          case "O que me motiva":
            return "motivacao";
          case "Me conhecer fora dos códigos":
            return "pessoal";
          default:
            return "start";
        }
      },
    },
    soft_skills: {
      message: "Minhas principais soft skills são comunicação eficaz, trabalho em equipe e adaptabilidade.",
      options: ["Comunicação", "Trabalho em equipe", "Adaptabilidade", "Voltar"],
      path: (params) => {
        switch (params.userInput) {
          case "Comunicação":
            return "comunicacao";
          case "Trabalho em equipe":
            return "equipe";
          case "Adaptabilidade":
            return "adaptabilidade";
          case "Voltar":
            return "start";
          default:
            return "soft_skills";
        }
      },
    },
    comunicacao: {
      message: "Acredito que comunicar ideias de forma clara e empática é essencial para um trabalho colaborativo.",
      path: "soft_skills",
    },
    equipe: {
      message: "Trabalhar em equipe me motiva porque acredito que grandes projetos são fruto de colaboração.",
      path: "soft_skills",
    },
    adaptabilidade: {
      message: "Sou uma pessoa que aprende rápido e se adapta a novos contextos com facilidade.",
      path: "soft_skills",
    },
    hard_skills: {
      message: "Tenho experiência em React, Node.js, SQL e testes automatizados.",
      options: ["React", "Node.js", "SQL", "Testes", "Voltar"],
      path: (params) => {
        switch (params.userInput) {
          case "React":
            return "react_skill";
          case "Node.js":
            return "node_skill";
          case "SQL":
            return "sql_skill";
          case "Testes":
            return "testes_skill";
          case "Voltar":
            return "start";
          default:
            return "hard_skills";
        }
      },
    },
    react_skill: {
      message: "Adoro trabalhar com React, especialmente criando componentes dinâmicos.",
      path: "hard_skills",
    },
    projetos: {
      message: "Tenho trabalhado em sistemas de gerenciamento e um chatbot de recrutamento.",
      path: "start",
    },
    motivacao: {
      message: "O que mais me motiva é criar soluções que impactem pessoas e o aprendizado contínuo.",
      path: "start",
    },
    pessoal: {
      message: "Fora dos códigos, sou alguém que gosta de viajar, ler e aprender coisas novas.",
      path: "start",
    },
  };
  

  const settings = {
    header: { title: "Rebeca", avatar: avatarBot },
    tooltip: { text: "Por que me contratar?" },
    botBubble: { simStream: true },
    chatButton: { icon: avatarBot },
    audio: { disable: true },
    voice: { disable: true },
    emoji: { disable: true },
    fileAttachment: { disable: true },
    chatHistory: {
      viewChatHistoryButtonText: "Carregar histórico",
      chatHistoryLineBreakText: "----- histórico do bate-papo -----",
    },
    chatInput: {
      enabledPlaceholderText: "Digite sua pergunta...",
    },
  };

  const styles = {
    chatButtonStyle: {
      size: 70,
      backgroundImage: `url(${avatarBot})`,
      backgroundColor: "0D5E9F#",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "50%",
    },
    tooltipStyle: {
      backgroundColor: "#0D5E9F",
      color: "white",
    },
    headerStyle: {
      backgroundColor: "#0D5E9F",
      color: "white",
    },
    botBubbleStyle: {
      backgroundColor: "#0D5E9F",
    },
    userBubbleStyle: {
      backgroundColor: "#138DD8",
    },
    chatInputAreaStyle: {
      color: "#138DD8",
    },
    notificationBadgeStyle: {
      backgroundColor: "#0D5E9F",
    },
  };

  return (
    <div>
      <Chatbot settings={settings} flow={flow} styles={styles} />
    </div>
  );
};

export default MyChatBot;
