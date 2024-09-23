import React, { useState } from 'react';

function Navbar({items, total}){
    return(
        <div className="navbar-box">
            <div className="nav-left">
            <img src="/assets/logo/logo-01.svg" className="logo"/>
        </div>

        <div className="nav-right">
            <div className="nav-right-top">
                <div className="navlinks">
                    <span className="link">
                        <a href="" >Products</a>
                    </span>
                    <span className="link">
                        <a href="" >Cart</a>
                    </span>
                    <div className="cart-description">
                        <p className="bodysmall" id="items-in-cart">{items} Items</p>
                        <p className="bodysmall" id="cart-total">Total: ${total}</p>
                    </div>
                </div>
            </div>
                <div className="nav-right-bottom">
                    <div className="main-title">Our hand-made cinnamon rolls</div>
                </div>
            </div>
        </div>
    );
}


export default Navbar




        {/* <p id="cart-name" className="bodysmall-bold">{cartItem.title}</p>
        <p id="cart-glaze" className="bodysmall">{cartItem.selectedGlazing}</p>
        <p id="cart-pack" className="bodysmall">Pack of {cartItem.selectedPackSize}</p>
        <p id="cart-price" className="bodysmall">Price: {cartItem.price.toFixed(2)} </p> */}