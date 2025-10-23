import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const CadastroScreen = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = async () => {
        try {
            const response = await axios.post('https://seu-backend-api.com/cadastro', {
                nome,
                email,
                senha
            });
            console.log(response.data);
            setNome('');
            setEmail('');
            setSenha('');
        } catch (error) {
            console.error('Erro ao realizar cadastro:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Cadastro</Text>
            <TextInput value={nome} onChangeText={setNome} placeholder="Nome" />
            <TextInput value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
            <TextInput value={senha} onChangeText={setSenha} placeholder="Senha" secureTextEntry />
            <Button title="Cadastrar" onPress={handleCadastro} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default CadastroScreen;
