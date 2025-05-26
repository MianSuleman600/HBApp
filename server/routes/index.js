import express from 'express';
import { clerkMiddleware } from '@clerk/express';

import roomRoutes     from './roomRoutes.js';
import hotelRoutes    from './hotelRoutes.js';
import bookingRoutes  from './bookingRoutes.js';
import paymentRoutes  from './paymentRoutes.js';
import invoiceRoutes  from './invoiceRoutes.js';
import customerRoutes from './customerRoutes.js';
import reviewRoutes   from './reviewRoutes.js';

const router = express.Router();

// 1️⃣ Clerk parses auth cookies/headers into req.auth
router.use(clerkMiddleware());

// 2️⃣ Public routes
router.use('/rooms',  roomRoutes);
router.use('/hotels', hotelRoutes);
router.use('/reviews', reviewRoutes);

// 3️⃣ Protected modules (all routes require login)
router.use('/bookings', bookingRoutes);
router.use('/payments', paymentRoutes);
router.use('/invoices', invoiceRoutes);
router.use('/customers', customerRoutes);

export default router;
