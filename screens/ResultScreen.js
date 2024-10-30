import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/ResultScreenStyles';

const ResultScreen = ({ route, navigation }) => {
  const { numberInfo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqui está a curiosidade sobre o numero:</Text>
      <Text style={styles.content}>{numberInfo}</Text>
      <Button 
        title="Voltar" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

export default ResultScreen;
