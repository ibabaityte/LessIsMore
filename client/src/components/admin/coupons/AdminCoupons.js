import React, {useState, useEffect} from "react";

// component imports
import AdminCouponsCreate from "./AdminCouponsCreate";

// util imports
import {fetchCoupons} from "../../../utils/admin/adminCouponUtils";

const AdminCoupons = () => {

    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        fetchCoupons(setCoupons);
    }, []);

    return (
        <div>
            <AdminCouponsCreate/>
            <div>Admin Coupons</div>
            {
                coupons.map((coupon, key) => {
                    return (
                        <div key={key}>
                            <div>{coupon.code}</div>
                            <div>{coupon.expiryDateHours}</div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default AdminCoupons;