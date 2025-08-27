import React, { Component } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Delbicos'
        };
    }

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.input}/>

        <Text style={styles.texto}> Delbicos!! </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-around'
    },

    input:{
        height: 45,
        borderWidth: 1,
        borderColor: '#0000',
        margin: 10,
        fontSize: 20,
        padding: 10,
        backgroundColor: '#aaa'
    },

    texto:{
        textAlign: 'center',
        fontSize: 25
    }
})

export default App;

