import express from 'express';
import {
  listRooms,
  getRoom,
} from '../controllers/roomController.js';

const router = express.Router();

// Public endpoints
router.get('/', listRooms);
router.get('/:id', getRoom);

export default router;
