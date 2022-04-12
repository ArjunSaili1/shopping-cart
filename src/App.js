import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import "./styles/App.css"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
        <AnimatePresence>
          {showCart ? 
          <motion.div 
          key="shoppingCart"
          initial={{x: "100vw", opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: "100vw", opacity: 0}} 
          transition={{duration: 0.4}}
          className="shopping-cart-sidebar"> 
            <ShoppingCart toggleShoppingCart={toggleShoppingCart}/> 
          </motion.div>
          : null}
        </AnimatePresence>
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
