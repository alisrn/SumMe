import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TaleList from "./TaleList";

const TaleBoard = (props) => {


  return (
    <View style={styles.gamePlace}>
      <TaleList key={0} index={0} taleNumList={props.numList} onTalePress = {props.onTalePress} pressedIndex ={props.pressedIndex} />
      <TaleList key={1} index={1} taleNumList={props.numList} onTalePress = {props.onTalePress} pressedIndex ={props.pressedIndex} />
      <TaleList key={2} index={2} taleNumList={props.numList} onTalePress = {props.onTalePress} pressedIndex ={props.pressedIndex} />
      <TaleList key={3} index={3} taleNumList={props.numList} onTalePress = {props.onTalePress} pressedIndex ={props.pressedIndex} />
    </View>
  );
}

const styles = StyleSheet.create({
  gamePlace: {
    flex: 6,
    backgroundColor: '#abc',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TaleBoard;

