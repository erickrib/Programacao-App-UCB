import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function TaskList({ tasks }) {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>{item}</Text>
        </View>
      )}
      keyExtractor={(item) => item}
    />
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
});
