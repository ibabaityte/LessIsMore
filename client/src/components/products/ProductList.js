import React from "react";

// context imports
import MessageComponent from "../common/Message";

// component imports
import ProductCard from "./ProductCard";
import Search from "./Search";
import Filter from "./Filter";

const ProductList = (props) => {
    const {
        products,
        setProducts,
        setSelectedProduct,
        favorites,
        setFavorites,
        searchQuery,
        setSearchQuery,
        filter,
        setFilter
    } = props;

    return (
        <div>
            <h1>This is the product list</h1>
            <MessageComponent/>
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setProducts={setProducts}
            />
            <Filter
                filter={filter}
                setFilter={setFilter}
                setProducts={setProducts}
            />
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