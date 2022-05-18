import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './chatbotStyle.css'


function Body(props) {
    const [emoData, setdata] = useState("");
    //Array to save the bot responses and the user response
    const [chatbotRes, setChatbotRes]= useState([{id:"1", type:"botResponse", message:"Tell me how your day was today"}]);
    //This is to show the current date in  the UI
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const fetchData = async (e) => {
        e.preventDefault();

        setdata("");
        //Pushing the user response to the array so it can be displayed
        chatbotRes.push({id:"2", message: emoData, type:"userResponse"})

        //fetch call to call the flask api on the post method and get a response
        const response = await fetch("http://localhost:5000/", {
            method:'POST', 
            headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, 
            body:  JSON.stringify({
                emoData
            } )
        })
        
        const json = await response.json();
        //settting the response to the Array so it can be displayed
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
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );  
}

export default Body;