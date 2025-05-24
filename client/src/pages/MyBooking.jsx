import React from 'react';
import Title from '../components/Title';
import { assets, userBookingsDummyData } from '../assets/assets';

function MyBooking() {
    const [booking, setBooking] = React.useState(userBookingsDummyData);

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-32'>
            <Title
                title="My Bookings"
                subtitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
                align='left'
            />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>
                {/* Header Row */}
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b-2 border-[#E5E5E5] py-4 font-semibold'>
                    <div>Hotels</div>
                    <div>Date & Timings</div>
                    <div>Payment</div>
                </div>

                {/* Booking Rows */}
                {booking.map((item) => (
                    <div key={item._id} className='grid md:grid-cols-[3fr_2fr_1fr] grid-cols-1 gap-4 md:gap-0 w-full border-b border-gray-300 py-6 first:border-t'>
                        
                        {/* Hotel Info */}
                        <div className='flex gap-4'>
                            <img 
                                src={item.room.images[0]} 
                                alt="hotel-img" 
                                className='w-32 h-24 object-cover rounded shadow' 
                            />
                            <div className='flex flex-col justify-between text-sm'>
                                <p className='font-semibold text-base'>{item.room.name} <span className='text-gray-500'>({item.room.roomType})</span></p>
                                <div className='flex items-center gap-2 text-gray-500'>
                                    <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4' />
                                    <span>{item.hotel.address}</span>
                                </div>
                                <div className='flex items-center gap-2 mt-1'>
                                    <img src={assets.guestsIcon} alt="guest-icon" className='w-4 h-4' />
                                    <span>Guests: {item.guests}</span>
                                </div>
                                <p className='font-semibold mt-1'>Total: ${item.totalPrice}</p>
                            </div>
                        </div>

                        {/* Date & Timings */}
                        <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                            <div>
                                <p className='text-gray-500 text-sm'>Check-In:</p>
                                <p>{new Date(item.checkInDate).toDateString()}</p>
                            </div>
                            <div>
                                <p className='text-gray-500 text-sm'>Check-Out:</p>
                                <p>{new Date(item.checkOutDate).toDateString()}</p>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className='flex flex-col justify-center items-start md:items-center text-sm'>
                            <div className='flex items-center gap-2 mb-2'>
                                <div className={`w-2 h-2 rounded-full ${item.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                <p className={`${item.isPaid ? 'text-green-500' : 'text-red-500'}`}>
                                    {item.isPaid ? 'Paid' : 'Unpaid'}
                                </p>
                            </div>
                            {!item.isPaid && (
                                <button className='border border-gray-500 px-3 py-1 rounded-full text-sm hover:bg-gray-100'>
                                    Pay now
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyBooking;
