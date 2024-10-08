function Cart({cartItems}){
  const last = cartItems[cartItems.length - 1];
    return(
    <div className="cart-status" id="cart-status">
        <p className="bodysmall">Added to cart</p>
        <p></p>
        <div>
              <p className="bodysmall-bold">{last.title}</p>
              <p className="bodysmall">{last.glazing}</p>
              <p className="bodysmall">Pack of {last.packSize}</p>
              <p className="bodysmall">Price: ${last.price.toFixed(2)}</p>
        </div>
    </div>
    
    );
}

export default Cart;