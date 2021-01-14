import React from 'react';
import './Starter.css';
import Background from './video/background.mp4';

const Starter = (props) => {
   
    return(
        <div className='starter-container'>
            <video autoPlay loop muted> 
                <source src={Background} type="video/mp4" />
            </video>
            <div className='starter-welcome'>
                <p className='starter-headline'>Welcome to Movie Awards app!</p>
                <p>Built for the Summer 2021 Shopify UX and Web Developer Challenge </p>
                <p>by Aleksandra Bystranowska-Takahashi</p>
            </div>
            <div className='starter-rules'>
                <p>You can Nominate 5 movies of your choice.</p>
                <p>If you wish to make changes, don't worry, your nomination list will be save, You can come back and make changes!</p>
                <button className='first-time-button' onClick={props.first}>Let's Vote!</button>
            </div>
        </div>
    )
}

export default Starter;