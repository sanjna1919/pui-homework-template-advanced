import './App.css';
import Navbar from './navbar';
import Product from './product';


function App() {
  return (
    <body>
      <Navbar />
      <div className="main-container">
        <div className="grid-container">
          {/* should have a component that generates these products, thats more general but this is easier for now */}
          {/* pass props to each product here */}
          <Product 
          img = "/assets/products/original-cinnamon-roll.jpg"
          productId = "product1"
          title = "Original Cinnamon Roll"
          glazingId = "glazing1"
          packName = "radio1"
          pack1 = "pack1"
          pack2 = "pack2"
          pack3 = "pack3"
          pack4 = "pack4"
          priceValue = "$2.49" />


          <Product 
          img = "/assets/products/apple-cinnamon-roll.jpg"
          productId = "product2"
          title = "Apple Cinnamon Roll"
          glazingId = "glazing2"
          packName = "radio2"
          pack1 = "pack5"
          pack2 = "pack6"
          pack3 = "pack7"
          pack4 = "pack8"
          priceValue = "$3.49" />

          <Product 
          img = "/assets/products/raisin-cinnamon-roll.jpg"
          productId = "product3"
          title = "Raisin Cinnamon Roll"
          glazingId = "glazing3"
          packName = "radio3"
          pack1 = "pack9"
          pack2 = "pack10"
          pack3 = "pack11"
          pack4 = "pack12"
          priceValue = "$2.99" />

          <Product 
          img = "/assets/products/walnut-cinnamon-roll.jpg"
          productId = "product4"
          title = "Walnut Cinnamon Roll"
          glazingId = "glazing4"
          packName = "radio4"
          pack1 = "pack13"
          pack2 = "pack14"
          pack3 = "pack15"
          pack4 = "pack16"
          priceValue = "$3.49" />

          <Product 
          img = "/assets/products/double-chocolate-cinnamon-roll.jpg"
          productId = "product5"
          title = "Double Chocolate Cinnamon Roll"
          glazingId = "glazing5"
          packName = "radio5"
          pack1 = "pack17"
          pack2 = "pack18"
          pack3 = "pack19"
          pack4 = "pack20"
          priceValue = "$3.99" />

          <Product 
          img = "/assets/products/strawberry-cinnamon-roll.jpg"
          productId = "product4"
          title = "Strawberry Cinnamon Roll"
          glazingId = "glazing4"
          packName = "radio4"
          pack2 = "pack21"
          pack3 = "pack22"
          pack1 = "pack23"
          pack4 = "pack24"
          priceValue = "$3.99" /> 
          
        </div>
      </div>
    </body>
  );
}


export default App;



