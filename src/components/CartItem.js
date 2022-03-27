function CartItem(props){

    function removeFromCart(){
        props.showAdd();
        props.removeItemFromCart(props.movie)
    }

    return(<div className="cart-item">
        <img className="cart-img" alt={props.movie["title"]}src={props.movie["image"]}></img>
        <h2 className="cart-title">{props.movie["title"]}</h2>
        <h2>{props.movie["price"]}</h2>
        <button className="remove-btn" onClick={removeFromCart}>&times;</button>
    </div>
    )
}

export default CartItem