import React, { useState, useEffect } from 'react';

function Product(props){

        //setting glaze and pack values state
        const [selectedGlazing, setSelectedGlazing] = useState("keepog");
        const [selectedPackSize, setSelectedPackSize] = useState(1);
        const [price, setPrice] = useState(props.basePrice);

        const { addToCart } = props;

        //mapping glazing key values
        const glazingPrice = {
            "keepog": 0,
            "sugar": 0,
            "vanilla": 0.5,
            "choc": 1.5
        }
        //mapping pack size key values
        const packSizePrice = {
            1: 1,
            3: 3,
            6: 5,
            12: 10
        }

        //setting glazing text strings
        let glazingText = "";
        if (selectedGlazing === "keepog"){
            glazingText = "Keep Original";
        }
        else if(selectedGlazing === "sugar"){
            glazingText = "Sugar Milk";
        }
        else if(selectedGlazing === "vanilla"){
            glazingText = "Vanilla Milk";
        }
        else{
            glazingText = "Double Chocolate";
        }

        //price computation
        const computePrice = () => {
            const basePrice = parseFloat(props.basePrice);
            return (basePrice + parseInt(glazingPrice[selectedGlazing])) * packSizePrice[selectedPackSize]; 
        }

        //calc price whenever selected glazing and selected packsize states change
        useEffect(() => {
            setPrice(computePrice().toFixed(2));
        }, [selectedGlazing, selectedPackSize]);

        // Handler for glazing change
        const handleGlazingChange = (e) => {
            setSelectedGlazing(e.target.value);
        };
        
        // Handler for the pack size radio button change
        useEffect(() => {
        }, [selectedPackSize]);
        const handlePackSizeChange = (size) => {
            setSelectedPackSize(size);
        };

        //pass thi cartItem object to the addtocart function so it can display details
        const handleAddToCart = () => {
            const cartItem = {
                // added an image field to this object to show in cart section
                img: props.img,
                title:props.title,
                glazing: glazingText,
                packSize: selectedPackSize,
                price: computePrice(),
              };
            props.addToCart(cartItem);
        }

        return(
            <div className="box">
            <div className="product" id={props.productId}>
                <img className="roll" src={props.img}/>
                <p className="title">{props.title}</p>
                
                <div className="details-container">
                    
                    <span className="body">Glazing:</span>
                    <select id={props.glazingId} name="glazing" className="dropdown" onChange={handleGlazingChange} >
                        <option value="keepog">Keep Original</option>
                        <option value="sugar">Sugar milk</option>
                        <option value="vanilla">Vanilla milk</option>
                        <option value="choc">Double chocolate</option>
                    </select>

                        <span className="body1">Pack size:</span>
                        <span className="pack-buttons">
                        
                            {[1,3,6,12].map((size) => (
                                <span key={size}>
                                    <input 
                                        type="radio" 
                                        name={props.packName} 
                                        value={size} 
                                        // checked={selectedPackSize === size}
                                        onChange={() => handlePackSizeChange(size)}
                                    />
                                    <label
                                    style={{
                                       backgroundColor: selectedPackSize === size ? 'grey' : 'white', 
                                    }}
                                    onClick={() => handlePackSizeChange(size)} 
                                    >
                                        {size}
                                    </label>
                                </span>
                            ))     
                            }
                        </span>
                        <span className="price-value">${price}</span>
                        <button className="cta" onClick={handleAddToCart}>Add to Cart</button>

                </div>
            </div>
        </div>

    );
}

export default Product