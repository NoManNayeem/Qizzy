import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/utils/AuthContext';

import AuthStack from './src/utils/AuthStack';
import ProtectedStack from './src/utils/ProtectedStack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Protected" component={ProtectedStack} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
