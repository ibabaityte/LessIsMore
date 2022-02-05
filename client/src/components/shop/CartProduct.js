import React, {useContext} from "react";

// util imports
import {updateQuantity, removeFromCart} from "../../utils/shop/shopUtils";

// context imports
import {CartContext} from "../../utils/context/CartContext";
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

    const {cartContext, setCartContext} = useContext(CartContext);
    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);

    const {
        productContent,
        cartProduct,
        setSelectedProduct
    } = props;

    return (
        <Card className={classes.cartProductCard}>
            <CardMedia
                component="img"
                height="300"
                image={productContent.image}
                alt="product"
            />
            <CardContent className={classes.cardContent}>
                <Typography className={classes.productTitle} onClick={() => {
                    setSelectedProduct(productContent)
                }}><Link className={classes.titleLink} to="/product">{productContent.title}</Link></Typography>
                <Typography variant="h7">Price: <span className={classes.infoName}>{productContent.price}</span> €</Typography>
                <br/>
                <Typography variant="h7">Size: <span className={classes.infoName}>{cartProduct.size}</span></Typography>
            </CardContent>
            <CardActions className={classes.cardButtons}>
                <form>
                    <TextField
                        className={classes.numberInput}
                        onChange={(e) => {updateQuantity(e.target.value, cartProduct, cartContext, setCartContext, setMessage, setCode)}}
                        type="number"
                        inputProps={{max: 25, min: 1}}
                        defaultValue={cartProduct.quantity}
                    />
                </form>
                <IconButton onClick={() => {removeFromCart(cartProduct, productContent, cartContext, setCartContext)}}>
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