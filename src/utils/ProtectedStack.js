import React from 'react';
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useAuth } from './AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library you prefer

import DashboardPage from '../pages/DashboardPage';
import ProfilePage from '../pages/ProfilePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../auth/LoginPage';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');

      // Navigate to the login screen and prevent going back to protected screens
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <ScrollView>
      <TouchableOpacity style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Qizzy</Text>
      </TouchableOpacity>
      <View>
        <DrawerItem
          label="Dashboard"
          onPress={() => navigation.navigate('Dashboard')}
          icon={() => <Ionicons name="ios-home" size={24} color="#333" />}
        />
        <DrawerItem
          label="About"
          onPress={() => navigation.navigate('About')}
          icon={() => <Ionicons name="ios-information-circle" size={24} color="green" />}
        />
        <DrawerItem
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
          icon={() => <Ionicons name="ios-person" size={24} color="blue" />}
        />
      </View>
      {isLoggedIn && (
        <DrawerItem
          label="Logout"
          onPress={handleLogout}
          icon={() => <Ionicons name="ios-log-out" size={24} color="red" />}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#007AFF',
    paddingVertical: 20,
    alignItems: 'center',
  },
  drawerHeaderText: {
    fontSize: 20,
    color: 'white',
  },
});

const ProtectedStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardPage}
      />
      <Drawer.Screen
        name="About"
        component={AboutPage}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfilePage}
      />
    </Drawer.Navigator>
  );
};

export default ProtectedStack;
