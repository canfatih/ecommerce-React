
import { useState } from 'react';
import './App.css';
import { AddToCart } from './components/./Product/AddToCart';
import { Header } from './components/Header/Header';
import { ImageCard } from './components/./Product/ImageCard';
import Modal from './components/Product/Modal';

function App() {
  // const[googlefonts,Setgooglefonts]=useState([]);
  const[headernames,Setheadernames]=useState(["Collections","Men","Women","About","Contact","Cart","User"])
  const[productheadermin,Setproductheadermin]=useState("SNEAKER COMPANY")
  const[productheadermax,Setproductheadermax]=useState("Fall Limited Edition Sneakers")
  const[productcontent,Setproductcontent]=useState("These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.")
const [discountprice,Setdiscountprice]=useState(125)
const[price,Setprice]=useState("$250.00")
const [count,SetCount]=useState(0);
const[modalimage,Setmodalimage]=useState(false)
const[modal,setModal]=useState(false)
const[cartstyle,setCartStyle]=useState("badge-none")
const[cartitems,setCartItems]=useState(0)
const[headermodal,setHeaderModal]=useState(false)
const[toplamcarttutar,setToplamCartTutar]=useState(0)
const toggleModal=()=>{
setModal(!modal)
}
const toggleHeaderModal=()=>{
  setHeaderModal(!headermodal)
  setToplamCartTutar(discountprice*cartitems)
}
const changebadgestyle=()=>{
setCartStyle("badge")
setCartItems(
 cartitems+count
);
}
let removeitem=()=>{
  setCartItems(0)
  SetCount(0)
}


  return (
    <div className="App">
      <Header  removeitem={removeitem} toplamcarttutar={toplamcarttutar} setToplamCartTutar={setToplamCartTutar} cartitems={cartitems} discountprice={discountprice} toggleHeaderModal={toggleHeaderModal} headermodal={headermodal} cartstyle={cartstyle}  count={count} headernames={headernames}></Header>
      <div className='container itemcontainer'>
<ImageCard toggleModal={toggleModal}></ImageCard>
<AddToCart changebadgestyle={changebadgestyle} count={count} SetCount={SetCount} productheadermin={productheadermin} discountprice={discountprice} price={price} productheadermax={productheadermax}productcontent={productcontent}></AddToCart>
      {modal && <Modal toggleModal={toggleModal} modalimage={modalimage}></Modal>}
      </div>
    </div>
  );
}

export default App;
