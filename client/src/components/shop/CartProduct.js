import React, {useContext} from "react";

// util imports
import {updateQuantity} from "../../utils/shop/shopUtils";

// context imports
import {CartContext} from "../../utils/context/CartContext";

const CartProduct = (props) => {

    const {cartContext, setCartContext} = useContext(CartContext);

    const {product} = props;

    return (
        <div>
            <div>{product.title}</div>
            <img src={product.image} style={{width: "300px", height: "300px"}} alt="product"/>
            <div>{product.price}</div>
            <div>{product.product.size}</div>
            <form>
                <input onChange={(e) => {updateQuantity(e.target.value, product._id, cartContext, setCartContext)}} type="number" defaultValue={product.product.quantity}/>
            </form>
        </div>
    );
};

export default CartProduct;