import React from 'react'
import "./AddToCart.css"
import { ButtonOrange } from './ButtonOrange'
import { Radiobutton } from './Radiobutton'
export const AddToCart = ({SetCount,count,productheadermin,discountprice,price,productheadermax,productcontent,changebadgestyle}) => {
 let buttonAddToCarttext="Add To Cart"
  return (
    <div className='addtocartcomp'>
<h4>{productheadermin}</h4>
<h1>{productheadermax}</h1>
<p>{productcontent}</p>
<div className='pricediv'>
<h1>${discountprice}.00 </h1>
<small >50%</small>
</div>
<h2>{price}</h2>
<div className='addtocartbuttons'>
    <Radiobutton SetCount={SetCount} count={count}></Radiobutton>
    <div className='button-add-to-cart'>

    </div>
    
    <ButtonOrange buttonAddToCarttext={buttonAddToCarttext} changebadgestyle={changebadgestyle}></ButtonOrange>
</div>
    </div>
  )
}
