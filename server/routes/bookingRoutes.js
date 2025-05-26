import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { createBooking, getAllBookings } from '../controllers/bookingController.js';

const router = express.Router();

// All booking operations require an authenticated user
router.use(requireAuth);

router.post('/', createBooking);
router.get('/', getAllBookings);

export default router;
