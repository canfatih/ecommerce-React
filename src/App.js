
import { useEffect, useState } from 'react';
import './App.css';
import { AddToCart } from './components/./Product/AddToCart';
import { Header } from './components/Header/Header';
import { ImageCard } from './components/./Product/ImageCard';
import Modal from './components/Product/Modal';
import { Headercartmodal } from './components/Header/Headercartmodal'
function App() {
  // const[googlefonts,Setgooglefonts]=useState([]);
  const[headernames,Setheadernames]=useState(["Collections","Men","Women","About","Contact","Cart","User"])
  const[productheadermin,Setproductheadermin]=useState("SNEAKER COMPANY")
  const[productheadermax,Setproductheadermax]=useState("Fall Limited Edition Sneakers")
  const[productcontent,Setproductcontent]=useState("These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.")
const [discountprice,Setdiscountprice]=useState("$125.00")
const[price,Setprice]=useState("$250.00")
const [count,SetCount]=useState(0);
const[modalimage,Setmodalimage]=useState(false)
const[modal,setModal]=useState(false)
const[cartstyle,setCartStyle]=useState("badge-none")
const[cartitems,setCartItems]=useState(0)
const[headermodal,setHeaderModal]=useState(false)
// useEffect(()=>{
// fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC9DraHQGbsFtKyBmWafzoURbfqbVs3FJU").then(data=>data.json()).then(res=>Setgooglefonts(res))
// },[])
const toggleModal=()=>{
setModal(!modal)
}
const toggleHeaderModal=()=>{
  setHeaderModal(!headermodal)
}
const changebadgestyle=()=>{
setCartStyle("badge")
setCartItems(
 cartitems+count
);
console.log(cartitems)
}

  return (
    <div className="App">
      <Header toggleHeaderModal={toggleHeaderModal} headermodal={headermodal} cartstyle={cartstyle} cartitems={cartitems} count={count} headernames={headernames}></Header>
      <div className='container itemcontainer'>
<ImageCard toggleModal={toggleModal}></ImageCard>
<AddToCart changebadgestyle={changebadgestyle} count={count} SetCount={SetCount} productheadermin={productheadermin} discountprice={discountprice} price={price} productheadermax={productheadermax}productcontent={productcontent}></AddToCart>
      {modal && <Modal toggleModal={toggleModal} modalimage={modalimage}></Modal>}
      {headermodal && <Headercartmodal></Headercartmodal>}
      </div>
    </div>
  );
}

export default App;
