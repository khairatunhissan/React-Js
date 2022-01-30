//create
//provider
// usage
import {createContext,useState} from 'react'

export const BookContext=createContext()

export function BookProvider(props){
    const [books, setBooks] = useState([
        { name: "React", price: 12, book_image: "./assets/react.jpg" },
        { name: "DATA structure", price: 120, book_image: "./assets/cv.jpg" },
        { name: "Intro", price: 45, book_image: "./assets/will.jpg" },
        { name: "DBMS", price: 20, book_image: "./assets/geo.jpg" },
      ]);


return(
    <BookContext.Provider value={[books,setBooks]}>
        {props.children}
    </BookContext.Provider>
)
}