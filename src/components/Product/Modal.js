import React, { useState } from 'react'
import {Carouselimage} from './Carouselimage';
import "./Modal.css"
 const Modal = ({toggleModal}) => {
   
  return (
    <div className='modal'>
       <div className='modal-content'>
<Carouselimage toggleModal={toggleModal}></Carouselimage>
       </div>

    </div>
  )
}
export default Modal;