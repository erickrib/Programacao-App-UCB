import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const FontSizeSlider = ({ fontSize, setFontSize, isDarkTheme }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: isDarkTheme ? '#fff' : '#000', fontSize}]}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        value={fontSize}
        onValueChange={(value) => setFontSize(Math.round(value))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default FontSizeSlider;
