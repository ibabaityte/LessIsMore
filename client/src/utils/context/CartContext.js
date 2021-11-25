import {createContext} from "react";

export const CartContext = createContext({
    cart: {
        products: [],
        comment: "",
        bill: Number
    },
    setCart: () => {}
});