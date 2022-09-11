import React, { useEffect } from 'react';
import Home from './src/screens/home';
import { NativeBaseProvider } from "native-base";
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
};

export default App;
