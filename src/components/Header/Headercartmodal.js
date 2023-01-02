import React, { useState } from "react";
import "./Headercartmodal.css";
import thumbnail from "../../images/image-product-1-thumbnail.jpg";
import remove from "../../images/icon-delete.svg"
import { ButtonOrange } from "../Product/ButtonOrange";
export const Headercartmodal = ({discountprice,cartitems,setToplamCartTutar,toplamcarttutar,count,removeitem}) => {
 
  let buttonHeaderText="Checkout"
  return (
    <div className="headermodal">
      <div className="header-modal-full">
        <h3>Cart</h3>
        <hr></hr>
      {count===0?<p>Your Cart is Empty.</p>:  <div >
          <div className="header-modal-content">
          <img className="img-cart-min" src={thumbnail}></img>
          <div>
          <p >Fall Limited Edition Sneakers</p>
         <p>${discountprice}.00 x {cartitems} <strong>${toplamcarttutar}.00</strong></p>
            </div> 
            <div   onClick={removeitem} className="removecartimage">
            <img  src={remove}></img>
              </div> 
             
        </div>
        <div className="button-cart">
<ButtonOrange buttonHeaderText={buttonHeaderText}></ButtonOrange>
        </div> 
        </div>}
        
     
        
      </div>
    </div>
  );
};
