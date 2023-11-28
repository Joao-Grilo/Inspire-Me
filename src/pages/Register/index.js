import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ActivityIndicator, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { store } from '../../store'

export default function SignIn() {
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [isFormValid, setIsFormValid] = useState(false)
    const [touched, setTouched] = useState({ name: false, email: false, password: false })

    useEffect(() => {
        let error = {}

        if (touched.name && !name) error.name = 'Name is required'

        if (touched.email && !email) error.email = 'Email is required'
        else if (touched.email && !/\S+@\S+\.\S+/.test(email)) error.email = 'Email is invalid'

        if (touched.password && !password) error.password = 'Password is required'
        else if (touched.password && password.length < 6) error.password = 'Password must be at least 6 characters'

        setErrors(error)
        setIsFormValid(Object.keys(error).length === 0)
    }, [name, email, password])

    const onSubmit = async () => {
        if (!isFormValid) return

        setLoading(true)
        await store.user.create({ name, email, password })
        if (store.user.currentUser) navigation.navigate('Home')
        setLoading(false)
    }

    return (
        <KeyboardAvoidingView behavior='position' style={styles.container}>
            <Animatable.View animation='fadeIn' delay={200} style={styles.containerHeader}>
                <Image source={require('../../assets/leaf-text-logo.png')} />
                <Text style={styles.underText}>Your daily boost to reach your goals!</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.registerText}>Cadastre-se</Text>

                <View style={styles.input}>
                    <Text style={styles.inputTitle}>Nome</Text>
                    <TextInput placeholder='Insira seu nome completo' value={name} onChangeText={text => setName(text)} style={styles.inputText} onBlur={() => setTouched({ ...touched, name: true })} autoComplete='name' autoCapitalize='words' />
                    {errors.name && (<Text style={styles.errors}>{errors.name}</Text>)}
                </View>
                
                <View style={styles.input}>
                    <Text style={styles.inputTitle}>Email</Text>
                    <TextInput placeholder='Insira seu email' value={email} onChangeText={text => setEmail(text)} style={styles.inputText} onBlur={() => setTouched({ ...touched, email: true })} autoComplete='email' autoCapitalize='none' />
                    {errors.email && (<Text style={styles.errors}>{errors.email}</Text>)}
                </View>
                
                <View style={styles.input}>
                    <Text style={styles.inputTitle}>Senha</Text>
                    <TextInput secureTextEntry={true} placeholder='Insira sua senha' value={password} onChangeText={text => setPassword(text)} style={styles.inputText} onBlur={() => setTouched({ ...touched, password: true })} autoComplete='new-password' autoCapitalize='none' />
                    {errors.password && (<Text style={styles.errors}>{errors.password}</Text>)}
                </View>

                <TouchableOpacity style={styles.button} disabled={loading} onPress={() => onSubmit()}>
                    {loading ? (
                        <ActivityIndicator color='#097969' size='small' />
                    ) : (
                        <Text style={styles.buttonText}>Cadastre-se</Text>
                    )}
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

    registerText: {
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

        alignSelf: 'center'
    },

    button: {
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

    buttonText: {
        fontSize: 18,
        color: '#097969',
        fontWeight: 'bold',
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