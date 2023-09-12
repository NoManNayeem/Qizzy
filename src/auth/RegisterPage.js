import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function RegisterPage({ navigation }) {
  // Function to handle registration logic
  const handleRegister = () => {
    // Add your registration logic here
    // For example, you can make an API call to create a new user account
    // Once registered, you can navigate to another screen (e.g., the login screen)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qizzy Registration</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  registerButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegisterPage;
