import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

function HotelCard({ room, index }) {
    return (
        <Link
            to={`/rooms/${room._id}`}
            onClick={() => scrollTo(0, 0)}
            className="block max-w-xs w-65 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative">
                <img
                    src={room.images[0]}
                    alt="room"
                    className="w-full h-40 object-cover rounded-t-xl"
                />
                {index % 2 === 0 && (
                    <p className="absolute top-2 left-2 px-2 py-0.5 text-[10px] bg-white text-gray-800 font-medium rounded-full shadow-sm">
                        Best Seller
                    </p>
                )}
            </div>

            <div className="p-3">
                <p className="text-base font-semibold text-gray-800 truncate">{room.hotel.name}</p>

                <div className="flex items-center text-xs text-yellow-500 mt-1">
                    <img src={assets.starIconFilled} alt="star-icon" className="w-3 h-3 mr-1" />
                    4.5
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1 truncate">
                    <img src={assets.locationIcon} alt="location-icon" className="w-3 h-3" />
                    <span>{room.hotel.address}</span>
                </div>

                <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-medium text-gray-800">${room.pricePerNight}/night</span>
                    <button className="text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-all">
                        Book Now
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard
