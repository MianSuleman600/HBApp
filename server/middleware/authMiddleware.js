import { getAuth } from '@clerk/express';

/**
 * Middleware to protect routes using Clerk authentication
 */
const requireAuth = (req, res, next) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized. Please log in.',
    });
  }

  // Attach userId to request object for later use
  req.userId = userId;
  next();
};

export default requireAuth;
