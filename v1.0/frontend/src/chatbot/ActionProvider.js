class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage =createChatBotMessage;
        this.setState = setStateFunc;
    }

    respondToText = (emotionRes) => {
        

        const message = this.createChatBotMessage(emotionRes);
        this.addMessageToState(message);
    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
}

export default ActionProvider;