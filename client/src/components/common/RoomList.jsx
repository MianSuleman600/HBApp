import React from 'react';

const RoomList = ({ rooms, onSelect }) => {
  return (
    <div>
      {rooms.map(room => (
        <div key={room._id}>
          <input type="radio" name="room" onChange={() => onSelect(room._id)} /> {room.name} (${room.price})
        </div>
      ))}
    </div>
  );
};

export default RoomList;