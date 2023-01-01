// package import
import {Router} from "express";

// middleware import
import checkAuth from "../middleware/check.auth.js";
import checkAdmin from "../middleware/check.admin.js"

// controller import
import UsersController from "../controllers/users.js";

const router = Router();

router.post("/login", UsersController.login);
router.post("/register", UsersController.register);
router.get("/:userId", checkAuth, UsersController.get);
router.delete("/:userId", checkAuth, UsersController.remove);
router.put("/:userId", checkAuth, UsersController.update);
router.get("/admin/allUsers", checkAdmin, UsersController.listAllUsers);

export default router;
