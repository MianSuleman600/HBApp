import mongoose from 'mongoose';

const InvoiceSchema = new mongoose.Schema({
  booking_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  invoice_date: { type: Date, default: Date.now },
  total_amount: { type: Number }
});

export default mongoose.model('Invoice', InvoiceSchema);