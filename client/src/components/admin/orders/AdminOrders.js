import React, {useState, useEffect} from "react";

// util imports
import {initOrders} from "../../../utils/admin/AdminOrdersUtils";

const AdminOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        initOrders(orders, setOrders);
    }, []);

    return (
        <div>
            <div>Admin Order List</div>
            {
                orders.map((order, index) => {
                const productDetails = order.products[index].product;
                const product = order.products[index];
                return (
                    <div key={index}>
                        <h3>User</h3>
                        <div>{order.userId.firstName}</div>
                        <div>{order.userId.lastName}</div>
                        <div>{order.userId.city}</div>
                        <div>{order.userId.street}</div>
                        <div>{order.userId.buildingNumber}</div>
                        <div>{order.userId.phoneNumber}</div>
                        <div>{order.userId.postalCode}</div>
                        <h3>Product</h3>
                        <h3>{productDetails.title}</h3>
                        <img src={productDetails.image} style={{width: "300px", height: "300px"}} alt="product"/>
                        <h3>{product.quantity}</h3>
                        <h3>{product.size}</h3>
                    </div>
                );
            })
            }
        </div>
    );
};

export default AdminOrders;