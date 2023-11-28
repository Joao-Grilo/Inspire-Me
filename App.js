import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/index'

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor="#097969" barStyle="light-content"/>
        <StackNavigation/>
    </NavigationContainer>
  );
}