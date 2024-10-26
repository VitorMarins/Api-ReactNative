import React from 'react';
import { View, Text } from 'react-native';
import ApiInput from '../components/ApiInput';
import { fetchNumberInfo } from '../api/numberApi';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const handleNumSubmit = async (num) => {
    try {
      const numberInfo = await fetchNumberInfo(number(num));
      navigation.navigate('Result', { numberInfo });
    } catch (error) {
      alert('Erro vegano ao buscar informação');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite um numero para dizer uma curiosidade sobre ele</Text>
      <ApiInput onSubmit={handleNumSubmit} />
    </View>
  );
};

export default HomeScreen;
