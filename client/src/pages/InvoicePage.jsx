import React, { useEffect, useState } from 'react';
import { fetchInvoice } from '../api';
import { useParams } from 'react-router-dom';

const InvoicePage = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    fetchInvoice(id).then(res => setInvoice(res.data));
  }, [id]);

  if (!invoice) return <div>Loading...</div>;

  return (
    <div>
      <h2>Invoice #{invoice.id}</h2>
      <p>Room: {invoice.roomName}</p>
      <p>Services: {invoice.services.join(', ')}</p>
      <p>Total: ${invoice.total}</p>
    </div>
  );
};

export default InvoicePage;