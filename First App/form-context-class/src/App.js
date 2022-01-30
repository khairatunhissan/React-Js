import React from 'react';
import './App.css';
import Form from './components/Form';
import BookList from './components/BookList'
import Navbar from './components/Navbar';
import { BookProvider } from './components/BookContext';
import Counter from './components/Counter';

function App() {
  return (
    <BookProvider>
    <div className="App">
      <Navbar/>
     <Form/>
     <BookList/>
     <Counter/>
     </div>
    
   </BookProvider>
  );
}

export default App;