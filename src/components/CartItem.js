function CartItem(props){

    return(<div className="cart-item">
        <h2>{props.title}</h2>
        <h2>{props.price}</h2>
        <img src={props.image}></img>
        <button onClick={props.showAdd}>Remove</button>
    </div>
    )
}

export default CartItem