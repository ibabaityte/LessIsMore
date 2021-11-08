import CouponController from "../controllers/coupons.js";
import checkAdmin from "../middleware/check.admin.js";
import Router from "express";

const router = Router();

router.post("/coupons/create", checkAdmin, CouponController.create);
router.delete("/coupons/:id", CouponController.remove);

export default router;