import AdminHotelManagement from '../models/AdminHotelManagement.js';

export const assignHotelToAdmin = async (req, res) => {
  try {
    const data = await AdminHotelManagement.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdminHotelAssignments = async (req, res) => {
  try {
    const data = await AdminHotelManagement.find().populate('admin_id hotel_id');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};