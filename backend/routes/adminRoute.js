// Helps build web applications and APIs.
// Handles routing, middleware, and HTTP requests easily.
import express from "express";

import { addDoctor } from "../controller/adminController.js";

import upload from "../middleware/multer.js";
// with the help of adminRouter we can create multiple end point
const adminRouter = express.Router();

adminRouter.post("/add-doctor", upload.single("image"), addDoctor);

export default adminRouter;
