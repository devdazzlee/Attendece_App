import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Dimensions } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';

const CheckInOutScreen = ({ route }) => {
  const { username, _id } = route.params;
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {
      const connectionInfo = await NetInfo.fetch();
      if (connectionInfo.type === 'wifi' && connectionInfo.details) {
        const { ipAddress } = connectionInfo.details;
        setIpAddress(ipAddress);
      } else {
        setIpAddress('');
      }
    };

    fetchIpAddress();
  }, []);

  const handleCheckIn = () => {
    if (ipAddress == "192.168.2.191" || "192.168.2.141") {
      axios.post('https://comfortable-fox-apron.cyclic.app/checkin', { _id })
      .then(response => {
        Alert.alert('Success', 'You have successfully checked in ✅.');
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to check in. Please try again.');
        console.error('Check-in error:', error);
      });    
    }
else{
  Alert.alert('Error', 'Please connect to Wi-Fi to perform check-in.');
  return;
}
  };

  const handleCheckOut = () => {
    if (ipAddress == "192.168.2.191" || "192.168.2.141" ) {

      axios.post('https://comfortable-fox-apron.cyclic.app/checkout', { _id })
      .then(response => {
        Alert.alert('Success', 'You have successfully checked out ✅.');
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to check out. Please try again.');
        console.error('Check-out error:', error);
      });
    }
else{
  Alert.alert('Error', 'Please connect to Wi-Fi to perform check-out.');
  return;
}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome 😊, {username.charAt(0).toUpperCase() + username.slice(1)}.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleCheckIn} style={[styles.button, styles.checkInButton]}>
          <Text style={styles.buttonText}>Check In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCheckOut} style={[styles.button, styles.checkOutButton]}>
          <Text style={styles.buttonText}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: windowWidth * 0.06,
    color: 'black',
    marginTop: windowWidth * 0.1,
    marginBottom: windowWidth * 0.05,
  },
  ipAddress: {
    fontSize: windowWidth * 0.04,
    marginBottom: windowWidth * 0.03,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: windowWidth * 0.04,
    paddingHorizontal: windowWidth * 0.1,
    borderRadius: windowWidth * 0.05,
    marginBottom: windowWidth * 0.03,
    width: windowWidth * 0.8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: windowWidth * 0.045,
  },
  checkInButton: {
    backgroundColor: '#4caf50',
  },
  checkOutButton: {
    backgroundColor: '#f44336',
  },
});

export default CheckInOutScreen;
