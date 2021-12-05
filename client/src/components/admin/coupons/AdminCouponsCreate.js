import React, {useState, useContext} from "react";
import TextField from "@material-ui/core/TextField";

// util imports
import {handleChangeInput} from "../../../utils/users/userHandlers";
import {createCoupon} from "../../../utils/admin/adminCouponUtils";

// context imports
import {ApiMessageContext} from "../../../utils/context/ApiMessageContext";
import {ApiCodeContext} from "../../../utils/context/ApiCodeContext";

// style imports
import Button from "@material-ui/core/Button";

const AdminCouponsCreate = (props) => {

    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);

    const {
        fetchCoupons,
        setCouponsList
    } = props;

    const [coupon, setCoupon] = useState({
        code: "",
        expiryDateHours: 1
    });

    return (
        <div>
            <div>Admin coupons create</div>
            <form onSubmit={e => createCoupon(e, coupon, fetchCoupons, setCouponsList, setMessage, setCode)}>
                <TextField
                    type="text"
                    value={coupon.code || ""}
                    name="code"
                    label="code"
                    onChange={e => handleChangeInput(e, coupon, setCoupon)}
                />

                <br/>

                <TextField
                    type="number"
                    value={coupon.expiryDateHours}
                    name="expiryDateHours"
                    label="expiryDateHours"
                    onChange={e => handleChangeInput(e, coupon, setCoupon)}
                />
                <Button type="submit">Create</Button>
            </form>
        </div>
    );
};

export default AdminCouponsCreate;