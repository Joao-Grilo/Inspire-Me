import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


export default function DeleteIcon(props) {
    const navigation = useNavigation();

    return (
        <Icon name='delete' size={props.iconSize} color={props.iconColor} />
    );
}