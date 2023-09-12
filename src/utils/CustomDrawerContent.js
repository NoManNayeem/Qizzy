import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawerContent = ({ navigation }) => {
  const handleLogout = async () => {
    await logout(); // Call the logout function
    // You can also add navigation logic here if needed
  };

  return (
    <View>
      <Text>App Logo / Header</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const logout = async () => {
  try {
    // Clear the authentication state
    await AsyncStorage.removeItem('isLoggedIn');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

export default CustomDrawerContent;
