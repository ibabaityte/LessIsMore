import React, {useContext, useState} from "react";

// style imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// util imports
import {handleProduct} from "../../../utils/admin/adminProductsHandlers";
import {createProduct} from "../../../utils/admin/adminProductUtils";

// component imports
import MessageComponent from "../../common/Message";

// context imports
import {ApiMessageContext} from "../../../utils/context/ApiMessageContext";
import {ApiCodeContext} from "../../../utils/context/ApiCodeContext";

const AdminCreateProduct = (props) => {

    const {setProducts} = props;

    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);

    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: 0,
        category: "",
        image: ""
    });

    return (
        <div>
            <div>Admin Create Product</div>
            <MessageComponent/>
            <form onSubmit={(e) => {createProduct(e, product, setProducts, setMessage, setCode)}}>
                <div className="inputs">
                    <TextField
                        type="text"
                        value={product.title}
                        name="title"
                        label="title"
                        onChange={e => handleProduct(e, "title", product, setProduct)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={product.description}
                        name="description"
                        label="description"
                        onChange={e => handleProduct(e, "description", product, setProduct)}
                    />

                    <br/>

                    <TextField
                        type="number"
                        value={product.price}
                        name="price"
                        label="price"
                        onChange={e => handleProduct(e, "price", product, setProduct)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={product.category}
                        name="category"
                        label="category"
                        onChange={e => handleProduct(e, "category", product, setProduct)}
                    />

                    <br/>

                    <TextField
                        type="file"
                        name="image"
                        label="image"
                        accept="image/*"
                        onChange={e => handleProduct(e, "image", product, setProduct)}
                    />

                </div>
                <Button type="submit">Create</Button>
            </form>
        </div>
    );
};

export default AdminCreateProduct;