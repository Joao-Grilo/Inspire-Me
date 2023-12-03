import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import Header from '../../components/Header'
import DeleteIcon from '../../components/icons/DeleteIcon'
import EditIcon from '../../components/icons/EditIcon'
import CheckIcon from '../../components/icons/CheckIcon'
import { store } from '../../store'

export default function GoalDetails({ route }) {
    const navigation = useNavigation()

    const [id] = useState(route.params.item.id)
    const [name] = useState(route.params.item.name)
    const [description] = useState(route.params.item.description)
    const [status] = useState(route.params.item.status)
    const [loading, setLoading] = useState(false)

    const remove = async () => {
        setLoading(true)
        await store.user.deleteGoal(id)
        navigation.navigate('Home')
        setLoading(false)
    }

    const setComplet = async () => {
        setLoading(true)
        await store.user.setCompletGoal({ name, description, id, status: 'Completado'})
        navigation.navigate('Home')
        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <View>
                <Header currentScreen={'OBJETIVO'} />

                <Text style={styles.goalTitle}>Objetivo</Text>
                <Text style={styles.goalText}>{name}</Text>

                <Text style={styles.goalTitle}>Descrição</Text>
                <Text style={styles.goalText}>{description}</Text>

                <Text style={styles.goalTitle}>Status</Text>
                <Text style={styles.goalText}>{status}</Text>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#097969" />
            ) : (
                <>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonArea} onPress={() => remove()}>
                            <DeleteIcon iconSize={32} iconColor={'#BB0000'} />
                            <Text style={styles.buttonText}>Apagar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonArea} onPress={() => navigation.navigate('NewGoal', { isCreated: false, goal: route.params.item })}>
                            <EditIcon iconSize={32} iconColor={'#202020'} />
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.buttonConclude} onPress={() => setComplet()}>
                        <CheckIcon iconSize={32} iconColor={'#00BB00'} />
                        <Text style={styles.buttonText}>Concluir objetivo</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    )
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