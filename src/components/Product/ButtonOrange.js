import React from 'react'
import "./ButtonOrange.css"
import cart from "../../images/icon-cart.svg"
export const ButtonOrange = ({changebadgestyle,buttonAddToCarttext,buttonHeaderText}) => {

  return (
    <div onClick={changebadgestyle} className='buttonorangecomp'
    >
     
      <strong>{buttonAddToCarttext}{buttonHeaderText}</strong>
    </div>
  )
}
