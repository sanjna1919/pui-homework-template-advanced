import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <div className="navbar-box">
                <div className="nav-left">
                <img src="/assets/logo/logo-01.svg" class="logo"/>
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
                            <p className="bodysmall" id="items-in-cart">0 Items</p>
                            <p className="bodysmall" id="cart-total">Total: $0</p>
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
}


export default Navbar