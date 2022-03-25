import CartItem from "./CartItem"

function ShoppingCart(props){
    return(<div className="shopping-cart-sidebar">
        <div className="screen-overlay" onClick={props.toggleShoppingCart}></div>
        <div className="shopping-cart-view"></div>
        {props.cart.map(movie => {
            return (<CartItem title={movie["title"]} image={movie["image"]} price={movie["price"]}/>)
        })}
    </div>)
}
export default ShoppingCart