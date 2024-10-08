//passing cart items array as prop here
//will map through these items to display as a component
function CartSectionItem({cartItem, removeItem}){

    const handleRemove = () => {
        removeItem(cartItem);
    };

    return (
        <div>
            <div className="cart-object">
              <img id="cart-name" className="cart-img" src={cartItem.img} />
              <div id="cart-name" className="body-compress-bold">{cartItem.title}</div>
              <div id="cart-glaze" className="body-compress">Glazing: {cartItem.glazing}</div>
              <div id="cart-pack" className="body-compress">Pack of {cartItem.packSize}</div>
              <div id="cart-price" className="body-compress">Price: ${cartItem.price.toFixed(2)}</div>
              <button id="remove" className="body-compress" onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
}


export default CartSectionItem