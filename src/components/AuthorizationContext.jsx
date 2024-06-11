// AuthorizationContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthorizationContext = createContext();

export const useAuthorization = () => useContext(AuthorizationContext);

export const AuthorizationProvider = ({ children }) => {
  const [role, setRole] = useState(null); // Set default role as null or 'user' as per your setup

  return (
    <AuthorizationContext.Provider value={{ role, setRole }}>
      {children}
    </AuthorizationContext.Provider>
  );
};
