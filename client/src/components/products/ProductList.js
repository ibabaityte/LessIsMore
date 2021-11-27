import React from "react";

// component imports
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    const {
        products,
        setSelectedProduct,
        favorites,
        setFavorites,
    } = props;

    return (
        <div>
            {
                products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        title={product.title}
                        price={product.price}
                        photo={product.photo}
                        setSelectedProduct={setSelectedProduct}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                ))
            }
        </div>
    );
}

export default ProductList;