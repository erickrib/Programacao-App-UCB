import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task === '') {
      Alert.alert('Erro', 'Por favor, insira uma tarefa antes de adicionar.');
    } else {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    padding: 15,
  },
  addButton: {
    width: '100%',
    backgroundColor: '#007bff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

