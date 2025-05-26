import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  check_in_date: { type: Date, required: true },
  check_out_date: { type: Date, required: true },
  booking_date: { type: Date, default: Date.now },
  total_price: { type: Number },
  status: { type: String, default: 'pending' }
});

export default mongoose.model('Booking', BookingSchema);