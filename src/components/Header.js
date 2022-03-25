import CartSVG from "./svg/Cart"
import LogoSVG from "./svg/Logo"

function Header(props){

    return(
        <header className="header">
            <nav className="header-nav">
                <span className="logo-container">
                    <LogoSVG className="logo"/>
                    <a className="title">Reel'd</a>
                </span>
                <a href="/"className="nav-links">Home</a>
                <a href="/shop" className="nav-links">Shop</a>
                <span className="cart-container">
                    <CartSVG className="cart-icon"/>
                </span>
            </nav>
        </header>
    )
}

export default Header