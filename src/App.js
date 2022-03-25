import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import "./styles/App.css"
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function toggleShoppingCart(e){
    e.preventDefault()
    setShowCart(!showCart);
  }

  function addItemToCart(item){
    setCart(prevCart => [...prevCart, item]);
  }

  function removeItemFromCart(item){
    const cartCopy = cart.slice();
    const index = cart.indexOf(item);
    cartCopy.splice(index, 1)
    setCart(cartCopy);
  }

  return (
    <Router>
      <div className="App">
        <Header toggleShoppingCart={toggleShoppingCart} cart={cart}/>
        {showCart ? <ShoppingCart removeItemFromCart={removeItemFromCart} toggleShoppingCart={toggleShoppingCart} cart={cart}/> : null}
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/shop" element={<MoviesPage addItem={addItemToCart}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
