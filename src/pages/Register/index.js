import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView behavior='position' style={styles.container}>
            <Animatable.View animation='fadeIn' delay={200} style={styles.containerHeader}>
                <Image source={require('../../assets/leaf-text-logo.png')}/>
                <Text style={styles.underText}>Your daily boost to reach your goals!</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.registerText}>Cadastre-se</Text>

                <Text style={styles.inputTitle}>Nome</Text>
                <TextInput placeholder='Insira seu nome completo' style={styles.inputText}/>

                <Text style={styles.inputTitle}>Email</Text>
                <TextInput placeholder='Insira seu email' style={styles.inputText}/>

                <Text style={styles.inputTitle}>Senha</Text>
                <TextInput placeholder='Insira sua senha' style={styles.inputText}/>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Register')}>
                    <Text style={styles.buttonText }>Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#097969',
    },

    containerHeader:{
        marginTop:'34%',
        marginBottom:'20%',
        paddingStart: '5%',
        paddingEnd: '5%',
        alignSelf: 'center',
    },

    imageLogo:{
        marginTop: '14%',
        alignSelf: 'center'
    },

    underText:{
        alignSelf: 'center',
        marginTop: '2%',
        color: '#023020'
    },

    containerForm:{
        alignSelf: 'center',
        width: '72%',
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
    },

    registerText:{
        fontSize: 28,
        color:'#097969',
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '12%',
        alignSelf: 'center'
    },
    
    inputTitle:{
        fontSize: 20,
        marginTop: 20,
        marginLeft: '10%',
    },

    inputText:{
        borderBottomWidth: 1,
        height: 40,
        width: '80%',
        marginBottom: 12,
        alignSelf: 'center'
    },

    button:{
        backgroundColor: '#F5F5F5',
        height: '8%',
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8%',
        borderRadius: 20,  
        borderColor: '#097969',
        borderWidth: 2,  
    },

    buttonText:{
        fontSize: 18,
        color: '#097969',
        fontWeight: 'bold',
    },
})