import React from 'react'
import "./Radiobutton.css"
import plus from "../../images/icon-plus.svg"
import minus from "../../images/icon-minus.svg"
export const Radiobutton = ({count,SetCount}) => {
  let increasecount=()=>{
    SetCount(count+1)
  }
  let decreasecount=()=>{
    if(count>0){
       SetCount(count-1)
    }
   
  }
  return (
    <div className='radiobuttoncomp'>

<button onClick={decreasecount} className='radiogroupleft' ><img src={minus}></img></button>
<button style={{"fontSize":"25px"}}>{count}</button>
<button onClick={increasecount} className='radiogroupright'><img src={plus}></img></button>
    </div>
  )
}
