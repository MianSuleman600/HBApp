import React from 'react'
import { assets, testimonials } from '../assets/assets'

function StarRating({rating = 4}) {
    return (
        <>
            {Array(5).fill(0).map((_, index) => (
                <img src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="star-icon"  className='w-4.5 h-4.5'/> 
            ))}

        </> 
    )
}

export default StarRating