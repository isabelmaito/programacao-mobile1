import { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Touchable } from 'react-native';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('../my-app-2/assets/biscoitoF.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
'O bom-senso vale mais do que muito conhecimento.',
'O riso é a menor distância entre duas pessoas.',
'Deixe de lado as preocupações e seja feliz.',
'Realize o óbvio, pense no improvável e conquiste o impossível.',
'Acredite em milagres, mas não dependa deles.',
'A maior barreira para o sucesso é o medo do fracasso.'
      
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('../my-app-2/assets/biscoitoA.png')
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Image source={this.state.img}
        style={styles.img}/>

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  img: {
    width: 200,
    height: 200,
  },
  textoFrase: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 20,
  },
  botao: {
    backgroundColor: '#FFCC00',
    padding: 10,
    borderRadius: 5,
  },
  btnArea: {
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;