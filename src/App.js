import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css"
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(true);

  function addItemToCart(item){
    setCart(prevCart => [...prevCart, item]);
  }

  return (
    <Router>
      <div className="App">
        <Header cart={cart}/>
        {showCart ? <ShoppingCart/> : null}
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/shop" element={<MoviesPage addItem={addItemToCart}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
