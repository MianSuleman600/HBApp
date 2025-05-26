import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express';
import apiRoutes from './routes/index.js'; // import combined routes
import clerkWebhooks from './webhooks/clerkWebhooks.js'; // webhook handler (you must define this)

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Clerk middleware for auth
app.use(clerkMiddleware());

// Clerk Webhook Endpoint
app.use('/api/clerk', clerkWebhooks); // Corrected path and handler

// Main API routes
app.use('/api', apiRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('🏨 Hotel Booking API is running');
});

// Server listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
