import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TimerDisplay from './components/TimerDisplay';
import ControlButton from './components/ControlButton';

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 10);
      }, 10);
      setIntervalId(id);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <View style={styles.container}>
      <TimerDisplay elapsedTime={elapsedTime} />
      <View style={styles.buttonContainer}>
        {!isRunning && elapsedTime === 0 && (
          <ControlButton icon="play" label="Iniciar" onPress={startTimer} />
        )}
        {isRunning && (
          <ControlButton icon="pause" label="Pausar" onPress={pauseTimer} />
        )}
        {!isRunning && elapsedTime > 0 && (
          <>
            <ControlButton icon="play" label="Continuar" onPress={startTimer} />
            <ControlButton icon="refresh" label="Reiniciar" onPress={resetTimer} />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default App;
