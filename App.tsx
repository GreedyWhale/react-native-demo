/*
 * @Description: 主页
 * @Author: MADAO
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: MADAO
 * @LastEditTime: 2023-05-08 16:10:44
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type StackList = {
  Home: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<StackList>();

const HomeScreen: React.FC<NativeStackScreenProps<StackList, 'Home'>> = ({ navigation }) => {
  const [text, setText] = React.useState('hello');
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{text}</Text>
        <Button
          title='Press me'
          onPress={() => setText(prev => prev === 'hello' ? 'bye' : 'hello')}
          color="#f194ff"
        />
        <Button
          title='go About'
          onPress={() =>
            navigation.navigate('About')
          }
        />
        <StatusBar style="auto" />
      </View>
  )
}

const AboutScreen: React.FC<NativeStackScreenProps<StackList, 'About'>> = ({navigation}) => {
  return (
    <View>
      <Button
        title='go back'
        onPress={() =>
          navigation.navigate('Home')
        }
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: 'About'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
