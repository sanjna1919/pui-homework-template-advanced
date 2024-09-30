import './App.css';
import Navbar from './navbar';
import Product from './product';
import React, { useState } from 'react';
import Cart from './cart';

// importing images
import img1 from "./assets/products/original-cinnamon-roll.jpg";
import img2 from "./assets/products/apple-cinnamon-roll.jpg";
import img3 from "./assets/products/raisin-cinnamon-roll.jpg";
import img4 from "./assets/products/walnut-cinnamon-roll.jpg";
import img5 from "./assets/products/double-chocolate-cinnamon-roll.jpg";
import img6 from "./assets/products/strawberry-cinnamon-roll.jpg";

function App() {
  //set global states
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false); 

  const addToCart = (product) => {
    // add new item to the cart
    setItems(prev => prev + 1);
    // update total price
    setTotal(prev => prev + product.price);
    
    setCartItems([product]);
    //show cart card for 3 seconds
    setIsCartVisible(true);
    setTimeout(() => {
      // after 3 seconds cart card is made to disappear
      setIsCartVisible(false);
    }, 3000);
  };

  return (
    <div>
      <Navbar items={items} total={total.toFixed(2)} />

      {/* if cartvisible boolean is set, only then it shows up here */}
      {isCartVisible && <Cart cartItems={cartItems} />}
   

      <div className="main-container">
        <div className="grid-container">

          <Product 
          img = {img1}
          productId = "product1"
          title = "OG Cinnamon Roll"
          glazingId = "glazing1"
          packName = "radio1"
          pack1 = "pack1"
          pack2 = "pack2"
          pack3 = "pack3"
          pack4 = "pack4"
          basePrice = {2.49}
          addToCart={addToCart} />


          <Product 
          img = {img2}
          productId = "product2"
          title = "Apple Cinnamon Roll"
          glazingId = "glazing2"
          packName = "radio2"
          pack1 = "pack5"
          pack2 = "pack6"
          pack3 = "pack7"
          pack4 = "pack8"
          basePrice = {3.49}
          addToCart={addToCart}  />

          <Product 
          img = {img3}
          productId = "product3"
          title = "Raisin Cinnamon Roll"
          glazingId = "glazing3"
          packName = "radio3"
          pack1 = "pack9"
          pack2 = "pack10"
          pack3 = "pack11"
          pack4 = "pack12"
          basePrice = {2.99}
          addToCart={addToCart}  />

          <Product 
          img = {img4}
          productId = "product4"
          title = "Walnut Cinnamon Roll"
          glazingId = "glazing4"
          packName = "radio4"
          pack1 = "pack13"
          pack2 = "pack14"
          pack3 = "pack15"
          pack4 = "pack16"
          basePrice = {3.49}
          addToCart={addToCart}  />

          <Product 
          img = {img5}
          productId = "product5"
          title = "Double Chocolate Cinnamon Roll"
          glazingId = "glazing5"
          packName = "radio5"
          pack1 = "pack17"
          pack2 = "pack18"
          pack3 = "pack19"
          pack4 = "pack20"
          basePrice = {3.99}
          addToCart={addToCart}  />

          <Product 
          img = {img6}
          productId = "product6"
          title = "Strawberry Cinnamon Roll"
          glazingId = "glazing6"
          packName = "radio6"
          pack2 = "pack21"
          pack3 = "pack22"
          pack1 = "pack23"
          pack4 = "pack24"
          basePrice = {3.99}
          addToCart={addToCart}  /> 
          
        </div>
      </div>
    </div>
  );
}

export default App;



