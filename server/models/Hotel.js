import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
  hotel_name: { type: String },
  location: { type: String },
  description: { type: String },
  contact_info: { type: String }
});

export default mongoose.model('Hotel', HotelSchema);