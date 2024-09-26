import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimerDisplay = ({ elapsedTime }) => {
  const formatTime = (time) => {
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    return (
      `${String(minutes).padStart(2, '0')} : ` +
      `${String(seconds).padStart(2, '0')} : ` +
      `${String(milliseconds).padStart(2, '0')}`
    );
  };

  return (
    <View>
      <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default TimerDisplay;
