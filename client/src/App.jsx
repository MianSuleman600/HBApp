import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CustomerBooking from './pages/CustomerBooking';
import PaymentPage from './pages/PaymentPage';
import InvoicePage from './pages/InvoicePage';
import Dashboard from './pages/admin/Dashboard';
import BookingList from './pages/admin/BookingList';
import RoomManagement from './pages/admin/RoomManagement';
import ServiceManagement from './pages/admin/ServiceManagement';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CustomerBooking />} />
        <Route path="/pay/:id" element={<PaymentPage />} />
        <Route path="/invoice/:id" element={<InvoicePage />} />

        <Route
          path="/admin/dashboard"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />
        <Route
          path="/admin/bookings"
          element={
            <SignedIn>
              <BookingList />
            </SignedIn>
          }
        />
        <Route
          path="/admin/rooms"
          element={
            <SignedIn>
              <RoomManagement />
            </SignedIn>
          }
        />
        <Route
          path="/admin/services"
          element={
            <SignedIn>
              <ServiceManagement />
            </SignedIn>
          }
        />

        <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
    </>
  );
}
export default App;