import { Router } from "express";
import { authintication } from "../middlewares/authintication.js";
import { saveData } from "../controllers/blog/saveData.js";
import { upload } from "../middlewares/multer.js";
import { getAllData } from "../controllers/blog/getAllData.js";
import { getData } from "../controllers/blog/getData.js";
import { updateData } from "../controllers/blog/updateData.js";
import { deleteData } from "../controllers/blog/deleteData.js";

const router = Router();

router.route("/").post(authintication, upload.single("imageUrl"), saveData);
router.route("/").get(authintication, getAllData);
router.route("/:category_id").get(authintication, getData);
router.route("/:id").put(authintication, upload.single("imageUrl"), updateData);
router.route("/:blog_id").delete(authintication, deleteData);

export default router;
