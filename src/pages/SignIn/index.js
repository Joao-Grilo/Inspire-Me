import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { store } from '../../store'

export default function SignIn() {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [isFormValid, setIsFormValid] = useState(false)
    const [touched, setTouched] = useState({ email: false, password: false })

    useEffect(() => {
        let error = {}

        if (touched.email && !email) error.email = 'Email é obrigatorio'
        else if (touched.email && !/\S+@\S+\.\S+/.test(email)) error.email = 'Email não é valido'

        if (touched.password && !password) error.password = 'Senha é obrigatorio'
        else if (touched.password && password.length < 6) error.password = 'Senha deve possuir no minimo 6 caracteres'

        setErrors(error)
        setIsFormValid(Object.keys(error).length === 0)
    }, [email, password])

    const onSubmit = async () => {
        if(!isFormValid) return

        setLoading(true)
        await store.user.login({ email, password })
        if (store.user.currentUser) navigation.navigate('Home')
        setLoading(false)
    }

    return (
        <KeyboardAvoidingView behavior='position' style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Image source={require('../../assets/leaf-text-logo.png')} />
                <Text style={styles.underText}>Your daily boost to reach your goals!</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.welcomeText}>Bem-vindo(a)</Text>
                
                <View style={styles.input}>
                    <Text style={styles.inputTitle}>Email</Text>
                    <TextInput placeholder='Insira seu email' value={email} onChangeText={text => setEmail(text)} style={styles.inputText} onBlur={() => setTouched({ ...touched, email: true })} autoComplete='email' autoCapitalize='none' />
                    {errors.email && (<Text style={styles.errors}>{errors.email}</Text>)}
                </View>

                <View style={styles.input}>
                    <Text style={styles.inputTitle}>Senha</Text>
                    <TextInput secureTextEntry={true} placeholder='Insira sua senha' value={password} onChangeText={text => setPassword(text)} style={styles.inputText} onBlur={() => setTouched({ ...touched, password: true })} autoComplete='off' autoCapitalize='none' />
                    {errors.password && (<Text style={styles.errors}>{errors.password}</Text>)}
                </View>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Home')}>
                    { loading ? (
                        <ActivityIndicator size="large" color="#FFFFFF" />
                    ) : (
                        <Text style={styles.buttonText}>Conectar</Text>
                    )}
                </TouchableOpacity>

                <Text style={styles.alternativeText}>ou</Text>

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerButtonText}>Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#097969',
    },

    containerHeader: {
        marginTop: '34%',
        marginBottom: '20%',
        paddingStart: '5%',
        paddingEnd: '5%',
        alignSelf: 'center',
    },

    imageLogo: {
        marginTop: '14%',
        alignSelf: 'center'
    },

    underText: {
        alignSelf: 'center',
        marginTop: '2%',
        color: '#023020'
    },

    containerForm: {
        alignSelf: 'center',
        width: '72%',
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        
    },

    welcomeText: {
        fontSize: 28,
        color: '#097969',
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '12%',
        alignSelf: 'center'
    },

    inputTitle: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: '10%',
    },

    inputText: {
        borderBottomWidth: 1,
        height: 40,
        width: '80%',
        marginBottom: 12,
        alignSelf: 'center'
    },

    button: {
        backgroundColor: '#097969',
        height: '8%',
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12%',
        borderRadius: 20,
    },

    buttonText: {
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold',
    },

    registerButton: {
        backgroundColor: '#F5F5F5',
        height: '8%',
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4%',
        borderRadius: 20,
        borderColor: '#097969',
        borderWidth: 2,
    },

    registerButtonText: {
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
    },

    input: {
        marginBottom: 12
    },

    errors: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        marginLeft: '10%',
    }
})