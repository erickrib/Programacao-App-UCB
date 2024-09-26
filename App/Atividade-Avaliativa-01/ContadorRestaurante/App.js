import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador Restaurante</Text>
            <Text style={styles.count}>{count}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={increment}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={decrement}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffae6',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#6d4c41', 
    },
    count: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#f57c00',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    button: {
        backgroundColor: '#c62828', 
        borderRadius: 10,
        width: 120,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default App;
