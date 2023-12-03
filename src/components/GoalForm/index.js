import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator  } from 'react-native'
import { store } from '../../store'

export default function GoalForm({ isCreated, goal }) {
    const navigation = useNavigation()

    const [name, setName] = useState(goal ? goal.name : '')
    const [description, setDescription] = useState(goal ? goal.description : '')
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        if(!name || !description) return

        setLoading(true)
        if(isCreated) await store.user.createGoal({ name, description, status: 'Não Concluido' })
        else await store.user.updateGoal({ name, description, id: goal.id, stauts: goal.status })
        navigation.navigate('Home')
        setLoading(false)
    }

    return (
        <View>
            <Text style={styles.inputTitle}>Título</Text>
            <TextInput style={styles.inputText} value={name} onChangeText={text => setName(text)} />
            
            <Text style={styles.inputTitle}>Descrição</Text>
            <TextInput style={styles.inputText} value={description} onChangeText={text => setDescription(text)} />
            
            <TouchableOpacity style={styles.newGoalButton} onPress={() => onSubmit()}>
                { loading ? (
                    <ActivityIndicator size="large" color="#FFFFFF" />
                ) : (
                    <Text style={styles.newGoalText}>SALVAR</Text>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({   
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