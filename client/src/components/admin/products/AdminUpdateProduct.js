import React, {useContext} from "react";

// util imports
import {handleProduct} from "../../../utils/admin/adminProductsHandlers";
import {updateProduct} from "../../../utils/admin/adminProductUtils";

// component imports
import MessageComponent from "../../common/Message";

// context imports
import {ApiMessageContext} from "../../../utils/context/ApiMessageContext";

// style imports
import {withStyles} from "@material-ui/core/styles";
import formStyles from "../../../utils/style/formStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@mui/material/Grid';

import {ApiCodeContext} from "../../../utils/context/ApiCodeContext";

const AdminUpdateProduct = (props) => {

    const classes = props.classes;

    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);

    const {
        selectedProduct,
        setSelectedProduct
    } = props;

    return (
        <Grid container>
            <Grid item xs={12}>
                <h2 className={classes.heading}>Admin update product</h2>
            </Grid>
            <Grid item xs={12} className={classes.formGrid}>
                <MessageComponent/>
                <form onSubmit={(e) => {updateProduct(e, selectedProduct, setMessage, setCode)}} className={classes.form}>
                        <TextField
                            className={classes.input}
                            type="text"
                            value={selectedProduct.title}
                            name="title"
                            label="title"
                            onChange={e => handleProduct(e, "title", selectedProduct, setSelectedProduct)}
                        />

                        <br/>

                        <TextField
                            className={classes.input}
                            type="text"
                            value={selectedProduct.description}
                            name="description"
                            label="description"
                            onChange={e => handleProduct(e, "description", selectedProduct, setSelectedProduct)}
                        />

                        <br/>

                        <TextField
                            className={classes.input}
                            type="number"
                            value={selectedProduct.price}
                            inputProps={{min: 0}}
                            name="price"
                            label="price"
                            onChange={e => handleProduct(e, "price", selectedProduct, setSelectedProduct)}
                        />

                        <br/>

                        <TextField
                            className={classes.input}
                            type="text"
                            value={selectedProduct.category}
                            name="category"
                            label="category"
                            onChange={e => handleProduct(e, "category", selectedProduct, setSelectedProduct)}
                        />

                        <br/>

                        <TextField
                            className={classes.input}
                            type="file"
                            name="image"
                            label="image"
                            accept="image/*"
                            onChange={e => handleProduct(e, "image", selectedProduct, setSelectedProduct)}
                        />

                    <Button type="submit" className={classes.button}>Create</Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default withStyles(formStyles)(AdminUpdateProduct);