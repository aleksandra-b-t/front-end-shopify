import React from 'react'

const Count = (props) => {
    if(props.movies.length === 5){ 
        return (
             <div className='count-container'>
                <p className='count'>Thank you for nomimation!</p>
            </div>
        )} else {
            return (
                <div className='count-container'>
                    <p className='count'> Only {5 - props.movies.length} nomination left!</p>
                </div>
            )
        }  
}

export default Count
