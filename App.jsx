import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login/Login';
import SplashScreen from './Components/Splash_Screen/Splash_Screen';
import CheckInOutScreen from './Components/CheckInout/Checkinout';
// import Signup from './Components/Signup/Signup';
// import CheckInOutScreen from './Components/CheckInout/Checkinout';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CheckInOutButtons" component={CheckInOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;