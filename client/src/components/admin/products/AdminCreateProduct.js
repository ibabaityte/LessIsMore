import React, {useContext, useState} from "react";

// util imports
import {handleProduct} from "../../../utils/admin/adminProductsHandlers";
import {createProduct} from "../../../utils/admin/adminProductUtils";

// component imports
import MessageComponent from "../../common/Message";

// context imports
import {ApiMessageContext} from "../../../utils/context/ApiMessageContext";
import {ApiCodeContext} from "../../../utils/context/ApiCodeContext";

// style imports
import {withStyles} from "@material-ui/core/styles";
import formStyles from "../../../utils/style/formStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@mui/material/Grid';

const AdminCreateProduct = (props) => {

    const classes = props.classes;

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
        <Grid container>
            <Grid item xs={12}>
                <h2 className={classes.heading}>Admin create product</h2>
            </Grid>
            <Grid item xs={12} className={classes.formGrid}>
                <MessageComponent/>
                <form onSubmit={(e) => {createProduct(e, product, setProducts, setMessage, setCode)}} className={classes.form}>
                        <TextField
                            className={classes.input}
                            type="text"
                            value={product.title}
                            name="title"
                            label="title"
                            onChange={e => handleProduct(e, "title", product, setProduct)}
                        />

                        <br/>

                        <TextField
                            className={classes.input}
                            type="text"
                            value={product.description}
                            name="description"
                            label="description"
                            onChange={e => handleProduct(e, "description", product, setProduct)}
                        />

                        <br/>

                        <TextField
                            className={classes.input}
                            type="number"
                            value={product.price}
                            inputProps={{min: 0}}
                            name="price"
                            label="price"
                            onChange={e => handleProduct(e, "price", product, setProduct)}
                        />

                        <br/>

                        <TextField
                            className={classes.input}
                            type="text"
                            value={product.category}
                            name="category"
                            label="category"
                            onChange={e => handleProduct(e, "category", product, setProduct)}
                        />

                        <br/>

                        <TextField
                            className={classes.input}
                            type="file"
                            name="image"
                            label="image"
                            accept="image/*"
                            onChange={e => handleProduct(e, "image", product, setProduct)}
                        />

                    <Button type="submit" className={classes.button}>Create</Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default withStyles(formStyles)(AdminCreateProduct);