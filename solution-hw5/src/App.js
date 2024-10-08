import './App.css';
import Navbar from './navbar';
import Product from './product';
import React, { useState } from 'react';
import Cart from './cart';
import CartSectionItem from './cartSectionItem';
import SearchBar from './searchBar';
import SortDropdown from './sortDropdown';

// importing images
import img1 from "./assets/products/original-cinnamon-roll.jpg";
import img2 from "./assets/products/apple-cinnamon-roll.jpg";
import img3 from "./assets/products/raisin-cinnamon-roll.jpg";
import img4 from "./assets/products/walnut-cinnamon-roll.jpg";
import img5 from "./assets/products/double-chocolate-cinnamon-roll.jpg";
import img6 from "./assets/products/strawberry-cinnamon-roll.jpg";

// LIST OF PRODUCTS
const productList = [
  { img: img1, productId: "product1", title: "Original Cinnamon Roll", basePrice: 2.49 },
  { img: img2, productId: "product2", title: "Apple Cinnamon Roll", basePrice: 3.49 },
  { img: img3, productId: "product3", title: "Raisin Cinnamon Roll", basePrice: 2.99 },
  { img: img4, productId: "product4", title: "Walnut Cinnamon Roll", basePrice: 3.49 },
  { img: img5, productId: "product5", title: "Double Chocolate Cinnamon Roll", basePrice: 3.99 },
  { img: img6, productId: "product6", title: "Strawberry Cinnamon Roll", basePrice: 3.99 },
];


function App() {
  //set global states
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false); 
  const [isCartExpanded, expandCart] = useState(false);
  // initial order of sorted product list 
  const [sortedProducts, setSortedProducts] = useState(productList);



  const handleCartExpand = (e) =>
    {
        e.preventDefault();
        expandCart(x => !x);
    };

  const addToCart = (product) => {
    // add new item to the cart
    setItems(prev => prev + 1);
    // update total price
    setTotal(prev => prev + product.price);
    
    setCartItems(prevCartItems => [...prevCartItems, product]);
    //show cart card for 3 seconds
    setIsCartVisible(true);
  
    setTimeout(() => {
      // after 3 seconds cart card is made to disappear
      setIsCartVisible(false);
    }, 3000);
  };

  //to remove item from cart
  const removeItem = (itemToRemove) =>{
    setCartItems(item => item.filter(x => x.title!== itemToRemove.title && x.price!== itemToRemove.price));
    setTotal(prev => prev - itemToRemove.price);
    setItems(prev => prev - 1);
  };



  return (
    <div>
      <Navbar items={items} total={total.toFixed(2)} handleCartExpand={handleCartExpand} />

      {/* show this cart section component only if cart is expanded */}
      {isCartExpanded && 
        <div className="main-container-cart">

          {/* header */}
          <div className="cart-section-header">
            <span>Shopping Cart ({items} items)</span>
            <span className="cart-total">Total: ${total.toFixed(2)}</span>
          </div>
          {cartItems.length === 0 && (
            <div className="cart-empty-message">Cart is empty!</div>
          )}
          

          {/* items */}
            <div className="grid-container-cart">
                {cartItems.map((x, index) => (
                  <CartSectionItem key={index} cartItem={x} removeItem={removeItem}/>
                ))}
            </div>
          </div>
      }


      {/* if cartvisible boolean is set, only then it shows up here */}
      {isCartVisible && <Cart cartItems={cartItems} />}


      {/* Search bar + Sort dropdown */}
      <div className="search-sort">
          <SearchBar list={productList}/>
          <SortDropdown list={productList} setSortedProducts={setSortedProducts}/>
      </div>

      <div className="search_result-message"></div>

      {/* Main product grid */}
      <div className="main-container">
        <div className="grid-container">

          {/* mapping from productlist array instead of writing individually */}
          {sortedProducts.map(x => (
            <Product 
              key={x.productId}
              img={x.img}
              productId={x.productId}
              title={x.title}
              basePrice={x.basePrice}
              addToCart={addToCart}
            />
          ))}


        </div>
      </div>
    </div>
  );
}

export default App;



