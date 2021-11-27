import React from "react";
import {Link, Route, Routes} from "react-router-dom";

// context imports
import {UserContext} from "../../utils/context/UserContext";

// component imports
import AdminProducts from "./products/AdminProducts";
import AdminOrders from "./orders/AdminOrders";
import AdminSubscribers from "./subscribers/AdminSubscribers";
import AdminCoupons from "./coupons/AdminCoupons";

const AdminPanel = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    ({user}) => (
                        user.userType === "ADMIN" ?
                            <div>
                                <h1>This is the admin panel</h1>
                                <Link to="products">Products</Link>
                                <Link to="subscribers">Subscribers</Link>
                                <Link to="orders">Orders</Link>
                                <Link to="coupons">Coupons</Link>
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
            </Routes>
        </div>
    );
}

export default AdminPanel;