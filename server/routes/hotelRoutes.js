import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { createHotel, getHotels } from '../controllers/hotelController.js';

const router = express.Router();

// Public: view hotels
router.get('/', getHotels);

// Protected: add a hotel
router.post('/', requireAuth, createHotel);

export default router;
