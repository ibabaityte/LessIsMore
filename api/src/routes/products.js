// package import
import {Router} from "express";

// middleware import
import checkAdmin from "../middleware/check.admin.js";
import checkAuth from "../middleware/check.auth.js";

// util import
import upload from "../utils/multerConfig.js";

// controller import
import ProductController from "../controllers/products.js";

const router = Router();

router.post("/products/create", upload.single("image"), checkAdmin, ProductController.create);
router.get("/products/list", ProductController.list);
router.get("/products/get/:id", checkAuth, ProductController.get);
router.put("/products/update/:id", upload.single("image"), checkAdmin, ProductController.update);
router.delete("/products/delete/:id", checkAdmin, ProductController.remove);
router.get("/products/search", ProductController.search);

export default router;