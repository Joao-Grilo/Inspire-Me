import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


export default function HomeIcon(props) {
    const navigation = useNavigation();

    return (
        <Icon name='home' size={props.iconSize} color={props.iconColor} />
    );
}