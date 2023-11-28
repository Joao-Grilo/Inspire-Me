import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function NewGoalButton() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NewGoalRoute')}>
                <Text style={styles.buttonText}>Adicionar objetivo</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 40,
        marginBottom: 40,
    },
    
    button:{
        backgroundColor: '#097969',
        height: 44,
        width: 250,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,   
    },

    buttonText:{
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold',
    },
})