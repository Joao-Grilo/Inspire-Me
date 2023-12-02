import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native'
import Header from '../../components/Header';
import DeleteIcon from '../../components/icons/DeleteIcon';
import EditIcon from '../../components/icons/EditIcon';
import CheckIcon from '../../components/icons/CheckIcon';


let goalStatus = 'Não concluído'
let goalName = 'Parar de fumar'
let goalDescription = 'Quero parar de fumara dentro de um ano'

export default function GoalDetails() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View>
                <Header currentScreen={'OBJETIVO'}/>
                <Text style={styles.goalTitle}>Objetivo</Text>
                <Text style={styles.goalText}>{goalName}</Text>
                <Text style={styles.goalTitle}>Descrição</Text>
                <Text style={styles.goalText}>{goalDescription}</Text>
                <Text style={styles.goalTitle}>Status</Text>
                <Text style={styles.goalText}>{goalStatus}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonArea}>
                    <DeleteIcon iconSize={32} iconColor={'#BB0000'}/>
                    <Text style={styles.buttonText}>Apagar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonArea}>
                    <EditIcon iconSize={32} iconColor={'#202020'}/>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonConclude}>
                    <CheckIcon iconSize={32} iconColor={'#00BB00'}/>
                    <Text style={styles.buttonText} onPress={ () => navigation.navigate('NewGoal')}>Concluir objetivo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    goalStatusText: {
        margin: 15,
        fontSize: 16,
        color: '#BB0000'
    },

    goalTitle: {
        fontSize: 22,
        fontWeight: '500',
        marginLeft: 20,
        marginTop: 20,
    },

    goalText: {
        fontSize: 16,
        marginLeft: 20,
        marginTop: 8
    },

    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingLeft: 80,
        paddingRight: 80,
    },

    buttonArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 120,
        padding: 8,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#808080'
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#404040',
        marginLeft: 8,
    },

    buttonConclude: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 248,
        padding: 8,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#808080'
    }


})