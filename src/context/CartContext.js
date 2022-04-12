import { createContext, useState } from "react";

const CartContext = createContext(); 

export function CartProvider({children}){

    const [cart, setCart] = useState([]);

    function addItemToCart(item){
        setCart(prevCart => [...prevCart, item]);
      }
    
      function removeItemFromCart(item){
        const cartCopy = cart.slice();
        const index = cart.indexOf(item);
        cartCopy.splice(index, 1)
        setCart(cartCopy);
      }  

    return(
        <CartContext.Provider value={{cart, removeItemFromCart, addItemToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
