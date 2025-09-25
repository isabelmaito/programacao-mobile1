import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import { SafeAreaView } from 'react-native-safe-area-context';


const {width, height} = Dimensions.get('screen');
let containerWidth = width;
if (width > height) {
    containerWidth = width/3;
}

export default function Cesta() {
return <SafeAreaView style={estilos.container}>
<Image source={topo} style={estilos.topo} />
<Text style={estilos.titulo}> Detalhe da cesta </Text>

<View style={estilos.cesta}>
<Text style={estilos.nome}> Cesta de Verduras </Text>
<View style={estilos.fazenda}>
<Image source={logo} style={estilos.imagemFazenda} />
<Text style={estilos.nomeFazenda}> Jenny Jack Farm </Text>
</View>
<Text style={estilos.descricao}> Uma cesta com produtos selecionados </Text>
<Text style={estilos.preco}> R$ 40,00 </Text>
</View>
</SafeAreaView>
}

const estilos = StyleSheet.create({
    container: {
width: containerWidth,
alignSelf: "center",
backgroundColor: "white",
height: height,
    },
topo: {
width: "100%",
height: 578 / 768 * containerWidth,
},

titulo: {
width: "100%",
position: "absolute",
textAlign: "center",
fontSize: 16,
lineHeight: 26,
color: "white",
fontWeight: "bold",
padding: 16,
},

cesta: {
paddingVertical: 8,
paddingHorizontal: 16,
},

nome: {
color: "#464646",
fontSize: 26,
lineHeight: 42,
fontFamily: "Arial",
},

fazenda: {
flexDirection: "row",
paddingVertical: 12,
},

imagemFazenda: {
width: 32,
height: 32,
},

nomeFazenda: {
fontSize: 16,
lineHeight: 26,
marginLeft: 12,
fontFamily: "Arial",
},

descricao: {
color: "#A3A3A3",
fontSize: 16,
lineHeight: 26,
},

preco: {
color: "#2A9F85",
fontWeight: "boldo",
fontSize: 26,
lineHeight: 42,
marginTop: 8,
},
});