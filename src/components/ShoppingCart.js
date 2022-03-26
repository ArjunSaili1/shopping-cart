import CartItem from "./CartItem"

function ShoppingCart(props){

    let totalPrice = 0;

    return(<div className="shopping-cart-sidebar">
        <div className="screen-overlay" onClick={props.toggleShoppingCart}></div>
        <div className="shopping-cart-view">
            <div className="product-view">
                {props.cart.map(movie => {
                    totalPrice += parseFloat(movie["price"].slice(1))
                    return (<CartItem showAdd={movie["showAdd"]} 
                    removeItemFromCart={props.removeItemFromCart} key={movie["title"]} movie={movie}/>)
                })}
            </div>
            <div className="total-price">
                <h2>{"Total: $".concat(Math.round(totalPrice * 100)/ 100)}</h2>
            </div>
        </div>
    </div>)
}
export default ShoppingCart