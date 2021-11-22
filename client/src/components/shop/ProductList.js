import React, {useEffect, useState} from "react";

// context imports
import MessageComponent from "../common/Message";

// util imports
import {initProducts} from "../../utils/shop/shopUtils";

// component imports
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        initProducts(setProducts);
    }, []);

    return (
        <div>
            <h1>This is the product list</h1>
            <MessageComponent/>
            {
                products.map((product) => (
                    <ProductCard
                        key={product._id}
                        title={product.title}
                        price={product.price}
                        photo={product.photo}
                    />
                ))
            }
        </div>
    );
}

export default ProductList;