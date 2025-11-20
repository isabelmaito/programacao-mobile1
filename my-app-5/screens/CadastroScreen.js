import React, { useState } from 'react'; 
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'; 
import axios from 'axios'; 

const CadastroScreen = () => { 
  const [nome, setNome] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [senha, setSenha] = useState(''); 

  const handleCadastro = async () => { 
    try {
      const API_URL = `${API_BASE}/cadastro`; 

      const response = await axios.post(API_URL, 
        { nome, email, senha }); 
      
      console.log(response.data); 

      // Exibir mensagem de sucesso
      Alert.alert("Sucesso", response.data.message || "Usuário cadastrado com sucesso!");

      // Limpar campos
      setNome(''); 
      setEmail(''); 
      setSenha(''); 

    } catch (error) {
      console.error('Erro ao enviar dados: ', error); 
      Alert.alert("Erro", error.response?.data?.message || "Ocorreu um erro no cadastro.");
    }
  };

  return ( 
    <View style={styles.container}> 
      <Text style={styles.title}>Cadastro de Usuário</Text> 

      <TextInput
        style={styles.input} 
        placeholder="Nome" 
        value={nome} 
        onChangeText={setNome} 
      />

      <TextInput
        placeholder="Email" 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
      />

      <TextInput
        placeholder="Senha" 
        style={styles.input} 
        value={senha} 
        onChangeText={setSenha} 
        secureTextEntry 
      />

      <Button 
        title="Cadastrar" 
        onPress={handleCadastro} 
        color="#6200ee" 
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
    padding: 20,
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  input: { 
    height: 40, 
    borderColor: '#dddddd', 
    borderWidth: 1, 
    borderRadius: 8, 
    paddingHorizontal: 16, 
    backgroundColor: '#ffffff', 
    marginBottom: 10, 
    width: '80%', 
  },
});

export default CadastroScreen; 