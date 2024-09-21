
import React, { Component } from 'react';

class CartCard extends Component{
    render(){
        return(
            <div className="cart-status" id="cart-status">
                <p className="bodysmall">Added to cart</p>
                <p></p>
                <p id="cart-name" className="bodysmall-bold"></p>
                <p id="cart-glaze" className="bodysmall"></p>
                <p id="cart-pack" className="bodysmall">Pack of </p>
                <p id="cart-price" className="bodysmall">Price:  </p>
            </div>

        );
    }
}
