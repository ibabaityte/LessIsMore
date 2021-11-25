import React from "react";

// context imports
import MessageComponent from "../common/Message";

// component imports
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    const {
        products,
        setSelectedProduct
    } = props;

    return (
        <div>
            <h1>This is the product list</h1>
            <MessageComponent/>
            {
                products.map((product) => (
                    <ProductCard
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                        title={product.title}
                        price={product.price}
                        photo={product.photo}
                        key={product._id}
                    />
                ))
            }
        </div>
    );
}

export default ProductList;