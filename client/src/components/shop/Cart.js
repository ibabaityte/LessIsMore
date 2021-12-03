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

    // combining full product info array with cart product array
    const combinedProducts = cartProducts.map(product => {
        return {
            ...product,
            product: cartContext.products.find(existingProduct => product._id === existingProduct.product)
        }
    });

    // using combined array to display full product information together with carts information about quantity and size
    return (
        <div>
            <div>Cart component</div>
            {
                combinedProducts.map((product, key) => {
                    return (
                        <CartProduct
                            key={key}
                            product={product}/>
                    );
                })
            }
        </div>
    );
};

export default Cart;