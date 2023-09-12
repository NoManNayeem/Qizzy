import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

function AboutPage() {
  const [bounceValue] = useState(new Animated.Value(0));
  const [developerOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    // Bouncing Animation for the header
    Animated.loop(
      Animated.timing(bounceValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ).start();

    // Fading Animation for the developer's name
    Animated.timing(developerOpacity, {
      toValue: 1,
      duration: 1000,
      delay: 1000, // Delay for 1 second before fading in
      useNativeDriver: true,
    }).start();
  }, []);

  const appName = 'Qizzy';
  const company = 'hSenid Mobile';
  const address = 'Dhaka, Bangladesh';
  const phone = '8801781912704';
  const developer = 'Nayeem Islam';

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.header,
          {
            transform: [
              {
                translateY: bounceValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 10],
                }),
              },
            ],
          },
        ]}
      >
        {appName}
      </Animated.Text>

      <View style={styles.dataTable}>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Appname:</Text>
          <Text style={styles.dataValue}>{appName}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Company:</Text>
          <Text style={styles.dataValue}>{company}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Address:</Text>
          <Text style={styles.dataValue}>{address}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Phone:</Text>
          <Text style={styles.dataValue}>{phone}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Developer:</Text>
          <Text style={styles.dataLabel}
          >
            {developer}
          </Text>
        </View>
      </View>
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
  header: {
    fontSize: 75,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  dataTable: {
    marginTop: 20,
  },
  dataRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dataLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  dataValue: {
    fontSize: 16,
  },
});

export default AboutPage;
