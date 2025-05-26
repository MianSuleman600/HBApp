import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerAdmin = async (req, res) => {
  try {
    const { username, password, email, full_name, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ username, password_hash: hash, email, full_name, role });
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    const isMatch = await bcrypt.compare(password, admin.password_hash);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: admin._id }, 'secretKey');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
