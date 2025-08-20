import React, { Component } from "react"
import { View, Text } from "react-native"

class App extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#222'}}>

        <View style={{flex:1, backgroundColor: '#FC8200'}}></View>

        <View style={{flex:1, backgroundColor: '#005A93'}}></View>

        <View style={{flex:2, backgroundColor: '#ffff'}}></View>
        
      </View>
    );
  }
}
export default App;

