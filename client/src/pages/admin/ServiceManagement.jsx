import React, { useEffect, useState } from 'react';
import { fetchAdminServices } from '../../api';

const ServiceManagement = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchAdminServices().then(res => setServices(res.data));
  }, []);

  return (
    <div>
      <h2>Manage Services</h2>
      <ul>
        {services.map(s => (
          <li key={s._id}>{s.name} - ${s.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceManagement;