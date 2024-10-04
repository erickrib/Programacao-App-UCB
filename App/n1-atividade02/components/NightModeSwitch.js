import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const NightModeSwitch = ({ nightMode, resetPreferences, setDarkMode, fontSize, isDarkTheme }) => {
  const handleSwitchChange = (value) => {    
    if (value) {
      setDarkMode();
    } else {
      resetPreferences();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: isDarkTheme ? '#fff' : '#000', fontSize }]}>
        Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}
      </Text>
      <Switch
        value={nightMode}
        onValueChange={handleSwitchChange}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default NightModeSwitch;

