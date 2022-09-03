import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/screens/home';

const App = () => {

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      {/* <StatusBar translucent backgroundColor="transparent" barStyle="light-content" /> */}
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
