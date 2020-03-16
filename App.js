import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import TaleBoardComponent from "./components/TaleBoardComponent";
import Home from "./components/Home";
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {


  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name="Game" component={TaleBoardComponent} />
      </stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  gamePlace: {
    flex: 6,
    backgroundColor: '#abc',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tale: {
    flex: 1,
    flexDirection: "row",
  },
  header: {
    flex: 2,
    borderRadius: 40,
    flexDirection: "row",
  }
});
