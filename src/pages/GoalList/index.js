import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Header from '../../components/Header';
import VerticalGoalsList from '../../components/VerticalGoalsList';



export default function GoalList() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Header currentScreen={'MEUS OBJETIVOS'}/>
            <VerticalGoalsList/>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        height: '100%'
    },
    
})