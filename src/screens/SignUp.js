import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { HStack, Text } from 'native-base';
import colors from '../constants/colors';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Input from '../components/Input';
import Buton from '../components/Buton';

function SignUp(props) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <HStack style={styles.fullWidth}>
                    <View style={{ margin: 10 }}>
                        <EntypoIcon name='cross' color={colors.purple} size={30} />
                    </View >
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={{ margin: 10 }}>
                        <Text>Later</Text>
                    </View>
                </HStack>
                <View style={styles.upperHalf} >
                    <HStack style={{ ...styles.fullWidth, justifyContent: 'center', marginBottom: 40 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Create an account
                        </Text>
                    </HStack>
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
                            title='Create an Account'
                        >
                        </Buton>
                    </HStack>
                    <HStack style={styles.fullWidth}>
                        <View
                            style={{
                                ...styles.fullWidthFields,
                                padding: 0,
                                marginTop: 40,
                                marginBottom: 60,
                                borderColor: colors.lightGray
                            }} />
                    </HStack>

                </View>
                <View style={styles.lowerHalf} >
                    <HStack style={styles.fullWidth}>
                        <Buton
                            // onPress={() => navigation.navigate('SignIn')}
                            style={{ ...styles.fullWidthFields, backgroundColor: colors.white, }}
                            title='Continue with Google'
                        >
                        </Buton>
                    </HStack>

                    <HStack style={styles.fullWidth}>
                        <Buton
                            // onPress={() => navigation.navigate('SignIn')}
                            style={{ ...styles.fullWidthFields, backgroundColor: colors.white, }}
                            title='Continue with Facebook'
                        >
                        </Buton>
                    </HStack>
                    <HStack style={styles.fullWidth}>
                        <Buton
                            // onPress={() => navigation.navigate('SignIn')}
                            style={{ ...styles.fullWidthFields, backgroundColor: colors.white, }}
                            title='Continue with Apple'
                        >
                        </Buton>
                    </HStack>
                </View>
            </ScrollView>

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
        flex: 1,
        display: 'flex',
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
    welcomeTitle: { textAlign: 'center', fontWeight: 'bold', fontSize: 24 },
    welcomeMessage: { textAlign: 'center' },
})

export default SignUp;