import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import PlusCircleIcon from '../icons/PlusIcon'

export default function NewGoalButton() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewGoal', { isCreated: true })}>
                <PlusCircleIcon iconSize={24} iconColor={'#F5F5F5'} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        bottom: 0,
        width: '100%',
        marginTop: 40,
    },

    button: {
        backgroundColor: '#097969',
        height: 40,
        width: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    buttonText: {
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold',
    },
})