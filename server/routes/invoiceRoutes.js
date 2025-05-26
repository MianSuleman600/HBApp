import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { createInvoice, getInvoices } from '../controllers/invoiceController.js';

const router = express.Router();

// Protect all invoice routes
router.use(requireAuth);

router.post('/', createInvoice);
router.get('/', getInvoices);

export default router;
