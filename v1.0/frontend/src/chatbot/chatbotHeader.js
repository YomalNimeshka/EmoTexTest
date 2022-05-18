import React from "react";
import './chatbotStyle.css'

function Header(){

    return(
        <div className="background">
            <div className="chat_header">
                <div className="app_header_icon">
                    {/* Bot icon by Icons8 */}
                    <img alt='header-icon-alt' src={process.env.PUBLIC_URL+"icons-bot-64.png"} />
                </div>
                <div className="app_header">
                    <h2 className="app_header_title">EmoTex</h2>
                </div>
            </div>
        </div>
    );
}
export default Header;