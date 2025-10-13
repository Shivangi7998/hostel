import express from "express";
import { userLogin } from "../controllers/userController.js";

const router = express.Router();
router.post("/signup", userLogin);

export default router;
