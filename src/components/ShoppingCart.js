import CartItem from "./CartItem"

function ShoppingCart(props){
    return(<div className="shopping-cart-sidebar">
        <div className="screen-overlay" onClick={props.toggleShoppingCart}></div>
        <div className="shopping-cart-view">
            {props.cart.map(movie => {
                return (<CartItem showAdd={movie["showAdd"]} removeItemFromCart={props.removeItemFromCart} key={movie["title"]} movie={movie}/>)
            })}
        </div>
    </div>)
}
export default ShoppingCart