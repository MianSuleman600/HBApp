import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import {
  addServiceToBooking,
  getBookingServices,
} from '../controllers/bookingServiceController.js';

const router = express.Router();

// All booking-service operations require login
router.use(requireAuth);

router.post('/', addServiceToBooking);
router.get('/', getBookingServices);

export default router;
