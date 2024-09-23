import React, { useState } from 'react';

function Cart({cartItems}){
    return(
    <div className="cart-status" id="cart-status">
        <p className="bodysmall">Added to cart</p>
        <p></p>

        
        <div>
          {cartItems.map((x, index) => (
            <div key={index}>
              <p id="cart-name" className="bodysmall-bold">{x.title}</p>
              <p id="cart-glaze" className="bodysmall">{x.glazing}</p>
              <p id="cart-pack" className="bodysmall">Pack of {x.packSize}</p>
              <p id="cart-price" className="bodysmall">Price: ${x.price.toFixed(2)}</p>
            </div>
          ))}
        </div>



    </div>
    
    );
}


export default Cart;