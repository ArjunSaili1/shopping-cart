import CartItem from "./CartItem"

function ShoppingCart(props){
    return(<div className="shopping-cart-sidebar">
        <div className="screen-overlay" onClick={props.toggleShoppingCart}></div>
        <div className="shopping-cart-view">
            {props.cart.map(movie => {
                return (<CartItem showAdd={movie["showAdd"]} key={movie["title"]} title={movie["title"]} image={movie["image"]} price={movie["price"]}/>)
            })}
        </div>
    </div>)
}
export default ShoppingCart