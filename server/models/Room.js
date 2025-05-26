import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  room_number: { type: String, required: true },
  room_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'RoomType' },
  hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  floor: { type: String },
  is_available: { type: Boolean, default: true }
});

export default mongoose.model('Room', RoomSchema);