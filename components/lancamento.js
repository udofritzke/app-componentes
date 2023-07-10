import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

const Lancamento = (props) => {
  const [valor, setValor] = useState(0);

  return (
    <>
      <TextInput
       style={styles.input}
        onChangeText={setValor}
        value={valor}
        placeholder="0,00" 
        keyboardType="numeric"
      />

      <Button
        color="green"
        title={props.Credito ? 'Adicionar saldo':'Subtrair Saldo'}
        color={props.Credito ? 'green':'red'}
        onPress={() => {
          //setSaldo(saldo + Number(valor));
        }}
      />

    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth : 1,
    padding: 10,
  },
});

export default Lancamento;
