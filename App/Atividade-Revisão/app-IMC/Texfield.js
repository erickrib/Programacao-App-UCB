
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextField = ({ value, onChangeText, placeholder }) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={[styles.textField, isFocused && styles.textFieldFocused]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            keyboardType="numeric"
        />
    );
};

const styles = StyleSheet.create({
    textField: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    textFieldFocused: {
        borderColor: 'orange',
    }
});

export default TextField;
