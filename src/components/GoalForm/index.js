import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput  } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function GoalForm() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Título</Text>
            <TextInput style={styles.inputText}/>
            <Text style={styles.inputTitle}>Descrição</Text>
            <TextInput style={styles.inputText}/>
            <TouchableOpacity style={styles.newGoalButton}>
                <Text style={styles.newGoalText}>SALVAR</Text>
            </TouchableOpacity>
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

    newGoalButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#097969',
        width: 200,
        height: 50,
        marginTop: 20,
        borderRadius: 25,
    },

    newGoalText: {
        alignSelf: 'center',
        color: '#F5F5F5',
        fontSize: 18,
        fontWeight: 'bold',
    },
})