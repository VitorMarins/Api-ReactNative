import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../styles/ApiInputStyles';

const NumInput = ({ onSubmit }) => {
  const [num, setNum] = useState('');

  const handlePress = () => {
    if (num) {
      onSubmit(num);
      setNum('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um numero:"
        keyboardType = 'numeric'
        value={num}
        onChangeText={setNum}
      />
      <Button title="Buscar" onPress={handlePress} />
    </View>
  );
};

export default NumInput;
