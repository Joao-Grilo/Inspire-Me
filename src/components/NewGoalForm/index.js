import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput  } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function NewGoalForm() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Título</Text>
            <TextInput placeholder='Insira o título do objetivo' style={styles.inputText}/>
            <Text style={styles.inputTitle}>Descrição</Text>
            <TextInput placeholder='Insira a descrição do objetivo' style={styles.inputText}/>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {

    },
    
    inputTitle:{
        fontSize: 18,
        marginTop: 30,
        marginLeft: '10%',
    },

    inputText:{
        backgroundColor: '#E6E6E6',
        height: 40,
        width: '80%',
        marginTop: 8,
        marginBottom: 12,
        paddingLeft: 18,
        alignSelf: 'center',
        borderRadius: 16,
    },
})