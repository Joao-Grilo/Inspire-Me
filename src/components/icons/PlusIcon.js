import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


export default function  plus(props) {
    const navigation = useNavigation();

    return (
        <Icon name='plus' size={props.iconSize} color={props.iconColor} />
    );
}