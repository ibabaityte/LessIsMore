import React from "react";

// component imports
import ProductCard from "./ProductCard";
import MessageComponent from "../common/Message";

const ProductList = (props) => {
    const {
        products,
        setSelectedProduct,
        favorites,
        setFavorites,
        setProducts,
    } = props;

    return (
        <div>
            <MessageComponent/>
            {
                products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        setSelectedProduct={setSelectedProduct}
                        favorites={favorites}
                        setFavorites={setFavorites}
                        setProducts={setProducts}
                    />
                ))
            }
        </div>
    );
}

export default ProductList;