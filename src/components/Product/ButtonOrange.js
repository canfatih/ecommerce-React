import React from 'react'
import "./ButtonOrange.css"
import cart from "../../images/icon-cart.svg"
export const ButtonOrange = ({changebadgestyle}) => {
  return (
    <div onClick={changebadgestyle} className='buttonorangecomp'
    >
      <img src={cart}></img>
      <strong>Add to cart</strong>
    </div>
  )
}
