import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import QuoteCard from './components/QuoteCard';
import quotesData from './data/quotes.json';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    loadQuotes();
  }, []);

  const loadQuotes = () => {
    setQuotes(quotesData);
    getRandomQuote(quotesData);
  };

  const getRandomQuote = (quotesList) => {
    if (quotesList.length > 0) {
      const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
      setCurrentQuote(randomQuote);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quotes App</Text>
      <View style={styles.quoteContainer}>
        {currentQuote && (
          <QuoteCard
            quote={currentQuote.quote}
            author={currentQuote.author}
            image={currentQuote.image}
          />
        )}
        <TouchableOpacity style={styles.button} onPress={() => getRandomQuote(quotes)}>
          <Text style={styles.buttonText}>Nova Citação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
  },
  quoteContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
