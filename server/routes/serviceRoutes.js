import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { createService, getServices } from '../controllers/serviceController.js';

const router = express.Router();

// Public: list available services
router.get('/', getServices);

// Protected: add new service
router.post('/', requireAuth, createService);

export default router;
