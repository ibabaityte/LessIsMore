// package import
import {Router} from "express";

// middleware import
import checkAuth from "../middleware/check.auth.js";

// controller import
import CartItemController from "../controllers/cartItems.js"

const router = Router();

router.post("/cartItem/create", checkAuth, CartItemController.create);
router.get("/cartItem/list", checkAuth, CartItemController.list);
router.delete("/cartItem/remove", checkAuth, CartItemController.remove);
router.put("/cartItem/update", checkAuth, CartItemController.updateQuantity)

export default router;
