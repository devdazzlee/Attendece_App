import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    console.log(email.toLocaleLowerCase())
    try {
      const response = await axios.post('https://comfortable-fox-apron.cyclic.app/login', {
        username: email.toLocaleLowerCase(),
        password: password
      });

      if (response.status === 200) {
        const { _id, username, message } = response.data;
     navigation.replace('CheckInOutButtons', { _id: _id , username  : username });
      } else{
      
        Alert.alert('Kindly check Email and Password!!');
      }
    } catch (error) {
      Alert.alert('Kindly check Email and Password!!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Login</Text>
      </View>

      <TextInput
         placeholderTextColor="black" 
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
                 placeholderTextColor="black"
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeButton}>
          <Text  style={styles.rtm}  >{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  rtm:{
color :"black"
  }, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headingContainer: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
    textTransform: 'uppercase',
  },
  input: {
    color :"black",
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  passwordInput: {
   borderColor: 'black',
    color :"black",
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  eyeButton: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Login;
