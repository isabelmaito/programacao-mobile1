import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Cesta from './src/telas/cesta';
import mock from './src/mocks/cesta';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaProvider>
  );
}

