import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const DeleteScreen = () => {
    const [id, setId] = useState('');

    const handleDelete = async () => {
        if (!id) {
            Alert.alert('Erro', 'Por favor, insira um ID válido.');
            return;
        }

        try {
            const response = await axios.delete(`http://200.162.254.126/api/deletar/${id}`);
            Alert.alert('Sucesso', response.data.message);
            setId('');
        } catch (error) {
            console.error('Erro ao deletar dados:', error);
            Alert.alert('Erro', 'Falha ao deletar os dados. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Deletar Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="ID do Usuário"
                value={id}
                onChangeText={setId}
                keyboardType="numeric"
            />
            <Button title="Deletar" onPress={handleDelete} color="#6200ee" />
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

export default DeleteScreen;