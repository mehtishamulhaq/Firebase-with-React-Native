import React from 'react';
import MainScreen from './src/screens/MainScreen';
import { NativeBaseProvider } from 'native-base';
import MainStackNavigation from './src/components/StackNavigation';

function App() {
  return (
    <NativeBaseProvider>
      <MainStackNavigation />
    </NativeBaseProvider>
  )
}


export default App;