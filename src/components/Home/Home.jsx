import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

function Home() {
  return (
    <div className='homeContainer'>
        <div className='homeTitle'>
            <h1>SURF SHOP AND SCHOOL</h1>
            <h2>YOU CANT STOP DE WAVES BUT YOU CAN LEARN TO SURF</h2>
            <Link to={"/services"}><button>SHOW ME</button></Link>
        </div>
        <div className='redes' >
            <div className='iconos'>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-tiktok"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
        
        </div>
    </div>
    
  )
}

export default Home