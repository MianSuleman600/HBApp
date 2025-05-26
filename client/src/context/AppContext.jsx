import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // based on Clerk roles/metadata

  return (
    <AppContext.Provider value={{ bookingDetails, setBookingDetails, isAdmin, setIsAdmin }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
