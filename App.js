import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from './telas/TelaLogin';
import TelaLista from './telas/TelaLista';
import TelaDetalhes from './telas/TelaDetalhes';
import TelaNova from './telas/TelaNova';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} options={{headerShown: false}}/>
        <Stack.Screen name="Lista" component={TelaLista} />
        <Stack.Screen name="Detalhes" component={TelaDetalhes} />
        <Stack.Screen name="Nova" component={TelaNova} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
