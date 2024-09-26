import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FortuneCookie from './components/FortuneCookie';
import fortunes from './data/fortunes.json';

const App = () => {
  const [isBroken, setIsBroken] = useState(false);
  const [fortune, setFortune] = useState('');

  const handleBreakCookie = () => {
    setIsBroken(true);
    const randomFortune = fortunes.fortunes[Math.floor(Math.random() * fortunes.fortunes.length)];
    setFortune(randomFortune);
  };

  const handleResetCookie = () => {
    setIsBroken(false);
    setFortune('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fortune Cookie</Text>
      <View style={styles.contentContainer}>
        <FortuneCookie
          isBroken={isBroken}
          fortune={fortune}
          onBreak={handleBreakCookie}
          onReset={handleResetCookie}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
