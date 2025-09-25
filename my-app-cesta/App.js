import React from 'react';
import Cesta from './src/telas/cesta';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
        <Cesta/>
    </SafeAreaProvider>
  );
}

