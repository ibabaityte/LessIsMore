import {addToCart} from "./shopUtils";

const handleAddToCart = (cart, setCart, product, size, setMessage) => {
    let cartObject = cart;
    let productInCart = cart.products.find(object => object.product === product._id && object.size === size);
    if (cartObject.bill === null) {
        addToCart(cartObject, product, size);
        setMessage("Product successfully added to cart");
    } else {
        if(productInCart) {
            if(productInCart.size === size) {
                setMessage("This product is already in your cart");
            } else {
                addToCart(cartObject, product, size);
                setMessage("Product successfully added to cart");
            }
        } else {
            addToCart(cartObject, product, size);
            setMessage("Product successfully added to cart");
        }
    }
};

export {
    handleAddToCart
}