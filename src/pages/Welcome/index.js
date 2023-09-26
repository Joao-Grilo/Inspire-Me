import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/leaf-logo.png')}
                    style={{width: '200px'}}
                    resizeMode='contain'/>
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Mensagens motivadoras que te ajudam a alcançar seus objetivos!</Text>
                <Text style={styles.auxText}>Acesse para começar</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Vamos Lá!</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#097969',
    },
    
    containerLogo:{
        flex:2,
        backgroundColor: '#097969',
        justifyContent: 'center',
        allignItem: 'center',
    },

    containerForm:{
        flex:1,
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    title:{
       fontSize: 24,
       fontWeight: 'bold',
       marginTop: 28,
       marginBottom: 12 
    },

    auxText:{
        color: '#8D8D8D',
        position: 'absolute',
        bottom: '32%',
        alignSelf: 'center',
    },

    button:{
        position: 'absolute',
        backgroundColor: '#097969',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText:{
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold',
    }

})