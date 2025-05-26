import Booking from '../models/Booking.js';
import Room from '../models/Room.js';

export const createBooking = async (req, res) => {
  try {
    const { customer_id, room_id, check_in_date, check_out_date } = req.body;

    const room = await Room.findById(room_id);
    if (!room || !room.is_available) {
      return res.status(400).json({ message: 'Room not available' });
    }

    const total_price = calculatePrice(room.price_per_night, check_in_date, check_out_date);
    const booking = await Booking.create({ ...req.body, total_price });

    await Room.findByIdAndUpdate(room_id, { is_available: false });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const calculatePrice = (pricePerNight, checkIn, checkOut) => {
  const diffTime = Math.abs(new Date(checkOut) - new Date(checkIn));
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return nights * pricePerNight;
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('customer_id room_id');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};