import React, {useState, useContext} from "react";
import TextField from "@material-ui/core/TextField";

// util imports
import {handleChangeInput} from "../../../utils/users/userHandlers";
import {createCoupon} from "../../../utils/admin/adminCouponUtils";

// context imports
import {ApiMessageContext} from "../../../utils/context/ApiMessageContext";
import {ApiCodeContext} from "../../../utils/context/ApiCodeContext";

// component imports
import MessageComponent from "../../common/Message";

// style imports
import {withStyles} from "@material-ui/core/styles";
import adminCouponsStyles from "../../../utils/style/adminCouponsStyles";
import Button from "@material-ui/core/Button";

const AdminCouponsCreate = (props) => {

    const classes = props.classes;

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
            <h3 className={classes.createHeading}>Create a new coupon</h3>
            <MessageComponent/>
            <form onSubmit={e => createCoupon(e, coupon, fetchCoupons, setCouponsList, setCoupon, setMessage, setCode)} className={classes.form}>
                <TextField
                    className={classes.input}
                    type="text"
                    value={coupon.code || ""}
                    name="code"
                    label="code"
                    onChange={e => handleChangeInput(e, coupon, setCoupon)}
                />

                <br/>

                <TextField
                    className={classes.input}
                    type="number"
                    value={coupon.expiryDateHours || 1}
                    name="expiryDateHours"
                    label="expiryDateHours"
                    onChange={e => handleChangeInput(e, coupon, setCoupon)}
                />
                <Button type="submit" className={classes.couponCreateButton}>Create</Button>
            </form>
        </div>
    );
};

export default withStyles(adminCouponsStyles)(AdminCouponsCreate);