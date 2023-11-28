import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList , Dimensions} from 'react-native'
import * as Animatable from 'react-native-animatable'

const {width} = Dimensions.get('window')

export default function FavoriteGoalsList() {
    const navigation = useNavigation();

    const data = [
        Objetivo1 = {
            goalName: 'Parar de fumar',
            goalDescription: 'Quero parar de fumar dentro de um ano',
            goalCreationDate: '19/11',
            goalStatus: '0',
            goalConclusionDate: ''
        },
        Objetivo2 = {
            goalName: 'Ir na academia',
            goalDescription: 'Quero ir até a academia 4 vezes na semana',
            goalCreationDate: '19/11',
            goalStatus: '0',
            goalConclusionDate: ''
        },
        Objetivo3 = {
            goalName: 'Estudar programação',
            goalDescription: 'Quero estudar programação todos os dias dessa semana',
            goalCreationDate: '19/11',
            goalStatus: '1',
            goalConclusionDate: ''
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
            data={data}
            keyExtractor={(item) => String(item)}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => 
            <TouchableOpacity>
                <View style={styles.goalCard}>
                    <Text style={styles.goalName}>{item.goalName}</Text>
                    <Text style={styles.goalDescription}>{item.goalDescription}</Text>
                </View>
            </TouchableOpacity>}
            />
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        marginTop: 20,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    goalCard: {
        backgroundColor: '#E4E4E4',
        height: width/3.8,
        width: width*0.86,
        borderRadius: 20,
        marginBottom: 10,
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