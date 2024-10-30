import express from 'express';
import { createResume, getResume } from '../controllers/ResumeController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.post('/resume/reg', createResume),
router.get('/resume/data', getResume)

export default router
