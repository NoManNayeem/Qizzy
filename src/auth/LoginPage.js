import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { useAuth } from '../utils/AuthContext';

function LoginPage({ navigation }) {
  const [username, setUsername] = useState('Nayeem');
  const [password, setPassword] = useState('Password');

  const { setIsLoggedIn } = useAuth(); // Get setIsLoggedIn from the context

  // Animation values
  const bounceValue = new Animated.Value(0);
  const fadeValue = new Animated.Value(1);
  const slideValue = new Animated.Value(-100); // Initial position off-screen

  useEffect(() => {
    // Start the animation sequence
    startAnimationSequence();
  }, []);

  // Animation sequence function
  const startAnimationSequence = () => {
    Animated.sequence([
      // Bounce animation
      Animated.timing(bounceValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      // Pause for 2 seconds
      Animated.delay(2000),
      // Fade out
      Animated.timing(fadeValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      // Wait for 1 second
      Animated.delay(1000),
      // Fade in
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      // Bounce animation again
      Animated.timing(bounceValue, {
        toValue: 0,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      // Slide in animation for the "Powered by hSenid Mobile" text
      Animated.timing(slideValue, {
        toValue: 0, // Slide to the original position
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Start the animation sequence again in a loop
      startAnimationSequence();
    });
  };

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
      <Animated.Text
        style={[
          styles.title,
          {
            transform: [
              {
                translateY: bounceValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 10],
                }),
              },
            ],
            opacity: fadeValue,
          },
        ]}
      >
        Qizzy
      </Animated.Text>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.registerLink}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerText}>Don't have an account? Register here</Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.poweredBy,
          {
            transform: [
              {
                translateX: slideValue, // Apply slide animation to this View
              },
            ],
          },
        ]}
      >
        <Text style={styles.poweredByText}>
          Powered by <Text style={styles.greenText}>hSenid Mobile</Text>
        </Text>
        <Text style={styles.registerText}>
          Developed by Nayeem Islam
        </Text>
      </Animated.View>
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
    fontSize: 74,
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
  poweredBy: {
    position: 'absolute',
    bottom: 20,
  },
  poweredByText: {
    fontSize: 16,
  },
  greenText: {
    color: 'green',
  },
});
