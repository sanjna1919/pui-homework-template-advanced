import React, { Component } from 'react';


class Product extends Component{
    render(){
        return(

            <div className="box">
            <div className="product" id={this.props.productId}>
                <img className="roll" src={this.props.img}/>
                <p className="title">Original Cinnamon Roll</p>
                
                <div className="details-container">
                    
                    <span className="body">Glazing:</span>
                    <select id={this.props.glazingId} name="glazing" className="dropdown" >
                        <option value="keepog">Keep Original</option>
                        <option value="sugar">Sugar milk</option>
                        <option value="vanilla">Vanilla milk</option>
                        <option value="choc">Double chocolate</option>
                    </select>
                        <span className="body1">Pack size:</span>
                        <span className="pack-buttons">
                            <input type="radio" id={this.props.pack1} name={this.props.packName} value="1" defaultChecked/>
                            <label htmlFor={this.props.pack1}>1</label>
                            
                            <input type="radio" id={this.props.pack2} name={this.props.packName} value="3"/>
                            <label htmlFor={this.props.pack2}>3</label>
                            
                            <input type="radio" id={this.props.pack3} name={this.props.packName} value="6"/>
                            <label htmlFor={this.props.pack3}>6</label>
                            
                            <input type="radio" id={this.props.pack4} name={this.props.packName} value="12"/>
                            <label htmlFor={this.props.pack4}>12</label> 
                        </span>
                        <span className="price-value">{this.props.priceValue}</span>
                        <button className="cta">Add to Cart</button>

                </div>
            </div>
        </div>

        );
    }
}

export default Product