import React from 'react'
import "./css/style.css";
import {Link} from "react-router-dom"

//all images in header
import logo from "./images/logo.png";


const Nav= () =>{
    return(

     
      <header>
      <div className="container">
      <nav class="navbar navbar_custom navbar-expand-lg navbar-light">


          <div className="main_logo">
            <a class="navbar-brand" href="/">
              <img src={logo} alt={"logo"} />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarT"
            aria-controls="navbarT"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>


          
          <div class="collapse navbar-collapse menu" id="navbarT">
        <ul class="navbar-nav ml-auto">
          
         
         

          <li className="nav-item">
            <Link to="/" className="nav-link ">
                  Back to Home Page
              </Link>
            </li>
        </ul>

      </div>
        














        </nav>
      </div>
    </header>
   

        
  )
}

export default Nav;