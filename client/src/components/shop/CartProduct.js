import React, {useContext} from "react";

// util imports
import {updateQuantity, removeFromCart} from "../../utils/shop/shopUtils";

// context imports
import {CartContext} from "../../utils/context/CartContext";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";

// style imports
// import TextField from '@mui/material/TextField';


const CartProduct = (props) => {

    const {cartContext, setCartContext} = useContext(CartContext);
    const {setMessage} = useContext(ApiMessageContext);

    const {productContent, cartProduct} = props;

    return (
        <div>
            <div>{productContent.title}</div>
            <img src={productContent.image} style={{width: "300px", height: "300px"}} alt="product"/>
            <div>{productContent.price}</div>
            <div>{cartProduct.size}</div>
            <form>
                <input onChange={(e) => {updateQuantity(e.target.value, cartProduct, cartContext, setCartContext, setMessage)}} type="number" min="1" max="25" defaultValue={cartProduct.quantity}/>
            </form>
            <button onClick={() => {removeFromCart(cartProduct, cartContext, setCartContext)}}>Remove from cart</button>
        </div>
    );
};

export default CartProduct;