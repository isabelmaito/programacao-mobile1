import React, { Component } from "react"
import { Button } from "react-native";
import { View, Text, TextInput, StyleSheet } from "react-native"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Delbicos'
        };

        this.pegaNome = this.pegaNome.bind(this);
    }

    pegaNome(texto){
      if(texto.length > 0 ){
        this.setState({nome: 'Bem Vindo' + texto});
      }else{
        this.setState({nome: ''});
      }
    }

  render() {
    return (
      <View style={styles.container}>

        <TextInput 
        style={styles.input}
        placeholder="Digite seu nome"
        underlineColorAndroid="transparent"
        onChangeText={ (texto) => this.setState({input: texto})}
        />
        <Button title="Entrar" onPress={this.entrar}/>
        
        <Text style={styles.texto}>{this.state.nome}</Text>

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

