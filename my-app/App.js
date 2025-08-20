import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import imagem from './assets/DelBicos_logo.png'
import imagem2 from './assets/DelBicos_Corujinha.png'

export default function App() {
  const [degrees, setDegrees] = useState(0);

  const nome = '© DelBicos - 2025';
  const nome2 = 'Todos os direitos reservados.';
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDegrees(prevDegree => (prevDegree + 3)%360)
    }, 30)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={imagem} style={{ width: 150, height: 150, marginBottom: 50}} />
      <Image source={imagem2} style={{ width: 70, height: 70, marginBottom: 10, transform:[{rotate: `${degrees}deg`}]}} />
      <Text style={styles.text}>{nome}</Text> 
      <Text style={styles.text2}>{nome2}</Text> 
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FC8200',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 15,
    color: '#ffffffff',
    fontWeight: 700,

  },

  text2: {
    fontSize: 8,
    color: '#000000ff',
    fontWeight: 700,

  },

});
