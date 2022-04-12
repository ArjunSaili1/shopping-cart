import CartSVG from "./svg/Cart"
import LogoSVG from "./svg/Logo"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
import '../styles/Header.css'

function Header({toggleShoppingCart}){
    const {cart} = useContext(CartContext);
    return(
        <header className="header">
            <nav className="header-nav">
                <span className="logo-container">
                    <Link to="/"><LogoSVG className="logo"/></Link>
                    <Link to="/"className="title">Reel'd</Link>
                </span>
                <Link to="/"className="nav-links">Home</Link>
                <Link to="/shop" className="nav-links">Shop</Link>
                <Link to="/shop" onClick={toggleShoppingCart}className="cart-container">
                    <CartSVG className="cart-icon"/>
                    <span className="cart-count-container">
                        <span>{cart.length}</span>
                    </span>
                </Link>
            </nav>
        </header>
    )
}

export default Header