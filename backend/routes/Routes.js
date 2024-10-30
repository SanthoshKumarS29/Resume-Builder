import express from "express";
import { register, login, verifyOtp } from "../controllers/UserController.js";

const router = express.Router();

router.post('/register',register);
router.post('/verify/otp', verifyOtp)
router.post('/login', login)

export default router;