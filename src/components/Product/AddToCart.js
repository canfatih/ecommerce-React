import React from 'react'
import "./AddToCart.css"
import { ButtonOrange } from './ButtonOrange'
import { Radiobutton } from './Radiobutton'
export const AddToCart = ({SetCount,count,productheadermin,discountprice,price,productheadermax,productcontent,changebadgestyle}) => {
  return (
    <div className='addtocartcomp'>
<h4>{productheadermin}</h4>
<h1>{productheadermax}</h1>
<p>{productcontent}</p>
<div className='pricediv'>
<h1>{discountprice} </h1>
<small >50%</small>
</div>
<h2>{price}</h2>
<div className='addtocartbuttons'>
    <Radiobutton SetCount={SetCount} count={count}></Radiobutton>
    <ButtonOrange changebadgestyle={changebadgestyle}></ButtonOrange>
</div>
    </div>
  )
}
