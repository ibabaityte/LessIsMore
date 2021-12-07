import React, {useState, useEffect} from "react";

// component imports
import AdminCouponsCreate from "./AdminCouponsCreate";

// util imports
import {fetchCoupons, removeCoupon} from "../../../utils/admin/adminCouponUtils";

// style imports
import {withStyles} from "@material-ui/core/styles";
import adminCouponsStyles from "../../../utils/style/adminCouponsStyles";
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

// icon imports
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AdminCoupons = (props) => {

    const classes = props.classes;

    const [couponsList, setCouponsList] = useState([]);

    useEffect(() => {
        fetchCoupons(setCouponsList);
    }, []);

    return (
        <Grid container>
            <Grid item xs={12}>
                <h1 className={classes.heading}>Admin coupons list</h1>
            </Grid>
            <Grid container className={classes.coupons}>
                <Grid item xs={12}>
                    <AdminCouponsCreate
                        fetchCoupons={fetchCoupons}
                        setCouponsList={setCouponsList}
                    />
                </Grid>

                <hr/>

                <Grid item xs={12}>
                    <Grid container>
                        {
                            couponsList.map((coupon, key) => {
                                return (
                                    <Grid item xs={12} md={6} lg={4} key={key}>
                                        <Grid container className={classes.couponNames}>
                                            <Grid item xs={2} className={classes.deleteIcon}>
                                                <IconButton onClick={() => removeCoupon(coupon._id, fetchCoupons, setCouponsList)}>
                                                    <DeleteForeverIcon  sx={{color: 'rgb(181, 5, 26)'}} fontSize="large" />
                                                </IconButton>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <div className={classes.couponInfo}>Coupon name: {coupon.code}</div>
                                                <div className={classes.couponInfo}>Valid for: {coupon.expiryDateHours} hours</div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default withStyles(adminCouponsStyles)(AdminCoupons);