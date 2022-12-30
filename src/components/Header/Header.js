import React from 'react'
import "./Header.css"
import { Collections } from './Collections'
import { Men } from './Men'
import { Women } from './Women'
import { About } from './About'
import { Contact } from './Contact'
import { Cart } from './Cart'
import { User } from './User'
import { Headerlogo } from './Headerlogo'
import { MobilHeader } from './MobilHeader'

export const Header = ({count,cartstyle,cartitems,headermodal,toggleHeaderModal}) => {
  return (
    <div className='HeaderComp container '>
        <div className='mobilheader-logos'>
          <MobilHeader></MobilHeader>
          <Headerlogo></Headerlogo>  
        </div>
        <div className='headerleft'>
<Headerlogo></Headerlogo>
<Collections></Collections>
<Men></Men>
<Women></Women>
<About></About>
<Contact></Contact>   
        </div>
<div className='headerright'>
   <Cart toggleHeaderModal={toggleHeaderModal} cartstyle={cartstyle} cartitems={cartitems} count={count}></Cart>
   
<User></User> 
</div>
    </div>
  )
}
