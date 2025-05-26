import mongoose from 'mongoose';

const AdminHotelManagementSchema = new mongoose.Schema({
  admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  is_primary: { type: Boolean, default: false },
  assigned_date: { type: Date, default: Date.now }
});

export default mongoose.model('AdminHotelManagement', AdminHotelManagementSchema);