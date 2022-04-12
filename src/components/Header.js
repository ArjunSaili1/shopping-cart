import CartSVG from "./svg/Cart"
import LogoSVG from "./svg/Logo"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import '../styles/Header.css'

function Header({toggleShoppingCart}){
    const {cart} = useContext(CartContext);
    return(
        <header className="header">
            <nav className="header-nav">
                <span className="logo-container">
                    <a href="/"><LogoSVG className="logo"/></a>
                    <a href="/"className="title">Reel'd</a>
                </span>
                <a href="/"className="nav-links">Home</a>
                <a href="/shop" className="nav-links">Shop</a>
                <a href="/shop" onClick={toggleShoppingCart}className="cart-container">
                    <CartSVG className="cart-icon"/>
                    <span className="cart-count-container">
                        <span>{cart.length}</span>
                    </span>
                </a>
            </nav>
        </header>
    )
}

export default Header