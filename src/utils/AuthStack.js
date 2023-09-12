import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../auth/LoginPage';
import RegisterPage from '../auth/RegisterPage';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
