import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ControlButton = ({ icon, label, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Icon name={icon} size={40} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#007BFF',
        fontSize: 14,
        marginTop: 5,
        fontWeight: 'bold',
        textAlign: 'center', 
    },
});

export default ControlButton;
