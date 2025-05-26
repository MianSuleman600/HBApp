import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL; // Dynamic base URL

axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: API_BASE,
});

// Customer endpoints
export const fetchRooms = () => api.get('/rooms');
export const fetchServices = () => api.get('/services');
export const createBooking = (data) => api.post('/bookings', data);

// Stripe checkout session
export const createCheckoutSession = (bookingId) =>
  api.post(`/payments/checkout/${bookingId}`);
export const fetchInvoice = (bookingId) => api.get(`/invoices/${bookingId}`);

// Admin endpoints
export const fetchBookings = () => api.get('/bookings');
export const fetchAdminRooms = () => api.get('/admin/rooms');
export const fetchAdminServices = () => api.get('/admin/services');
