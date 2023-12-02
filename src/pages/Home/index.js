import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, KeyboardAvoidingViewBase, ScrollView,Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import NewGoalButton from '../../components/NewGoalButton';
import HorizontalGoalsList from '../../components/HorizontalGoalsList';

export default function Home() {
    const navigation = useNavigation();
    
    return (
        <View>
            <Header currentScreen={'TELA INICIAL'}/>
            <UserCard/>
            <HorizontalGoalsList/>
            <NewGoalButton/>
        </View>
    );
}


const styles = StyleSheet.create({



})