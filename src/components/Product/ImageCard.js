import React, { useState } from 'react'
import "./ImageCard.css"
import productbir from '../../images/image-product-1.jpg'
import productiki from "../../images/image-product-2.jpg"
import productuc from "../../images/image-product-3.jpg"
import productdort from "../../images/image-product-4.jpg"



export const ImageCard = ({toggleModal}) => {

    const[images,Setimages]=useState([productbir,productiki,productuc,productdort])
    
   
  return (
    <div className='imagecardcomp'>
    <div onClick={toggleModal} className='bigpicture'>
        <img className='big-image' src={productbir}></img>
    </div>
   
    <div className='smallpictures'>
{
  images.map((image,i)=>(
    <div key={i} className='imagediv'>
        <img  className='image' src={image}></img>
    </div>
  ))
}
    </div>
    
    </div>
  )
}
