// src/components/MyChatBot/ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleSoftSkills = () => {
      const message = this.createChatBotMessage(
        "As Soft Skills de Rebeca são:\n- Comunicação\n- Trabalho em equipe\n- Adaptabilidade\n- Liderança.",
        { widget: "options" } // Mostra as opções novamente
      );
      this.addMessageToState(message);
    };
  
    handleHardSkills = () => {
      const message = this.createChatBotMessage(
        "As Hard Skills de Rebeca são:\n- JavaScript / React\n- HTML / CSS\n- Node.js / Express\n- Banco de Dados (PostgreSQL).",
        { widget: "options" }
      );
      this.addMessageToState(message);
    };
  
    handleProjetos = () => {
      const message = this.createChatBotMessage(
        "Os Projetos de Rebeca incluem:\n- Sistema de Gerenciamento de Usuários\n- Aplicativo Mobile com Expo\n- API RESTful com Node.js\n- Integração com Chatbots.",
        { widget: "options" }
      );
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  