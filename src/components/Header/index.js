import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, KeyboardAvoidingViewBase, ScrollView,Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function Header(props) {
    const navigation = useNavigation();
    let currentScreen = props.currentScreen

    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <Text style={styles.pageText}>{currentScreen}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        
    },

    headerBar: {
        height: 80,
        backgroundColor: '#097969',
    },

    pageText: {
        color: '#F5F5F5',
        alignSelf: 'center',
        marginTop: '9%',
        fontSize: 18,
        fontWeight: 'bold'
    }
    
})