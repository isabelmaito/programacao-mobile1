import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Pessoas extends Component {
    render() {
        return (
            <View style={styles.areaPessoa}>
                <Text style={styles.textoTitulo}>Dados do Cliente</Text>
                <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
                <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
                <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaPessoa:{
        backgroundColor: '#DDE6F0',
        height: 120,
        marginBottom: 10,
        padding: 15,
    },
    textoPessoa:{
        color: '#000000ff',
    },
    textoTitulo:{
        backgroundColor: '#FC8200',
        color: '#005A93',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
    }
});

export default Pessoas;