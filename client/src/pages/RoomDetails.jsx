import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

function RoomDetails() {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const foundRoom = roomsDummyData.find((room) => room._id === id);
        if (foundRoom) {
            setRoom(foundRoom);
            setMainImage(foundRoom.images[0]);
        }
    }, [id]);

    return room ? (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* Room Title & Discount */}
            <div className='flex flex-col md:flex-row items-start gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>
                    {room.hotel.name}
                    <span className='font-inter text-sm'> ({room.roomType})</span>
                </h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>
                    20% OFF
                </p>
            </div>

            {/* Room Ratings */}
            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
            </div>

            {/* Room Address */}
            <div className='flex items-center gap-2 mt-2 text-gray-500'>
                <img src={assets.locationIcon} alt='location-icon' />
                <span>{room.hotel.address}</span>
            </div>

            {/* Room Images Section */}
            <div className='flex flex-col lg:flex-row gap-6 mt-6'>
                <div className='lg:w-1/2 w-full'>
                    <img
                        src={mainImage}
                        alt='Main room view'
                        className='w-full shadow-lg h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl mt-6'
                    />
                </div>
                <div className='grid grid-cols-2 gap-2 lg:w-1/2 w-full'>
                    {room.images.map((image, index) =>
                        index !== 0 ? (
                            <img
                                key={index}
                                src={image}
                                alt='Room thumbnail'
                                className={`w-full shadow-md object-cover rounded-xl mt-6 cursor-pointer ${
                                    mainImage === image ? 'outline-2 outline-orange-500' : ''
                                }`}
                                onClick={() => setMainImage(image)}
                            />
                        ) : null
                    )}
                </div>
            </div>

            {/* Room Highlights & Amenities */}
            <div className='mt-10'>
                <h1 className='text-3xl md:text-4xl font-playfair'>
                    Experience Luxury Like Never Before
                </h1>

                <div className='flex flex-wrap gap-4 mt-6'>
                    {room.amenities.map((amenity, index) => (
                        <div
                            key={index}
                            className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'
                        >
                            <img
                                src={facilityIcons[amenity]}
                                alt={`${amenity} icon`}
                                className='w-5 h-5'
                            />
                            <p className='text-gray-500'>{amenity}</p>
                        </div>
                    ))}
                </div>

                {/* Room Price */}
                <p className='text-2xl font-medium mt-6'>
                    ${room.pricePerNight}/night
                </p>
            </div>

            {/* Check-in / Check-out Form with Shadow */}
            <div className='mt-10 p-6 rounded-xl shadow-lg bg-white'>
                <form>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='checkin' className='text-gray-500 mb-2'>
                                Check-in
                            </label>
                            <input
                                type='date'
                                id='checkin'
                                name='checkin'
                                className='border border-gray-300 rounded-lg p-2 outline-none'
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='checkout' className='text-gray-500 mb-2'>
                                Check-out
                            </label>
                            <input
                                type='date'
                                id='checkout'
                                name='checkout'
                                className='border border-gray-300 rounded-lg p-2 outline-none'
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='guest' className='text-gray-500 mb-2'>
                                Guest
                            </label>
                            <input
                                type='number'
                                id='guest'
                                name='guest'
                                min={1}
                                placeholder='0'
                                className='rounded border border-gray-300 px-3 py-2 outline-none max-w-full'
                            />
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='mt-6 bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition'
                    >
                        Check Availability
                    </button>
                </form>
            </div>
            {/* Room Description */}
            <div className='mt-25 space-y-4'>
                {roomCommonData.map((data, index) => (
                    <div key={index} className='flex items-start gap-2'>
                        <img src={data.icon} alt={`${data.title}-icon`} className='w-6.5' />
                        <div>
                            <p className='text-base'>{data.title}</p>
                            <p className='text-base'>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                
    {/* Divider */}
    <hr className='my-6' />

    {/* Description Text */}
    <p className='text-sm text-gray-500 leading-relaxed'>
        Guests will be allocated on the ground floor according to availability. You get a comfortable two bedroom apartment that has a true city feeling.
        The price quoted is for two guests. At the guest slot, please mark the number of guests to get the exact price for groups. The guests will be allocated
        ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
    </p>
            </div>

            
        </div>
    ) : (
        <p className='text-center mt-20'>Loading...</p>
    );
}

export default RoomDetails;
