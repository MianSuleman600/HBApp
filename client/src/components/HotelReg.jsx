import React from 'react'
import {assets, cities} from '../assets/assets'

function HotelReg() {
  return (
    <div className='flex fixed top-0 bottom-0 left-0 right-0 z-100 items-center justify-center bg-black/70'>
        <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
            <img src={assets.regImage} alt="reg-img"  className='w-1/2 rounded-xl hidden md:block'/>

            <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
                <img src={assets.closeIcon} alt="close-icon" className='absolute top-4 h-4 w-4 cursor-pointer right-4 ' />
                <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p>
                {/*Hotel Name */}
                <div className='w-full mt-6'>
                    <label htmlFor="hotelName" className='text-sm font-medium'>Hotel Name</label>
                    <input type="text" id='hotelName' placeholder='Enter your hotel name' className='border-2 border-gray-300 rounded-lg p-2 w-full mt-2'/>

                </div>
                  {/* Phone */}
                <div className='w-full mt-6'>
                    <label htmlFor="phone" className='text-sm font-medium'>Phone No</label>
                    <input type="text" id='contact' placeholder='Enter your Phone No' className='border-2 border-gray-300 rounded-lg p-2 w-full mt-2'/>

                </div>

                       {/* Address */}
                <div className='w-full mt-6'>
                    <label htmlFor="Address" className='text-sm font-medium'>Address</label>
                    <input type="text" id='address' placeholder='Enter your Address' className='border-2 border-gray-300 rounded-lg p-2 w-full mt-2'/>

                </div>
                {/* City */}
                <div className='w-full mt-6 max-w-60 mr-auto'>
                    <label htmlFor="city" className='text-sm font-medium'>City</label>
                    <select  id="city" className='border-2 border-gray-200 rounded-lg p-2 outline-indigo-500 font-light w-full mt-2'>
                        <option value="">Select City</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}

                    </select>
                </div>
                <button className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6'> Register</button>
            </div>

        </form>

    </div>
  )
}

export default HotelReg