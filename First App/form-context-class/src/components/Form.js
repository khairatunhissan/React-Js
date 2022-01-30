import React, { useState, useContext, useRef } from "react";
import { useEffect } from "react";
import { BookContext } from "./BookContext";

function Form() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
 const [books, setBooks] = useContext(BookContext);
 function handleName(e){
        setName(e.target.value.toUpperCase());
     }
     function handlePrice(e){
       setPrice(e.target.value);
     }

     function handleSubmit(e) {
        e.preventDefault();
        setBooks((previousBooks)=>[...previousBooks,{name:name,price:price}])
        setName('')
        setPrice('')
     }
    
  return ( 
      <form onSubmit={handleSubmit}>
          <label>
          Name
              <input type="text" value={name} onChange={handleName}/>
                  
              
          </label><br/>
          <label>
          Price
              <input type="text" value={price} onChange={handlePrice}/>
                  
            
          </label><br/>
          <button type="submit">Add</button><br/>
      </form>
   );
}

export default Form;