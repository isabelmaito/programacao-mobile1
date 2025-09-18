import React from "react";
import { Button, Text, TextInput, View } from "react-native";

function RegisterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cadastro de Usuário</Text>
      <TextInput placeholder="Nome" style={{ borderWidth: 1, width: '80%', marginBottom: 12, borderColor: 'gray' }} />
      <TextInput placeholder="E-mail" style={{ borderWidth: 1, width: '80%', marginBottom: 12, borderColor: 'gray' }} />
      <TextInput placeholder="Senha" secureTextEntry style={{ borderWidth: 1, width: '80%', marginBottom: 12, borderColor: 'gray' }} />
      <Button title="Cadastrar" onPress={() => {}} />
    </View>
  );
}

export default RegisterScreen;