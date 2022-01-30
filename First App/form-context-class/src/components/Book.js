import './style.css'

function Book(props) {
    return ( 
        <div className='book'>
         
           <h3>{props.name}</h3>
           <p>{props.price}</p><br/>
        </div>
     );
}

export default Book;