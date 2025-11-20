import React from 'react'; 
import { View, Button, StyleSheet } from 'react-native'; 

const HomeScreen = ({ navigation }) => { 
  return (
    <View style={styles.container}> 
      <Button 
        title="Ir para Cadastro" 
        onPress={() => navigation.navigate('Cadastro')} 
        color="#6200ee" 
      />
      {/* Separador visual opcional (ajustado para usar estilo) */}
      <View style={styles.buttonSeparator} /> 
      <Button 
        title="Ir para Consulta" 
        onPress={() => navigation.navigate('Consulta')} 
        color="#03dac6" 
      />
    </View>
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#ffffff', 
  },
  // Adicionado para separar melhor os botões
  buttonSeparator: { 
    height: 20, 
  },
});

export default HomeScreen; 