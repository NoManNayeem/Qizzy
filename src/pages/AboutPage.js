import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AboutPage() {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
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
});

export default AboutPage;
