import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppContext } from '../context/AppContext';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
