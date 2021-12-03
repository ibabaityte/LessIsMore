import React, {useContext} from "react";
// import {createProduct} from "../../../utils/admin/adminProductUtils";
import TextField from "@material-ui/core/TextField";
import {handleProduct} from "../../../utils/admin/adminProductsHandlers";
import Button from "@material-ui/core/Button";
import {ApiMessageContext} from "../../../utils/context/ApiMessageContext";
import {updateProduct} from "../../../utils/admin/adminProductUtils";
import MessageComponent from "../../common/Message";

const AdminUpdateProduct = (props) => {

    const {setMessage} = useContext(ApiMessageContext);

    const {
        selectedProduct,
        setSelectedProduct
    } = props;

    return (
        <div>
            <div>Admin update product</div>
            <MessageComponent/>
            <form onSubmit={(e) => {updateProduct(e, selectedProduct, setMessage)}}>
                <div className="inputs">
                    <TextField
                        type="text"
                        value={selectedProduct.title}
                        name="title"
                        label="title"
                        onChange={e => handleProduct(e, "title", selectedProduct, setSelectedProduct)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={selectedProduct.description}
                        name="description"
                        label="description"
                        onChange={e => handleProduct(e, "description", selectedProduct, setSelectedProduct)}
                    />

                    <br/>

                    <TextField
                        type="number"
                        value={selectedProduct.price}
                        name="price"
                        label="price"
                        onChange={e => handleProduct(e, "price", selectedProduct, setSelectedProduct)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={selectedProduct.category}
                        name="category"
                        label="category"
                        onChange={e => handleProduct(e, "category", selectedProduct, setSelectedProduct)}
                    />

                    <br/>

                    <TextField
                        type="file"
                        name="image"
                        label="image"
                        accept="image/*"
                        onChange={e => handleProduct(e, "image", selectedProduct, setSelectedProduct)}
                    />

                </div>
                <Button type="submit">Create</Button>
            </form>
        </div>
    );
};

export default AdminUpdateProduct;