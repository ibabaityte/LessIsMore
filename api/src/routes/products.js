import {Router} from "express";
import ProductController from "../controllers/products.js";
import checkAdmin from "../middleware/check.admin.js";
import checkAuth from "../middleware/check.auth.js";

const router = Router();

router. post("/products/create", ProductController.create);
router.get("/products/list", checkAdmin, ProductController.list);
router.get("/products/:id", checkAuth, ProductController.get);
router.put("/products/:id", checkAuth, ProductController.update);
router.delete("/products/:id", checkAuth, ProductController.remove);

export default router;