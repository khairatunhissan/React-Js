import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Navbar from './components/Navbar'

import './App.css';
import {BrowserRouter as Router,Routes,Route,Switch } from 'react-router-dom'
import Error
 from './components/Error';
function App() {
  return (

    <> 
    <Router>
    <Navbar/>
    
      <Switch>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
     <Route exact path="/services" element={<Services/>}/>
      <Route element={<Error/>}/>
      </Switch>
    
  </Router>
  </>

  )
}

export default App;
