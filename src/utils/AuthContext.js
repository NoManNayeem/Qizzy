// AuthContext.js (or similar for managing authentication state)
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create an AuthContext to manage the authentication state
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already authenticated when the app starts
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const authToken = await AsyncStorage.getItem('authToken');
        if (authToken) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthentication();
  }, []);

  // Other authentication-related functions go here (e.g., login, logout)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
