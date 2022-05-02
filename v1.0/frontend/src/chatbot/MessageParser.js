import React, { useState } from "react";
// function MessageParser(props) {
//     const [emotionData, setEmotionData] = useState("")
    
//     const getEmotionData = async (message) => {
//         console.log(message)
//         const lowercase = message.toLowerCase();
//         const jsonString ={emotionText : lowercase}
//         //console.log(JSON.stringify(jsonString))
//         if(lowercase.includes("friend")){
//             const response = await fetch('/', {
//                 method: 'POST',
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify(jsonString)
//             }) 
//             const json = await response.json()
//             setEmotionData(json.data)
        
//             props.actionProvider.respondToText(emotionData);
//         }
//     } 

//     /**
//      * 
//      * @param {string} message 
//      */
//     function parse(message) {
//         getEmotionData(message);
//     }
// }

//export default MessageParser;


class MessageParser {
    constructor(actionProvider){
        this.actionProvider = actionProvider;
        this.state = {
            emotionData: ""
        };
        this.userMessage = "";
        
        
    }

    parse(message) {
        const lowercase = message.toLowerCase();
        const jsonString ={emotionText : lowercase}
        //console.log(JSON.stringify(jsonString))
        if(lowercase.includes("friend")){
            fetch('/', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(jsonString)
            }).then(response => response.json())
            .then(data => this.setState({emotionData: data}));
            //this.setState({ EmotionResponse : data.Emotion})
            console.log(this.state.emotionData)
        }
        this.actionProvider.respondToText(this.state.emotionData);
    }

}

export default MessageParser;