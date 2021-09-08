
import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Spinner } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../constants/colors';
import screens from '../screens';
import MainScreen from '../screens/MainScreen';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';


const StackNavigation = () => {
    const Stack = createStackNavigator();
    return (<>
        {screens.length > 0 ? (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='MainScreen'
                    screenOptions={{
                        // headerShown: false
                    }}
                >

                    <Stack.Screen
                        name='MainScreen'
                        component={MainScreen}
                        options={{ title: 'MainScreen' }}
                    />
                    <Stack.Screen
                        name='SignUp'
                        component={SignUp}
                        options={{ title: 'SignUp' }}
                    />
                    <Stack.Screen
                        name='SignIn'
                        component={SignIn}
                        options={{ title: 'SignIn' }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        ) : (<Spinner />)}
    </>


    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    textContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightGreen,
    },
    text: {
        fontSize: 30,
        fontFamily: 'Regular',
        color: colors.purple,
    }
})


export default StackNavigation;

