import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HStack } from 'native-base';
import colors from '../constants/colors';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Input from '../components/Input';
import Buton from '../components/Buton';


export default function SignIn() {
    return (
        <View style={styles.container}>

            <View style={styles.upperHalf} >



            </View>
            <View style={styles.lowerHalf}>
                <HStack style={{ ...styles.fullWidth, justifyContent: 'center' }}>
                    <Input
                        placeholder='Email Address'
                        style={{ ...styles.fullWidthFields, }} />
                </HStack>
                <HStack style={{ ...styles.fullWidth, justifyContent: 'center' }}>
                    <Input placeholder='Password'
                        style={{ ...styles.fullWidthFields, }} />
                </HStack>
                <HStack style={styles.fullWidth}>
                    <Buton
                        // onPress={() => navigation.navigate('SignUp')}
                        style={{ ...styles.fullWidthFields, backgroundColor: colors.gold, }}
                        title='Sign In'
                    >
                    </Buton>
                </HStack>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        display: 'flex',
        backgroundColor: colors.snow,
    },
    crossIcon: {

    },
    upperHalf: {
        width: '100%',
        flex: 2,
        display: 'flex',
        alignItems: 'center',
    },
    lowerHalf: {
        flex: 2,
        width: '100%',
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

    fullWidthFields: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1
    },

})
