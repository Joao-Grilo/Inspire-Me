import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


export default function CheckIcon(props) {
    const navigation = useNavigation();

    return (
        <Icon name='check' size={props.iconSize} color={props.iconColor} />
    );
}