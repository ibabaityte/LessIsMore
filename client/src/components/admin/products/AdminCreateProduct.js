import React, {useContext, useState} from "react";

// style imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// util imports
import {handleCreateProduct} from "../../../utils/admin/adminProductsHandlers";
import {createProduct} from "../../../utils/admin/adminProductUtils";

// component imports
import MessageComponent from "../../common/Message";

// context imports
import {ApiMessageContext} from "../../../utils/context/ApiMessageContext";

const AdminCreateProduct = (props) => {

    const {setProducts} = props;

    const {setMessage} = useContext(ApiMessageContext);

    const [product, setProduct] = useState({
        title: "",
        desc: "",
        price: 0,
        category: "",
        image: ""
    });

    return (
        <div>
            <div>Admin Create Product</div>
            <MessageComponent/>
            <form onSubmit={(e) => {createProduct(e, product, setProducts, setMessage)}}>
                <div className="inputs">
                    <TextField
                        type="text"
                        value={product.title}
                        name="title"
                        label="title"
                        onChange={e => handleCreateProduct(e, "title", product, setProduct)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={product.description}
                        name="desc"
                        label="desc"
                        onChange={e => handleCreateProduct(e, "desc", product, setProduct)}
                    />

                    <br/>

                    <TextField
                        type="number"
                        value={product.price}
                        name="price"
                        label="price"
                        onChange={e => handleCreateProduct(e, "price", product, setProduct)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={product.category}
                        name="category"
                        label="category"
                        onChange={e => handleCreateProduct(e, "category", product, setProduct)}
                    />

                    <br/>

                    <TextField
                        type="file"
                        name="image"
                        label="image"
                        accept="image/*"
                        onChange={e => handleCreateProduct(e, "image", product, setProduct)}
                    />

                </div>
                <Button type="submit">Create</Button>
            </form>
        </div>
    );
};

export default AdminCreateProduct;