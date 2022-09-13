import React from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"


import "./navbar.css"
import {ReactComponent as Logo} from "./logoLong.svg"

function navbar() {
   return (
      <>
         <nav id="navbar" className="">
            <div className="nav-wrapper">
               {/* <!-- Navbar Logo --> */}
               <Link to="/">
               <div className="logo">
                  {/* <!-- Logo Placeholder for Inlustration --> */}
                  <HashLink smooth to ="/#landing">
                  <Logo className="logo-svg"/>
                  </HashLink>
               </div>
               </Link>
               {/* <!-- Navbar Links --> */}
               <ul id="menu">
               <HashLink smooth to="/#about">
                  <li><a href="#about">Examples</a></li>
               </HashLink>
               <HashLink smooth to="/#why">
                  <li><a href="#use-cases">Use Cases</a></li>
               </HashLink>
               <HashLink smooth to ="/#team">
                  <li><a href="#team">Team</a></li>
               </HashLink>
               </ul>
            </div>
         </nav>


         {/* <!-- Menu Icon --> */}
         <div className="menuIcon toggle">
            <span className="icon icon-bars"></span>
            <span className="icon icon-bars overlay"></span>
         </div>


         <div className="overlay-menu">
            <ul id="menu">
               <li><a href="#home">Home</a></li>
               <li><a href="#services">Services</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#contact">Contact</a></li>
            </ul>
         </div>
      </>
   )
}

export default navbar