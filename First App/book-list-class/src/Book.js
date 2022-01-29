import React, { useState } from 'react';

import './Book.css'

const Book = (props) => {
    const[vote_count, setVoteCount]=useState(props.votes)
    const likeHandler=(e)=>{
        //setVoteCount(vote_count+1)
        props.sortAfterClick(props.id)
    }
    
    return ( 
        <div className='book'>
            <img className='book__image' src={props.img_url} alt=""/>
            <h2>Name:{props.name} </h2>
            <p>Description:{props.desc} </p>
            <span>Price:{props.price}</span><br/>
            <span className='vote_count'>Likes:{props.votes}</span>
            <div>
                <img onClick={likeHandler} className="upvote_img" src='assests/upvote.jpg'/>
            </div>    
         </div>
     );
}
 
export default Book;