import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { useAuth } from '../utils/AuthContext';

function LoginPage({ navigation }) {
  const [username, setUsername] = useState('Nayeem');
  const [password, setPassword] = useState('Password');

  const { setIsLoggedIn } = useAuth(); // Get setIsLoggedIn from the context

  // Handle login logic
  const handleLogin = async () => {
    // Replace this with your actual authentication logic
    if (username === 'Nayeem' && password === 'Password') {
      const authToken = 'your_authentication_token'; // Replace with the actual token
      await AsyncStorage.setItem('authToken', authToken);
      setIsLoggedIn(true); // Set the user as logged in
      navigation.navigate('Protected');
    } else {
      alert('Invalid username or password');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qizzy</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.registerLink}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Don't have an account? Register here</Text>
      </TouchableOpacity>
    </View>
  );
}



export default LoginPage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
