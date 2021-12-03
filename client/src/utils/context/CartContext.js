import {createContext} from "react";

export const CartContext = createContext({
    cartContext: JSON.parse(localStorage.getItem("cart")),
    setCartContext: () => {}
});