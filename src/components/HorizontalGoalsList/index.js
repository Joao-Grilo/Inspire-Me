import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList , Dimensions} from 'react-native'
import { store } from '../../store'

const { width } = Dimensions.get('window')

export default function GoalsList({ title, status }) {
    const navigation = useNavigation()

    const [data] = useState(store.user.currentUser.goal ? store.user.currentUser.goal.filter(goal => goal.status === status) : null)

    return (
        <View style={styles.container}>
            <Text style={styles.goalsListText}>{ title }</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({item}) => 
                    <TouchableOpacity onPress={ () => navigation.navigate('GoalDetails', { item: item})}>
                        <View style={styles.goalCard}>
                            <Text style={styles.goalName}>{item.name}</Text>
                            <Text style={styles.goalDescription}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                }
            />
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
        padding: 22,
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
        fontSize: 18,
        fontWeight: '700',
        color: '#505050',
    },

    goalDescription: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '600',
        color: '#707070',
    },
    
})