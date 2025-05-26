import mongoose from 'mongoose';

const RoomTypeSchema = new mongoose.Schema({
  type_name: { type: String, required: true },
  description: { type: String },
  price_per_night: { type: Number, required: true }
});

export default mongoose.model('RoomType', RoomTypeSchema);