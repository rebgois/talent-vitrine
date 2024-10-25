// src/components/MyChatBot/MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("soft skills")) {
        this.actionProvider.handleSoftSkills();
      } else if (lowerCaseMessage.includes("hard skills")) {
        this.actionProvider.handleHardSkills();
      } else if (lowerCaseMessage.includes("projetos")) {
        this.actionProvider.handleProjetos();
      } else {
        const defaultMessage = this.actionProvider.createChatBotMessage(
          "Desculpe, não entendi. Por favor, escolha uma das opções.",
          { widget: "options" }
        );
        this.actionProvider.addMessageToState(defaultMessage);
      }
    }
  }
  
  export default MessageParser;
  