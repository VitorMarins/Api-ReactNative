import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/ResultScreenStyles';

const ResultScreen = ({ route }) => {
  const { numberInfo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqui está a curiosidade sobre o numero:</Text>
      <Text style={styles.content}>{numberInfo}</Text>
    </View>
  );
};

export default ResultScreen;
