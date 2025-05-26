import BookingService from '../models/BookingService.js';

export const addServiceToBooking = async (req, res) => {
  try {
    const bookingService = await BookingService.create(req.body);
    res.status(201).json(bookingService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookingServices = async (req, res) => {
  try {
    const items = await BookingService.find().populate('booking_id service_id');
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};