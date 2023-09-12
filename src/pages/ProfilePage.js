import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ProfilePage() {
  return (
    <View style={styles.container}>
      {/* Profile Photo */}
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.profilePhoto}
      />

      {/* Data Table */}
      <View style={styles.dataTable}>
        <View style={styles.dataRow}>
          <Icon name="person" size={24} color="#333" />
          <Text style={styles.dataLabel}>Username </Text>
          <Text style={styles.dataValue}>JohnDoe</Text>
        </View>
        <View style={styles.dataRow}>
          <Icon name="email" size={24} color="#333" />
          <Text style={styles.dataLabel}>Email </Text>
          <Text style={styles.dataValue}>john.doe@example.com</Text>
        </View>
        <View style={styles.dataRow}>
          <Icon name="phone" size={24} color="#333" />
          <Text style={styles.dataLabel}>Phone </Text>
          <Text style={styles.dataValue}>+1 (123) 456-7890</Text>
        </View>
        <View style={styles.dataRow}>
          <Icon name="location-on" size={24} color="#333" />
          <Text style={styles.dataLabel}>Address </Text>
          <Text style={styles.dataValue}>123 Main St, City, Country</Text>
        </View>
        <View style={styles.dataRow}>
          <Icon name="calendar-today" size={24} color="#333" />
          <Text style={styles.dataLabel}>Joining Date </Text>
          <Text style={styles.dataValue}>01/01/2023</Text>
        </View>
        <View style={styles.dataRow}>
          <Icon name="link" size={24} color="#333" />
          <Text style={styles.dataLabel}>Social link: </Text>
          <Text style={styles.dataValue}>https://example.com</Text>
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
  },
  profilePhoto: {
    width: 200,
    height: 300,
    marginTop: 20,
  },
  dataTable: {
    marginTop: 50,
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dataLabel: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
  dataValue: {
    fontSize: 18,
    color: '#777',
    
  },
});

export default ProfilePage;
