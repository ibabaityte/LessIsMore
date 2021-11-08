// package import
import {Router} from "express";

// middleware import
import checkAdmin from "../middleware/check.admin.js"

// controller import
import SubscriberController from "../controllers/subscribers.js";

const router = Router();

router.post("/subscribers/create", SubscriberController.create);
router.get("/subscribers/list", checkAdmin, SubscriberController.list);

export default router;