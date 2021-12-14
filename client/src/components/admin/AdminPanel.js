import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";

// context imports
import {UserContext} from "../../utils/context/UserContext";

// component imports
import AdminProducts from "./products/AdminProducts";
import AdminOrders from "./orders/AdminOrders";
import AdminSubscribers from "./subscribers/AdminSubscribers";
import AdminCoupons from "./coupons/AdminCoupons";

// style imports
import {withStyles} from "@material-ui/core/styles";
import adminPanelStyles from "../../utils/style/adminPanelStyles";
import Button from '@mui/material/Button';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// icon imports
import AddIcon from '@mui/icons-material/Add';
import AdminCreateProduct from "./products/AdminCreateProduct";

const AdminPanel = (props) => {

    const classes = props.classes;

    const [markedCategory, setMarkedCategory] = useState("products");

    const markCategory = (btn) => {
        setMarkedCategory(btn);
    };

    const addMarkedClass = (btn) => {
        if (markedCategory === btn) {
            return `${classes.markedCategory}`;
        } else {
            return `${classes.category}`;
        }
    };

    return (
        <div>
            <UserContext.Consumer>
                {
                    ({user}) => (
                        user.userType === "ADMIN" ?
                            <div className={classes.adminPanel}>
                                <h1 style={{fontFamily: "'Zilla Slab', serif"}}>This is the admin panel</h1>
                                <ToggleButtonGroup className={classes.categoryButtons}>
                                    <Link className={classes.link} to="products">
                                        <ToggleButton value="products" onClick={() => {markCategory("products")}} className={addMarkedClass("products")}>Products</ToggleButton>
                                    </Link>
                                    <Link className={classes.link} to="subscribers">
                                        <ToggleButton value="subscribers" onClick={() => {markCategory("subscribers")}} className={addMarkedClass("subscribers")}>Subscribers</ToggleButton>
                                    </Link>
                                    <Link className={classes.link} to="orders">
                                        <ToggleButton value="orders" onClick={() => {markCategory("orders")}} className={addMarkedClass("orders")}>Orders</ToggleButton>
                                    </Link>
                                    <Link className={classes.link} to="coupons">
                                        <ToggleButton value="coupons" onClick={() => {markCategory("coupons")}} className={addMarkedClass("coupons")}>Coupons</ToggleButton>
                                    </Link>
                                </ToggleButtonGroup>

                                <Link to="create" className={classes.link}>
                                    <Button className={classes.addButton}><AddIcon/>New product</Button>
                                </Link>
                            </div>
                            :
                            <div>
                                <h1>You have no permission to access this route</h1>
                            </div>
                    )
                }
            </UserContext.Consumer>
            <Routes>
                <Route path="products/*"
                       element={<AdminProducts/>}
                />
                <Route path="orders"
                       element={<AdminOrders/>}
                />
                <Route path="subscribers"
                       element={<AdminSubscribers/>}
                />
                <Route path="coupons"
                       element={<AdminCoupons/>}
                />
                <Route path="create"
                       element={<AdminCreateProduct/>}
                />
            </Routes>
        </div>
    );
}

export default withStyles(adminPanelStyles)(AdminPanel);