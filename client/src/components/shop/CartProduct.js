import React, {useContext} from "react";

// util imports
import {updateQuantity, removeFromCart} from "../../utils/shop/shopUtils";

// context imports
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";
import {ApiCodeContext} from "../../utils/context/ApiCodeContext";

// style imports
import TextField from '@mui/material/TextField';
import {withStyles} from "@material-ui/core/styles";
import productListStyles from "../../utils/style/productListStyles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";

// icon imports
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";

const CartProduct = (props) => {

    const classes = props.classes;

    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);

    const {
        product,
        setSelectedProduct
    } = props;

    return (
        <Card className={classes.cartProductCard}>
            <CardMedia
                component="img"
                height="300"
                image={product.productId.image}
                alt="product"
            />
            <CardContent className={classes.cardContent}>
                <Typography className={classes.productTitle} onClick={() => {
                    setSelectedProduct(product.productId._id)
                }}><Link className={classes.titleLink} to="/product">{product.productId.title}</Link></Typography>
                <Typography variant="h7">Price: <span className={classes.infoName}>{product.productId.price}</span> €</Typography>
                <br/>
                <Typography variant="h7">Size: <span className={classes.infoName}>{product.size}</span></Typography>
            </CardContent>
            <CardActions className={classes.cardButtons}>
            {/*    <form>*/}
            {/*        <TextField*/}
            {/*            className={classes.numberInput}*/}
            {/*            onChange={(e) => {updateQuantity(e.target.value, cartProduct, cartContext, setCartContext, setMessage, setCode)}}*/}
            {/*            type="number"*/}
            {/*            inputProps={{max: 25, min: 1}}*/}
            {/*            defaultValue={product.quantity}*/}
            {/*        />*/}
            {/*    </form>*/}
                <IconButton onClick={() => {removeFromCart(product._id, setMessage, setCode)}}>
                    <DeleteForeverIcon
                        className={classes.removeIcon} sx={{ color: 'rgb(181, 5, 26)' }}
                        fontSize="large"
                    />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default withStyles(productListStyles)(CartProduct);