import {Router} from "express";
import OrderController from "../controllers/orders.js";
import checkAuth from "../middleware/check.auth.js";
import checkAdmin from "../middleware/check.admin.js";

const router = Router();

router.post("/order/create", checkAuth, OrderController.create);
router.get("/order/list", checkAuth, OrderController.list);
router.delete("/order/:id", checkAdmin, OrderController.remove);

export default router;