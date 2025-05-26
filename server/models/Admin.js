import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  email: { type: String, required: true },
  full_name: { type: String },
  role: { type: String }
});

export default mongoose.model('Admin', AdminSchema);