// package import
import {Router} from "express";

// middleware import
import checkAdmin from "../middleware/check.admin.js";

// controller import
import CouponController from "../controllers/coupons.js";

const router = Router();

router.post("/coupons/create", checkAdmin, CouponController.create);
router.delete("/coupons/:id", checkAdmin, CouponController.remove);
router.get("/coupons/list", checkAdmin, CouponController.list)

export default router;