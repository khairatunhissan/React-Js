import React, { useContext,useState } from 'react';
import Book from './Book'
import { BookContext } from './BookContext';

function BookList() {
    const[books,setBooks]=useContext(BookContext)
    
    return ( 
        <div>
          {books.map((book,index)=>(
              <Book 
              key={index}
              name={book.name}
              price={book.price}/>
          ))}
        </div>
     );
}

export default BookList;