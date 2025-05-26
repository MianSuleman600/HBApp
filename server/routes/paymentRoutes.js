import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { createPayment, getPayments } from '../controllers/paymentController.js';

const router = express.Router();

// All payment endpoints require authentication
router.use(requireAuth);

router.post('/', createPayment);
router.get('/', getPayments);

export default router;
