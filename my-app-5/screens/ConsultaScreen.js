import React, { useState } from 'react'; //
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native'; //
import axios from 'axios'; //

const ConsultaScreen = () => { //
  const [dados, setDados] = useState([]); //

  const handleConsulta = async () => { //
    try {
      // ATENÇÃO: Substitua '192.168.0.92' pelo IP da sua máquina que executa a API
      const API_URL = 'http://200.162.254.126/api/consulta'; //

      const response = await axios.get(API_URL); //
      setDados(response.data); //

      if (response.data.length === 0) {
        Alert.alert("Aviso", "Nenhum usuário cadastrado.");
      }

    } catch (error) {
      console.error('Erro ao consultar dados: ', error); //
      // Tratar o erro de 404 da API de forma mais amigável
      if (error.response && error.response.status === 404) {
        Alert.alert("Aviso", "Nenhum usuário encontrado na base de dados.");
        setDados([]); // Limpar lista em caso de 404
      } else {
        Alert.alert("Erro", "Ocorreu um erro ao consultar os dados.");
      }
    }
  };

  const renderUserData = ({ item }) => { //
    return (
      <View style={styles.userContainer}> //
        <Text style={styles.userText}>Nome: {item.nome}</Text> //
        <Text style={styles.userText}>Email: {item.email}</Text> //
      </View>
    );
  };

  return ( //
    <View style={styles.container}> //
      <Text style={styles.title}>Consulta de Usuário</Text> //

      <Button 
        title="Consultar" 
        onPress={handleConsulta} 
        color="#03dac6" 
      /> //

      <FlatList //
        data={dados} //
        keyExtractor={(item, index) => index.toString()} //
        renderItem={renderUserData} //
        style={styles.result} //
        contentContainerStyle={dados.length === 0 && { flexGrow: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => <Text style={{ textAlign: 'center', marginTop: 20 }}>Pressione "Consultar" para carregar os dados.</Text>}
      />

    </View>
  );
};

const styles = StyleSheet.create({ //
  container: { //
    flex: 1, //
    justifyContent: 'flex-start', // Ajustado para melhor layout com FlatList
    alignItems: 'center', // (ajustado para 'center' para manter o título centralizado)
    backgroundColor: '#ffffff', //
    paddingTop: 40,
  },
  title: { //
    fontSize: 20, //
    fontWeight: 'bold', //
    marginBottom: 20, //
    textAlign: 'center',
  },
  result: { //
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  userContainer: { //
    marginBottom: 10, //
    padding: 10, //
    borderColor: '#dddddd', //
    borderWidth: 1, //
    borderRadius: 8, //
    backgroundColor: '#f9f9f9', //
  },
  userText: { //
    fontSize: 16, //
  },
});

export default ConsultaScreen; //