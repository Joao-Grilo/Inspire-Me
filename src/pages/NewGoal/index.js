import React from 'react'
import { View, StyleSheet  } from 'react-native'
import Header from '../../components/Header'
import NewGoalForm from '../../components/GoalForm'

export default function NewGoal({ route }) {

    return (
        <View style={styles.container}>
            <Header currentScreen={'OBJETIVO'} />
            <NewGoalForm goal={route.params.goal} isCreated={route.params.isCreated} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
})