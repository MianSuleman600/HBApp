import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  name: { type: String },
  email: { type: String },
  role: { type: String }
});

export default mongoose.model('Employee', EmployeeSchema);