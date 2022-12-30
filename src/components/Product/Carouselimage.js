import React from 'react'
import {useState} from "react"
import "./Carouselimage.css"
import product1 from "../../images/image-product-1-thumbnail.jpg"
import product2 from "../../images/image-product-2-thumbnail.jpg"
import product3 from "../../images/image-product-3-thumbnail.jpg"
import product4 from "../../images/image-product-4-thumbnail.jpg"
import left from "../../images/icon-previous.svg"
import rigth from "../../images/icon-next.svg"
 export const Carouselimage = ({toggleModal}) => {
 const carouselimages=[product1,product2,product3,product4]
 const[currentIndex,setCurrentIndex]=useState(0);
const slideStyles={
  width:"100%",
  height:"100%",
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundImage:`url(${carouselimages[currentIndex]})`,
}
const previousStyles={
backgroundImage:`url(${left})`,
width:"50px",
height:"50px",
backgroundSize:"contain",
backgroundRepeat:"no-repeat",
position:"absolute",
top:"40%",
left:"1%",
transform:"translate(0,-50%)",
zIndex:"1",
cursor:"pointer",
}
const nextStyles={
  backgroundImage:`url(${rigth})`,
  width:"50px",
  height:"50px",
  backgroundSize:"contain",
  backgroundRepeat:"no-repeat",
  position:"absolute",
  top:"40%",
  left:"96%",
  transform:"translate(0,-50%)",
  zIndex:"1",
  cursor:"pointer",
}
let gotoPrevious=()=>{

  const isFirstSlide=currentIndex===0;
  
  const newIndex=isFirstSlide ? carouselimages.length-1 :currentIndex-1;
setCurrentIndex(newIndex);

}
let gotoNext=()=>{
  const isLastSlide=currentIndex===carouselimages.length-1
  
  const newIndex=isLastSlide?0:currentIndex+1
setCurrentIndex(newIndex)
console.log(currentIndex)
}
  return (
    <div  className='carouselimages'>
     <div onClick={toggleModal} className='closebutton'></div>
 <div onClick={gotoPrevious} style={previousStyles}></div>  
<div style={slideStyles}></div>
<div  onClick={gotoNext} style={nextStyles}></div> 
    </div>
  )
}
