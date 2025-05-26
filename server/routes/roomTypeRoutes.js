import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { createRoomType, getRoomTypes } from '../controllers/roomTypeController.js';

const router = express.Router();

// Public: view room types
router.get('/', getRoomTypes);

// Protected: create room types
router.post('/', requireAuth, createRoomType);

export default router;
