import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLoginState = async () => {
      try {
        const storedState = await AsyncStorage.getItem('isLoggedIn');
        if (storedState !== null) {
          setIsLoggedIn(JSON.parse(storedState));
        }
      } catch (e) {
        console.error('Failed to load storage data', e);
      } finally {
        setIsLoading(false);
      }
    };
    loadLoginState();
  }, []);

  const handleSetIsLoggedIn = async (value) => {
    try {
      setIsLoggedIn(value);
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(value));
    } catch (e) {
      console.error('Failed to save to storage', e);
    }
  };

  if (isLoading) return null;

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn: handleSetIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
