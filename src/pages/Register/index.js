import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'


export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={require('../../assets/leaf-text-logo.png')}/>
                <Text style={styles.underText}>Your daily boost to reach your goals!</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.welcomeText}>Cadastro</Text>

                <Text style={styles.inputTitle}>Nome Completo</Text>
                <TextInput placeholder='Insira seu nome' style={styles.inputText}/>

                <Text style={styles.inputTitle}>Email</Text>
                <TextInput placeholder='Insira seu email' style={styles.inputText}/>

                <Text style={styles.inputTitle}>Senha</Text>
                <TextInput placeholder='Insira sua senha' style={styles.inputText}/>
                
                <Text style={styles.inputTitle}>Confirmar senha</Text>
                <TextInput placeholder='Insira sua senha' style={styles.inputText}/>

                <TouchableOpacity
                style={styles.registerButton}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.registerButtonText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#097969',
    },

    containerHeader:{
        marginTop:'24%',
        marginBottom:'18%',
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
        height: '66%',
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
    },

    welcomeText:{
        fontSize: 28,
        color:'#097969',
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '6%',
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

    registerButton:{
        backgroundColor: '#F5F5F5',
        height: '8%',
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        borderRadius: 20,  
        borderColor: '#097969',
        borderWidth: 2,
    },

    registerButtonText:{
        fontSize: 18,
        color: '#097969',
        fontWeight: 'bold',
    },

    alternativeText: {
        color: '#606060',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: '4%'
    }
})