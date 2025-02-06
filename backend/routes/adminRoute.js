// Helps build web applications and APIs.
// Handles routing, middleware, and HTTP requests easily.
import express from "express";

import { addDoctor, adminLogin } from "../controller/adminController.js";
import authAdmin from "../middleware/authAdmin.js";
import upload from "../middleware/multer.js";
// with the help of adminRouter we can create multiple end point
const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);

adminRouter.post("/login", adminLogin);

export default adminRouter;
