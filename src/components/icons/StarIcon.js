import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function StarIcon(props) {
    const navigation = useNavigation();

    return (
        <Icon name='star' size={props.iconSize} color={props.iconColor} />
    );
}