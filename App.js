import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
// import firebase from 'react-native-firebase';

function App() {

  // const getToken = () => {
  //   firebase
  //     .messaging()
  //     .getToken()
  //     .then(fcmToken => {
  //       if (fcmToken) {
  //         // user has a device token
  //         console.log('FCM TOKEN: ' + fcmToken);
  //         // AsyncStorage.setItem('fcmToken', fcmToken);
  //       }
  //     });
  // };

  // const requestPermission = () => {
  //   firebase
  //     .messaging()
  //     .requestPermission()
  //     .then(() => {
  //       getToken();
  //     })
  //     .catch(error => {
  //       // console.log('permission rejected');
  //       console.log(
  //         'requestPermission',
  //         'Notification Permission rejected in iOS',
  //         error
  //       );
  //     });
  // };






  useEffect(() => {
    // requestPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Let's do some Firebase !
        </Text>
      </View>
    </View>
  )
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
    backgroundColor: 'lightgreen',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Regular',
    color: 'purple',
  }
})

export default App;