import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  booking_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  payment_date: { type: Date, default: Date.now },
  amount: { type: Number },
  payment_method: { type: String },
  payment_status: { type: String }
});

export default mongoose.model('Payment', PaymentSchema);