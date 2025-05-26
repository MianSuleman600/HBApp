import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { createEmployee, getEmployees } from '../controllers/employeeController.js';

const router = express.Router();

// All employee management requires authentication
router.use(requireAuth);

router.post('/', createEmployee);
router.get('/', getEmployees);

export default router;
