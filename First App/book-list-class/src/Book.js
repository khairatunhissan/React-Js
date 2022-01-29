import React, { Component } from 'react';
import image1 from './images/img1.jpg'
const Book = (props) => {
    
    return ( 
        <div className='book'>
            <img className='book__image' src={props.img_url} alt=""/>
            <h2>Name:{props.name} </h2>
            <p>Description:{props.desc} </p>
            <span>Price:{props.price}</span>
        </div>
     );
}
 
export default Book;