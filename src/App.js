import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import "./styles/App.css"
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  function toggleShoppingCart(e){
    e.preventDefault()
    setShowCart(!showCart);
  }

  return (
    <CartProvider>
      <Router>
        <Header toggleShoppingCart={toggleShoppingCart}/>
        {showCart ? 
        <ShoppingCart toggleShoppingCart={toggleShoppingCart}/> 
        : null}
        <div className="App">
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/shop" element={<MoviesPage/>}/>
            </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
