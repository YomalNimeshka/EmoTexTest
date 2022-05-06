import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './chatbotStyle.css'

function Body(props) {
    const [emoData, setdata] = useState("");
    const [botRes, setBotres] = useState("");
    const [userInput, setUserInput] = useState("");
    const [chat, setChat] = useState([]);
    
    const fetchData = async (e) => {
        e.preventDefault();
        setUserInput(emoData);
        const response = await fetch("http://localhost:5000/", {
            method:'POST', 
            headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, 
            body:  JSON.stringify({
                emoData
            } )
        })
        
        const json = await response.json();
        const jsonData = json.data;
        setBotres(json.data);

        let ch=[];
        ch.push({from:'Our', msag: emoData});
        ch.push({from:'cb', msag: jsonData});
        setChat(ch)
        console.log("chat",chat);
        setdata("");

    };

    return (
        <div className="container">
            <div className="message_section" >
                <div className="title">
                    <h4>Conversation </h4>
                </div>
                <div className="chat_bot_intial">
                    Tell me how your day was today!
                </div>
                {
                    chat.map((msg) => {
                        if(msg.from == 'cb'){
                            return <div className="chat_bot delay">
                                    {msg.msag} 
                                </div>
                        }
                        else{
                            return <div className="chat_user" >
                                    {msg.msag}
                                </div>
                        }
                    })
                }

                {/* <p>User Input : {userInput} </p>
                <p> Bot Response : {botRes}</p> */}
            </div>
            <div className="bottom_wrapper clearfix">
                <form onSubmit={(e) => fetchData(e)}>
                    <div className="user_input_wrapper">
                        <input type='text' onChange={(e) => setdata(e.target.value)} value={emoData} 
                            className='user_input'
                            placeholder="Type how your day was today..."
                            />
                    </div>
                    <div className="send_input">
                        <button type='submit' className="submit_button" >
                            <div className="text">
                                Send
                            </div>
                            
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );  
}

export default Body;