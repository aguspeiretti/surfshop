import React from 'react'
import { Link } from "react-router-dom";
import "./navBarDark.css"
import logo from "../../images/favpng_logo-wind-wave.png"



function NavBarDark() {

 
  return (
    <>
   
    
    <div className='navContainerDark'>
       <Link to={"/"}> <img src={logo} alt="" /></Link>
        <div>
        <ul>
            <Link to={"/"}> <li>HOME</li> </Link>
            <Link to={"/About"}> <li>ABOUT</li> </Link>
            <Link to={"/Services"}> <li>SERVICES</li> </Link>
            <Link to={"/Shop"}> <li>SHOP</li> </Link>
            <Link to={"/Contact"}> <li>CONTACT</li> </Link>
            <i className="fa-brands fa-opencart"></i>
           
        </ul>
       
    </div>
    </div>
    
    </>
  )
}

export default NavBarDark