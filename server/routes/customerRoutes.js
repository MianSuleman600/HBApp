import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { createRoom, getRooms } from '../controllers/roomController.js';

const router = express.Router();

// Public: view room listings
router.get('/', getRooms);

// Protected: add new rooms
router.post('/', requireAuth, createRoom);

export default router;
