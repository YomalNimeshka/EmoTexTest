import React from 'react';
import './chatbotStyle.css'

function Card(props) {
    return (
        <div className='info-card-container'>
            <div className='info-card-header'>
                <img alt='list-icon-alt' className='info-card-icon' src={process.env.PUBLIC_URL+"icons-bot-64.png"} />
                <h5 className='info-card-title'>Some helpful things to remember </h5>
            </div>
            <div className='info-card-body'>
                <div className='info-card-message'>
                    <div className='info-card-message-icon'>
                        <img alt='list-icon-alt' className='list-icon' src={process.env.PUBLIC_URL+"icons8-bot-64-list.png"} />
                    </div>
                    <div className='info-card-message-text'>
                        Don't be afraid to ask help if needed
                    </div>
                </div>
                <div className='info-card-message'>
                    <div className='info-card-message-icon'>
                        <img alt='list-icon-alt' className='list-icon' src={process.env.PUBLIC_URL+"icons8-bot-64-list.png"} />
                    </div>
                    <div className='info-card-message-text'>
                        Embrace your emotion
                    </div>
                </div>
                <div className='info-card-message'>
                    <div className='info-card-message-icon'>
                        <img alt='list-icon-alt' className='list-icon' src={process.env.PUBLIC_URL+"icons8-bot-64-list.png"} />
                    </div>
                    <div className='info-card-message-text'>
                        Sometimes take a deep breath
                    </div>
                </div>
                <div className='info-card-message'>
                    <div className='info-card-message-icon'>
                        <img alt='list-icon-alt' className='list-icon' src={process.env.PUBLIC_URL+"icons8-bot-64-list.png"} />
                    </div>
                    <div className='info-card-message-text'>
                        Self-care is very important !!
                    </div>
                </div>
                <div className='info-card-message'>
                    <div className='info-card-message-icon'>
                        <img alt='list-icon-alt' className='list-icon' src={process.env.PUBLIC_URL+"icons8-bot-64-list.png"} />
                    </div>
                    <div className='info-card-message-text'>
                        Your sleep is important much as your food
                    </div>
                </div>
                <div className='info-card-message'>
                    <div className='info-card-message-icon'>
                        <img alt='list-icon-alt' className='list-icon' src={process.env.PUBLIC_URL+"icons8-bot-64-list.png"} />
                    </div>
                    <div className='info-card-message-text'>
                        Talk to people you are close to
                    </div>
                </div>
                <div className='info-card-message'>
                    <div className='info-card-message-icon'>
                        <img alt='list-icon-alt' className='list-icon' src={process.env.PUBLIC_URL+"icons8-bot-64-list.png"} />
                    </div>
                    <div className='info-card-message-text'>
                        Keep a positive mindset ALWAYS !!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;