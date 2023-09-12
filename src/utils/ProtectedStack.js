import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useAuth } from './AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {isLoggedIn && (
        <DrawerItem
          label="Logout"
          onPress={handleLogout}
        />
      )}
    </DrawerContentScrollView>
  );
};

const ProtectedStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardPage}
        options={{
          drawerLabel: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutPage}
        options={{
          drawerLabel: 'About',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          drawerLabel: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
};

export default ProtectedStack;
