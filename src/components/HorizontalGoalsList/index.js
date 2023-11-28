import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList , Dimensions} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { programacao, academia, fumar } from '../../utils/frases'
import { store } from '../../store'

const {width} = Dimensions.get('window')

export default function GoalsList() {
    const navigation = useNavigation()

    const [text, setText] = useState('')

    const data = [
        {
            id: 1,
            type: 'fumar',
            goalName: 'Parar de fumar',
            goalDescription: 'Quero parar de fumar dentro de um ano',
            goalCreationDate: '19/11',
            goalStatus: '0',
            goalConclusionDate: ''
        },
        {
            id: 2,
            type: 'academia',
            goalName: 'Ir na academia',
            goalDescription: 'Quero ir até a academia 4 vezes na semana',
            goalCreationDate: '19/11',
            goalStatus: '0',
            goalConclusionDate: ''
        },
        {
            id: 3,
            type: 'programacao',
            goalName: 'Estudar programação',
            goalDescription: 'Quero estudar programação todos os dias dessa semana',
            goalCreationDate: '19/11',
            goalStatus: '1',
            goalConclusionDate: ''
        },
    ]

    const randow = async type => {
        const random = Math.floor(Math.random() * fumar.length)

        let text = ''

        if(type === 'fumar') text = fumar[random]
        else if(type === 'academia') text = academia[random]
        else if(type === 'programacao') text = programacao[random]
        
        setText(text)
        store.user.saveFrase(text)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.goalsListText}>Meus objetivos</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => randow(item.type)}>
                        <View style={styles.goalCard}>
                            <Text style={styles.goalName}>{item.goalName}</Text>
                            <Text style={styles.goalDescription}>{item.goalDescription}</Text>
                        </View>
                    </TouchableOpacity>
                }
            />

            <Text>{text}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 10,
    },

    goalCard: {
        backgroundColor: '#E4E4E4',
        height: width/3.6,
        width: width*0.75,
        marginRight: 10,
        borderRadius: 20,
    },

    goalsListText: {
        marginTop: 16,
        marginLeft: 22,
        marginRight: 22,
        marginBottom: 16,
        fontSize: 20,
        fontWeight: '500',
        color: '#505050',
    },

    goalName: {
        marginTop: 16,
        marginLeft: 22,
        marginRight: 22,
        fontSize: 18,
        fontWeight: '700',
        color: '#505050',
    },

    goalDescription: {
        marginTop: 6,
        marginLeft: 22,
        marginRight: 22,
        fontSize: 14,
        fontWeight: '600',
        color: '#707070',
    },
    
})