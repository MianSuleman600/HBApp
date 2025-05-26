import mongoose from 'mongoose';

const BookingServiceSchema = new mongoose.Schema({
  booking_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  quantity: { type: Number, default: 1 }
});

export default mongoose.model('BookingService', BookingServiceSchema);
