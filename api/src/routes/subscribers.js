import {Router} from "express";
import SubscriberController from "../controllers/subscribers.js";
import checkAdmin from "../middleware/check.admin.js"

const router = Router();

router.post("/subscribers/create", SubscriberController.create);
router.get("/subscribers/list", checkAdmin, SubscriberController.list);

export default router;