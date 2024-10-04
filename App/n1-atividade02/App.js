import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Appearance } from 'react-native';
import PreferencePicker from './components/PreferencePicker';
import FontSizeSlider from './components/FontSizeSlider';
import NightModeSwitch from './components/NightModeSwitch';
import ResetButton from './components/ResetButton';

export default function App() {
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (theme === 'Automático') {
        setTheme(colorScheme === 'dark' ? 'Escuro' : 'Claro');
      }
    });

    return () => subscription.remove();
  }, [theme]);

  const resetPreferences = () => {
    setFontSize(16);
    lightPreferences();
  };

  const lightPreferences = () => {
    setTheme('Claro');
    setNightMode(false);
  };

  const darkPreferences = () => {
    setTheme('Escuro');
    setNightMode(true);
  };

  const isDarkTheme = theme === 'Escuro';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkTheme ? '#fff' : '#000', fontSize }]}>
        Configurações de Preferências
      </Text>
      <PreferencePicker theme={theme} setTheme={setTheme} isDarkTheme={isDarkTheme} fontSize={fontSize} />
      <FontSizeSlider  isDarkTheme={isDarkTheme} fontSize={fontSize} setFontSize={setFontSize} />
      <NightModeSwitch isDarkTheme={isDarkTheme} nightMode={nightMode} resetPreferences={lightPreferences} setDarkMode={darkPreferences} fontSize={fontSize} />
      <ResetButton resetPreferences={resetPreferences} fontSize={fontSize} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

