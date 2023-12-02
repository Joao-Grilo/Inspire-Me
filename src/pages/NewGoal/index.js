import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Header from '../../components/Header';
import NewGoalButton from '../../components/NewGoalButton';
import NewGoalForm from '../../components/GoalForm';


export default function NewGoal() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Header currentScreen={'OBJETIVO'}/>
            <NewGoalForm/>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%'
    },
})