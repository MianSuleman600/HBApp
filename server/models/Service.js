import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  service_name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true }
});

export default mongoose.model('Service', ServiceSchema);