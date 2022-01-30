import React, { useState, useContext, useRef } from "react";
import { BookContext } from "./BookContext";
import style from './Form.module.css'


function Form() {
  /*const [name, setName] = useState('');
  const [price, setPrice] = useState('');*/
 const [books, setBooks] = useContext(BookContext);
const nameRef=useRef()
const priceRef=useRef()


 /*function handleName(e){
        setName(e.target.value.toUpperCase());
     }
     function handlePrice(e){
       setPrice(e.target.value);
     }*/

     function handleSubmit(e) {
        e.preventDefault();
       // setBooks((previousBooks)=>[...previousBooks,{name:name,price:price}])
       let name_=nameRef.current.value
       let price_=priceRef.current.value
       setBooks((previousBooks)=>[...previousBooks,{name:name_,price:price_}])
       // setName('')
       // setPrice('')
       nameRef.current.value=""
       priceRef.current.value=""
     }
    
  return ( 
      <form className={style.form} onSubmit={handleSubmit}>
          <label className={style.control}>
          Name
             {/* <input type="text" value={name} onChange={handleName}/>*/}
               <input type="text" ref={nameRef}/>   
              
          </label><br/>
          <label className={style.control}>
          Price
             {/* <input  type="text" value={price} onChange={handlePrice}/>*/}
               <input type="text" ref={priceRef} />   
            
          </label><br/>
          <button className={style.button} type="submit">Add</button><br/>
      </form>
   );
}

export default Form;