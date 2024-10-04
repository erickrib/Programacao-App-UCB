import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PreferencePicker = ({ theme, setTheme, isDarkTheme, fontSize }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: isDarkTheme ? '#fff' : '#000', fontSize  }]}>Tema</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={theme}
          style={styles.picker}
          onValueChange={(itemValue) => setTheme(itemValue)}
          mode="dropdown" 
          itemStyle={[styles.pickerItem, { fontSize }]}  
        >
          <Picker.Item label="Claro" value="Claro" />
          <Picker.Item label="Escuro" value="Escuro" />
          <Picker.Item label="Automático" value="Automático" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#000',
    backgroundColor: '#fff',  
  },
  pickerItem: {
    fontSize: 20,
    height: 50,
    backgroundColor: '#fff',
  },
});

export default PreferencePicker;

