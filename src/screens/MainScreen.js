import React from 'react'
import { StyleSheet, View } from 'react-native';
import { HStack, Text } from 'native-base';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import Buton from '../components/Buton';


function MainScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.upperHalf} >

            </View>
            <View style={styles.lowerHalf} >
                <View style={styles.welcomeSection} >
                    <HStack >
                        <Text style={styles.welcomeTitle}>Welcome !</Text>
                    </HStack>
                    <HStack >
                        <Text style={styles.welcomeMessage}>
                            Wecome to the firebase authentication system let's hope it works as expected
                        </Text>
                    </HStack>
                </View>
                <View style={styles.gettingStarted}>
                    <HStack style={styles.fullWidth}>
                        <Buton
                            onPress={() => navigation.navigate('SignUp')}
                            style={{ ...styles.getStartedButton, backgroundColor: colors.gold, }}
                            title='get Started'>
                        </Buton>
                    </HStack>
                    <HStack style={styles.fullWidth}>
                        <Buton
                            onPress={() => navigation.navigate('SignIn')}
                            style={{ ...styles.getStartedButton, backgroundColor: colors.white, }}
                            title='I alread have an account'>
                        </Buton>
                    </HStack>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        display: 'flex',
        backgroundColor: colors.snow,
    },
    upperHalf: {
        width: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lowerHalf: {
        width: '100%',
        flex: 1,
        display: 'flex',
    },
    welcomeSection: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    fullWidth: {
        width: '100%',
    },
    gettingStarted: {
        width: '100%',
        flex: 2,
    },
    getStartedButton: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
    },
    welcomeTitle: { textAlign: 'center', fontWeight: 'bold', fontSize: 24 },
    welcomeMessage: { textAlign: 'center' },
})

export default MainScreen;
