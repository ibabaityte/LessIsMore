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

const CartItem = (props) => {

    const classes = props.classes;

    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);

    const {
        item,
        setSelectedProduct
    } = props;

    return (
        <Card className={classes.cartProductCard}>
            <CardMedia
                component="img"
                height="300"
                image={item.productId.image}
                alt="item"
            />
            <CardContent className={classes.cardContent}>
                <Typography className={classes.productTitle} onClick={() => {
                    setSelectedProduct(item.productId._id)
                }}><Link className={classes.titleLink} to="/item">{item.productId.title}</Link></Typography>
                <Typography variant="h7">Price: <span className={classes.infoName}>{item.productId.price}</span> €</Typography>
                <br/>
                <Typography variant="h7">Size: <span className={classes.infoName}>{item.size}</span></Typography>
            </CardContent>
            <CardActions className={classes.cardButtons}>
                <form>
                    <TextField
                        className={classes.numberInput}
                        onChange={(e) => {updateQuantity(e.target.value, item._id, setMessage, setCode)}}
                        type="number"
                        inputProps={{max: 25, min: 1}}
                        defaultValue={item.quantity}
                    />
                </form>
                <IconButton onClick={() => {removeFromCart(item._id, setMessage, setCode)}}>
                    <DeleteForeverIcon
                        className={classes.removeIcon} sx={{ color: 'rgb(181, 5, 26)' }}
                        fontSize="large"
                    />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default withStyles(productListStyles)(CartItem);