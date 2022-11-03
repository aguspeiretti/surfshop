import React from 'react'
import NavBarDark from '../NavBarDark/NavBarDark'
import Products from '../Products/Products'
import "./shop.css"

function Shop() {
  return (
    <>
    
    <div className='shopContainer'>
      <div className='shopContenido'>
          <div className='shopTitulo'>
            <h1>"NEVER DRIVE AWAY FROM GOOD SURF."</h1>
          </div>
          <div className='shopBox'>
            <Products />
          </div>  
      </div>
    
    </div>
    
    
    
    </>
    
  )
}

export default Shop