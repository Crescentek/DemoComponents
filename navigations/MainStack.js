
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Post from '../screens/Post/Post';



const Stack = createNativeStackNavigator();

export default function MainStack(props) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Post" component={Post} options={{ headerShown: false }}/> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }