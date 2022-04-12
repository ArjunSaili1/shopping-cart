import CartItem from "./CartItem"
import { useContext } from "react"; 
import CartContext from "../context/CartContext";
import uniqid from 'uniqid'
import '../styles/ShoppingCart.css'
import { AnimatePresence, motion } from "framer-motion";

function ShoppingCart({toggleShoppingCart}){

    const {cart} = useContext(CartContext);

    let totalPrice = 0;

    return(
    <>
        <div className="screen-overlay" onClick={toggleShoppingCart}></div>
        <AnimatePresence>
            <motion.div
            className="shopping-cart-view"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            key={uniqid()}
            >
            <div className="product-view">
                {cart.map((movie) => {
                totalPrice += parseFloat(movie["price"].slice(1));
                return (
                    <div className="cart-item">
                    <CartItem
                        showAdd={movie["showAdd"]}
                        key={movie["title"]}
                        movie={movie}
                    />
                    </div>
                );
                })}
            </div>
            <div className="shopping-cart-bottom">
                <div className="total-price">
                <h2>{"Total: $".concat(Math.round(totalPrice * 100) / 100)}</h2>
                </div>
                <button
                className="shopping-cart-btn"
                onClick={() => {
                    alert("Thanks for visiting! :)");
                }}
                >
                <h2>Checkout</h2>
                </button>
                <button className="shopping-cart-btn" onClick={toggleShoppingCart}>
                <h2>Close</h2>
                </button>
            </div>
            </motion.div>
        </AnimatePresence>
    </>)
}
export default ShoppingCart