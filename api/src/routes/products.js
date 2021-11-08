// package import
import {Router} from "express";

// middleware import
import checkAdmin from "../middleware/check.admin.js";
import checkAuth from "../middleware/check.auth.js";

// controller import
import ProductController from "../controllers/products.js";

const router = Router();

router.post("/products/create", checkAdmin, ProductController.create);
router.get("/products/list", checkAuth, ProductController.list);
router.get("/products/:id", checkAuth, ProductController.get);
router.put("/products/:id", checkAdmin, ProductController.update);
router.delete("/products/:id", checkAdmin, ProductController.remove);

export default router;