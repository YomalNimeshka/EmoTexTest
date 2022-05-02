import React, { useState, useEffect } from "react";
import bootstrap from 'bootstrap';

function Body(props) {

    const [emoData, setdata] = useState({
        emotion_res: ""
      });
    
      //useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/")
        .then((res) =>res.json()
        .then((data) => {
                // Setting a data from api
                setdata({
                    emotion_res: data.Emotion
                });
            })
        );
    //}, []); 
    console.log(emoData.emotion_res);

    return (
        <div class="container">
            <div style={{height:'75vh'}} >
                <h4>Messages Part </h4>
                <h4> Bot Response : {emoData.emotion_res}</h4>
            </div>
            <div style={{height:'20vh'}}>
                <form action='' method='POST'>
                    <input type='text' name='userTextInput' id='userTextInput'
                        class='form-control'
                        style={{width:'90%',float:'left'}}/>
                    <input type='submit' name='submit' style={{paddingLeft:'25px', paddingRight:'25px'}}/>
                </form>
            </div>
            
        </div>
    );  
}

export default Body;