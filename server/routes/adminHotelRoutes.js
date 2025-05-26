import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import {
  assignHotelToAdmin,
  getAdminHotelAssignments,
} from '../controllers/adminHotelController.js';

const router = express.Router();

// Only authenticated admins can assign hotels
router.use(requireAuth);

router.post('/', assignHotelToAdmin);
router.get('/', getAdminHotelAssignments);

export default router;
