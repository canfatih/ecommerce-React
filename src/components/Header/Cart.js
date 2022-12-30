import React from 'react'
import cart from "../../images/icon-cart.svg"
import "./Cart.css"
export const Cart = ({count,cartstyle,cartitems,toggleHeaderModal}) => {
  return (
    <div  onClick={toggleHeaderModal}>
      <div className='cart-with-badge'>
        <img  className='cart' src={cart}></img>
       {count===0 ? null:<div className={cartstyle}>{cartitems}</div>}
      </div>
        
    </div>
  )
}
