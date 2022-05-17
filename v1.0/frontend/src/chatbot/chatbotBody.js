import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './chatbotStyle.css'


function Body(props) {
    const [emoData, setdata] = useState("");
    const [botRes, setBotres] = useState("");
    const [userInput, setUserInput] = useState("");
    const [chat, setChat] = useState([]);
    const [chatbotRes, setChatbotRes]= useState([{id:"1", type:"botResponse", message:"Tell me how your day was today"}]);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const fetchData = async (e) => {
        e.preventDefault();
        setUserInput(emoData);

        setdata("");
        chatbotRes.push({id:"2", message: emoData, type:"userResponse"})

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

        setChatbotRes([...chatbotRes, {id:"2", message:json.data, type:"botResponse"}])


    };

    return (
        <div className="container">
            <div className="message_section" >
                <div className="title">
                    <h4>Today's {date}</h4>
                </div>
                <div className="scroll">
                {
                    chatbotRes.map((data, index)=> {
                        return (data.type === "botResponse" ?
                        <div className="chat_bot delay">
                            {data.message} 
                        </div>
                        :
                        <div className="chat_user" >
                            {data.message}
                        </div>
                        )
                    })
                }
                </div>
                

            </div>
            <div className="bottom_wrapper clearfix">
                <form onSubmit={(e) => fetchData(e)}>
                    <div className="user_input_wrapper">
                        <input required='true' type='text' spellCheck='true' onChange={(e) => setdata(e.target.value)} value={emoData} 
                            className='user_input'
                            placeholder="Type how your day was today..."
                            />
                    </div>
                    <div className="send_input">
                        <button type='submit' className="submit_button" >
                            <img className="send-image" src={process.env.PUBLIC_URL+"send.png"} />
                            {/* <div className="text">
                                Send
                            </div> */}
                            
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );  
}

export default Body;