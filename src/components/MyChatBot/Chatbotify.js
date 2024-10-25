import React from "react";
import Chatbot from "react-chatbotify";
import avatarBot from "../../assets/bot/bot-rebeca-bg-green.jpg";

const MyChatBot = () => {
  const flow = {
    start: {
      message: "Que bom que está aqui! 🚀💙 Vamos conhecer mais sobre mim e minhas habilidades? Escolha o que deseja explorar:",
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
      message: 
        "Minhas soft skills são meu diferencial! Sou comunicativa, colaborativa e extremamente adaptável aos desafios. Qual delas você quer saber mais?",
      options: ["Comunicação", "Trabalho em Equipe", "Adaptabilidade", "Voltar ao Início"],
      path: (params) => {
        switch (params.userInput) {
          case "Comunicação":
            return "comunicacao";
          case "Trabalho em Equipe":
            return "equipe";
          case "Adaptabilidade":
            return "adaptabilidade";
          default:
            return "start";
        }
      },
    },
    comunicacao: {
      message: 
        "Acredito que uma comunicação clara e empática é a base para construir relacionamentos e resolver problemas de forma eficaz.",
      options: ["Voltar ao Início"],
      path: () => "start",
    },
    equipe: {
      message: 
        "Colaborar é onde encontro minha motivação! Grandes projetos são resultado da união de talentos e perspectivas diversas.",
      options: ["Voltar ao Início"],
      path: () => "start",
    },
    adaptabilidade: {
      message: 
        "Aprender rápido e se adaptar a novos contextos são minhas marcas registradas. Estou sempre pronta para encarar mudanças e desafios!",
      options: ["Voltar ao Início"],
      path: () => "start",
    },
    hard_skills: {
      message: 
        "Combinando expertise técnica e curiosidade constante, desenvolvo soluções eficazes com as seguintes tecnologias. Qual delas quer explorar?",
      options: ["UX", "React", "JavaScript", "Voltar ao Início"],
      path: (params) => {
        switch (params.userInput) {
          case "UX":
            return "ux_skill";
          case "React":
            return "react_skill";
          case "JavaScript":
            return "js_skill";
          default:
            return "start";
        }
      },
    },
    ux_skill: {
      message: 
        "É essencial que os projetos sejam intuitivos e utilizem estratégias compatíveis com o objetivo de cada página. Meu foco é desenvolver com essa perspectiva.",
      options: ["Voltar ao Início"],
      path: () => "start",
    },
    react_skill: {
      message: 
        "Adoro desenvolver interfaces dinâmicas e acessíveis com React, garantindo experiências incríveis para o usuário final. Uso bibliotecas como Material-UI e React Bootstrap.",
      options: ["Voltar ao Início"],
      path: () => "start",
    },
    js_skill: {
      message: 
        "Domino JavaScript para criar aplicações interativas e responsivas, otimizando a experiência do usuário com soluções eficientes.",
      options: ["Voltar ao Início"],
      path: () => "start",
    },
    projetos: {
      message: 
        "Tenho orgulho dos projetos que desenvolvi, como um sistema de gerenciamento de carreira com práticas para as micro-habilidades relacionadas a uma carreira específica. Cada desafio é uma nova oportunidade de crescimento!",
      options: ["Voltar ao Início"],
      path: () => "start",
    },
    motivacao: {
      message: 
        "Sou motivada por criar soluções que fazem a diferença na vida das pessoas e pela busca constante por aprendizado e inovação. Gosto de usar criatividade e flexibilidade.",
      options: ["Voltar ao Início"],
      path: () => "start",
    },
    pessoal: {
      message: 
        "Além do código, sou apaixonada por viajar, explorar novas culturas, praticar esportes como corrida e Stand Up Paddle, ler e nunca parar de aprender. Equilibrar a vida pessoal e profissional é essencial para mim!",
      options: ["Voltar ao Início"],
      path: () => "start",
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
      backgroundColor: "#0D5E9F",
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
