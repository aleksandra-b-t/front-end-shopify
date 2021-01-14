import React from 'react';
import 'Starter.css'

const Starter = () => {
   
    return(
        <div className='starter-container'>
            <div className='starter-welcome'>
                <p>Welcome to Movie Awards app!</p>
                <p>Built for the Summer 2021 Shopify UX and Web Developer Challenge </p>
                <p>by Aleksandra Bystranowska-Takahashi</p>
            </div>
            <div className='starter-rules'>
                <p>You can Nominate 5 movies of your choice.</p>
                <p>If you wish to make changes, don't worry, your nomination list will be save, You can come back and make changes!</p>
            </div>
        </div>
    )
}

export default Starter;