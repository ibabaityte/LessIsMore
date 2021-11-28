import React from "react";

// component imports
import ProductCard from "./ProductCard";

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
                        setProducts={setProducts}
                    />
                ))
            }
        </div>
    );
}

export default ProductList;