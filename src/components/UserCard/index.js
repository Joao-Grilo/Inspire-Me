import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function UserCard() {
    const navigation = useNavigation();
    let userName = 'Maria'

    return (
        <View style={styles.container}>
                <Text style={styles.welcomeText}> Olá, {userName}!</Text>
                <View style={styles.profilePictureContainer}>
                    <Image source={require('../../assets/profilePicture.png')} style={styles.profilePicture}></Image>
                </View>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        position: 'relative',
        backgroundColor: '#699C95',
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',

      },
      welcomeText: {
        color: '#F5F5F5',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 16,
        justifyContent: 'flex-start',
        marginTop: '31%'
      },
      profilePictureContainer: {
        width: 110,
        height: 110,
        borderRadius: 60,
        marginRight: 50,
        marginTop: '26%',
        backgroundColor: '#990000',
        justifyContent: 'flex-end',
      },

      profilePicture: {
        height: '100%',
        width: 'auto'
      },
})