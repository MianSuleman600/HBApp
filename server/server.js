import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './config/db.js';

import { clerkMiddleware } from '@clerk/express'

// Connect to the database
connectDB();

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
app.use(clerkMiddleware());

// Api to handle Clerk webhooks
app.use('/api/clerk-webhooks', (req, res) => {
  // Import the webhook handler dynamically to avoid circular dependencies
  import('./controllers/clerkWebhooks.js')
    .then(({ default: clerkWebhooks }) => {
      clerkWebhooks(req, res);
    })
    .catch(err => { 
      console.error("Error loading webhook handler:", err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});