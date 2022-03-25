import CartSVG from "./svg/Cart"
import LogoSVG from "./svg/Logo"

function Header(props){

    return(
        <header className="header">
            <LogoSVG className="logo"/>
            <h1>Reel'd</h1>
            <span className="cart-container">
                <CartSVG className="cart-icon"/>
            </span>
        </header>
    )
}

export default Header