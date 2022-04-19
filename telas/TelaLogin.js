import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const TelaLogin = ({ navigation }) => {
  return(
    <View style={{ backgroundColor: '#FFFFF', flex: 1 }}>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput label="Email" style={estilos.campoDeTexto} />
        <TextInput label="Senha" style={estilos.campoDeTexto} />
      </View>
      <View style={{flex: 1}}>
        <Button mode="contained" onPress={() => navigation.navigate('Lista')} labelStyle={estilos.botao}>
         Continuar
        </Button>
      </View>
    </View>
  );
};

export default TelaLogin;

const estilos = StyleSheet.create({
  campoDeTexto: {
    height: 62,
    width: 266,
    marginBottom: 23,
    backgroundColor: 'gray',
  },
  botao: {
    fontSize: 10
  }
});
