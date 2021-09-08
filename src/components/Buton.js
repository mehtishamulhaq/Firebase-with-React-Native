import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function Buton({ style, titleStyle, title, onPress }) {
    return (
        <TouchableHighlight
            onPress={onPress}
            style={{ ...styles.buttonStyle, ...style }}>
            <Text style={{ ...styles.titleStyle, ...titleStyle }}>{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    titleStyle: {

    },
    buttonStyle: {
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    }
})
