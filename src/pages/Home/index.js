import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, KeyboardAvoidingViewBase, ScrollView,Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Header from '../../components/Header';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View>
            <Header currentScreen={'TELA INICIAL'}/>
        </View>
    );
}


const styles = StyleSheet.create({

    
})