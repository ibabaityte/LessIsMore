import React, {useEffect, useContext, useState} from "react";

// context imports
import {CartContext} from "../../utils/context/CartContext";

// util imports
import {getCartProducts} from "../../utils/shop/shopUtils";
import CartProduct from "./CartProduct";

const Cart = () => {

    const {cartContext} = useContext(CartContext);
    const [cartProducts, setCartProducts] = useState([]);

    // generate an array from cart context only consisting product id's
    const idArray = [];
    cartContext.products.forEach(element => {
        idArray.push(element.product);
    });

    // using the generated product ids array to make a request to get an array of full information about each product
    useEffect(() => {
        getCartProducts(setCartProducts, idArray);
    }, []);

    return (
        <div>
            <div>Cart component</div>
            {
                cartProducts.map((productContent, index) => {
                    const cartProduct = cartContext.products[index];
                    return (
                        <CartProduct
                            key={index}
                            productContent={productContent}
                            cartProduct={cartProduct}
                        />
                    );
                })
            }
        </div>
    );
};

export default Cart;