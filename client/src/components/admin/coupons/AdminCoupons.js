import React, {useState, useEffect} from "react";

// component imports
import AdminCouponsCreate from "./AdminCouponsCreate";

// util imports
import {fetchCoupons} from "../../../utils/admin/adminCouponUtils";

const AdminCoupons = () => {

    const [couponsList, setCouponsList] = useState([]);

    useEffect(() => {
        fetchCoupons(setCouponsList);
    }, []);

    return (
        <div>
            <AdminCouponsCreate
                fetchCoupons={fetchCoupons}
                setCouponsList={setCouponsList}
            />
            <div>Admin Coupons</div>
            {
                couponsList.map((coupon, key) => {
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