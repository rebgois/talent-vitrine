// src/components/MyChatBot/config.js
import Options from "./Options";

const config = {
  settings: {
    botName: "Rebeca",
    tooltip: { text: "Por que me contratar?" },
  },
  initialMessages: [
    {
      type: "message",
      content: "O que você quer saber sobre mim?",
      widget: "options",
    },
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
