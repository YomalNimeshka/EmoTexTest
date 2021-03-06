import React, { useState, useEffect } from "react";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import './App.css';
import Header from './chatbot/chatbotHeader';
import Body from "./chatbot/chatbotBody";
import Card from "./chatbot/emotionInfoCard";

function App() {


  return (
    <div className="App">
      <Header/>
      <Body/>
      <Card/>
    </div>
  );
}

export default App;
