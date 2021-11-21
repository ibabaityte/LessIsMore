import React from "react";
import MessageComponent from "../common/Message";
import UserInfoComponent from "../common/UserInfo";

const ProductList = () => {
    return (
        <div>
            <h1>This is the product list</h1>
            <MessageComponent/>
            <UserInfoComponent/>
        </div>
    );
}

export default ProductList;