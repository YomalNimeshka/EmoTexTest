import { createChatBotMessage } from "react-chatbot-kit";

const botName = 'EmoTex';

const config = { 
    botName: botName,  
    initialMessages: [
        createChatBotMessage(
            `Hi! I'm ${botName}. How was your day today?`)
    ]
};

export default config;