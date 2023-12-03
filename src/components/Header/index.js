import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Header(props) {
    let currentScreen = props.currentScreen

    return (
        <View>
            <View style={styles.headerBar}>
                <Text style={styles.pageText}>{currentScreen}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    headerBar: {
        height: 80,
        backgroundColor: '#097969',
    },

    pageText: {
        color: '#F5F5F5',
        alignSelf: 'center',
        marginTop: '9%',
        fontSize: 18,
        fontWeight: 'bold'
    }
    
})