// SplashScreen.js

import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate app loading time
    setTimeout(() => {
      // Navigate to the main screen after the splash screen
      navigation.replace('Login');
    }, 3000); // 3000 milliseconds = 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image
     source={require('../../Images/Asset1.png')}
        style={styles.image}
      />
      <Text style={styles.heading}>Attendance System</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.8, // 80% of the screen width
    height: height * 0.4, // 40% of the screen height
    resizeMode: 'contain',
  },
  heading: {
    fontSize: width * 0.05, // 5% of the screen width
    fontWeight: 'bold',
    color: '#000054',
    marginTop: height * 0.05, // 5% of the screen height
  },
});

export default SplashScreen;
