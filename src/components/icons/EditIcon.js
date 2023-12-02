import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';


export default function EditIcon(props) {
    const navigation = useNavigation();

    return (
        <Icon name='edit' size={props.iconSize} color={props.iconColor} />
    );
}