import React, { useState, useEffect } from "react";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import './App.css';
import Header from './chatbot/chatbotHeader';
import Body from "./chatbot/chatbotBody";

function App() {

/*
  const [data, setdata] = useState({
    name: "",
    age:""
  });

  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setdata({
                emotion: data.Emotion
            });
        })
    );
}, []); 

*/

  return (
    <div className="App">
      <Header/>
      <Body/>
      {/* <Chatbot 
        config={config} 
        actionProvider={ActionProvider} 
        messageParser={MessageParser}
      /> */}
      

      {/* <header className="App-header">
        <h1>React and Flask connection test</h1>
        
        <form action='' method='POST'>
          <p>Sentence to Enter = <input type="text" name="TextToWrite"/></p>
          <input type="submit" name="submit"/>
        </form>

        <p>Server emotion detected : {data.Emotion}</p>
      </header>  */}
    </div>
  );
}

export default App;
