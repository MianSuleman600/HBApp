import React from 'react';

const ServiceList = ({ services, onToggle }) => {
  const handleChange = (id) => {
    onToggle(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  return (
    <div>
      {services.map(service => (
        <div key={service._id}>
          <input type="checkbox" onChange={() => handleChange(service._id)} /> {service.name} (${service.price})
        </div>
      ))}
    </div>
  );
};

export default ServiceList;