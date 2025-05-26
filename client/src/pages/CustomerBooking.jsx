import React, { useEffect, useState } from 'react';
import { fetchRooms, fetchServices, createBooking } from '../api';
import RoomList from '../components/common/RoomList';
import ServiceList from '../components/common/ServiceList';
import { useNavigate } from 'react-router-dom';

const CustomerBooking = () => {
  const [rooms, setRooms] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRooms().then(res => setRooms(res.data));
    fetchServices().then(res => setServices(res.data));
  }, []);

  const handleBooking = async () => {
    const data = {
      roomId: selectedRoom,
      services: selectedServices,
    };
    const res = await createBooking(data);
    navigate(`/pay/${res.data.id}`);
  };

  return (
    <div>
      <h1>Select Room</h1>
      <RoomList rooms={rooms} onSelect={setSelectedRoom} />

      <h2>Select Services</h2>
      <ServiceList services={services} onToggle={setSelectedServices} />

      <button onClick={handleBooking} disabled={!selectedRoom}>Proceed to Payment</button>
    </div>
  );
};

export default CustomerBooking;