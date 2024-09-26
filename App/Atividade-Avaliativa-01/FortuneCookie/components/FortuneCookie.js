import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FortuneCookie = ({ isBroken, fortune, onBreak, onReset }) => {
    return (
        <View style={styles.container}>
            {!isBroken ? (
                <>
                    <Image
                        source={require('../assets/fortune_cookie.png')}
                        style={styles.cookieImage}
                        resizeMode="contain"
                    />
                    <TouchableOpacity style={styles.button} onPress={onBreak}>
                        <Text style={styles.buttonText}>Quebrar o Biscoito</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Image
                        source={require('../assets/fortune_cookie_broken.png')}
                        style={styles.cookieImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.fortuneText}>{fortune}</Text>
                    <TouchableOpacity style={styles.button} onPress={onReset}>
                        <Text style={styles.buttonText}>Pegar Outro Biscoito</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    cookieImage: {
        width: 200,
        height: 200,
        marginVertical: 10,
        flexShrink: 1,
    },
    fortuneText: {
        marginTop: 20,
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#f5a623',
        padding: 10,
        borderRadius: 15,
        marginTop: 20,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default FortuneCookie;
