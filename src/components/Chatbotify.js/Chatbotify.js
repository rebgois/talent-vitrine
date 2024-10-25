import React, { useEffect, useState } from "react";
import Chatbot, { useChatWindow } from "react-chatbotify";


const host = process.env.REACT_APP_API_HOST;

const MyChatBot = () => {
  const [alertMessage, setAlertMessage] = useState({ mensagem: "", tipo: "" });
  const [historico, setHistorico] = useState("");

    const styles = {
      chatButtonStyle: {
        size: 70,
        // backgroundImage: avatarBot, 
         backgroundColor: "#7cda89",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "50%",
      },
      tooltipStyle: {
        backgroundColor: '#7cda89',
        color: '#198754'
      },
      headerStyle: {
        backgroundColor: '#7cda89',
        color: 'white',
        backgroundImage: ''
      },
      sendButtonStyle: {
        backgroundColor: '#7cda89',
      },
      botBubbleStyle: {
        backgroundColor: '#7cda89',
      },
      userBubbleStyle: {
        backgroundColor: '#5a795e',
      },
      chatInputAreaStyle: {
        color: '#5a795e'
      },
      notificationBadgeStyle: {
        backgroundColor: '#7cda89',
      },
      fileAttachmentIconDisabledStyle: {
        backgroundImage: '',
      }

    };


  const getHistoricoData = () => {
    const HistoricoData = localStorage.getItem('rcb-history');
    const HistoricoDataString = JSON.stringify(HistoricoData);
    // console.log(HistoricoDataString);
    if (HistoricoDataString) {
      try {
        setHistorico(HistoricoDataString);
        console.log(JSON.parse(HistoricoDataString));
        return JSON.parse(HistoricoDataString);
      } catch (error) {
        console.error("Failed to parse history data:", error);
        return null;
      }
    }
    sessionDataHistory()
    return null;
  };

  
  function clearHistoricoData() {
    localStorage.removeItem('rcb-history');
  }

const sessionDataHistory = () => {
  sessionStorage.setItem('rcb-history', JSON.stringify(historico));
  const savedChatHistory = JSON.parse(sessionStorage.getItem('rcb-history'));
  console.log(savedChatHistory);
  return clearHistoricoData();
}
  const settings = {
    // general: { embedded: true }, 
    // chatHistory: { storageKey: "playground" }, NÃO RETIRAR AINDA
    // header: { title: 'Rebeca da Harve', avatar: avatarBot},
    tooltip: { text: 'Está com dúvidas?'},
    botBubble: { simStream: true },
    chatWindow: { showScrollbar: true },
    userBubble: { simStream: true },
    //chatButton: { icon: avatarBot},
    audio: {
      disable: true
    },
    voice: {
      disable: true
    },
    emoji: {
      disable: true, 
      icon: ''
    },
    fileAttachment: {
      disable: true
    },
    chatHistory: {
      viewChatHistoryButtonText: 'Carregar histórico',
      chatHistoryLineBreakText: '----- histórico do bate-papo -----'
    },

    chatInput: {
      enabledPlaceholderText: 'Digite sua pergunta..'
    }
   

  };

  const flow = {
    start: {
      message: "Oi! Eu sou a Rebeca, faço parte do time de tecnologia da Harve. Me conte, qual sua dúvida sobre esse exercício?",
      path: "ask",
    },
    ask: {
      message: async (params) => {
        // return handleUserInput(params.userInput); // Chama a função para lidar com a entrada do usuário
      },
      path: "ask",
    },
  };

  return (
    <div>
      <Chatbot settings={settings} flow={flow} styles={styles} />
    </div>
    
  );
};

export default MyChatBot;