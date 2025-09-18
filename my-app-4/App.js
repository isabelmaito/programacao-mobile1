import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import QueryScreen from './src/screens/QueryScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
 return (
  <NavigationContainer> 
   <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }} />
    <Stack.Screen name="Query" component={QueryScreen} options={{ title: 'Consulta' }} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Cadastro' }} />
</Stack.Navigator>
</NavigationContainer>
);
}

