import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function Buton({
    style, titleStyle, title, onPress, children, textProps, touchableHighlightProps, ...otherProps }) {
    return (
        <TouchableHighlight
            onPress={onPress}
            style={{ ...styles.buttonStyle, ...style }}
            {...touchableHighlightProps}
        >
            <Text
                numberOfLines={1} ellipsizeMode="tail"
                style={{ ...styles.titleStyle, ...titleStyle }}
                {...textProps}
            >
                {children || title}
            </Text>
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
