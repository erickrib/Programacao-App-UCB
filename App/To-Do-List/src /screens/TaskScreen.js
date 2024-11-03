import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { loadTasks, saveTasks } from '../storage/storage';

export default function TaskScreen() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        const newTasks = [task, ...tasks];
        setTasks(newTasks);
        saveTasks(newTasks);
    };

    useEffect(() => {
        const fetchTasks = async () => {
            const savedTasks = await loadTasks();
            setTasks(savedTasks);
        };
        fetchTasks();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Tarefas</Text>
                <TaskInput onAddTask={addTask} />
                <TaskList tasks={tasks} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20,
    },
});

