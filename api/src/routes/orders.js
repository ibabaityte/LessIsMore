// package import
import {Router} from "express";

// middleware import
import checkAuth from "../middleware/check.auth.js";
import checkAdmin from "../middleware/check.admin.js";

// controller import
import OrderController from "../controllers/orders.js";

const router = Router();

router.post("/order/create", checkAuth, OrderController.create);
router.get("/order/list", checkAuth, OrderController.list);
router.delete("/order/:id", checkAdmin, OrderController.remove);

export default router;