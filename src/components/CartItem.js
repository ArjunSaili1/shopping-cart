import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({movie, showAdd}){

    const {removeItemFromCart} = useContext(CartContext)

    function removeFromCart(){
        showAdd();
        removeItemFromCart(movie)
    }

    return(<div className="cart-item">
        <img className="cart-img" alt={movie["title"]}src={movie["image"]}></img>
        <h2 className="cart-title">{movie["title"]}</h2>
        <h2>{movie["price"]}</h2>
        <button className="remove-btn" onClick={removeFromCart}>&times;</button>
    </div>
    )
}

export default CartItem