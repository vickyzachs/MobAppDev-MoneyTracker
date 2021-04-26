import 'react-native-gesture-handler';
import React from 'react'
import { SplashScreen, SignIn } from './pages'
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';


const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App;

