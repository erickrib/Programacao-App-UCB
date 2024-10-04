import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResetButton = ({ resetPreferences, fontSize }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={resetPreferences}>
        <Text style={[styles.buttonText, { fontSize }]}>Resetar Preferências</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ResetButton;

