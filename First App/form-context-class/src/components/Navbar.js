import {useContext} from 'react'
import {BookContext} from './BookContext'
import "./style.css"
function Navbar() {

    const [books,setBooks]=useContext(BookContext)
    return ( 
        <div className='nav'>
          <h3>This is a book store with {books.length} books</h3>
        </div>
    );
}

export default Navbar;