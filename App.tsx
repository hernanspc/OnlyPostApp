import React from 'react';
import Home from './src/screens/home';
import { NativeBaseProvider } from "native-base";

const App = () => {

  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
};

export default App;
