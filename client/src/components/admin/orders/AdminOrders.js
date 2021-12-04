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
                        <div>{order.userId.email}</div>
                        <h3>Product</h3>
                        {order.products.map((product, index)=> {
                            return (
                                <div key={index}>
                                    <div>{product.product.title}</div>
                                    <div>{product.quantity}</div>
                                    <div>{product.size}</div>
                                    <img src={product.product.image} style={{width: "300px", height: "300px"}} alt="product"/>
                                </div>
                            );
                        })}
                        <div>{order.bill}</div>
                        <br/>
                    </div>
                );
            })
            }
        </div>
    );
};

export default AdminOrders;