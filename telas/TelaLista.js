import { Button, TextField } from '@mui/material';
import React from 'react';
import { FlatList, View } from 'react-native';
import { List } from 'react-native-paper';

const pessoas = [
  { id: 1, nome: 'Fulana' },
  { id: 2, nome: 'Fulano' },
  { id: 3, nome: 'Beltrana' },
  { id: 4, nome: 'Beltrano' },
  { id: 5, nome: 'Mais uma pessoa' },
];

const TelaLista = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={pessoas}
        renderItem={({ item }) => {
          return (
            <List.Item
              title={item.nome}
              onPress={() => navigation.navigate('Detalhes', item)}
            />
          );
        }}
      />
    </View>
  );
};

export default TelaLista;
