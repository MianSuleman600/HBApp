import React, { useEffect, useState } from 'react';
import { fetchAdminRooms } from '../../api';

const RoomManagement = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchAdminRooms().then(res => setRooms(res.data));
  }, []);

  return (
    <div>
      <h2>Manage Rooms</h2>
      <ul>
        {rooms.map(r => (
          <li key={r._id}>{r.name} - ${r.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoomManagement;