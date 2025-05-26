import React, { useEffect, useState } from 'react';
import { createCheckoutSession } from '../api.js';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm({ bookingId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const { data } = await createCheckoutSession(bookingId);
    const result = await stripe.redirectToCheckout({ sessionId: data.sessionId });
    if (result.error) setError(result.error.message);
    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div>{error}</div>}
      <button type="submit" disabled={!stripe || processing}>Pay Now</button>
    </form>
  );
}

export default function PaymentPage() {
  const { id } = useParams();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, [id]);

  if (!clientReady) return <p>Loading payment...</p>;
  return (
    <div>
      <h2>Complete Payment for Booking #{id}</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm bookingId={id} />
      </Elements>
    </div>
  );
}
