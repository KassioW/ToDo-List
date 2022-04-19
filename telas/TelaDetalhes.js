import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';

const TelaDetalhes = ({ route, navigation }) => {
  const pessoa = route.params;

  return (
    <View>
      <Card>
        <Card.Title title={pessoa.nome} subtitle={pessoa.id} />
      </Card>
    </View>
  );
};

export default TelaDetalhes;
