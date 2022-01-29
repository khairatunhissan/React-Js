import React, { Component, useState } from 'react';
import Book from './Book';


  
const BookList = () => {
    const book_lib = [
        {
          id: 1,
          name: "React",
          img_url:
            "https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY327_FMwebp_QL65_.jpg",
          desc: "This is an Intro to react",
          price: 49,
          votes: 13,
        },
        {
          id: 2,
          name: "Computer Vision",
          img_url:
            "https://m.media-amazon.com/images/I/61TKTkmD4FL._AC_UY327_FMwebp_QL65_.jpg",
          desc: "This is an Intro to Computer vision",
          price: 100,
          votes: 18,
        },
        {
          id: 3,
          name: "Will",
          img_url:
            "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg",
          desc: "This is a personal book",
          price: 49,
          votes: 16,
        },
      ];

      const [sortedBookList, setsortedBookList]=useState(
             book_lib.sort((a,b)=>{
                 return b.upvote-a.upvote
             })
      )
      const [renderedList,setrenderedList]=useState(null)
     

      

      const sortAfterClick=(id)=>{
          sortedBookList.map((book)=>{
              if(book.id===id){
                  book.votes=book.votes+1
              }})
              setsortedBookList(
                  sortedBookList.sort((a,b)=>{
                      return b.votes-a.votes
                  })
              )
              setrenderedList(
                sortedBookList.map((bk)=>(
                    <Book
                    key={bk.id}
                    id={bk.id}
                    name={bk.name}
                    img_url={bk.img_url}
                    desc={bk.desc}
                    price={bk.price}
                    votes={bk.votes}
                    sortAfterClick={sortAfterClick}
                    />
                  ))
              )
      }


   
    
      // book_lib[2].price = 52;
    
      // console.log(book_lib);
      return (
        <div>
          <h1>Book List</h1>
          {renderedList?
          renderedList:
          sortedBookList.map((bk)=>(
            <Book
            key={bk.id}
            id={bk.id}
            name={bk.name}
            img_url={bk.img_url}
            desc={bk.desc}
            price={bk.price}
            votes={bk.votes}
            sortAfterClick={sortAfterClick}
          />
      ))}
        </div>
      );
    }
 
export default BookList;