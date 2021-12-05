import {addToCart} from "./shopUtils";

const handleAddToCart = (cart, setCart, product, size, setMessage, setCode) => {
    let cartObject = cart;
    let productInCart = cart.products.find(object => object.product === product._id && object.size === size);
    if (cartObject.bill === null) {
        addToCart(cartObject, product, size);
        setMessage("Product successfully added to cart");
        setCode("200");
        localStorage.setItem("apiMessage", "Product successfully added to cart");
        localStorage.setItem("code", "200");
    } else {
        if(productInCart) {
            if(productInCart.size === size) {
                setMessage("This product is already in your cart");
                setCode("400");
                localStorage.setItem("apiMessage", "This product is already in your cart");
                localStorage.setItem("code", "400");
            } else {
                addToCart(cartObject, product, size);
                setMessage("Product successfully added to cart");
                setCode("200");
                localStorage.setItem("apiMessage", "Product successfully added to cart");
                localStorage.setItem("code", "200");
            }
        } else {
            addToCart(cartObject, product, size);
            setMessage("Product successfully added to cart");
            setCode("200");
            localStorage.setItem("apiMessage", "Product successfully added to cart");
            localStorage.setItem("code", "200");
        }
    }
};

export {
    handleAddToCart
}