import React from 'react';
import './App.css';


import "./css/style.css";
import TodoList from  './TodoList.js'
import Nav from './Nav.js';
import Banner from './Banner.js'
import "bootswatch/dist/materia/bootstrap.min.css"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import updateBook from './updateBook';




function App() {
  return (
  <Router>           
  
    <Nav/>
    <Banner/>


    <div className="col-md-12">
        <Route path="/" exact component={TodoList}/>
        <Route path="/mila/" exact component={updateBook}/>
      
       
 
    </div>


  </Router>
   
  );
}

export default App;
