import React, { useState } from 'react'
import Title from '../../components/Title'

const AddRoom = () => {
  const [images, setImages] = useState({})
  const [imagePreviews, setImagePreviews] = useState({})
  const [formData, setFormData] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wifi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    },
  })

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0]
    if (file) {
      setImages((prev) => ({ ...prev, [index]: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreviews((prev) => ({ ...prev, [index]: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'pricePerNight' ? Number(value) : value,
    }))
  }

  const handleAmenityChange = (e) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [name]: checked,
      },
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted Data:', { ...formData, images })
    alert('Room added successfully! (check console for output)')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
      <Title align="left" font="outfit" title="Add Room" subtitle="Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience." />

      {/* Image Previews */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Images</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              {imagePreviews[i] ? (
                <img src={imagePreviews[i]} alt={`Preview ${i}`} className="h-24 w-full object-cover rounded mb-1" />
              ) : (
                <div className="h-24 bg-gray-100 border border-gray-300 rounded flex items-center justify-center text-gray-400 mb-1">No Image</div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, i)}
                className="w-full text-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Room Type and Price */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Room Type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleInputChange}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Room Type</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="Standard">Standard</option>
            <option value="King Room">King Room</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Price <span className="text-sm text-gray-400">/night</span></label>
          <input
            type="number"
            name="pricePerNight"
            value={formData.pricePerNight}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            min={0}
            required
          />
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Amenities</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.keys(formData.amenities).map((amenity, idx) => (
            <label key={idx} className="inline-flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name={amenity}
                checked={formData.amenities[amenity]}
                onChange={handleAmenityChange}
              />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Room
        </button>
      </div>
    </form>
  )
}

export default AddRoom
