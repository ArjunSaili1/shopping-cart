function ShoppingCart(props){

    return(<div className="shopping-cart-sidebar">
        <div className="screen-overlay" onClick={props.toggleShoppingCart}></div>
        <div className="shopping-cart-view"></div>
    </div>)
}
export default ShoppingCart