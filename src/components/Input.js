import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

function Input({ style, onChangeText, text, placeholder, ...otherProps }) {
    return (
        <TextInput
            style={{ ...styles.input, ...style }}
            onChangeText={onChangeText}
            value={text}
            placeholder={placeholder}
            {...otherProps}
        />
    )
}

Input.defaultProps = {
    placeholder: 'type here...',
    text: '',
    onChangeText: () => { },
    style: {}
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        padding: 10,

    }
})

export default Input;
