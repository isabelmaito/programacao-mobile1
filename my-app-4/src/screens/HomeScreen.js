import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Button title="Ir para Cadastro" onPress={() => navigation.navigate('Register')}
/>
<p>
<Button title="Ir para Consulta" onPress={() => navigation.navigate('Query', { itemId: 42 })}
/>
</p>
</View>
);
}