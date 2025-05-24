import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/Title'

function ListRoom() {
  const [rooms, setRooms] = useState(roomsDummyData)

  const toggleAvailability = (index) => {
    const updatedRooms = [...rooms]
    updatedRooms[index].isAvailable = !updatedRooms[index].isAvailable
    setRooms(updatedRooms)
  }

  return (
    <div className="p-6">
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subtitle="View all listed rooms and manage their availability."
      />

      <p className="text-blue-800 font-medium mt-8">All Rooms</p>

      <div className="w-full max-w-5xl mt-4 text-left border border-gray-200 rounded-lg max-h-96 overflow-y-scroll shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-4 text-left text-gray-800 font-medium">Name</th>
              <th className="py-3 px-4 text-left text-gray-800 font-medium max-sm:hidden">Facility</th>
              <th className="py-3 px-4 text-center text-gray-800 font-medium">Price / night</th>
              <th className="py-3 px-4 text-center text-gray-800 font-medium">Available</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {rooms.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-gray-700">{item.roomType}</td>
                <td className="py-3 px-4 text-gray-700 max-sm:hidden">
                  {item.amenities.join(', ')}
                </td>
                <td className="py-3 px-4 text-center text-gray-700">${item.pricePerNight}</td>
                <td className="py-3 px-4 border-t border-gray-300 text-sm text-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      onChange={() => toggleAvailability(index)}
                    />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
            {rooms.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No rooms found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListRoom
