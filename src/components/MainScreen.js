import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function MainScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.upperHalf} >

            </View>
            <View style={styles.lowerHalf} >

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        display: 'flex',
        backgroundColor: 'pink'
    },
    upperHalf: {
        width: '100%',
        flex: 1,
        display: 'flex',
        backgroundColor: 'yellow',
    },
    lowerHalf: {
        width: '100%',
        flex: 1,
        display: 'flex',
    },
})

export default MainScreen;
