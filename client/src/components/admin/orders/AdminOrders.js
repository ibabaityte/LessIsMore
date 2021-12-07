import React, {useState, useEffect} from "react";

// util imports
import {initOrders} from "../../../utils/admin/AdminOrdersUtils";

// style imports
import {withStyles} from "@material-ui/core/styles";
import adminOrdersStyles from "../../../utils/style/adminOrdersStyles";
import Grid from '@mui/material/Grid';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const AdminOrders = (props) => {

    const classes = props.classes;

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        initOrders(orders, setOrders);
    }, []);

    return (
        <Grid container>
            <Grid item xs={12}>
                <h1 className={classes.heading}>Admin order list</h1>
            </Grid>
            <Grid item xs={12}>
                    {
                        orders.map((order, index) => {
                            return (
                                <Grid container key={index} className={classes.order}>
                                    <Grid item xs={12} md={6}>
                                        <h3>User</h3>
                                        <div className={classes.orderInfo}>Firstname: {order.userId.firstName}</div>
                                        <div className={classes.orderInfo}>Lastname: {order.userId.lastName}</div>
                                        <div className={classes.orderInfo}>Email: {order.userId.email}</div>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <h3>Shipping information</h3>
                                        <div className={classes.orderInfo}>City: {order.userId.city}</div>
                                        <div className={classes.orderInfo}>Street: {order.userId.street}</div>
                                        <div className={classes.orderInfo}>Building/apartment number: {order.userId.buildingNumber}</div>
                                        <div className={classes.orderInfo}>Postal code: {order.userId.postalCode}</div>
                                        <div className={classes.orderInfo}>Phone number: {order.userId.phoneNumber}</div>
                                    </Grid>
                                    <h3 className={classes.bill}>Total: {order.bill} Є</h3>
                                    <h3>Products: </h3>
                                    <Grid container>
                                        {
                                            order.products.map((product, index) => {
                                            return (
                                                <Grid item xs={12} md={6} lg={4} key={index}>
                                                    <Card className={classes.product}>
                                                        <CardMedia
                                                            component="img"
                                                            height="300"
                                                            image={product.product.image}
                                                            alt="product"
                                                        />
                                                        <CardContent className={classes.cardContent}>
                                                            <Typography className={classes.productTitle}>{product.product.title}</Typography>
                                                            <Typography className={classes.productSize}>Size: {product.size}</Typography>
                                                            <Typography variant="h7">Quantity: {product.quantity}</Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                            );
                        })
                    }
            </Grid>
        </Grid>
    );
};

export default withStyles(adminOrdersStyles)(AdminOrders);