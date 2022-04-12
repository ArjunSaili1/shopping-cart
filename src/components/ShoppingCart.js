import CartItem from "./CartItem"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles/ShoppingCart.css'

function ShoppingCart({toggleShoppingCart}){

    const {cart} = useContext(CartContext);

    let totalPrice = 0;

    return(<div className="shopping-cart-sidebar">
        <div className="screen-overlay" onClick={toggleShoppingCart}></div>
        <div className="shopping-cart-view">
            <div className="product-view">
                {cart.map(movie => {
                    totalPrice += parseFloat(movie["price"].slice(1))
                    return (<CartItem showAdd={movie["showAdd"]} 
                    key={movie["title"]} movie={movie}/>)
                })}
            </div>
            <div className="shopping-cart-bottom">
                <div className="total-price">
                    <h2>{"Total: $".concat(Math.round(totalPrice * 100)/ 100)}</h2>
                </div>
                <button className="shopping-cart-btn" onClick={()=>{alert("Thanks for visiting! :)")}}><h2>Checkout</h2></button>
                <button className="shopping-cart-btn" onClick={toggleShoppingCart}><h2>Close</h2></button> 
            </div>
        </div>
    </div>)
}
export default ShoppingCart