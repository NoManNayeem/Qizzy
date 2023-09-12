import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native'; // Import CommonActions
import { useAuth } from './AuthContext';

const CustomLogoutButton = ({ navigation }) => {
  const { setIsLoggedIn } = useAuth(); // Get setIsLoggedIn from the context

  // Handle logout logic
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      setIsLoggedIn(false); // Set the user as logged out
      navigation.navigate('Login'); // Navigate back to the login screen
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <Text style={styles.logoutButtonText}>Logout</Text>
    </TouchableOpacity>
  );
};

export default CustomLogoutButton;

const styles = StyleSheet.create({
  logoutButton: {
    padding: 16,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
