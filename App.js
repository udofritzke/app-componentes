import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import Saldo from './components/Saldo';
import Lancamento from './components/lancamento';

const App = () => {
  const [saldo, setSaldo] = useState(10);

  return (
    <View style={styles.container}>
      <Saldo Valor={saldo} />
      <Lancamento Credito />
      <Lancamento  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default App;
