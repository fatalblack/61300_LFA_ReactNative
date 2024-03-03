import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const MainNavigator = () => {
  const user = useSelector(state => state.authReducer.value.user);

  return(
  <NavigationContainer>
    { user ? <TabNavigator /> : <AuthNavigator />}
  </NavigationContainer>
  );
};

export default MainNavigator;