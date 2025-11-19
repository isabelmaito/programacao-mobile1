import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const AtualizacaoScreen = () => {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleAtualizacao = async () => {
        if (!id || !nome || !email || !senha) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await axios.put(`http://200.162.254.126/api/atualizacao${id}`, {
                nome,
                email,
                senha
            });
            Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
            console.log(response.data);
            setId('');
            setNome('');
            setEmail('');
            setSenha('');
        } catch (error) {
            console.error('Erro ao atualizar dados:', error);
            Alert.alert('Erro', 'Falha ao atualizar os dados. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atualização de Dados</Text>
            <TextInput
                style={styles.input}
                placeholder="ID do Usuário"
                value={id}
                onChangeText={setId}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <Button title="Atualizar Dados" onPress={handleAtualizacao} color="#6200ee" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        padding: 16,
    },

    title: {
        fontSize: 24,
        marginBottom: 24,
        fontWeight: 'bold',
        color: '#6200ee',
    },

    input: {
        width: '100%',
        height: 50,
        borderColor: '#6200ee',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
});

export default AtualizacaoScreen;