function CartItem(props){

    function removeFromCart(){
        props.showAdd();
        props.removeItemFromCart(props.movie)
    }

    return(<div className="cart-item">
        <h2>{props.movie["title"]}</h2>
        <h2>{props.movie["price"]}</h2>
        <img alt={props.movie["title"]}src={props.movie["image"]}></img>
        <button onClick={removeFromCart}>Remove</button>
    </div>
    )
}

export default CartItem