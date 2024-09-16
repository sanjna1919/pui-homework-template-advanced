//init an array of objects to store the cart information 
//the item will be added to this array with details every time the cart button is clicked
//it needs to be outside class becuase we only need one array for the whole cart
//if it were inside class then each time we make an object, we will keep creating a new array
const cartItems = [];

//initialise value of items in cart to display
let total = 0;
//initialise number of items in cart to display
let items = 0;

//generic Roll class that stores its type, price, glazing and pack size options
class Roll{
    constructor(basePrice, elementID){
        //setting base price to given base price
        this.basePrice = basePrice;
        this.elementID = document.getElementById(elementID);

        //mapping glazing key values
        this.glazingPrice = {
            "keepog": 0,
            "sugar": 0,
            "vanilla": 0.5,
            "choc": 1.5
        }
        //mapping pack size key values
        this.packSizePrice = {
            1: 1,
            3: 3,
            6: 5,
            12: 10
        }

        //this will be selected by default, these give variables to the selected values
        this.selectedGlazing = "keepog";
        this.selectedPackSize = "1";
        this.elementID = elementID;

        //creating strings for glazing name
        //using this mapping to display the right string when item is added to cart
        //keeping mapping separate from functions to avoid clutter
        if (this.selectedGlazing === "keepog"){
            this.glazingText = "Keep Original";
        }
        else if(this.selectedGlazing === "sugar"){
            this.glazingText = "Sugar Milk";
        }
        else if(this.selectedGlazing === "vanilla"){
            this.glazingText = "Vanilla Milk";
        }
        else{
            this.glazingText = "Double Chocolate";
        }

        //finding all html references
        this.priceValue = document.getElementById(elementID).querySelector('.price-value');
        this.glazingDropdown = document.getElementById(elementID).querySelector('.dropdown');
        //make array of all the radio buttons 
        this.packSizeBtn = document.getElementById(elementID).querySelectorAll('input');
        this.cartBtn = document.getElementById(elementID).querySelector('.cta');
        
        //call the set event listener and update price functions to initialise
        this.setEventListeners();
        this.updatePrice();
    }
    
    //to compute total price of a roll
    computePrice(){
        return (this.basePrice + this.glazingPrice[this.selectedGlazing]) * this.packSizePrice[this.selectedPackSize]; 
    }
    
    //setting all necessary event listeners
    setEventListeners(){
        //for dropdown
        this.glazingDropdown.addEventListener('change', (e) => 
        {
            //changes the selectedGlazing variable to the new dropdown option that has been selected
            this.selectedGlazing = e.target.value;
            this.updatePrice();
        });
        //for packsize, iterate over the array of input elements of each button, check which is selected
        //used reference
        //https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
        // https://stackoverflow.com/questions/45214084/javascript-for-foreach-through-radio-buttons
        this.packSizeBtn.forEach(x =>
        {
            x.addEventListener('change', (e) =>
            {
                this.selectedPackSize = e.target.value;
                this.updatePrice();
            });
        });
        //for add to cart button
        this.cartBtn.addEventListener('click', (e) =>
        {
            this.addToCart();
        })
    }


    //this method updates price and is called either when pack buttons are clicked or if dropdown option is changed
    updatePrice(){
        this.priceValue.textContent = `$ ${this.computePrice().toFixed(2)}`;
    }

    //when add to cart button is clicked, this method is called
    addToCart(){
        //item formed and added to cart list
        this.itemText = document.getElementById(this.elementID).querySelector('.title').innerHTML;
        this.currentItem = [this.itemText, this.glazingText, this.selectedPackSize, this.priceValue.innerHTML];
        cartItems.push(this.currentItem);

        //call this function to show all displays
        this.addToCartDisplay();
    }

    //deals with all displays when an item is added to cart
    addToCartDisplay(){
        //show the new html box element
        document.getElementById('cart-status').style.display = 'block';

        //keep visible for 3 seconds
            setTimeout(() => {
                document.getElementById('cart-status').style.display = 'none';
            }, 3000); // 3000 milliseconds = 3 seconds

        //replace inner HTML with the necessary text
        document.getElementById('cart-name').innerHTML = this.itemText;
        document.getElementById('cart-glaze').innerHTML = this.glazingText
        document.getElementById('cart-pack').innerHTML = 'Pack of ' + this.selectedPackSize
        document.getElementById('cart-price').innerHTML = 'Price: ' + this.priceValue.innerHTML;

        // console.log(parseFloat(this.priceValue.innerHTML));
        //update total variable with price of item added
        total += parseFloat(this.priceValue.innerHTML.replace("$", ""));
        items += 1;

        //modifying innertext of box elements to show item values
        console.log(document.getElementById('cart-name').innerHTML);

        //modify the text under cart nav link 
        document.getElementById('items-in-cart').innerHTML = items + ' Items';
        document.getElementById('cart-total').innerHTML = 'Total: ' + total;
    }
}


//initialise 6 roll objects with the given base price and ID
new Roll(2.49, "product1");
new Roll(3.49, "product2");
new Roll(2.99, "product3");
new Roll(3.49, "product4");
new Roll(3.99, "product5");
new Roll(3.99, "product6");







