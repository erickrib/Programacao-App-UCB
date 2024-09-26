import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const QuoteCard = ({ quote, author, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.quote}>"{quote}"</Text>
      <Text style={styles.author}>- {author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default QuoteCard;
